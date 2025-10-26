import React, { useState, useCallback, useMemo, useEffect, useRef, Suspense, lazy } from 'react';
import { detectIndustryFromJD } from './services/industryDetector';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './src/firebase';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import WebVitalsReporter from './components/ui/WebVitalsReporter';
import PerformanceMonitor from './components/ui/PerformanceMonitor';
import { UserProfileService } from './services/userProfileService';
import type { AppStep, Candidate, HardFilters, WeightCriteria, AnalysisRunData } from './types';
import { initialWeights } from './constants';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProgressBar from './components/ui/ProgressBar';
import HistoryModal from './components/ui/HistoryModal';

// Lazy load pages for code-splitting
const ScreenerPage = lazy(() => import('./components/pages/ScreenerPage'));
const ProcessPage = lazy(() => import('./components/pages/ProcessPage'));
const DashboardHomePage = lazy(() => import('./components/pages/DashboardHomePage'));
const AchievementsContactPage = lazy(() => import('./components/pages/AchievementsContactPage'));
const LoginPage = lazy(() => import('./components/pages/LoginPage'));
const DetailedAnalyticsPage = lazy(() => import('./components/pages/DetailedAnalyticsPage'));
// HistoryPage removed from UI (still saving to Firestore silently)
import { saveHistorySession } from './services/historyService';
import { cvFilterHistoryService } from './services/analysisHistory';
 
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);
  useEffect(() => {
    ref.current = value;
  }); 
  return ref.current;
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <MainApp />
    </HashRouter>
  );
};

const MainApp: React.FC = () => {
  // Initialize state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [resetKey, setResetKey] = useState(Date.now());
  const [isInitializing, setIsInitializing] = useState(true);
  
  const handleLogin = async (email: string) => {
    // The actual authentication is handled by Firebase in LoginPage
    // This is just for UI state management
    setShowLoginModal(false);
  };
  
  const handleFullReset = () => {
    setResetKey(Date.now());
  };

  const handleLoginRequest = () => {
    setShowLoginModal(true);
  };

  // Listen for Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      setCurrentUser(user);
      setIsLoggedIn(!!user);
      
      if (user) {
        // Sync localStorage authEmail with Firebase auth
        localStorage.setItem('authEmail', user.email || '');
        
        try {
          // Save/update user profile in Firestore
          await UserProfileService.saveUserProfile(
            user.uid,
            user.email!,
            user.displayName || undefined
          );
          
          // Migrate local data to Firebase if needed
          await UserProfileService.migrateLocalDataToFirebase(user.uid, user.email!);
        } catch (error) {
          console.error('Error syncing user profile:', error);
        }
      } else {
        // Clear localStorage when logged out
        localStorage.removeItem('authEmail');
      }
      
      setIsInitializing(false);
    });

    return () => unsubscribe();
  }, []);

  // Fallback to localStorage for compatibility with existing code
  useEffect(() => {
    if (!isInitializing && !currentUser) {
      const syncLoginState = () => {
        try {
          const authEmail = localStorage.getItem('authEmail') || '';
          const wasLoggedIn = !!(authEmail && authEmail.length > 0);
          if (wasLoggedIn && !isLoggedIn) {
            setIsLoggedIn(wasLoggedIn);
          }
        } catch {}
      };
      
      syncLoginState();
      window.addEventListener('storage', syncLoginState);
      const interval = setInterval(syncLoginState, 5000);
      
      return () => {
        window.removeEventListener('storage', syncLoginState);
        clearInterval(interval);
      };
    }
  }, [isInitializing, currentUser, isLoggedIn]);

  return (
    <>
      <MainLayout 
        key={resetKey} 
        onResetRequest={handleFullReset} 
        isLoggedIn={isLoggedIn}
        onLoginRequest={handleLoginRequest}
      />
      {showLoginModal && (
        <div className="fixed inset-0 z-50">
          <button
            onClick={() => setShowLoginModal(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors z-10"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
          <LoginPage onLogin={handleLogin} />
        </div>
      )}
    </>
  );
};


interface MainLayoutProps {
  onResetRequest: () => void;
  className?: string;
  isLoggedIn: boolean;
  onLoginRequest: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ onResetRequest, className, isLoggedIn, onLoginRequest }) => {
  const [userEmail, setUserEmail] = useState<string>(() => {
    // attempt to get from auth current user if available
    return (typeof window !== 'undefined' && (window as any).localStorage?.getItem('authEmail')) || '';
  });
  const [completedSteps, setCompletedSteps] = useState<AppStep[]>([]);
  const [historyModalOpen, setHistoryModalOpen] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(() => {
    // Kiểm tra kích thước màn hình để quyết định trạng thái mặc định
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const saved = localStorage.getItem('sidebarOpen');
    
    // Nếu đã có trạng thái đã lưu, sử dụng nó
    if (saved !== null) {
      return JSON.parse(saved);
    }
    
    // Mặc định: đóng trên mobile, mở trên desktop
    return !isMobile;
  });
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    try { localStorage.removeItem('authEmail'); } catch {}
    window.location.reload();
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => {
      const newState = !prev;
      localStorage.setItem('sidebarOpen', JSON.stringify(newState));
      return newState;
    });
  }, []);

  // Theo dõi thay đổi kích thước màn hình để tự động đóng sidebar trên mobile
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setSidebarOpen(false);
      }
    };

    // Chỉ thêm listener nếu đang ở browser
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      
      // Kiểm tra ngay khi component mount
      handleResize();
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  const [jdText, setJdText] = useState<string>('');
  const [jobPosition, setJobPosition] = useState<string>('');
  const [weights, setWeights] = useState<WeightCriteria>(initialWeights);
  const [hardFilters, setHardFilters] = useState<HardFilters>({
    location: '',
    minExp: '',
    seniority: '',
    education: '',
      industry: '',
    language: '',
    languageLevel: '',
    certificates: '',
    salaryMin: '',
    salaryMax: '',
    workFormat: '',
    contractType: '',
    locationMandatory: true,
    minExpMandatory: true,
    seniorityMandatory: true,
    educationMandatory: false,
    contactMandatory: false,
    industryMandatory: true,
    languageMandatory: false,
    certificatesMandatory: false,
    salaryMandatory: false,
    workFormatMandatory: false,
    contractTypeMandatory: false,
  });
  const [cvFiles, setCvFiles] = useState<File[]>([]);
  const [analysisResults, setAnalysisResults] = useState<Candidate[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('');

  
  // Đồng bộ lại email nếu ban đầu rỗng hoặc thay đổi ở tab khác
  useEffect(() => {
    const syncEmail = () => {
      try {
        const stored = localStorage.getItem('authEmail') || '';
        setUserEmail(prev => (prev && prev.length > 0) ? prev : stored);
      } catch {}
    };
    syncEmail();
    window.addEventListener('storage', syncEmail);
    const interval = setInterval(syncEmail, 5000); // phòng trường hợp storage event không bắn
    return () => {
      window.removeEventListener('storage', syncEmail);
      clearInterval(interval);
    };
  }, []);


  

  const handleRestore = useCallback((payload: any) => {
    if (!payload) return;
    try {
      setJdText(payload.jdText || '');
      setJobPosition(payload.jobPosition || '');
      if (payload.weights) setWeights(payload.weights);
      if (payload.hardFilters) setHardFilters(payload.hardFilters);
      if (payload.candidates) setAnalysisResults(payload.candidates);
      setCompletedSteps(['jd','weights','upload','analysis']);
      navigate('/analysis');
    } catch (e) {
      console.warn('Restore failed', e);
    }
  }, [navigate]);
  

  const prevIsLoading = usePrevious(isLoading);

  // Auto-detect industry from JD whenever jdText changes significantly (throttle by length change)
  useEffect(() => {
    if (!jdText || jdText.length < 80) return; // avoid too-early detection
    setHardFilters(prev => {
      // If user already typed a custom industry different from last detected one, don't overwrite
      if (prev.industry && prev.industryManual) return prev as any; // we will extend type dynamically
      const detected = detectIndustryFromJD(jdText);
      if (detected && detected !== prev.industry) {
        return { ...prev, industry: detected } as HardFilters & { industryManual?: boolean };
      }
      return prev;
    });
  }, [jdText]);

  // Mark manual edits to industry (listener could be added where HardFilterPanel handles changes)
  // Quick patch: wrap original setHardFilters to flag manual change when id==='industry'
  const originalSetHardFilters = setHardFilters;
  const setHardFiltersWithFlag: typeof setHardFilters = (update) => {
    if (typeof update === 'function') {
      originalSetHardFilters(prev => {
        const next = (update as any)(prev);
        if (next.industry !== prev.industry && next._lastIndustryAuto !== true) {
          (next as any).industryManual = true;
        }
        return next;
      });
    } else {
      if (update.industry !== (hardFilters as any).industry) (update as any).industryManual = true;
      originalSetHardFilters(update);
    }
  };

  useEffect(() => {
    if (prevIsLoading && !isLoading && analysisResults.length > 0) {
      const successfulCandidates = analysisResults.filter(c => c.status === 'SUCCESS');
      if (successfulCandidates.length > 0) {
        // Add unique IDs to candidates before saving
        const candidatesWithIds = successfulCandidates.map(c => ({
          ...c,
          id: c.id || `${c.fileName}-${c.candidateName}-${Math.random()}`
        }));

        const analysisRun: AnalysisRunData = {
          timestamp: Date.now(),
          job: {
            position: jobPosition,
            locationRequirement: hardFilters.location || 'Không có',
          },
          candidates: candidatesWithIds,
        };
        localStorage.setItem('cvAnalysis.latest', JSON.stringify(analysisRun));
        
        // Save to CV filter history if enabled
        const showHistory = localStorage.getItem('showCVFilterHistory');
        const historyEnabled = showHistory !== null ? JSON.parse(showHistory) : true;
        if (historyEnabled) {
          cvFilterHistoryService.addFilterSession(
            jobPosition || 'Không rõ vị trí'
          );
        }
        
        // Firestore persistence (best-effort)
        saveHistorySession({
          jdText,
          jobPosition,
          locationRequirement: hardFilters.location || 'Không có',
          candidates: candidatesWithIds,
          userEmail: userEmail || 'anonymous',
          weights,
          hardFilters,
        }).catch(err => console.warn('Save history failed', err));
      }
    }
  }, [isLoading, prevIsLoading, analysisResults, jobPosition, hardFilters.location, jdText, userEmail, weights, hardFilters]);

  const activeStep = useMemo((): AppStep => {
    switch(location.pathname) {
      case '/process': return 'process';
      case '/jd': return 'jd';
      case '/weights': return 'weights';
      case '/upload': return 'upload';
      case '/analysis': return 'analysis';
      case '/detailed-analytics': return 'analysis'; // Keep analysis active for analytics page
      case '/':
      default:
        return 'home';
    }
  }, [location.pathname]);

  const setActiveStep = useCallback((step: AppStep) => {
    const pathMap: Partial<Record<AppStep, string>> = {
      home: '/',
      jd: '/jd',
      weights: '/weights',
      upload: '/upload',
      analysis: '/analysis',
      process: '/process'
    };
    if (pathMap[step]) navigate(pathMap[step]!);
  }, [navigate]);

  const markStepAsCompleted = useCallback((step: AppStep) => {
    setCompletedSteps(prev => [...new Set([...prev, step])]);
  }, []);



  const screenerPageProps = {
    jdText, setJdText,
    jobPosition, setJobPosition,
    weights, setWeights,
    hardFilters, setHardFilters,
    cvFiles, setCvFiles,
    analysisResults, setAnalysisResults,
    isLoading, setIsLoading,
    loadingMessage, setLoadingMessage,
    activeStep, setActiveStep,
    completedSteps, markStepAsCompleted,
  };

  return (
     <div className={`min-h-screen text-slate-200 flex flex-col ${className || ''}`}>
      <Navbar 
        userEmail={userEmail}
        onLogout={handleLogout}
        onLoginRequest={onLoginRequest}
        onBrandClick={() => setActiveStep('home')}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={toggleSidebar}
      />
      <Sidebar 
        activeStep={activeStep} 
        setActiveStep={setActiveStep} 
        completedSteps={completedSteps}
        onReset={onResetRequest}
        onLogout={handleLogout}
        userEmail={userEmail}
        onLoginRequest={onLoginRequest}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onShowSettings={() => setHistoryModalOpen(true)}
      />
      
      <main className={`main-content ${sidebarOpen ? 'with-sidebar md:ml-[220px]' : 'without-sidebar ml-0'} pt-16 flex-1 flex flex-col min-h-0 transition-all duration-300 ease-in-out`}>
        <ProgressBar activeStep={activeStep} completedSteps={completedSteps} />
        <div className={`mx-auto w-full ${activeStep === 'weights' ? 'container-responsive' : 'max-w-7xl px-4 sm:px-6 lg:px-8'} py-2 flex-1`}>
          <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div>}>
            <Routes>
              <Route path="/" element={<DashboardHomePage setActiveStep={setActiveStep} isLoggedIn={isLoggedIn} onLoginRequest={onLoginRequest} completedSteps={completedSteps} />} />
              <Route path="/jd" element={isLoggedIn ? <ScreenerPage {...screenerPageProps} /> : <DashboardHomePage setActiveStep={setActiveStep} isLoggedIn={isLoggedIn} onLoginRequest={onLoginRequest} completedSteps={completedSteps} />} />
              <Route path="/weights" element={isLoggedIn ? <ScreenerPage {...screenerPageProps} /> : <DashboardHomePage setActiveStep={setActiveStep} isLoggedIn={isLoggedIn} onLoginRequest={onLoginRequest} completedSteps={completedSteps} />} />
              <Route path="/upload" element={isLoggedIn ? <ScreenerPage {...screenerPageProps} /> : <DashboardHomePage setActiveStep={setActiveStep} isLoggedIn={isLoggedIn} onLoginRequest={onLoginRequest} completedSteps={completedSteps} />} />
              <Route path="/analysis" element={isLoggedIn ? <ScreenerPage {...screenerPageProps} /> : <DashboardHomePage setActiveStep={setActiveStep} isLoggedIn={isLoggedIn} onLoginRequest={onLoginRequest} completedSteps={completedSteps} />} />
              <Route path="/detailed-analytics" element={isLoggedIn ? <DetailedAnalyticsPage candidates={analysisResults} jobPosition={jobPosition} /> : <DashboardHomePage setActiveStep={setActiveStep} isLoggedIn={isLoggedIn} onLoginRequest={onLoginRequest} completedSteps={completedSteps} />} />
              <Route path="/process" element={<ProcessPage />} />
            </Routes>
          </Suspense>
        </div>
        {/* Footer chỉ hiển thị ở trang chủ */}
        {activeStep === 'home' && <Footer />}
      </main>
      
      {/* History Modal */}
      <HistoryModal
        isOpen={historyModalOpen}
        onClose={() => setHistoryModalOpen(false)}
      />
      
      {/* Vercel Analytics & Speed Insights for performance monitoring */}
      <Analytics />
      <SpeedInsights />
      <WebVitalsReporter />
      
      {/* Performance Monitor - only in development */}
      {import.meta.env.DEV && <PerformanceMonitor />}
    </div>
  );
};  

export default App;
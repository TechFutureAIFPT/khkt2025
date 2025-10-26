import React, { useState, useEffect } from 'react';
import { auth } from '../../src/firebase';
import { User } from 'firebase/auth';
import type { AppStep } from '../../types';

interface DashboardHomePageProps {
  setActiveStep: (step: AppStep) => void;
  isLoggedIn: boolean;
  onLoginRequest: () => void;
  completedSteps: AppStep[];
}

interface QuickStat {
  icon: string;
  label: string;
  value: string;
  color: string;
  bgColor: string;
}

const DashboardHomePage: React.FC<DashboardHomePageProps> = ({ setActiveStep, isLoggedIn, onLoginRequest, completedSteps }) => {
  const [recentSessions, setRecentSessions] = useState(0);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // Load recent sessions count from localStorage
    try {
      const stored = localStorage.getItem('cvAnalysis.latest');
      if (stored) {
        const data = JSON.parse(stored);
        setRecentSessions(data.candidates?.length || 0);
      }
    } catch (e) {
      console.warn('Could not load recent sessions', e);
    }

    // Monitor auth state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const quickStats: QuickStat[] = [
    {
      icon: 'fa-solid fa-rocket',
      label: 'Phiên gần nhất',
      value: recentSessions > 0 ? `${recentSessions} CV` : 'Chưa có',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: 'fa-solid fa-chart-line', 
      label: 'Hiệu quả AI',
      value: '99.2%',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10'
    },
    {
      icon: 'fa-solid fa-clock',
      label: 'Tiết kiệm thời gian',
      value: '~85%',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: 'fa-solid fa-star',
      label: 'Độ chính xác',
      value: '96.8%',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    }
  ];

  const quickActions = [
    {
      icon: 'fa-solid fa-clipboard-list',
      title: 'Tạo JD Mới',
      description: 'Bắt đầu với mô tả công việc',
      color: 'from-blue-500 to-cyan-500',
      action: () => isLoggedIn ? setActiveStep('jd') : onLoginRequest(),
      requiresAuth: true,
      requiresSteps: []
    },
    {
      icon: 'fa-solid fa-file-arrow-up',
      title: 'Tải CV Nhanh',
      description: 'Upload và phân tích ngay',
      color: 'from-emerald-500 to-teal-500',
      action: () => isLoggedIn ? setActiveStep('upload') : onLoginRequest(),
      requiresAuth: true,
      requiresSteps: ['jd']
    },
    {
      icon: 'fa-solid fa-sliders',
      title: 'Tùy chỉnh Trọng số',
      description: 'Điều chỉnh tiêu chí chấm điểm',
      color: 'from-purple-500 to-pink-500',
      action: () => isLoggedIn ? setActiveStep('weights') : onLoginRequest(),
      requiresAuth: true,
      requiresSteps: ['jd']
    },
    {
      icon: 'fa-solid fa-edit',
      title: 'Cải thiện JD',
      description: 'Tối ưu hóa mô tả công việc',
      color: 'from-orange-500 to-red-500',
      action: () => window.open('https://parse-jd.vercel.app/', '_blank'),
      requiresAuth: false,
      requiresSteps: []
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
              Chào mừng trở lại
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {isLoggedIn ? (
                <>
                  <span className="text-blue-400 font-medium">Chào mừng bạn trở lại!</span>
                </>
              ) : (
                <>
                  Khám phá hệ thống sàng lọc CV thông minh với AI. 
                  <button 
                    onClick={onLoginRequest}
                    className="text-blue-400 font-medium hover:text-blue-300 underline underline-offset-2 transition-colors"
                  >
                    Đăng nhập để bắt đầu!
                  </button>
                </>
              )}
            </p>
          </div>

          {/* Process Overview - Moved to top */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-route text-purple-400"></i>
              Quy trình thông minh
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: '01', title: 'Job Description', desc: 'Nhập mô tả công việc', icon: 'fa-clipboard-list', color: 'text-blue-400' },
                { step: '02', title: 'Cấu hình', desc: 'Đặt trọng số & bộ lọc', icon: 'fa-sliders', color: 'text-purple-400' },
                { step: '03', title: 'Upload CV', desc: 'Tải lên hàng loạt', icon: 'fa-file-arrow-up', color: 'text-emerald-400' },
                { step: '04', title: 'AI Phân tích', desc: 'Kết quả thông minh', icon: 'fa-rocket', color: 'text-orange-400' },
                { step: '05', title: 'Xuất báo cáo', desc: 'Kết quả cuối cùng', icon: 'fa-download', color: 'text-pink-400' }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-slate-700/50 rounded-full flex items-center justify-center group-hover:bg-slate-600/50 transition-colors">
                      <i className={`fa-solid ${item.icon} text-xl ${item.color}`}></i>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 border-2 border-slate-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-slate-300">{item.step}</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>



          {/* Quick Stats - Moved to third */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-chart-bar text-emerald-400"></i>
              Số liệu thống kê
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                      <i className={`${stat.icon} text-xl ${stat.color}`}></i>
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions - Moved to third */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-bolt text-yellow-400"></i>
              Hành động nhanh
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => {
                const authLocked = action.requiresAuth && !isLoggedIn;
                const stepsNotCompleted = action.requiresSteps && action.requiresSteps.length > 0 && 
                  !action.requiresSteps.every(step => completedSteps.includes(step as AppStep));
                const isLocked = authLocked || stepsNotCompleted;
                
                const getLockMessage = () => {
                  if (authLocked) return "Cần đăng nhập";
                  if (stepsNotCompleted) return "Hoàn thành JD trước";
                  return "Cần đăng nhập";
                };
                
                return (
                  <button
                    key={index}
                    onClick={action.action}
                    disabled={isLocked}
                    className={`group bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-6 text-left transition-all duration-300 relative overflow-hidden
                      ${isLocked 
                        ? 'border-slate-700/30 cursor-not-allowed opacity-60' 
                        : 'border-slate-700/50 hover:border-slate-600/50 hover:scale-105 hover:shadow-lg cursor-pointer'
                      }`}
                  >
                    {isLocked && (
                      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] flex items-center justify-center z-10">
                        <div className="text-center">
                          <i className={`fa-solid ${stepsNotCompleted ? 'fa-tasks' : 'fa-lock'} text-2xl text-slate-400 mb-2`}></i>
                          <p className="text-xs text-slate-400 font-medium">{getLockMessage()}</p>
                        </div>
                      </div>
                    )}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 transition-transform
                      ${isLocked ? '' : 'group-hover:scale-110'}`}>
                      <i className={`${action.icon} text-2xl text-white ${isLocked ? 'opacity-50' : ''}`}></i>
                    </div>
                    <h3 className={`text-lg font-bold mb-2 transition-colors
                      ${isLocked ? 'text-slate-500' : 'text-white group-hover:text-blue-300'}`}>
                      {action.title}
                    </h3>
                    <p className={`text-sm transition-colors
                      ${isLocked ? 'text-slate-600' : 'text-slate-400 group-hover:text-slate-300'}`}>
                      {action.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Partners Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 justify-center">
              <i className="fa-solid fa-handshake text-blue-400"></i>
              Đối tác hỗ trợ
            </h2>
            
            <div className="relative overflow-hidden bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl py-8">
              <div className="flex items-center">
                <div className="flex animate-scroll-infinite gap-12 min-w-full">
                  {/* First set of logos */}
                  <div className="flex items-center justify-center min-w-[140px] h-20 px-6">
                    <img src="/images/logos/fpt.png" alt="FPT" className="max-h-16 max-w-full object-contain brightness-100 contrast-100 saturate-100 hover:scale-110 hover:brightness-110 transition-all duration-300" />
                  </div>
                  <div className="flex items-center justify-center min-w-[140px] h-20 px-6">
                    <img src="/images/logos/topcv-1.png" alt="TopCV" className="max-h-16 max-w-full object-contain brightness-100 contrast-100 saturate-100 hover:scale-110 hover:brightness-110 transition-all duration-300" />
                  </div>
                  <div className="flex items-center justify-center min-w-[140px] h-20 px-6">
                    <img src="/images/logos/vinedimex-1.png" alt="Vinedimex" className="max-h-16 max-w-full object-contain brightness-100 contrast-100 saturate-100 hover:scale-110 hover:brightness-110 transition-all duration-300" />
                  </div>
                  <div className="flex items-center justify-center min-w-[140px] h-20 px-6">
                    <img src="/images/logos/hb.png" alt="HB" className="max-h-16 max-w-full object-contain brightness-100 contrast-100 saturate-100 hover:scale-110 hover:brightness-110 transition-all duration-300" />
                  </div>
                  <div className="flex items-center justify-center min-w-[140px] h-20 px-6">
                    <img src="/images/logos/mì_ai.png" alt="Mì AI" className="max-h-16 max-w-full object-contain brightness-100 contrast-100 saturate-100 hover:scale-110 hover:brightness-110 transition-all duration-300" />
                  </div>
                  <div className="flex items-center justify-center min-w-[140px] h-20 px-6">
                    <img src="/images/logos/2.1.png" alt="2.1" className="max-h-16 max-w-full object-contain brightness-100 contrast-100 saturate-100 hover:scale-110 hover:brightness-110 transition-all duration-300" />
                  </div>
                  
                  {/* Duplicate set for seamless loop */}
                  <div className="flex items-center justify-center min-w-[140px] h-20 px-6">
                    <img src="/images/logos/fpt.png" alt="FPT" className="max-h-16 max-w-full object-contain brightness-100 contrast-100 saturate-100 hover:scale-110 hover:brightness-110 transition-all duration-300" />
                  </div>
                  <div className="flex items-center justify-center min-w-[140px] h-20 px-6">
                    <img src="/images/logos/topcv-1.png" alt="TopCV" className="max-h-16 max-w-full object-contain brightness-100 contrast-100 saturate-100 hover:scale-110 hover:brightness-110 transition-all duration-300" />
                  </div>
                  <div className="flex items-center justify-center min-w-[140px] h-20 px-6">
                    <img src="/images/logos/vinedimex-1.png" alt="Vinedimex" className="max-h-16 max-w-full object-contain brightness-100 contrast-100 saturate-100 hover:scale-110 hover:brightness-110 transition-all duration-300" />
                  </div>
                  <div className="flex items-center justify-center min-w-[140px] h-20 px-6">
                    <img src="/images/logos/hb.png" alt="HB" className="max-h-16 max-w-full object-contain brightness-100 contrast-100 saturate-100 hover:scale-110 hover:brightness-110 transition-all duration-300" />
                  </div>
                  <div className="flex items-center justify-center min-w-[140px] h-20 px-6">
                    <img src="/images/logos/mì_ai.png" alt="Mì AI" className="max-h-16 max-w-full object-contain brightness-100 contrast-100 saturate-100 hover:scale-110 hover:brightness-110 transition-all duration-300" />
                  </div>
                  <div className="flex items-center justify-center min-w-[140px] h-20 px-6">
                    <img src="/images/logos/2.1.png" alt="2.1" className="max-h-16 max-w-full object-contain brightness-100 contrast-100 saturate-100 hover:scale-110 hover:brightness-110 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
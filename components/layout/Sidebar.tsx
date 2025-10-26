import React from 'react';
import type { AppStep } from '../../types';

interface SidebarProps {
  activeStep: AppStep;
  setActiveStep: (step: AppStep) => void;
  completedSteps: AppStep[];
  onReset: () => void;
  onLogout?: () => void;
  userEmail?: string;
  onLoginRequest?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
  onShowSettings?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeStep, setActiveStep, completedSteps, onReset, onLogout, userEmail, onLoginRequest, isOpen = true, onClose, onShowSettings }) => {
  
  // Hàm xử lý khi click vào menu item
  const handleStepClick = (step: AppStep) => {
    if (isStepEnabled(step)) {
      setActiveStep(step);
      
      // Tự động đóng sidebar trên mobile sau khi chọn menu
      if (typeof window !== 'undefined' && window.innerWidth < 768 && onClose) {
        onClose();
      }
    }
  };
  const steps: { key: AppStep; icon: string; label: string }[] = [
    { key: 'home', icon: 'fa-solid fa-home', label: 'Trang chủ' },
    { key: 'jd', icon: 'fa-solid fa-clipboard-list', label: 'Mô tả Công việc' },
    { key: 'weights', icon: 'fa-solid fa-sliders', label: 'Phân bổ Trọng số' },
    { key: 'upload', icon: 'fa-solid fa-file-arrow-up', label: 'Tải lên CV' },
    { key: 'analysis', icon: 'fa-solid fa-rocket', label: 'Phân Tích AI' },
  ];
  

  const isStepEnabled = (step: AppStep): boolean => {
    if (step === 'home') return true;
    if (step === 'jd') return true;
    if (step === 'weights') return completedSteps.includes('jd');
    if (step === 'upload') return completedSteps.includes('jd') && completedSteps.includes('weights');
    if (step === 'analysis') return completedSteps.includes('jd') && completedSteps.includes('weights') && completedSteps.includes('upload');
    if (step === 'process') return true;
    return false;
  };
  
  const renderStep = (step: { key: AppStep; icon: string; label: string }) => {
    const isActive = activeStep === step.key;
    const isEnabled = isStepEnabled(step.key);
    const isCompleted = completedSteps.includes(step.key);

    // Define colors using main theme colors
    const getIconColor = (stepKey: AppStep, isActive: boolean, isEnabled: boolean, isCompleted: boolean) => {
      if (isCompleted) return 'text-[#22C55E]';
      if (isActive) return 'text-white';
      if (!isEnabled) return 'text-[#98A2B3]';

      switch (stepKey) {
        case 'home': return 'text-[#6EE7F5]';
        case 'jd': return 'text-[#6EE7F5]';
        case 'weights': return 'text-[#A78BFA]';
        case 'upload': return 'text-[#22C55E]';
        case 'analysis': return 'text-[#F59E0B]';
        default: return 'text-[#98A2B3]';
      }
    };

    const iconColor = getIconColor(step.key, isActive, isEnabled, isCompleted);

    return (
      <li className="w-full" key={step.key}>
        <button
          className={`sidebar-item w-full relative h-[54px] flex items-center gap-3 rounded-lg px-4 transition-all duration-300 group overflow-hidden
            ${isActive ? 'bg-white/8 text-white shadow-lg ring-1 ring-[#6EE7F5]/40 border border-[#6EE7F5]/20' : 'text-[#E6EAF2] hover:bg-white/6 hover:text-white'} 
            ${!isEnabled ? 'opacity-50 cursor-not-allowed text-[#98A2B3]' : ''}
            ${isCompleted && !isActive ? 'hover:bg-[#22C55E]/10' : ''}`}
          data-module={step.key}
          role="tab"
          aria-selected={isActive}
          aria-controls={`module-${step.key}`}
          data-tip={step.label}
          aria-label={step.label}
          disabled={!isEnabled}
          onClick={() => handleStepClick(step.key)}
        >
          {isActive && <div className="absolute inset-0 bg-gradient-to-r from-[#6EE7F5]/10 to-[#A78BFA]/10 animate-pulse" />}
          <div className={`relative z-10 flex items-center justify-center w-9 h-9 rounded-md ${isActive ? 'bg-[#6EE7F5]/15' : 'bg-white/6 group-hover:bg-white/10'} transition-colors`}> 
            <i className={`${step.icon} text-sm ${iconColor} transition-all duration-300 ${isActive ? 'drop-shadow-lg scale-110' : 'group-hover:scale-110'}`} aria-hidden="true" />
          </div>
          <span className={`text-xs font-medium tracking-wide transition-opacity duration-300 whitespace-nowrap ${isActive ? 'text-white' : ''}`}>{step.label}</span>
          {isCompleted && !isActive && step.key !== 'process' && (
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#22C55E] rounded-full border border-[#0B1220]" />
          )}
        </button>
      </li>
    );
  }

  return (
    <>
      {/* Overlay cho mobile khi sidebar mở */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose} // Đóng sidebar khi click overlay
        />
      )}
      
      <aside 
        id="cv-sidebar" 
        className={`flex flex-col fixed top-0 left-0 h-screen w-[220px] bg-[#0B1220]/98 border-r border-white/12 shadow-2xl z-50 backdrop-blur-xl overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 md:opacity-100'
        }`}
      >
        <ul id="sidebar-nav" className="flex flex-col gap-1 pt-4 pb-3 w-full px-3" role="tablist" aria-label="Điều hướng module CV">
          {steps.map(renderStep)}
    {/* Removed history button */}
          {/* Account moved to Navbar */}
        </ul>
        
        {/* History Button */}
        {userEmail && onShowSettings && (
          <div className="mt-auto px-3 pb-4">
            <button
              onClick={() => {
                onShowSettings();
                // Tự động đóng sidebar trên mobile sau khi chọn
                if (typeof window !== 'undefined' && window.innerWidth < 768 && onClose) {
                  onClose();
                }
              }}
              className="w-full h-[54px] flex items-center gap-3 rounded-lg px-4 text-[#E6EAF2] hover:bg-white/6 hover:text-white transition-all duration-300 group"
              title="Lịch sử"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-white/6 group-hover:bg-white/10 transition-colors">
                <i className="fa-solid fa-history text-sm text-[#98A2B3] group-hover:text-white transition-all duration-300 group-hover:scale-110" aria-hidden="true" />
              </div>
              <span className="text-xs font-medium tracking-wide transition-opacity duration-300 whitespace-nowrap">Lịch sử</span>
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
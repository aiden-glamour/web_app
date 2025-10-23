import React from 'react';
import { X } from 'lucide-react';

const SidePanel = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop - only show on mobile */}
      <div 
        className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel - only show on mobile */}
      <div 
        className={`
          md:hidden fixed z-50 bg-white shadow-2xl transition-all duration-300 ease-in-out
          w-full h-[80vh] left-0 bottom-0 transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        {/* Header */}
        <div className="flex justify-end p-4 border-b">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close panel"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto h-[calc(100%-64px)]">
          {children}
        </div>
      </div>
    </>
  );
};

export default SidePanel;
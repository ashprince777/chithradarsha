import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { openWhatsApp } from '../config';

export const FloatingWhatsAppButton: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const handleClick = () => {
    const defaultMsg = "Hello, I would like to know more about your Nettipattam products.";
    openWhatsApp(defaultMsg);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating Prompt Bubble */}
      {!tooltipDismissed && (
        <div className="mb-2 bg-[#FAF6EE] border border-[#C5A059]/40 shadow-xl rounded-2xl p-3 max-w-xs text-xs text-[#2C1810] flex items-start gap-2.5 animate-in slide-in-from-bottom duration-300">
          <div>
            <span className="font-bold text-[#58111A] block font-display">Need assistance?</span>
            <span>Chat directly with our Thrissur handicraft team on WhatsApp!</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setTooltipDismissed(true);
            }}
            aria-label="Dismiss message"
            className="text-stone-400 hover:text-stone-600 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={handleClick}
        aria-label="Open WhatsApp conversation"
        className="w-14 h-14 rounded-full bg-[#1F6E3B] hover:bg-[#16552D] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/80 focus-visible:outline-2 focus-visible:outline-[#1F6E3B] relative group"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] rounded-full border-2 border-white" />
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </button>
    </div>
  );
};

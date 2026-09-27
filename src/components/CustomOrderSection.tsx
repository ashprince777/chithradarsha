import React from 'react';
import { MessageCircle, CheckCircle, Ruler, Palette, Sparkles } from 'lucide-react';
import { openWhatsApp, generateCustomEnquiryWhatsApp } from '../config';

export const CustomOrderSection: React.FC = () => {
  const handleCustomWhatsApp = () => {
    openWhatsApp(generateCustomEnquiryWhatsApp());
  };

  return (
    <section id="custom-orders" className="py-16 sm:py-20 bg-[#FAF6EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#420A12] via-[#58111A] to-[#2B060C] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-[#D4AF37]/40 relative overflow-hidden">
          {/* Subtle gold grid pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none kasavu-pattern" />

          {/* Decorative gold frame lines */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-xs uppercase font-bold tracking-widest text-[#FFF2A3]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Bespoke Artisan Service
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FDFBF7] leading-tight">
              Need a Custom Nettipattam?
            </h2>

            <p className="font-serif-body text-base sm:text-xl text-[#F2EADB]/90 leading-relaxed max-w-2xl mx-auto">
              Looking for a specific size, design or quantity? Contact us directly and discuss your custom requirement with our team.
            </p>

            {/* Customization options preview */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/15">
                <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-semibold mb-1">
                  <Ruler className="w-4 h-4" />
                  <span>Custom Sizes</span>
                </div>
                <p className="text-xs text-white/80">
                  From 1.5 ft mini ornaments to majestic 9 ft temple elephant scale pieces.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/15">
                <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-semibold mb-1">
                  <Palette className="w-4 h-4" />
                  <span>Velvet & Finishes</span>
                </div>
                <p className="text-xs text-white/80">
                  Deep Maroon, Royal Crimson, Forest Green, or 24K mirror-buffed gold finishes.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-xl border border-white/15">
                <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-semibold mb-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Bulk & Gifting</span>
                </div>
                <p className="text-xs text-white/80">
                  Custom engraved gift boxes for weddings, housewarmings, and corporate events.
                </p>
              </div>
            </div>

            {/* Action button */}
            <div className="pt-4">
              <button
                onClick={handleCustomWhatsApp}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#E6CA65] text-[#420A12] font-bold text-base shadow-xl transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-[#420A12]/30" />
                <span>Discuss on WhatsApp</span>
              </button>
              <p className="text-xs text-[#F2EADB]/60 mt-3">
                Typically responds in under 15 minutes during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

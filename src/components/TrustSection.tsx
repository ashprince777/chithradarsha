import React from 'react';
import { Hammer, Sparkles, SlidersHorizontal, MessageCircle, Truck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const TRUST_ITEMS = [
    {
      icon: Hammer,
      title: 'Handmade / Carefully Crafted',
      description: 'Assembled by Thrissur master guild craftsmen using sacred festival proportions and precision brass bead beating.',
    },
    {
      icon: Sparkles,
      title: 'Kerala Traditional Design',
      description: 'Preserving authentic Surya-Chandran motifs, temple ghungroo bells, and rich velvet backdrops.',
    },
    {
      icon: SlidersHorizontal,
      title: 'Custom Orders Available',
      description: 'Bespoke dimensions from 1.5 ft to 9 ft, custom velvet hues, family crests, and personalized temple emblems.',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Direct Ordering',
      description: 'No complicated checkout or online cards. Order directly with our artisan team over WhatsApp chat.',
    },
    {
      icon: Truck,
      title: 'Delivery Across India',
      description: 'Safely packed in cushioned wooden protective crates and dispatched with insured pan-India express courier.',
    },
  ];

  return (
    <section className="py-16 bg-[#F2EADB]/60 border-y border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#9B782B] block">
            Why Choose Aanachantham
          </span>
          <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-[#58111A]">
            Rooted in Authenticity & Master Craftsmanship
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#FAF6EE] p-5 rounded-xl border border-[#C5A059]/30 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-[#6B1724] text-[#D4AF37] flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-sm font-bold text-[#58111A] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-[#2C1810]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

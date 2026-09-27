import React from 'react';
import { MessageCircle, ShoppingBag, Sparkles, ChevronRight } from 'lucide-react';
import { NettipattamVisual } from './NettipattamVisual';
import { openWhatsApp, generateCustomEnquiryWhatsApp } from '../config';
import { ProductCategory } from '../types';

interface HeroSectionProps {
  onShopClick: () => void;
  onSelectCategory: (category: ProductCategory) => void;
}

const CATEGORIES_LIST: { id: ProductCategory; label: string; count: string }[] = [
  { id: 'Nettipattam', label: 'Grand Nettipattam', count: 'Festival & Home' },
  { id: 'Mini Nettipattam', label: 'Mini Nettipattam', count: 'Car & Pooja Room' },
  { id: 'Wall Decor', label: 'Wall Decor', count: 'Heritage Living' },
  { id: 'Wedding Decor', label: 'Wedding Decor', count: 'Ceremonial Elegance' },
  { id: 'Temple Decor', label: 'Temple Decor', count: 'Lamps & Aarti' },
  { id: 'Custom Orders', label: 'Custom Orders', count: 'Bespoke Sizes' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopClick, onSelectCategory }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6EE] via-[#F2EADB] to-[#FAF6EE] pt-8 pb-16 sm:py-20 border-b border-[#C5A059]/20">
      {/* Subtle traditional background watermark pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none kasavu-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Zone (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Heritage Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9B782B] bg-[#F2EADB] px-3.5 py-1.5 rounded-full border border-[#C5A059]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Authentic Thrissur Handicrafts</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#58111A] leading-[1.15] text-balance">
              Traditional Kerala Nettipattam, Crafted to Celebrate Every Occasion
            </h1>

            {/* Subheading */}
            <p className="font-serif-body text-lg sm:text-xl text-[#2C1810]/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Handcrafted Kerala-inspired Nettipattam and traditional decorative pieces made for celebrations, temples, weddings, events and collectors.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onShopClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#6B1724] hover:bg-[#58111A] text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#6B1724]/20 transition-all active:scale-98"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Shop Now</span>
              </button>

              <button
                onClick={() => openWhatsApp(generateCustomEnquiryWhatsApp())}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1F6E3B] hover:bg-[#16552D] text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#1F6E3B]/20 transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Order on WhatsApp</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#2C1810]/70 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="text-[#9B782B] text-sm">✦</span> 100% Handcrafted
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#9B782B] text-sm">✦</span> Thrissur Heritage Artisans
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#9B782B] text-sm">✦</span> Insured Delivery Across India
              </span>
            </div>
          </div>

          {/* Right Visual Showcase (5 cols on desktop) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-[#420A12] via-[#58111A] to-[#2B060C] border-2 border-[#D4AF37] shadow-2xl p-4">
              {/* Gold Filigree Corner Accents */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] z-10" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] z-10" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] z-10" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] z-10" />

              <NettipattamVisual
                type="traditional"
                imageUrl="/images/chithradarsha-traditional-3ft.png"
                altText="Traditional Kerala Nettipattam Elephant Forehead Caparison - Chithradarsha Artistry"
                className="w-full h-full object-cover rounded-xl"
              />

              {/* Floating Caption Overlay */}
              <div className="absolute bottom-5 inset-x-5 bg-[#1F110B]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#D4AF37]/40 shadow-xl text-center z-10">
                <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold block">
                  Kerala Cultural Masterpiece
                </span>
                <p className="font-display text-sm font-semibold text-white mt-0.5">
                  Surya-Chandra Elephant Caparison
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Categories Grid Section */}
        <div className="mt-16 pt-12 border-t border-[#C5A059]/20">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-display text-2xl font-bold text-[#58111A]">
              Explore Our Categories
            </h2>
            <p className="text-xs sm:text-sm text-[#2C1810]/70 mt-1">
              Select a category to browse handcrafted decorative creations
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {CATEGORIES_LIST.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group p-4 bg-[#FDFBF7] hover:bg-white rounded-xl border border-[#C5A059]/30 hover:border-[#6B1724] shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#9B782B] group-hover:text-[#6B1724] transition-colors block">
                    {cat.count}
                  </span>
                  <h3 className="font-display text-sm font-bold text-[#58111A] mt-1 leading-snug">
                    {cat.label}
                  </h3>
                </div>
                <div className="mt-3 flex items-center text-[11px] font-semibold text-[#6B1724] group-hover:translate-x-1 transition-transform">
                  <span>Browse</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

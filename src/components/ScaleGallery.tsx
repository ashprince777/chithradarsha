import React, { useState } from 'react';
import { Eye, MessageCircle, Ruler, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { openWhatsApp, generateProductEnquiryWhatsApp } from '../config';

interface ScaleGalleryProps {
  onViewProduct: (product: Product) => void;
  products: Product[];
}

interface ShowcaseItem {
  id: string;
  title: string;
  badge: string;
  height: string;
  image: string;
  tagline: string;
  description: string;
  colorway: string;
  idealFor: string;
  price: number;
}

const REAL_SHOWCASE: ShowcaseItem[] = [
  {
    id: "np-001",
    title: "3.5 Ft Grand Festival Nettipattam",
    badge: "Most Popular Living Room Size",
    height: "3.5 Feet (105 cm)",
    image: "/images/chithradarsha-traditional-3ft.png",
    tagline: "Displayed on presentation stand by master artisan",
    description: "The quintessential Kerala festival proportion. Embellished with alternating forest green and crimson red woolen fringe, central Ganesha emblem, and 3 grand Kumbham sun spheres.",
    colorway: "Classic Crimson Red & Forest Green",
    idealFor: "Living room focal wall, entrance foyer, or housewarming gifts",
    price: 4999,
  },
  {
    id: "np-002",
    title: "5 Ft Monumental Temple Scale Nettipattam",
    badge: "Grand Festive Masterpiece",
    height: "5 Feet (150 cm Standing Scale)",
    image: "/images/chithradarsha-grand-5ft.png",
    tagline: "Spectacular full festival scale piece on display tripod",
    description: "Our grandest ceremonial festival piece. Standing 5 feet tall with layered crimson, white, and green woolen border, hundreds of hand-punched brass studs, and grand royal tassel.",
    colorway: "Ceremonial Maroon, White & Forest Green",
    idealFor: "Double-height living rooms, duplex stairways, temple sanctums & wedding stages",
    price: 12999,
  },
  {
    id: "np-003",
    title: "4.5 Ft Multicolor Layered Nettipattam",
    badge: "Vibrant Ceremonial Edition",
    height: "4.5 Feet (135 cm)",
    image: "/images/chithradarsha-multicolor-4ft.png",
    tagline: "Rich 5-tone woolen fringe on freestanding presentation stand",
    description: "Features an intricate five-tone woolen halo (Red, Yellow, Blue, White, Green) surrounding pure brass studs and sunburst medallions, anchored by an artisan multi-colored hanging tassel.",
    colorway: "5-Color Festival Trinity Blend",
    idealFor: "Spacious villa living rooms, wedding backdrops & cultural stages",
    price: 7499,
  },
  {
    id: "np-duo",
    title: "2.5 Ft Living Room Duo (Red/Green & Blue/Purple)",
    badge: "Compact Apartment Proportions",
    height: "2.5 Feet (30 Inches / 76 cm)",
    image: "/images/chithradarsha-duo-red-blue.png",
    tagline: "Side-by-side color comparison held by artisan",
    description: "Compare the traditional Red/Green classic edition alongside the contemporary Royal Blue & Purple edition. Sized perfectly to fit between wall sconces in modern apartments.",
    colorway: "Red/Green Classic & Royal Blue/Purple",
    idealFor: "Apartment living rooms, office reception, festive gifting",
    price: 3999,
  },
  {
    id: "np-007",
    title: "1.5 Ft Mini Nettipattam Compact Duo",
    badge: "Car Dashboard & Pooja Altar",
    height: "1.5 Feet (45 cm Compact)",
    image: "/images/chithradarsha-mini-duo.png",
    tagline: "Authentic miniature caparisons for vehicles & home shrines",
    description: "Two exquisite miniature Nettipattams handcrafted with the same precision and brass detailing as full festival pieces. Ideal for car dashboards, prayer altars, and festive gifts.",
    colorway: "Auspicious Crimson & Royal Sapphire",
    idealFor: "Car interiors, pooja room mandirs, office desks, housewarming gifts",
    price: 1499,
  },
];

export const ScaleGallery: React.FC<ScaleGalleryProps> = ({ onViewProduct, products }) => {
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem>(REAL_SHOWCASE[0]);

  const handleWhatsAppEnquiry = (item: ShowcaseItem) => {
    const msg = generateProductEnquiryWhatsApp(item.title, item.price, item.height);
    openWhatsApp(msg);
  };

  const handleFindAndOpenProduct = (item: ShowcaseItem) => {
    const found = products.find((p) => p.id === item.id || p.name.includes(item.title.split(' ')[0]));
    if (found) {
      onViewProduct(found);
    } else {
      // Open the primary product
      onViewProduct(products[0]);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF6EE] border-t border-[#C5A059]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F2EADB] border border-[#C5A059]/40 text-xs uppercase font-bold tracking-widest text-[#9B782B] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Chithradarsha Artistry Showcase</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#58111A] leading-tight">
            Real-Life Scale &amp; Artisan Colorway Gallery
          </h2>
          <p className="mt-3 font-serif-body text-base sm:text-lg text-[#2C1810]/80 leading-relaxed">
            See how our authentic Kerala Nettipattams and Aalavattam sets look in real proportions, framed in shadow boxes, mounted on tripod stands, and styled in heritage settings.
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Master Stage Preview (7 cols) */}
          <div className="lg:col-span-7 bg-[#FDFBF7] p-6 sm:p-8 rounded-3xl border border-[#C5A059]/30 shadow-lg space-y-6">
            {/* Visual Box */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-[#FAF6EE] via-[#F2EADB] to-[#E8DFD0] border border-[#C5A059]/30 flex items-center justify-center p-6 shadow-inner">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-contain drop-shadow-2xl transition-all duration-500 hover:scale-105"
              />

              {/* Real Dimension Floating Badge */}
              <div className="absolute top-4 left-4 bg-[#1F110B]/85 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-md">
                <Ruler className="w-4 h-4 text-[#D4AF37]" />
                <span>{selectedItem.height}</span>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4 bg-[#6B1724] text-[#D4AF37] px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-md">
                {selectedItem.badge}
              </div>
            </div>

            {/* Spec Details */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#C5A059]/20 pb-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#58111A]">
                    {selectedItem.title}
                  </h3>
                  <span className="text-xs text-[#9B782B] font-medium block mt-0.5">
                    {selectedItem.tagline}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-[#2C1810] font-sans tabular-nums block">
                    ₹{selectedItem.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] text-[#2C1810]/60">Handmade to order</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#2C1810]/80 leading-relaxed">
                {selectedItem.description}
              </p>

              {/* Key Features Pill-free Text */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#FAF6EE] p-3.5 rounded-xl border border-[#C5A059]/25">
                <div>
                  <span className="text-[#2C1810]/60 block">Colorway:</span>
                  <span className="font-semibold text-[#58111A]">{selectedItem.colorway}</span>
                </div>
                <div>
                  <span className="text-[#2C1810]/60 block">Best Suited For:</span>
                  <span className="font-semibold text-[#2C1810]">{selectedItem.idealFor}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleWhatsAppEnquiry(selectedItem)}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#1F6E3B] hover:bg-[#16552D] text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Enquire on WhatsApp</span>
                </button>

                <button
                  onClick={() => handleFindAndOpenProduct(selectedItem)}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#6B1724] hover:bg-[#58111A] text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-98"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Product Details</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Quick Selection List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9B782B] block mb-1">
              Select Design to Compare Scale:
            </span>

            {REAL_SHOWCASE.map((item) => {
              const isSelected = selectedItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                    isSelected
                      ? 'bg-white border-[#6B1724] shadow-md ring-2 ring-[#6B1724]/20'
                      : 'bg-[#FAF6EE] hover:bg-white border-[#C5A059]/25 hover:border-[#C5A059]/60'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-b from-[#FAF6EE] to-[#F2EADB] p-1.5 shrink-0 border border-[#C5A059]/20 flex items-center justify-center overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#9B782B] font-semibold">
                      <span>{item.height}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{item.badge}</span>
                    </div>
                    <h4 className="font-display text-sm font-bold text-[#58111A] truncate mt-0.5">
                      {item.title}
                    </h4>
                    <span className="text-xs font-semibold text-[#2C1810] tabular-nums block mt-0.5">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Indicator */}
                  <div className="shrink-0 text-[#6B1724]">
                    {isSelected ? (
                      <div className="w-6 h-6 rounded-full bg-[#6B1724] text-white flex items-center justify-center text-xs">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-stone-400" />
                    )}
                  </div>
                </div>
              );
            })}

            {/* Quick Sizing Guide Note */}
            <div className="p-4 bg-[#F2EADB] rounded-2xl border border-[#C5A059]/30 text-xs text-[#2C1810]/75 space-y-1.5">
              <span className="font-bold text-[#58111A] block font-display">
                ✦ Sizing Advice from Master Artisans
              </span>
              <p className="leading-relaxed">
                • <strong>1.5 Ft:</strong> Car dashboards, prayer altars, compact doors.<br />
                • <strong>2.5 Ft to 3.5 Ft:</strong> Most popular standard home living rooms.<br />
                • <strong>4.5 Ft to 5.5 Ft:</strong> Duplexes, wedding mandaps, temple stages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Sparkles, HeartHandshake, ShieldCheck, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF6EE] border-t border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Story Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9B782B] block">
              Our Kerala Heritage
            </span>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#58111A] leading-tight">
              Honoring Century-Old Traditions of Thrissur Master Guilds
            </h2>

            <p className="font-serif-body text-base sm:text-lg text-[#2C1810]/85 leading-relaxed">
              Born in Thrissur—the cultural capital and festival epicenter of Kerala—<strong>Aanachantham</strong> was founded to preserve and share the sacred artistry of the <em>Nettipattam</em> (the auspicious elephant forehead ornament).
            </p>

            <p className="text-sm text-[#2C1810]/75 leading-relaxed">
              Historically adorning majestic caparisoned tuskers during the world-renowned <strong>Thrissur Pooram</strong>, each Nettipattam embodies profound spiritual and cosmological geometry:
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-[#6B1724] text-[#D4AF37] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#58111A]">Surya & Chandran Motifs</h4>
                  <p className="text-xs text-[#2C1810]/70">
                    The top crescent represents the moon (Chandran) and central medallion represents the sun (Surya), balancing the masculine and feminine cosmic forces.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-[#6B1724] text-[#D4AF37] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#58111A]">Sacred Kumbham & Kurumbul Beads</h4>
                  <p className="text-xs text-[#2C1810]/70">
                    Concentric rows of brass-plated roundels invoke the presence of the Trinity (Brahma, Vishnu, Shiva) and attract positive Vastu energy into living spaces.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-[#6B1724] text-[#D4AF37] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#58111A]">Hand-Spun Woolen Tassels</h4>
                  <p className="text-xs text-[#2C1810]/70">
                    Finished with vibrant silk and wool fringes in crimson, yellow, and emerald symbolizing abundance, royalty, and auspicious celebrations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights & Artisan Values */}
          <div className="lg:col-span-6 bg-[#FDFBF7] p-8 sm:p-10 rounded-2xl border border-[#C5A059]/30 shadow-md space-y-6">
            <h3 className="font-display text-xl font-bold text-[#58111A] border-b border-[#C5A059]/20 pb-4">
              Direct from Master Craftsmen
            </h3>

            <p className="text-sm text-[#2C1810]/80 leading-relaxed">
              We work directly with multigenerational artisan families in Kerala without middlemen. Every purchase directly sustains hereditary brass craftsmen, needleworkers, and wood carvers.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#FAF6EE] rounded-xl border border-[#C5A059]/20">
                <HeartHandshake className="w-6 h-6 text-[#6B1724] mb-2" />
                <h4 className="font-display text-sm font-bold text-[#58111A]">Ethical Livelihoods</h4>
                <p className="text-xs text-[#2C1810]/70 mt-1">Fair remuneration for artisan families</p>
              </div>

              <div className="p-4 bg-[#FAF6EE] rounded-xl border border-[#C5A059]/20">
                <Compass className="w-6 h-6 text-[#6B1724] mb-2" />
                <h4 className="font-display text-sm font-bold text-[#58111A]">Authentic Geometry</h4>
                <p className="text-xs text-[#2C1810]/70 mt-1">Hand-measured Vastu alignment</p>
              </div>

              <div className="p-4 bg-[#FAF6EE] rounded-xl border border-[#C5A059]/20">
                <Sparkles className="w-6 h-6 text-[#6B1724] mb-2" />
                <h4 className="font-display text-sm font-bold text-[#58111A]">Anti-Tarnish Finishes</h4>
                <p className="text-xs text-[#2C1810]/70 mt-1">Multi-coat clear lacquer for luster</p>
              </div>

              <div className="p-4 bg-[#FAF6EE] rounded-xl border border-[#C5A059]/20">
                <ShieldCheck className="w-6 h-6 text-[#6B1724] mb-2" />
                <h4 className="font-display text-sm font-bold text-[#58111A]">Insured Transit</h4>
                <p className="text-xs text-[#2C1810]/70 mt-1">Double-walled wooden packing</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#C5A059]/20 flex items-center justify-between text-xs text-[#2C1810]/70">
              <span className="italic">&ldquo;Crafted with reverence, delivered with devotion.&rdquo;</span>
              <span className="font-serif font-bold text-[#6B1724] text-sm">— Aanachantham Guild</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

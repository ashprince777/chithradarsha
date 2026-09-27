import React from 'react';
import { MessageCircle, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG, openWhatsApp, generateCustomEnquiryWhatsApp } from '../config';
import { ProductCategory } from '../types';

interface FooterProps {
  onSelectCategory: (category: ProductCategory) => void;
  onNavigate: (tab: 'home' | 'shop' | 'about' | 'custom' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onNavigate }) => {
  return (
    <footer className="bg-[#1F110B] text-[#FAF6EE] relative overflow-hidden border-t-2 border-[#D4AF37]">
      {/* Top Kasavu Border Ribbon */}
      <div className="kasavu-border-bottom" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Lineage Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#6B1724] border border-[#D4AF37] flex items-center justify-center">
                <span className="text-[#D4AF37] text-lg font-serif font-bold">ആ</span>
              </div>
              <span className="font-display text-2xl font-bold text-[#FDFBF7] tracking-tight">
                {BUSINESS_CONFIG.businessName}
              </span>
            </div>
            <p className="text-xs text-[#FAF6EE]/75 leading-relaxed max-w-sm">
              Authentic Kerala Nettipattam and traditional temple decorative handicrafts hand-assembled by hereditary master artisans in Thrissur, Kerala. Direct WhatsApp ordering with insured delivery across India.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => openWhatsApp(generateCustomEnquiryWhatsApp())}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1F6E3B] hover:bg-[#16552D] text-xs font-semibold text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </button>
              <a
                href={BUSINESS_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors border border-white/15"
              >
                <Instagram className="w-4 h-4 text-[#D4AF37]" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF6EE]/75">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Handicraft Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('custom')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Custom Nettipattam
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Our Thrissur Lineage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Studio & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF6EE]/75">
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('Nettipattam');
                    onNavigate('shop');
                  }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Traditional Nettipattam
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('Mini Nettipattam');
                    onNavigate('shop');
                  }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Mini & Car Decor
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('Wall Decor');
                    onNavigate('shop');
                  }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Kathakali & Wall Ensembles
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('Wedding Decor');
                    onNavigate('shop');
                  }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Wedding & Stage Decor
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('Temple Decor');
                    onNavigate('shop');
                  }}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Nilavilakku & Brass Lamps
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Kerala Studio
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF6EE]/75">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Round South, Thrissur, Kerala 680001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{BUSINESS_CONFIG.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{BUSINESS_CONFIG.email}</span>
              </li>
              <li className="text-[11px] text-[#FAF6EE]/50 pt-1">
                GST Registered Artisan Cooperative
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF6EE]/60">
          <p>© {new Date().getFullYear()} {BUSINESS_CONFIG.businessName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Handmade with pride in God&apos;s Own Country</span>
            <span aria-hidden="true">·</span>
            <span>Direct WhatsApp Ordering</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

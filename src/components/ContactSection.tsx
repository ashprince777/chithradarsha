import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG, openWhatsApp, generateCustomEnquiryWhatsApp } from '../config';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F2EADB]/50 border-t border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#9B782B] block">
            Get In Touch
          </span>
          <h2 className="mt-1 font-display text-3xl font-bold text-[#58111A]">
            Connect With Our Heritage Studio
          </h2>
          <p className="mt-2 text-sm text-[#2C1810]/75">
            Visit our workshop in Thrissur or reach out directly over WhatsApp for custom dimensions, bulk orders, and shipping enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Main Info Box */}
            <div className="bg-[#FAF6EE] p-6 rounded-2xl border border-[#C5A059]/30 shadow-xs space-y-4">
              <h3 className="font-display text-lg font-bold text-[#58111A]">
                {BUSINESS_CONFIG.businessName}
              </h3>
              <p className="text-xs text-[#9B782B] font-medium -mt-2">
                {BUSINESS_CONFIG.tagline}
              </p>

              <div className="space-y-3 pt-2 text-sm text-[#2C1810]/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#6B1724] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#2C1810]">Studio Location:</span>
                    <span>Temple Gate Road, Round South, Thrissur, Kerala - 680001, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#6B1724] shrink-0" />
                  <div>
                    <span className="font-semibold block text-[#2C1810]">Phone & Direct Enquiries:</span>
                    <a href={`tel:${BUSINESS_CONFIG.phoneDisplay}`} className="hover:text-[#6B1724]">
                      {BUSINESS_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#6B1724] shrink-0" />
                  <div>
                    <span className="font-semibold block text-[#2C1810]">Email:</span>
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-[#6B1724]">
                      {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#6B1724] shrink-0" />
                  <div>
                    <span className="font-semibold block text-[#2C1810]">Studio Hours:</span>
                    <span>{BUSINESS_CONFIG.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openWhatsApp(generateCustomEnquiryWhatsApp())}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1F6E3B] hover:bg-[#16552D] text-white text-xs font-semibold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>

                <a
                  href={BUSINESS_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#6B1724] hover:bg-[#58111A] text-white text-xs font-semibold shadow-sm transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram Gallery</span>
                </a>
              </div>
            </div>
          </div>

          {/* Styled Map Showcase Placeholder (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF6EE] p-6 rounded-2xl border border-[#C5A059]/30 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-display text-base font-bold text-[#58111A]">
                  Thrissur Cultural Hub
                </h4>
                <p className="text-xs text-[#2C1810]/60">
                  Located near the historic Vadakkumnathan Shiva Temple
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Thrissur,Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-semibold text-[#6B1724] hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Custom Styled Map Container */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#C5A059]/30 bg-[#E8DFD0] shadow-inner flex items-center justify-center">
              {/* Map grid lines simulation */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="mapGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6B1724" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                </svg>
              </div>

              {/* Map Roads & Circles */}
              <div className="relative z-10 text-center p-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#6B1724] border-4 border-[#FAF6EE] shadow-xl text-[#D4AF37] flex items-center justify-center mx-auto animate-bounce">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <span className="font-display text-sm font-bold text-[#58111A] block">
                    Aanachantham Nettipattam Studio
                  </span>
                  <span className="text-xs text-[#2C1810]/70">
                    Round South, Thrissur, Kerala (680001)
                  </span>
                </div>
                <div className="inline-block px-3 py-1 bg-[#FAF6EE]/90 backdrop-blur-xs rounded-full border border-[#C5A059]/40 text-[11px] font-medium text-[#6B1724]">
                  ✦ Center of Kerala Temple Festival Arts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { openWhatsApp, generateCustomEnquiryWhatsApp } from '../config';

interface NavbarProps {
  activeTab: 'home' | 'shop' | 'about' | 'custom' | 'contact';
  setActiveTab: (tab: 'home' | 'shop' | 'about' | 'custom' | 'contact') => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenSearch }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: 'home' | 'shop' | 'about' | 'custom' | 'contact') => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#C5A059]/20 transition-all">
      {/* Top Auspicious Gold Kasavu Line Accent */}
      <div className="kasavu-border-bottom" />

      {/* Main Bar: Strict 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus-visible:outline-2 focus-visible:outline-[#C5A059] rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6B1724] to-[#420A12] border border-[#D4AF37] flex items-center justify-center shadow-sm">
            <span className="text-[#D4AF37] text-lg font-serif font-bold">ആ</span>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#58111A] font-display block leading-none">
              Aanachantham
            </span>
            <span className="text-[10px] tracking-widest text-[#9B782B] uppercase font-medium">
              Kerala Nettipattam
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2C1810]">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors hover:text-[#6B1724] py-1 ${
              activeTab === 'home' ? 'text-[#6B1724] font-semibold border-b-2 border-[#C5A059]' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('shop')}
            className={`transition-colors hover:text-[#6B1724] py-1 ${
              activeTab === 'shop' ? 'text-[#6B1724] font-semibold border-b-2 border-[#C5A059]' : ''
            }`}
          >
            Shop
          </button>
          <button
            onClick={() => handleNavClick('custom')}
            className={`transition-colors hover:text-[#6B1724] py-1 ${
              activeTab === 'custom' ? 'text-[#6B1724] font-semibold border-b-2 border-[#C5A059]' : ''
            }`}
          >
            Custom Orders
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`transition-colors hover:text-[#6B1724] py-1 ${
              activeTab === 'about' ? 'text-[#6B1724] font-semibold border-b-2 border-[#C5A059]' : ''
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`transition-colors hover:text-[#6B1724] py-1 ${
              activeTab === 'contact' ? 'text-[#6B1724] font-semibold border-b-2 border-[#C5A059]' : ''
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Actions (Search, Cart, WhatsApp CTA) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            aria-label="Search products"
            className="p-2.5 text-[#58111A] hover:bg-[#F2EADB] rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-[#C5A059]"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label={`Shopping bag with ${totalItems} items`}
            className="relative flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#58111A] hover:bg-[#F2EADB] rounded-lg transition-colors border border-[#C5A059]/30 focus-visible:outline-2 focus-visible:outline-[#C5A059]"
          >
            <ShoppingBag className="w-5 h-5 text-[#6B1724]" />
            <span className="hidden sm:inline">Cart</span>
            <span className="bg-[#6B1724] text-white text-xs font-bold px-2 py-0.5 rounded-full tabular-nums">
              {totalItems}
            </span>
          </button>

          {/* WhatsApp Direct Enquiry Action */}
          <button
            onClick={() => openWhatsApp(generateCustomEnquiryWhatsApp())}
            className="hidden lg:flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1F6E3B] hover:bg-[#16552D] rounded-lg shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-[#1F6E3B] whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            WhatsApp
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 text-[#58111A] hover:bg-[#F2EADB] rounded-lg focus-visible:outline-2 focus-visible:outline-[#C5A059]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6EE] border-b border-[#C5A059]/30 px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left py-2.5 px-3 rounded-md text-base font-medium transition-colors ${
              activeTab === 'home' ? 'bg-[#6B1724] text-white' : 'text-[#2C1810] hover:bg-[#F2EADB]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('shop')}
            className={`w-full text-left py-2.5 px-3 rounded-md text-base font-medium transition-colors ${
              activeTab === 'shop' ? 'bg-[#6B1724] text-white' : 'text-[#2C1810] hover:bg-[#F2EADB]'
            }`}
          >
            Shop All Handicrafts
          </button>
          <button
            onClick={() => handleNavClick('custom')}
            className={`w-full text-left py-2.5 px-3 rounded-md text-base font-medium transition-colors ${
              activeTab === 'custom' ? 'bg-[#6B1724] text-white' : 'text-[#2C1810] hover:bg-[#F2EADB]'
            }`}
          >
            Custom Orders
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left py-2.5 px-3 rounded-md text-base font-medium transition-colors ${
              activeTab === 'about' ? 'bg-[#6B1724] text-white' : 'text-[#2C1810] hover:bg-[#F2EADB]'
            }`}
          >
            About Our Heritage
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left py-2.5 px-3 rounded-md text-base font-medium transition-colors ${
              activeTab === 'contact' ? 'bg-[#6B1724] text-white' : 'text-[#2C1810] hover:bg-[#F2EADB]'
            }`}
          >
            Contact & Location
          </button>
          
          <div className="pt-2 border-t border-[#C5A059]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp(generateCustomEnquiryWhatsApp());
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#1F6E3B] hover:bg-[#16552D] rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

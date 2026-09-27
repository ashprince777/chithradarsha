/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { TrustSection } from './components/TrustSection';
import { CustomOrderSection } from './components/CustomOrderSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { SearchModal } from './components/SearchModal';
import { ShopView } from './components/ShopView';
import { ScaleGallery } from './components/ScaleGallery';
import { Footer } from './components/Footer';
import { CartProvider, useCart } from './context/CartContext';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory, CustomerDetails } from './types';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

function AppContent() {
  const [activeTab, setActiveTab] = useState<'home' | 'shop' | 'about' | 'custom' | 'contact'>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Order confirmation states
  const [confirmationData, setConfirmationData] = useState<{
    orderRef: string;
    details: CustomerDetails;
    totalAmount: number;
  } | null>(null);

  const { toastMessage, dismissToast } = useCart();

  // Handle category selection from home categories bar
  const handleSelectCategory = (category: ProductCategory) => {
    setSelectedCategory(category);
    setActiveTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderSent = (orderRef: string, details: CustomerDetails, subtotal: number) => {
    setConfirmationData({
      orderRef,
      details,
      totalAmount: subtotal,
    });
  };

  // 6 Primary Featured Products for Home Page
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#2C1810]">
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-[#6B1724] text-white px-4 py-3 rounded-xl shadow-xl border border-[#D4AF37]/40 flex items-center gap-2.5 text-xs sm:text-sm animate-in slide-in-from-right duration-200">
          <Check className="w-4 h-4 text-emerald-300 shrink-0" />
          <span>{toastMessage}</span>
          <button
            onClick={dismissToast}
            className="ml-2 text-white/60 hover:text-white text-xs underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Dynamic Content Views */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <HeroSection
              onShopClick={() => {
                setActiveTab('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectCategory={handleSelectCategory}
            />

            {/* Featured Products Grid */}
            <section className="py-16 sm:py-20 bg-[#FAF6EE]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#9B782B] mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Curated Masterpieces</span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#58111A]">
                      Featured Nettipattam Creations
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm text-[#2C1810]/70">
                      Hand-punched brass studs, temple bells, and royal crimson velvet backing.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveTab('shop');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#6B1724] hover:text-[#58111A] group self-start md:self-auto"
                  >
                    <span>View all {PRODUCTS.length} handicrafts</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* 6 Featured Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6">
                  {featuredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewProduct={(p) => setSelectedProduct(p)}
                    />
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <button
                    onClick={() => {
                      setActiveTab('shop');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#6B1724] hover:bg-[#58111A] text-white font-semibold text-sm shadow-md transition-all active:scale-98"
                  >
                    <span>Explore Complete Store Catalog</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* Real Life Scale & Artisan Colorway Gallery */}
            <ScaleGallery
              onViewProduct={(p) => setSelectedProduct(p)}
              products={PRODUCTS}
            />

            {/* Trust Markers Section */}
            <TrustSection />

            {/* Custom Order Spotlight */}
            <CustomOrderSection />

            {/* Heritage & Artisan Lineage */}
            <AboutSection />

            {/* Contact & Map */}
            <ContactSection />
          </>
        )}

        {activeTab === 'shop' && (
          <ShopView
            products={PRODUCTS}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onViewProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {activeTab === 'custom' && (
          <div className="py-8">
            <CustomOrderSection />
            <TrustSection />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="py-8">
            <AboutSection />
            <TrustSection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="py-8">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsAppButton />

      {/* Modals & Overlays */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <CartDrawer onOrderSent={handleOrderSent} />

      <OrderConfirmationModal
        orderRef={confirmationData?.orderRef || null}
        customerDetails={confirmationData?.details || null}
        totalAmount={confirmationData?.totalAmount || 0}
        onClose={() => setConfirmationData(null)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

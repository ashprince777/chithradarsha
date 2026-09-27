import React, { useState } from 'react';
import { X, ShoppingBag, MessageCircle, Check, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { NettipattamVisual } from './NettipattamVisual';
import { openWhatsApp, generateProductEnquiryWhatsApp } from '../config';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWhatsAppOrderDirectly = () => {
    const msg = generateProductEnquiryWhatsApp(product.name, product.price * quantity, product.size);
    openWhatsApp(msg);
  };

  const getVisualType = () => {
    if (product.slug.includes('nilavilakku')) return 'nilavilakku';
    if (product.slug.includes('kathakali')) return 'kathakali';
    if (product.slug.includes('aranmula')) return 'aranmula';
    if (product.category === 'Mini Nettipattam') return 'mini';
    if (product.slug.includes('gold')) return 'gold';
    if (product.slug.includes('wedding')) return 'wedding';
    return 'traditional';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#FAF6EE] rounded-2xl border border-[#C5A059]/30 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gold accent line */}
        <div className="kasavu-border-bottom" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#FAF6EE]/80 hover:bg-[#F2EADB] text-[#58111A] transition-colors focus-visible:outline-2 focus-visible:outline-[#C5A059]"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gallery Column */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-b from-[#FAF6EE] to-[#F2EADB] border border-[#C5A059]/30 shadow-inner flex items-center justify-center">
                <NettipattamVisual
                  type={getVisualType()}
                  imageUrl={product.images[activeImageIndex] || product.images[0]}
                  altText={product.name}
                  className={`w-full h-full ${
                    (product.images[activeImageIndex] || product.images[0])?.endsWith('.svg')
                      ? 'object-contain p-4'
                      : 'object-cover'
                  }`}
                />
              </div>

              {/* Thumbnails if multiple images */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 bg-[#FAF6EE] transition-all ${
                        activeImageIndex === idx ? 'border-[#6B1724] ring-1 ring-[#6B1724]' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${idx + 1}`}
                        className={`w-full h-full ${img.endsWith('.svg') ? 'object-contain p-1' : 'object-cover'}`}
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Artisan Note */}
              {product.artisanNote && (
                <div className="p-4 bg-[#F2EADB] rounded-xl border border-[#C5A059]/25 text-xs text-[#2C1810]/80 italic flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#9B782B] shrink-0 mt-0.5" />
                  <span>&ldquo;{product.artisanNote}&rdquo;</span>
                </div>
              )}
            </div>

            {/* Product Details & Purchase Module */}
            <div className="flex flex-col justify-between space-y-6">
              <div>
                {/* Category & Status */}
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B782B] mb-2">
                  <span>{product.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-700">{product.availability}</span>
                </div>

                {/* Title */}
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#58111A] leading-tight">
                  {product.name}
                </h2>

                {/* Price Display */}
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-[#2C1810] font-sans tabular-nums">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-[#2C1810]/40 line-through tabular-nums">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  <span className="text-xs text-[#9B782B] font-medium bg-[#F2EADB] px-2 py-0.5 rounded">
                    Tax included
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-[#2C1810]/80 leading-relaxed">
                  {product.description}
                </p>

                {/* Specifications Key-Value List */}
                <div className="mt-6 border-t border-b border-[#C5A059]/20 py-4 space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#2C1810]/60">Size:</span>
                    <span className="font-semibold text-[#2C1810] text-right">{product.size}</span>
                  </div>
                  {product.dimensions && (
                    <div className="flex justify-between">
                      <span className="text-[#2C1810]/60">Dimensions:</span>
                      <span className="font-semibold text-[#2C1810] text-right">{product.dimensions}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-[#2C1810]/60">Material:</span>
                    <span className="font-semibold text-[#2C1810] text-right">{product.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2C1810]/60">Weight:</span>
                    <span className="font-semibold text-[#2C1810] text-right">{product.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2C1810]/60">Availability:</span>
                    <span className="font-semibold text-emerald-700 text-right">{product.availability}</span>
                  </div>
                </div>

                {/* Trust mini-badges */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-[#2C1810]/70">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#9B782B]" />
                    <span>Authentic Kerala Craft</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#9B782B]" />
                    <span>Safe All-India Shipping</span>
                  </div>
                </div>
              </div>

              {/* Purchase Controls */}
              <div className="space-y-4 pt-4 border-t border-[#C5A059]/20">
                {/* Quantity selector */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-[#2C1810]">Quantity:</span>
                  <div className="flex items-center border border-[#C5A059]/40 rounded-lg bg-white overflow-hidden">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-1.5 hover:bg-[#F2EADB] transition-colors text-base font-bold text-[#58111A]"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-4 py-1.5 text-sm font-semibold tabular-nums min-w-[36px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3 py-1.5 hover:bg-[#F2EADB] transition-colors text-base font-bold text-[#58111A]"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Primary CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#6B1724] hover:bg-[#58111A] text-white font-semibold transition-all shadow-md active:scale-98"
                  >
                    {added ? (
                      <>
                        <Check className="w-5 h-5 text-emerald-300" />
                        Added to Cart!
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-5 h-5" />
                        Add to Cart (₹{(product.price * quantity).toLocaleString('en-IN')})
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleWhatsAppOrderDirectly}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#1F6E3B] hover:bg-[#16552D] text-white font-semibold transition-all shadow-md active:scale-98"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Order Directly on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

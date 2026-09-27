import React from 'react';
import { ShoppingBag, Eye, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { NettipattamVisual } from './NettipattamVisual';
import { openWhatsApp, generateProductEnquiryWhatsApp } from '../config';

interface ProductCardProps {
  product: Product;
  onViewProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewProduct }) => {
  const { addToCart } = useCart();

  const handleWhatsAppEnquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = generateProductEnquiryWhatsApp(product.name, product.price, product.size);
    openWhatsApp(msg);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  // Determine visual type for fallback
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
    <div
      onClick={() => onViewProduct(product)}
      className="group bg-[#FDFBF7] rounded-xl border border-[#C5A059]/20 hover:border-[#C5A059]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Visual Image Container with fixed aspect ratio */}
      <div className="relative aspect-[4/3] bg-gradient-to-b from-[#FAF6EE] to-[#F2EADB] overflow-hidden flex items-center justify-center">
        <NettipattamVisual
          type={getVisualType()}
          imageUrl={product.images[0]}
          altText={product.name}
          className={`w-full h-full ${
            product.images[0]?.endsWith('.svg') ? 'object-contain p-2.5' : 'object-cover'
          } transition-transform duration-500 group-hover:scale-105`}
        />

        {/* Quick action overlay buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={handleWhatsAppEnquiry}
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            title="Enquire on WhatsApp"
            className="w-9 h-9 rounded-full bg-[#1F6E3B] text-white flex items-center justify-center shadow-md hover:bg-[#16552D] transition-transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewProduct(product);
            }}
            aria-label={`Quick view ${product.name}`}
            title="View Details"
            className="w-9 h-9 rounded-full bg-[#FAF6EE] text-[#58111A] flex items-center justify-center shadow-md hover:bg-white transition-transform active:scale-95"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Quiet availability marker (No pill badge spam) */}
        <div className="absolute bottom-2 left-3 bg-[#1F110B]/80 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] text-[#FDFBF7] font-medium tracking-wide">
          <span
            className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${
              product.availability === 'In Stock' ? 'bg-emerald-400' : 'bg-amber-400'
            }`}
          />
          {product.availability}
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Size Unboxed Text */}
          <div className="flex items-center gap-2 text-xs text-[#9B782B] font-medium tracking-wide uppercase mb-1.5">
            <span>{product.category}</span>
            <span aria-hidden="true">·</span>
            <span>{product.size.split('(')[0]}</span>
          </div>

          {/* Product Title */}
          <h3 className="font-display text-base sm:text-lg font-bold text-[#58111A] leading-snug group-hover:text-[#881E2F] transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="mt-1 text-xs sm:text-sm text-[#2C1810]/70 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price and CTA row */}
        <div className="mt-4 pt-3 border-t border-[#C5A059]/15 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-xl font-bold text-[#2C1810] font-sans tabular-nums">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#2C1810]/40 line-through tabular-nums">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <span className="text-[10px] text-[#2C1810]/60 block">Incl. traditional packing</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#6B1724] hover:bg-[#58111A] rounded-lg transition-colors shadow-xs active:scale-95 whitespace-nowrap"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

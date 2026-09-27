import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { NettipattamVisual } from './NettipattamVisual';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [products, query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-[#FAF6EE] rounded-2xl border border-[#C5A059]/40 shadow-2xl overflow-hidden mt-12 sm:mt-16 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="kasavu-border-bottom" />

        {/* Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#C5A059]/20 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#9B782B] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Nettipattam, Nilavilakku, temple decor..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#2C1810] placeholder:text-[#2C1810]/40 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-700 p-1"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#6B1724] hover:underline px-2 py-1"
          >
            Cancel
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto p-4 sm:p-5">
          {!query.trim() ? (
            <div className="text-center py-8 text-xs text-[#2C1810]/60 space-y-2">
              <p>Type to search across all Kerala traditional handicrafts...</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Nettipattam', 'Mini Nettipattam', 'Nilavilakku', 'Kathakali', 'Gold'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 bg-white hover:bg-[#F2EADB] rounded-md border border-[#C5A059]/30 text-xs font-medium text-[#58111A]"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-[#9B782B] font-bold block mb-2">
                Found {results.length} items
              </span>
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="p-3 bg-white hover:bg-[#F2EADB] rounded-xl border border-[#C5A059]/20 flex items-center justify-between gap-4 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-12 h-12 rounded-lg bg-[#2B060C] overflow-hidden shrink-0 border border-[#C5A059]/20">
                      <NettipattamVisual
                        imageUrl={product.images[0]}
                        altText={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display text-sm font-bold text-[#58111A] truncate">
                        {product.name}
                      </h4>
                      <span className="text-xs text-[#2C1810]/60 block truncate">
                        {product.category} · {product.size}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-semibold text-sm text-[#2C1810] tabular-nums">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#9B782B]" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-xs text-[#2C1810]/60">
              No products found matching &ldquo;{query}&rdquo;.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

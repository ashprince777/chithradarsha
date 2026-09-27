import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, X, Sparkles } from 'lucide-react';
import { Product, ProductCategory, SortOption } from '../types';
import { CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';

interface ShopViewProps {
  products: Product[];
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  onViewProduct: (product: Product) => void;
  initialSearchQuery?: string;
}

export const ShopView: React.FC<ShopViewProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onViewProduct,
  initialSearchQuery = '',
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [maxPrice, setMaxPrice] = useState<number>(15000);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  // Maximum price in current catalog
  const highestPrice = useMemo(() => {
    return Math.max(...products.map((p) => p.price), 15000);
  }, [products]);

  // Filter & Sort
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategory !== 'All' && p.category !== selectedCategory) {
          return false;
        }

        // Price filter
        if (p.price > maxPrice) {
          return false;
        }

        // Search Query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchesName = p.name.toLowerCase().includes(q);
          const matchesDesc = p.description.toLowerCase().includes(q);
          const matchesMat = p.material.toLowerCase().includes(q);
          const matchesCat = p.category.toLowerCase().includes(q);
          return matchesName || matchesDesc || matchesMat || matchesCat;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'newest') return (b.originalPrice || b.price) - (a.originalPrice || a.price);
        // Default popular / featured
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, selectedCategory, maxPrice, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    onSelectCategory('All');
    setMaxPrice(highestPrice);
    setSortBy('popular');
  };

  return (
    <section className="py-8 sm:py-12 bg-[#FAF6EE] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#9B782B] block">
            Handicraft Collection
          </span>
          <h1 className="mt-1 font-display text-3xl sm:text-4xl font-extrabold text-[#58111A]">
            Kerala Nettipattam & Traditional Decor
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#2C1810]/70">
            Browse our full catalog of festival caparisons, mini wall hangings, brass temple lamps, and bespoke master pieces.
          </p>
        </div>

        {/* Filter & Search Bar Toolbar */}
        <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-[#C5A059]/25 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#9B782B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Nettipattam, Nilavilakku, Kathakali, wall decor..."
                className="w-full pl-10 pr-9 py-2.5 bg-white text-xs sm:text-sm rounded-xl border border-[#C5A059]/30 focus:outline-hidden focus:ring-2 focus:ring-[#6B1724]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort & Filter Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Sort By Dropdown */}
              <div className="relative flex-1 sm:flex-none">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full sm:w-auto appearance-none pl-3 pr-8 py-2.5 bg-white text-xs sm:text-sm font-medium text-[#2C1810] rounded-xl border border-[#C5A059]/30 focus:outline-hidden focus:ring-2 focus:ring-[#6B1724] cursor-pointer"
                >
                  <option value="popular">Sort: Popular / Featured</option>
                  <option value="price-asc">Sort: Price Low to High</option>
                  <option value="price-desc">Sort: Price High to Low</option>
                  <option value="newest">Sort: New Arrivals</option>
                </select>
                <ArrowUpDown className="w-3.5 h-3.5 text-[#9B782B] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Price Filter Toggle Button */}
              <button
                onClick={() => setFilterDrawerOpen(!filterDrawerOpen)}
                className={`flex items-center gap-1.5 px-3 py-2.5 text-xs sm:text-sm font-medium rounded-xl border transition-colors ${
                  maxPrice < highestPrice || filterDrawerOpen
                    ? 'bg-[#6B1724] text-white border-[#6B1724]'
                    : 'bg-white text-[#2C1810] border-[#C5A059]/30 hover:bg-[#F2EADB]'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters {maxPrice < highestPrice ? '(1)' : ''}</span>
              </button>
            </div>
          </div>

          {/* Interactive Category Segmented Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#6B1724] text-white shadow-xs'
                    : 'bg-white text-[#2C1810]/80 hover:bg-[#F2EADB] border border-[#C5A059]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Collapsible Price Filter Tray */}
          {filterDrawerOpen && (
            <div className="pt-3 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in slide-in-from-top-2 duration-200">
              <div className="w-full sm:max-w-md">
                <div className="flex justify-between text-xs text-[#2C1810]/80 mb-1">
                  <span>Price Range:</span>
                  <span className="font-bold text-[#58111A] tabular-nums">
                    Up to ₹{maxPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max={highestPrice}
                  step="500"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#6B1724] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#2C1810]/50 mt-1">
                  <span>₹1,000</span>
                  <span>₹{highestPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={handleResetFilters}
                className="text-xs text-[#6B1724] hover:underline font-medium self-end sm:self-center"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>

        {/* Results Counter Bar */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#2C1810]/70">
          <span>
            Showing <strong className="text-[#58111A]">{filteredProducts.length}</strong> creations
            {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
          </span>
          {(selectedCategory !== 'All' || searchQuery || maxPrice < highestPrice) && (
            <button
              onClick={handleResetFilters}
              className="text-[#6B1724] hover:underline font-semibold"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Product Grid: Desktop 4, Tablet 2-3, Mobile 2 */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewProduct={onViewProduct}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-[#FDFBF7] rounded-2xl border border-[#C5A059]/30 p-8 space-y-4">
            <Sparkles className="w-12 h-12 text-[#9B782B] mx-auto opacity-50" />
            <h3 className="font-display text-xl font-bold text-[#58111A]">
              No Products Match Your Filter
            </h3>
            <p className="text-xs sm:text-sm text-[#2C1810]/70 max-w-sm mx-auto">
              We couldn&apos;t find any items matching your selected criteria. Try adjusting your search or price range.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-xl bg-[#6B1724] hover:bg-[#58111A] text-white text-xs font-semibold shadow-sm transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

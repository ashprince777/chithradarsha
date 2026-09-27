export type ProductCategory = 
  | "All"
  | "Nettipattam"
  | "Mini Nettipattam"
  | "Wall Decor"
  | "Wedding Decor"
  | "Temple Decor"
  | "Custom Orders";

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  images: string[];
  material: string;
  size: string;
  dimensions?: string;
  weight: string;
  availability: "In Stock" | "Made to Order" | "Limited Edition";
  featured?: boolean;
  isBestseller?: boolean;
  specifications: Record<string, string>;
  artisanNote?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface CustomerDetails {
  fullName: string;
  phoneNumber: string;
  location: string;
  deliveryAddress: string;
  notes?: string;
}

export type SortOption = "popular" | "price-asc" | "price-desc" | "newest";

export interface FilterState {
  category: ProductCategory;
  searchQuery: string;
  maxPrice: number;
  sortBy: SortOption;
  availabilityOnly?: boolean;
}

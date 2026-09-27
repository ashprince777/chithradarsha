# Aanachantham (ആനച്ചന്തം) - Kerala Traditional Nettipattam & Handicrafts

A modern, mobile-first e-commerce website for authentic handcrafted Kerala Nettipattams (elephant forehead ornaments / caparisons) and traditional decorative products, featuring direct WhatsApp order enquiries without online payment gateways.

---

## 1. Project Structure

```
├── /index.html                 # HTML entry point with SEO, Schema.org JSON-LD, fonts & metadata
├── /metadata.json              # App metadata
├── /package.json               # Dependencies and build scripts
├── /src
│   ├── /components
│   │   ├── AboutSection.tsx    # Thrissur artisan heritage and cultural significance
│   │   ├── CartDrawer.tsx      # Slide-out shopping bag & customer checkout form
│   │   ├── ContactSection.tsx  # Studio location, phone, email, and interactive map
│   │   ├── CustomOrderSection.tsx # Bespoke Nettipattam consultation section
│   │   ├── FloatingWhatsAppButton.tsx # Fixed bottom-right quick chat trigger
│   │   ├── Footer.tsx          # Heritage footer with Kasavu border
│   │   ├── HeroSection.tsx     # Hero banner and featured category shortcuts
│   │   ├── Navbar.tsx          # 3-Zone top navigation with search, cart, and WhatsApp
│   │   ├── NettipattamVisual.tsx # High-fidelity authentic Kerala artwork renderer
│   │   ├── OrderConfirmationModal.tsx # Post-order dispatch confirmation & receipt
│   │   ├── ProductCard.tsx     # Responsive product card with unboxed metadata
│   │   ├── ProductDetailModal.tsx # Full product gallery, specs & WhatsApp order CTA
│   │   ├── SearchModal.tsx     # Instant modal search across all products
│   │   ├── ShopView.tsx        # Product catalog with search, categories, and price filter
│   │   └── TrustSection.tsx    # 5 Key authenticity guarantees
│   ├── /context
│   │   └── CartContext.tsx     # Shopping cart state with localStorage persistence
│   ├── /data
│   │   └── products.ts         # Centralized product catalog (12+ products)
│   ├── App.tsx                 # Main application view coordinator
│   ├── config.ts               # WhatsApp phone number and business settings
│   ├── index.css               # Tailwind CSS v4 design tokens and Kerala Kasavu styles
│   ├── main.tsx                # Application root mount
│   └── types.ts                # TypeScript interfaces
```

---

## 2. How to Change WhatsApp Number

Open `src/config.ts` and change `WHATSAPP_NUMBER`:

```typescript
// Replace with your business WhatsApp number (Country code + 10-digit number, no '+')
export const WHATSAPP_NUMBER = "919847012345";
```

All order dispatches, single-product enquiries, custom consultations, and floating chat buttons will automatically route to this number.

---

## 3. How to Add or Edit Products

All product data is centralized in `src/data/products.ts`.

### To Add a Product:
Paste a new item object into the `PRODUCTS` array:

```typescript
{
  id: "np-013",
  name: "Royal 6ft Temple Nettipattam",
  slug: "royal-6ft-temple-nettipattam",
  price: 14999,
  originalPrice: 17500,
  category: "Temple Decor", // Allowed: "Nettipattam" | "Mini Nettipattam" | "Wall Decor" | "Wedding Decor" | "Temple Decor" | "Custom Orders"
  shortDescription: "Grand 6 ft authentic festival caparison with 24k gold luster.",
  description: "Detailed description of craftsmanship, heritage, and placement...",
  images: ["https://your-image-url.com/photo.jpg"],
  material: "Brass alloy, royal velvet, natural silk wool tassels",
  size: "6 Feet",
  dimensions: "180 cm (H) x 95 cm (W)",
  weight: "5.5 kg",
  availability: "In Stock", // "In Stock" | "Made to Order" | "Limited Edition"
  featured: true,
  specifications: {
    "Origin": "Thrissur, Kerala",
    "Motifs": "Surya & Chandran"
  }
}
```

### To Change a Price:
Change the `price: 4999` field in `src/data/products.ts`.

---

## 4. How to Change Product Images

1. Place image files in `/public/images/` or upload them to a CDN.
2. In `src/data/products.ts`, update the `images` array for that product:
   ```typescript
   images: [
     "/images/my-nettipattam-front.jpg",
     "/images/my-nettipattam-angle.jpg"
   ],
   ```
3. If an image URL is unavailable or fails to load, `NettipattamVisual.tsx` automatically falls back to an authentic handcrafted vector SVG of the Nettipattam, preventing broken image frames.

---

## 5. How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open your browser at `http://localhost:3000` (or `http://localhost:5173`).

---

## 6. How to Deploy to Vercel

1. Push your code to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Vercel automatically detects Vite:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be live on an SSL HTTPS URL in ~30 seconds.

---

## 7. How to Connect a Custom Domain

1. In your Vercel Dashboard, go to **Project Settings** > **Domains**.
2. Enter your custom domain (e.g., `aanachantham.com` or `keralanettipattam.com`).
3. Add the DNS records provided by Vercel in your domain registrar (GoDaddy, Namecheap, Google Domains):
   - **Type**: `A`, **Name**: `@`, **Value**: `76.76.21.21`
   - **Type**: `CNAME`, **Name**: `www`, **Value**: `cname.vercel-dns.com`
4. SSL certificates are provisioned automatically.

import { Product } from '../types';

/**
 * =========================================================================
 * PRODUCT CATALOG MANAGEMENT GUIDE (FOR ADMIN / STORE OWNER)
 * =========================================================================
 * 
 * 1. HOW TO ADD A NEW PRODUCT:
 *    Copy an existing product block below, paste it at the end of the array,
 *    and update its `id`, `name`, `slug`, `price`, `category`, and details.
 * 
 * 2. HOW TO DELETE A PRODUCT:
 *    Simply remove or comment out the entire product block `{ ... }`.
 * 
 * 3. HOW TO CHANGE PRICES:
 *    Update the `price` field (numerical value in INR, e.g., 4999).
 *    Optionally update `originalPrice` for a strikethrough comparison.
 * 
 * 4. HOW TO CHANGE IMAGES:
 *    Replace the URLs in the `images: [...]` array with your actual photo URLs
 *    or local assets placed in `/images/`.
 * 
 * 5. HOW TO CHANGE CATEGORIES:
 *    Allowed categories:
 *    "Nettipattam" | "Mini Nettipattam" | "Wall Decor" | "Wedding Decor" | 
 *    "Temple Decor" | "Custom Orders"
 * 
 * 6. HOW TO CHANGE AVAILABILITY:
 *    Set `availability` to: "In Stock" | "Made to Order" | "Limited Edition"
 * =========================================================================
 */

export const PRODUCTS: Product[] = [
  {
    id: "np-001",
    name: "Traditional Grand Nettipattam (Red & Green Wool)",
    slug: "traditional-grand-nettipattam",
    price: 4999,
    originalPrice: 5999,
    category: "Nettipattam",
    shortDescription: "Authentic handcrafted Kerala elephant caparison wall hanging with alternating red and green wool border.",
    description: "Handcrafted by hereditary artisans from Thrissur, Kerala, this traditional Nettipattam is crafted according to strict Vastu and festival proportions. Featuring the central Surya (Sun) motif and Chandran (Crescent Moon) embellished with hundreds of radiant brass-finished studs on a plush deep maroon velvet cloth, trimmed with vibrant alternating red and green woolen tassels.",
    images: [
      "/images/chithradarsha-traditional-3ft.png",
      "/images/chithradarsha-duo-red-blue.png"
    ],
    material: "Traditional brass-coated copper beads, maroon velvet fabric, golden lace, woollen tassels",
    size: "3.5 Feet (Standard Living Room Size)",
    dimensions: "105 cm (H) x 60 cm (W)",
    weight: "2.4 kg",
    availability: "In Stock",
    featured: true,
    isBestseller: true,
    specifications: {
      "Craftsmanship": "100% Hand-assembled by Thrissur master artisans",
      "Central Motifs": "Surya (Sun), Chandran (Crescent) & Ganesha Emblem",
      "Wool Trim": "Alternating Forest Green and Crimson Red woolen puffs",
      "Backing": "High-density foam reinforced velvet with heavy brass hanging hook",
      "Ideal Placement": "Facing the main entrance, living room foyer, or pooja hall",
      "Vastu Significance": "Attracts positive vibrational energy and royal prosperity"
    },
    artisanNote: "Each brass bead is hand-punched and sewn using time-tested methods unchanged for over 150 years."
  },
  {
    id: "np-002",
    name: "5 Ft Monumental Temple Scale Nettipattam",
    slug: "monumental-temple-scale-nettipattam",
    price: 12999,
    originalPrice: 14999,
    category: "Nettipattam",
    shortDescription: "Monumental 5-foot handcrafted Kerala caparison on presentation stand for grand living rooms & temples.",
    description: "Our grandest ceremonial festival piece. Standing an impressive 5 feet tall, this monumental Nettipattam is crafted according to strict temple festival proportions. Featuring extensive hand-punched brass studs, Surya and Chandran crescents, and a triple-layered wool fringe of crimson, white, and emerald green on rich maroon velvet.",
    images: [
      "/images/chithradarsha-grand-5ft.png",
      "/images/chithradarsha-multicolor-4ft.png"
    ],
    material: "Pure brass-coated alloy, heavy maroon velvet backing, multi-layered woollen fringe, brass bell finial",
    size: "5 Feet Height (Grand Festival / Temple Scale)",
    dimensions: "150 cm (H) x 80 cm (W)",
    weight: "5.8 kg",
    availability: "In Stock",
    featured: true,
    isBestseller: true,
    specifications: {
      "Height": "5 Feet (150 cm total drop)",
      "Woolen Border": "Triple layered Maroon, White & Emerald Green fringe",
      "Mounting": "Reinforced heavy brass wall bracket + optional floor tripod stand",
      "Auspicious Note": "Exact festival elephant proportion for grand halls and ceremonies"
    },
    artisanNote: "Mastercrafted by hereditary artisans for luxury heritage estates, duplex foyers, and temple celebrations."
  },
  {
    id: "np-003",
    name: "4.5 Feet Multicolor Festival Ceremonial Nettipattam",
    slug: "multicolor-festival-ceremonial-nettipattam",
    price: 7499,
    originalPrice: 8999,
    category: "Nettipattam",
    shortDescription: "Majestic 4.5 ft ceremonial caparison with vibrant 5-color woolen border and radiant gold medallions.",
    description: "An extraordinary masterwork combining traditional Kerala brass metalcraft with a vibrant five-tier woolen halo (Crimson Red, Saffron Yellow, Royal Blue, Pure White, and Forest Green). Embellished with three convex sun domes, central Ganesha emblem, and an ornate multi-color bell tassel.",
    images: [
      "/images/chithradarsha-multicolor-4ft.png",
      "/images/chithradarsha-traditional-3ft.png"
    ],
    material: "Brass-coated alloy studs, 5-color hand-spun wool, crimson velvet, ornate brass bell tassel",
    size: "4.5 Feet Height (Large Living Room & Mandap Scale)",
    dimensions: "135 cm (H) x 70 cm (W)",
    weight: "3.6 kg",
    availability: "In Stock",
    featured: true,
    isBestseller: true,
    specifications: {
      "Border": "Five-color ceremonial woolen halo (Red, Yellow, Blue, White, Green)",
      "Caparison Body": "Dense golden brass beadwork with 3 solar Kumbham domes",
      "Tassel": "Multi-colored hanging tassel with brass cone bell finial",
      "Placement": "Grand living room wall, mandap backdrop, or luxury villa foyer"
    },
    artisanNote: "The peacock feather is deeply revered in Kerala tradition as an emblem of beauty, purity, and spiritual protection."
  },
  {
    id: "np-004",
    name: "Kerala Alavattam Heritage Mirror Wall Medallion",
    slug: "kerala-alavattam-mirror-medallion",
    price: 3499,
    originalPrice: 4299,
    category: "Wall Decor",
    shortDescription: "Ceremonial circular mirror wall art with braided orange, green & red wool puffs and glass mosaic mandala.",
    description: "An exquisite traditional Kerala circular mirror wall hanging inspired by temple festival Aalavattams. Features a concentric perimeter of fluffy, hand-braided wool pom-poms in repeating auspicious trinity colors (saffron-orange, forest green, and scarlet red) surrounding an intricate radial mandala of reflective glass mirrors and colorful jewel center beads.",
    images: [
      "/images/alavattam-mirror-medallion.svg"
    ],
    material: "Reflective glass mirrors, hand-spun wool pom-poms, colored jewel stones, brass bell finial",
    size: "18 Inch Diameter + 10 Inch Tassel Drop",
    dimensions: "45 cm Diameter (70 cm Total Drop)",
    weight: "1.4 kg",
    availability: "In Stock",
    featured: true,
    isBestseller: true,
    specifications: {
      "Mirror Core": "Central polished convex glass mirror with geometric facets",
      "Woolen Halo": "Tri-color fluffy hand-braided wool pom-poms (Orange, Green, Red)",
      "Bottom Accent": "Brass bell cone with dual-tone emerald & scarlet hanging tassel",
      "Lighting Effect": "Catches ambient room light and reflects warm festive sparkles"
    },
    artisanNote: "Each small mirror is individually cut by hand and embedded using natural resin adhesive."
  },
  {
    id: "np-005",
    name: "2.5 Feet Royal Living Room Nettipattam Duo",
    slug: "royal-living-room-nettipattam-duo",
    price: 3999,
    originalPrice: 4899,
    category: "Nettipattam",
    shortDescription: "Proportioned 2.5 ft caparison pair (Red/Green & Blue/Purple) handcrafted for modern apartment living.",
    description: "Meticulously proportioned for contemporary modern apartments, villas, and entryway foyers. Features exact dimensions: 2.5 Feet (30 inches) total hanging height. Showcasing our popular dual colorways: classic Red-Green trim alongside majestic Royal Blue-Purple trim with radiant brass studs.",
    images: [
      "/images/chithradarsha-duo-red-blue.png"
    ],
    material: "High-grade brass alloy studs, royal velvet, wool fringe trim",
    size: "2.5 Feet (30 Inches Height x 15 Inches Width)",
    dimensions: "76 cm (H) x 38 cm (W)",
    weight: "1.9 kg",
    availability: "In Stock",
    featured: true,
    specifications: {
      "Total Height": "2.5 Feet (30 inches / 76 cm)",
      "Body Height": "2 Feet (24 inches / 61 cm)",
      "Width": "1.25 Feet (15 inches / 38 cm)",
      "Available Colorways": "Classic Red/Green or Royal Blue/Purple",
      "Top Bar": "Plush velvet with golden rosette studs"
    },
    artisanNote: "Ideal size for standard 8 to 9 foot apartment ceilings, fitting gracefully between wall sconces."
  },
  {
    id: "np-006",
    name: "Custom Bespoke Nettipattam Commission",
    slug: "custom-handmade-nettipattam",
    price: 12999,
    category: "Custom Orders",
    shortDescription: "Bespoke commission tailored to your exact architectural dimensions and family emblem.",
    description: "Collaborate directly with our senior master artisans to design a one-of-a-kind royal Nettipattam. Choose custom lengths from 3 ft to 9 ft, personalized brass family crests or temple inscriptions, and specific velvet tones (Crimson, Deep Maroon, Forest Green, or Midnight Navy).",
    images: [
      "/images/chithradarsha-grand-5ft.png",
      "/images/chithradarsha-multicolor-4ft.png",
      "/images/chithradarsha-traditional-3ft.png"
    ],
    material: "Custom specified: Pure Brass, Copper, German Silver, or Gold plated",
    size: "3 ft to 9 ft (Fully Customizable)",
    weight: "Varies by dimension (approx. 4 - 12 kg)",
    availability: "Made to Order",
    featured: true,
    specifications: {
      "Turnaround Time": "7 to 14 days handcrafted to order",
      "Consultation": "Includes 1-on-1 WhatsApp video consultation with master craftsman",
      "Certificate": "Accompanied by Certificate of Authenticity and Vastu layout guide"
    }
  },
  {
    id: "np-007",
    name: "Mini Nettipattam Compact Duo (Car & Pooja Room)",
    slug: "mini-nettipattam",
    price: 1499,
    originalPrice: 1999,
    category: "Mini Nettipattam",
    shortDescription: "Compact 1.5 ft auspicious ornament pair ideal for car dashboards, pooja rooms, and gifting.",
    description: "A cherished miniature reproduction of the majestic Kerala Nettipattam. Perfectly proportioned for car interiors, pooja room mandirs, work desks, and festive housewarming gifts. Retains all authentic iconography in a compact, lightweight form.",
    images: [
      "/images/chithradarsha-mini-duo.png"
    ],
    material: "Engraved brass alloy studs, crimson and royal blue velvet, dual-tone hanging cord",
    size: "1.5 Feet (Compact / Car Decor)",
    dimensions: "45 cm (H) x 24 cm (W)",
    weight: "480 grams",
    availability: "In Stock",
    featured: false,
    specifications: {
      "Mounting": "Braided golden loop for hanging + suction pad included",
      "Durability": "UV-resistant velvet that withstands sunlight in vehicles",
      "Packaging": "Delivered in a rigid heritage presentation gift box"
    }
  },
  {
    id: "np-008",
    name: "Traditional Brass Nilavilakku",
    slug: "traditional-brass-nilavilakku",
    price: 3499,
    originalPrice: 4299,
    category: "Temple Decor",
    shortDescription: "Authentic heavy-cast Kerala brass 5-wick standing lamp with traditional Hamsam bird top.",
    description: "The sacred Nilavilakku is the heart of every Kerala home and auspicious ritual. Cast in heavy bell metal and polished to a rich antique brass luster, it features 5 wick grooves and an intricately chiseled Hamsam (sacred swan) finial.",
    images: [
      "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=800&q=80"
    ],
    material: "100% Solid Cast Brass (Bell Metal alloy)",
    size: "24 Inches (Standing Height)",
    dimensions: "60 cm (H) x 22 cm (Base Diameter)",
    weight: "3.6 kg",
    availability: "In Stock",
    featured: false,
    specifications: {
      "Wick Capacity": "5 wicks for Pancha Mukhi light",
      "Disassembly": "Screw-modular 3 piece design for effortless cleaning and packing",
      "Finish": "Traditional mirror-buffed golden brass"
    }
  },
  {
    id: "np-009",
    name: "Kathakali Mukham Wall Sculpture",
    slug: "kathakali-mukham-wall-sculpture",
    price: 2899,
    originalPrice: 3499,
    category: "Wall Decor",
    shortDescription: "Hand-painted wood & brass Kathakali Paccha face mask celebrating Kerala's classical dance.",
    description: "A tribute to Kerala's globally celebrated dance-drama. Meticulously hand-carved in seasoned teak and jackfruit wood, then hand-painted in traditional mineral pigments depicting the heroic 'Paccha' character with ornate golden crown (Kireedam).",
    images: [
      "https://images.unsplash.com/photo-1599818817758-a4005b61b96a?auto=format&fit=crop&w=800&q=80"
    ],
    material: "Solid wood, natural eco-friendly paints, brass ornament inlays",
    size: "18 Inches",
    dimensions: "45 cm (H) x 32 cm (W)",
    weight: "1.8 kg",
    availability: "In Stock",
    featured: false,
    specifications: {
      "Character": "Paccha (Virtuous King / Deity)",
      "Colors": "Malachite green, vermilion, white chutti ridge",
      "Mounting": "Wall flush hanging bracket included"
    }
  },
  {
    id: "np-010",
    name: "Aranmula Kannadi Metal Mirror",
    slug: "aranmula-kannadi-metal-mirror",
    price: 6499,
    originalPrice: 7499,
    category: "Wall Decor",
    shortDescription: "GI-tagged legendary sacred metal alloy front-reflecting mirror with peacock handle.",
    description: "Unlike ordinary glass mirrors, the Aranmula Kannadi is a front-surface reflecting mirror crafted from a secret sacred alloy of copper and tin by a single family guild in Aranmula village. One of the 8 auspicious items (Ashtamangalyam) of Kerala.",
    images: [
      "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=800&q=80"
    ],
    material: "Sacred bell-metal alloy (secret tin-copper formulation) with polished brass frame",
    size: "3 Inch Mirror Diameter, 9 Inch Total Length",
    dimensions: "23 cm (H) x 12 cm (W)",
    weight: "850 grams",
    availability: "Limited Edition",
    featured: false,
    specifications: {
      "Reflection": "Zero secondary refraction (Front-surface reflection)",
      "Authentication": "Comes with government GI tag seal of origin",
      "Maintenance": "Includes velvet cleaning pouch and special brass polishing oil"
    }
  },
  {
    id: "np-011",
    name: "Rosewood Elephant with Nettipattam",
    slug: "rosewood-elephant-nettipattam",
    price: 4299,
    originalPrice: 4999,
    category: "Wall Decor",
    shortDescription: "Hand-carved single-block rosewood elephant adorned with authentic micro-Nettipattam.",
    description: "Symbolizing dignity, strength, and majestic Kerala grace. Carved from a single solid block of seasoned Kerala rosewood with rich dark grain, adorned with a handcrafted miniature brass Nettipattam and faux ivory tusks.",
    images: [
      "https://images.unsplash.com/photo-1610444365319-33513364f9cb?auto=format&fit=crop&w=800&q=80"
    ],
    material: "Seasoned Kerala Rosewood, brass micro-caparison, acrylic tusks",
    size: "10 Inches Height",
    dimensions: "25 cm (H) x 28 cm (L) x 14 cm (W)",
    weight: "2.9 kg",
    availability: "In Stock",
    featured: false,
    specifications: {
      "Wood Grain": "Natural dark chocolate rosewood with hand-waxed buffing",
      "Detailing": "Full trunk curvature with festival caparison and side chains",
      "Placement": "Ideal for credenza, bookshelf, or executive office desk"
    }
  },
  {
    id: "np-012",
    name: "Kasavu Toran Door Nettipattam",
    slug: "kasavu-toran-door-nettipattam",
    price: 1999,
    originalPrice: 2499,
    category: "Mini Nettipattam",
    shortDescription: "Festive Kerala golden Kasavu entrance doorway toran with hanging mini caparisons.",
    description: "Welcome guests with timeless Kerala splendor. Designed to be hung across main doorways and pooja entry arches, combining genuine Kerala Kasavu gold border weave with five hanging mini Nettipattam charms and brass bells.",
    images: [
      "/images/chithradarsha-mini-duo.png"
    ],
    material: "Gold Kasavu weave fabric, brass charms, tiny brass chiming bells",
    size: "3.2 Feet Width",
    dimensions: "98 cm (W) x 30 cm (Drop length)",
    weight: "620 grams",
    availability: "In Stock",
    featured: false,
    specifications: {
      "Drop Ornaments": "5 miniature Nettipattam pendants with red velvet accents",
      "Loops": "Reinforced brass corner eyelets for quick door-frame hanging",
      "Occasions": "Vishu, Onam, Diwali, weddings, and daily entrance elegance"
    }
  }
];

export const CATEGORIES = [
  "All",
  "Nettipattam",
  "Mini Nettipattam",
  "Wall Decor",
  "Wedding Decor",
  "Temple Decor",
  "Custom Orders"
] as const;

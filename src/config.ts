/**
 * CONFIGURATION FILE FOR AANACHANTHAM KERALA NETTIPATTAM & HANDICRAFTS
 * 
 * -------------------------------------------------------------------------
 * HOW TO CHANGE THE WHATSAPP NUMBER:
 * Change the `WHATSAPP_NUMBER` below to your business WhatsApp number with 
 * country code, without '+' or any dashes.
 * Example for India: "919847012345"
 * -------------------------------------------------------------------------
 */

// Business WhatsApp number (Country code 91 for India + 10-digit number)
export const WHATSAPP_NUMBER = "919847012345";

export const BUSINESS_CONFIG = {
  businessName: "Chithradarsha Artistry",
  tagline: "Authentic Kerala Nettipattam & Traditional Handicrafts",
  phoneDisplay: "+91 98470 12345",
  email: "orders@chithradarsha.com",
  locationDisplay: "Thrissur, Kerala, India - 680001",
  workingHours: "Mon - Sat: 9:00 AM - 8:00 PM IST",
  instagramHandle: "@chithradarsha_artistry",
  instagramUrl: "https://instagram.com",
  freeDeliveryThreshold: 5000,
  currencySymbol: "₹",
};

export interface CustomerDetails {
  fullName: string;
  phoneNumber: string;
  location: string;
  deliveryAddress: string;
  notes?: string;
}

export interface CartItemForMessage {
  name: string;
  price: number;
  quantity: number;
  size?: string;
}

/**
 * Generates a clean, professional WhatsApp order enquiry message.
 */
export function generateWhatsAppOrder(
  cartItems: CartItemForMessage[],
  customer: CustomerDetails,
  orderRef: string
): string {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const productLines = cartItems
    .map(
      (item) =>
        `• Product: ${item.name}${item.size ? ` (${item.size})` : ""}\n  Quantity: ${item.quantity}\n  Price: ₹${item.price.toLocaleString("en-IN")}\n  Subtotal: ₹${(item.price * item.quantity).toLocaleString("en-IN")}`
    )
    .join("\n\n");

  const message = [
    `*NEW ORDER ENQUIRY - ${BUSINESS_CONFIG.businessName.toUpperCase()}*`,
    `Ref: #${orderRef}`,
    ``,
    `Hello, I would like to place an order for the following items:`,
    ``,
    productLines,
    ``,
    `--------------------------------`,
    `*Total Estimated Amount: ₹${subtotal.toLocaleString("en-IN")}*`,
    `--------------------------------`,
    ``,
    `*Customer Information:*`,
    `• Name: ${customer.fullName}`,
    `• Phone: ${customer.phoneNumber}`,
    `• Location: ${customer.location || "Not specified"}`,
    `• Delivery Address: ${customer.deliveryAddress || "Will provide in chat"}`,
    customer.notes ? `• Notes/Custom Specs: ${customer.notes}` : null,
    ``,
    `Please confirm availability, packaging, and delivery charges.`,
    ``,
    `_Order Source: Aanachantham Nettipattam Store_`
  ]
    .filter((line) => line !== null)
    .join("\n");

  return message;
}

/**
 * Generates a direct single-product enquiry message for WhatsApp.
 */
export function generateProductEnquiryWhatsApp(productName: string, price: number, size?: string): string {
  return [
    `Hello, I am interested in ordering:`,
    `*${productName}*`,
    size ? `Size: ${size}` : null,
    `Price: ₹${price.toLocaleString("en-IN")}`,
    ``,
    `Could you please share availability, shipping timeline, and photos?`,
    `_Source: Aanachantham Store_`
  ]
    .filter(Boolean)
    .join("\n");
}

/**
 * Generates custom requirement enquiry for WhatsApp.
 */
export function generateCustomEnquiryWhatsApp(): string {
  return [
    `Hello, I would like to enquire about a custom Nettipattam.`,
    `I am looking for a specific size / design for my home / temple / wedding event.`,
    `Could you please guide me with customization options?`
  ].join("\n");
}

/**
 * Opens WhatsApp with the given message using the standard wa.me deep link.
 */
export function openWhatsApp(message: string, customNumber: string = WHATSAPP_NUMBER): void {
  const encoded = encodeURIComponent(message);
  const cleanNumber = customNumber.replace(/[^0-9]/g, "");
  const url = `https://wa.me/${cleanNumber}?text=${encoded}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

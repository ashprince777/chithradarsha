import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { generateWhatsAppOrder, openWhatsApp, CustomerDetails } from '../config';
import { NettipattamVisual } from './NettipattamVisual';

interface CartDrawerProps {
  onOrderSent: (orderRef: string, details: CustomerDetails, subtotal: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onOrderSent }) => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, subtotal, totalItems } = useCart();

  const [customer, setCustomer] = useState<CustomerDetails>({
    fullName: '',
    phoneNumber: '',
    location: '',
    deliveryAddress: '',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState<{ fullName?: string; phoneNumber?: string }>({});
  const [step, setStep] = useState<'cart' | 'checkout'>('cart');

  if (!isCartOpen) return null;

  const validate = () => {
    const errors: { fullName?: string; phoneNumber?: string } = {};
    if (!customer.fullName.trim()) {
      errors.fullName = 'Please enter your full name';
    }
    if (!customer.phoneNumber.trim()) {
      errors.phoneNumber = 'Please enter your contact phone number';
    } else if (customer.phoneNumber.replace(/[^0-9]/g, '').length < 8) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSendOrderWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate unique order reference
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const orderRef = `NP-${randomNum}`;

    const itemsForMsg = cart.map((item) => ({
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity,
      size: item.selectedSize || item.product.size,
    }));

    const message = generateWhatsAppOrder(itemsForMsg, customer, orderRef);
    openWhatsApp(message);

    // Call parent handler to show order confirmation view
    onOrderSent(orderRef, customer, subtotal);
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-[#FAF6EE] h-full shadow-2xl flex flex-col justify-between border-l border-[#C5A059]/30 relative animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="border-b border-[#C5A059]/20 bg-[#FDFBF7]">
          <div className="kasavu-border-bottom" />
          <div className="p-4 sm:p-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#6B1724]" />
              <h2 className="font-display text-xl font-bold text-[#58111A]">
                {step === 'cart' ? `Shopping Cart (${totalItems})` : 'Customer & Delivery Details'}
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart"
              className="p-2 text-[#58111A] hover:bg-[#F2EADB] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F2EADB] flex items-center justify-center text-[#9B782B]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#58111A]">Your Cart is Empty</h3>
              <p className="text-xs text-[#2C1810]/70 max-w-xs">
                Browse our collection of authentic handcrafted Kerala Nettipattams and traditional decor to add items.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-2.5 rounded-lg bg-[#6B1724] text-white text-xs font-semibold hover:bg-[#58111A] transition-colors"
              >
                Explore Handicrafts
              </button>
            </div>
          ) : step === 'cart' ? (
            /* Step 1: Cart Items List */
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#C5A059]/20 text-xs text-[#2C1810]/60">
                <span>Items in your order</span>
                <button
                  onClick={clearCart}
                  className="text-red-700 hover:text-red-900 font-medium transition-colors"
                >
                  Clear all
                </button>
              </div>

              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3 bg-white rounded-xl border border-[#C5A059]/20 shadow-xs flex gap-3 items-center"
                >
                  {/* Thumbnail */}
                  <div className="w-18 h-18 rounded-lg overflow-hidden bg-[#2B060C] shrink-0 border border-[#C5A059]/20">
                    <NettipattamVisual
                      imageUrl={item.product.images[0]}
                      altText={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-sm font-bold text-[#58111A] truncate">
                      {item.product.name}
                    </h4>
                    <span className="text-[11px] text-[#9B782B] block">
                      {item.selectedSize || item.product.size}
                    </span>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-sm font-semibold text-[#2C1810] tabular-nums">
                        ₹{item.product.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[11px] text-[#2C1810]/50">
                        Total: ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex items-center border border-[#C5A059]/30 rounded-md bg-[#FAF6EE]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#58111A] hover:bg-[#F2EADB]"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-semibold tabular-nums min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#58111A] hover:bg-[#F2EADB]"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-700 hover:text-red-900 p-1 transition-colors"
                        title="Remove item"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Step 2: Customer Information Form */
            <form id="orderForm" onSubmit={handleSendOrderWhatsApp} className="space-y-4">
              <div className="bg-[#F2EADB]/50 p-3 rounded-lg border border-[#C5A059]/30 text-xs text-[#2C1810]/80 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#9B782B] shrink-0 mt-0.5" />
                <span>
                  Please enter your contact details. This will be automatically formatted and sent to our WhatsApp order team.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#58111A] mb-1">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Menon"
                  value={customer.fullName}
                  onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                  className={`w-full px-3 py-2 text-sm bg-white rounded-lg border ${
                    formErrors.fullName ? 'border-red-500' : 'border-[#C5A059]/40'
                  } focus:outline-hidden focus:ring-2 focus:ring-[#6B1724]`}
                />
                {formErrors.fullName && (
                  <p className="text-[11px] text-red-600 mt-1">{formErrors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#58111A] mb-1">
                  WhatsApp Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9847012345 or +91 9847012345"
                  value={customer.phoneNumber}
                  onChange={(e) => setCustomer({ ...customer, phoneNumber: e.target.value })}
                  className={`w-full px-3 py-2 text-sm bg-white rounded-lg border ${
                    formErrors.phoneNumber ? 'border-red-500' : 'border-[#C5A059]/40'
                  } focus:outline-hidden focus:ring-2 focus:ring-[#6B1724]`}
                />
                {formErrors.phoneNumber && (
                  <p className="text-[11px] text-red-600 mt-1">{formErrors.phoneNumber}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#58111A] mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kochi, Bengaluru, Mumbai"
                  value={customer.location}
                  onChange={(e) => setCustomer({ ...customer, location: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white rounded-lg border border-[#C5A059]/40 focus:outline-hidden focus:ring-2 focus:ring-[#6B1724]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#58111A] mb-1">
                  Full Delivery Address (Optional at this step)
                </label>
                <textarea
                  rows={2}
                  placeholder="House name, street, pincode..."
                  value={customer.deliveryAddress}
                  onChange={(e) => setCustomer({ ...customer, deliveryAddress: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white rounded-lg border border-[#C5A059]/40 focus:outline-hidden focus:ring-2 focus:ring-[#6B1724]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#58111A] mb-1">
                  Notes / Custom Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Needed for housewarming on 15th, need velvet tone in forest green..."
                  value={customer.notes}
                  onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-white rounded-lg border border-[#C5A059]/40 focus:outline-hidden focus:ring-2 focus:ring-[#6B1724]"
                />
              </div>
            </form>
          )}
        </div>

        {/* Bottom Order Summary & WhatsApp Action */}
        {cart.length > 0 && (
          <div className="border-t border-[#C5A059]/20 bg-[#FDFBF7] p-4 sm:p-6 space-y-4">
            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex justify-between text-[#2C1810]/70">
                <span>Subtotal ({totalItems} items):</span>
                <span className="font-semibold text-[#2C1810] tabular-nums">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between text-[#2C1810]/70">
                <span>Delivery:</span>
                <span className="font-medium text-[#9B782B]">To be confirmed on WhatsApp</span>
              </div>
              <div className="pt-2 border-t border-[#C5A059]/15 flex justify-between text-base font-bold text-[#58111A]">
                <span>Estimated Total:</span>
                <span className="font-sans tabular-nums text-lg">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Actions */}
            {step === 'cart' ? (
              <button
                onClick={() => setStep('checkout')}
                className="w-full py-3.5 px-4 rounded-xl bg-[#6B1724] hover:bg-[#58111A] text-white font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
              >
                <span>Proceed to WhatsApp Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="space-y-2">
                <button
                  type="submit"
                  form="orderForm"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#1F6E3B] hover:bg-[#16552D] text-white font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Send Order on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep('cart')}
                  className="w-full text-center text-xs text-[#58111A] hover:underline py-1"
                >
                  &larr; Back to edit items
                </button>

                <p className="text-[11px] text-[#2C1810]/60 text-center leading-relaxed">
                  Your order request will open in WhatsApp. Our team will confirm availability, delivery charges and payment details with you.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

import React from 'react';
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Clock, PackageCheck } from 'lucide-react';
import { CustomerDetails, BUSINESS_CONFIG, openWhatsApp, generateWhatsAppOrder } from '../config';
import { useCart } from '../context/CartContext';

interface OrderConfirmationModalProps {
  orderRef: string | null;
  customerDetails: CustomerDetails | null;
  totalAmount: number;
  onClose: () => void;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  orderRef,
  customerDetails,
  totalAmount,
  onClose,
}) => {
  const { cart, clearCart } = useCart();

  if (!orderRef || !customerDetails) return null;

  const handleReopenWhatsApp = () => {
    const itemsForMsg = cart.map((item) => ({
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity,
      size: item.selectedSize || item.product.size,
    }));
    const message = generateWhatsAppOrder(itemsForMsg, customerDetails, orderRef);
    openWhatsApp(message);
  };

  const handleFinish = () => {
    clearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#FAF6EE] rounded-2xl border border-[#C5A059]/40 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="kasavu-border-bottom absolute top-0 inset-x-0" />

        {/* Success Icon */}
        <div className="text-center pt-2">
          <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700 shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold text-[#58111A]">
            Order Request Dispatched!
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#2C1810]/70">
            Reference ID: <span className="font-mono font-bold text-[#6B1724]">#{orderRef}</span>
          </p>
        </div>

        {/* Customer & Order Summary Snapshot */}
        <div className="bg-white rounded-xl p-4 border border-[#C5A059]/25 text-xs space-y-2">
          <div className="flex justify-between border-b border-stone-100 pb-2">
            <span className="text-[#2C1810]/60">Customer:</span>
            <span className="font-semibold text-[#2C1810]">{customerDetails.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-stone-100 pb-2">
            <span className="text-[#2C1810]/60">Phone:</span>
            <span className="font-semibold text-[#2C1810]">{customerDetails.phoneNumber}</span>
          </div>
          <div className="flex justify-between border-b border-stone-100 pb-2">
            <span className="text-[#2C1810]/60">Total Estimated:</span>
            <span className="font-bold text-[#58111A] text-sm tabular-nums">
              ₹{totalAmount.toLocaleString('en-IN')}
            </span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-[#2C1810]/60">Status:</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              Opening in WhatsApp
            </span>
          </div>
        </div>

        {/* What Happens Next Steps */}
        <div className="space-y-3">
          <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#9B782B]">
            What Happens Next:
          </h4>
          <div className="space-y-2 text-xs text-[#2C1810]/80">
            <div className="flex gap-2.5 items-start">
              <MessageCircle className="w-4 h-4 text-[#1F6E3B] shrink-0 mt-0.5" />
              <span>
                Your formatted order text is loaded into WhatsApp. Simply click <strong>Send</strong> in WhatsApp.
              </span>
            </div>
            <div className="flex gap-2.5 items-start">
              <Clock className="w-4 h-4 text-[#9B782B] shrink-0 mt-0.5" />
              <span>
                Our craftsman team in Thrissur will confirm stock availability and customized packing options within a few minutes.
              </span>
            </div>
            <div className="flex gap-2.5 items-start">
              <ShieldCheck className="w-4 h-4 text-[#9B782B] shrink-0 mt-0.5" />
              <span>
                We share delivery tracking and safe payment options (UPI, Netbanking, Google Pay).
              </span>
            </div>
            <div className="flex gap-2.5 items-start">
              <PackageCheck className="w-4 h-4 text-[#9B782B] shrink-0 mt-0.5" />
              <span>
                Carefully cushioned in protective heritage boxes and delivered across India.
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2 pt-2">
          <button
            onClick={handleReopenWhatsApp}
            className="w-full py-3 px-4 rounded-xl bg-[#1F6E3B] hover:bg-[#16552D] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Re-open WhatsApp Chat</span>
          </button>

          <button
            onClick={handleFinish}
            className="w-full py-2.5 px-4 rounded-xl bg-[#F2EADB] hover:bg-[#E6DBCE] text-[#58111A] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

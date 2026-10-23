import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, Wine, Sparkles, Key, Check } from 'lucide-react';
import { WHATSAPP_PHONE_RAW } from '../utils/booking';

interface VaultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VaultModal: React.FC<VaultModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50"
            aria-hidden="true"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#1c1b1b] border border-[#e9c176]/40 w-full max-w-xl max-h-[90vh] overflow-y-auto pointer-events-auto p-6 sm:p-8 relative shadow-2xl"
            >
              <button
                onClick={onClose}
                aria-label="Close private vault"
                className="absolute top-5 right-5 p-2 text-[#9a8f80] hover:text-[#e9c176] transition-colors"
              >
                <X className="w-5 h-5 stroke-[1.75]" />
              </button>

              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold mb-2">
                <Shield className="w-3.5 h-3.5" />
                <span>PRIVATE ATELIER VAULT</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#fdfbf7] font-normal tracking-tight mb-3">
                The Gentleman's Circle
              </h2>

              <p className="text-xs sm:text-sm text-[#9a8f80] font-light font-sans leading-relaxed mb-6">
                An invitation-only tier for discerning clients offering bespoke grooming subscriptions, private single-malt lockers, and after-hours atelier bookings.
              </p>

              {/* Tiers */}
              <div className="space-y-4 mb-6">
                <div className="border border-[#e9c176]/30 bg-[#161616] p-4 sm:p-5 relative">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-serif text-lg text-[#fdfbf7] font-medium">
                        Patron Member
                      </h3>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-[#e9c176] font-sans">
                        Bi-Weekly Atelier Ritual
                      </p>
                    </div>
                    <span className="font-serif text-xl text-[#fdfbf7]">₹180 / mo</span>
                  </div>

                  <ul className="space-y-2 text-xs text-[#c8c6c3] font-sans">
                    <li className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-[#e9c176]" />
                      <span>2x Bespoke Haircuts with Hot Towel Shave</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-[#e9c176]" />
                      <span>Complimentary Single-Malt Japanese Whiskey Pour</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-[#e9c176]" />
                      <span>Personalized Straight Razor Blade Reserve</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-[rgba(253,251,247,0.1)] bg-[#161616] p-4 sm:p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-serif text-lg text-[#fdfbf7] font-medium">
                        Founder's Circle
                      </h3>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-[#9a8f80] font-sans">
                        Unlimited Access & Private Locker
                      </p>
                    </div>
                    <span className="font-serif text-xl text-[#fdfbf7]">₹350 / mo</span>
                  </div>

                  <ul className="space-y-2 text-xs text-[#c8c6c3] font-sans">
                    <li className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-[#e9c176]" />
                      <span>Private Walnut Grooming Locker in Soho Lounge</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-[#e9c176]" />
                      <span>Priority Concierge & Weekend After-Hours Access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-[#e9c176]" />
                      <span>Quarterly Small-Batch Botanical Grooming Kit</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Inquiry Action */}
              <a
                href={`https://wa.me/91${WHATSAPP_PHONE_RAW}?text=Greetings%20Urban%20Edge%20Concierge.%20I%20am%20interested%20in%20inquiry%20regarding%20the%20Private%20Vault%20Membership.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#e9c176] hover:bg-[#fdfbf7] text-[#131313] py-3.5 text-xs font-bold uppercase tracking-[0.16em] flex items-center justify-center space-x-2 transition-colors font-sans"
              >
                <Key className="w-4 h-4" />
                <span>INQUIRE VIA CONCIERGE (+91 {WHATSAPP_PHONE_RAW})</span>
              </a>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

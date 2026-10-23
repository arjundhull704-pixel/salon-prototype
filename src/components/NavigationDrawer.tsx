import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, MessageSquare, Compass, Shield, Clock, Scissors, Calendar, ExternalLink } from 'lucide-react';
import { CALL_PHONE_RAW, WHATSAPP_PHONE_RAW, FORMATTED_CALL_PHONE, FORMATTED_WHATSAPP_PHONE, STUDIO_ADDRESS } from '../utils/booking';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
  onOpenVault: () => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
  onOpenVault,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer container */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-full max-w-sm sm:max-w-md bg-[#161616] border-r border-[#e9c176]/20 z-50 flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Bar inside drawer */}
            <div className="p-6 border-b border-[rgba(253,251,247,0.08)] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 border border-[#e9c176] flex items-center justify-center bg-[#1c1b1b]">
                  <span className="font-serif font-bold text-sm text-[#e9c176]">UE</span>
                </div>
                <div>
                  <h2 className="font-serif text-lg text-[#e5e2e1] leading-tight tracking-wide">
                    Urban Edge Studio
                  </h2>
                  <p className="text-[10px] tracking-[0.2em] text-[#9a8f80] uppercase">
                    Bespoke Atelier
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 text-[#9a8f80] hover:text-[#e9c176] transition-colors"
              >
                <X className="w-6 h-6 stroke-[1.75]" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="p-6 space-y-6 flex-1">
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#e9c176] mb-3 font-semibold">
                  Navigation
                </p>
                {[
                  { label: 'Services & Rituals', href: '#services', icon: Scissors },
                  { label: 'Studio Aesthetic & Works', href: '#aesthetic', icon: Compass },
                  { label: 'Master Grooming Philosophy', href: '#philosophy', icon: Shield },
                  { label: 'Opening Hours', href: '#hours', icon: Clock },
                  { label: 'Concierge & Location', href: '#concierge', icon: Phone },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center space-x-3 py-3 px-3 text-sm text-[#e5e2e1] hover:text-[#e9c176] hover:bg-[#20201f] transition-all border-l-2 border-transparent hover:border-[#e9c176]"
                  >
                    <item.icon className="w-4 h-4 text-[#9a8f80]" />
                    <span className="font-serif text-base tracking-wide">{item.label}</span>
                  </a>
                ))}
              </div>

              {/* Special Action Links */}
              <div className="pt-4 border-t border-[rgba(253,251,247,0.08)] space-y-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-between p-3.5 bg-[#e9c176] text-[#131313] font-sans font-semibold text-xs uppercase tracking-[0.15em] hover:bg-[#fdfbf7] transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Reserve Treatment</span>
                  </span>
                  <span>→</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenVault();
                  }}
                  className="w-full flex items-center justify-between p-3.5 border border-[#e9c176]/30 text-[#e9c176] font-sans text-xs uppercase tracking-[0.15em] hover:bg-[#e9c176]/10 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Private Vault & Membership</span>
                  </span>
                  <span>+</span>
                </button>
              </div>

              {/* Direct Concierge Contact in Drawer */}
              <div className="pt-4 border-t border-[rgba(253,251,247,0.08)] space-y-2.5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#9a8f80] font-medium">
                  Direct Line & WhatsApp
                </p>

                <a
                  href={`tel:${CALL_PHONE_RAW}`}
                  className="flex items-center justify-between p-2.5 bg-[#1c1b1b] border border-[rgba(253,251,247,0.08)] text-xs text-[#e5e2e1] hover:border-[#e9c176] transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <Phone className="w-3.5 h-3.5 text-[#e9c176]" />
                    <span>Call: {FORMATTED_CALL_PHONE}</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-[#9a8f80]" />
                </a>

                <a
                  href={`https://wa.me/91${WHATSAPP_PHONE_RAW}?text=Hello%20Urban%20Edge%20Studio%2C%20I%20would%20like%20to%20reserve%20an%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-[#1c1b1b] border border-[rgba(253,251,247,0.08)] text-xs text-[#e5e2e1] hover:border-[#e9c176] transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#e9c176]" />
                    <span>WhatsApp: {FORMATTED_WHATSAPP_PHONE}</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-[#9a8f80]" />
                </a>
              </div>
            </div>

            {/* Bottom info */}
            <div className="p-6 bg-[#131313] border-t border-[rgba(253,251,247,0.08)] text-xs text-[#9a8f80]">
              <p className="font-serif text-[#e5e2e1] text-sm mb-1">{STUDIO_ADDRESS}</p>
              <p className="text-[11px]">Tue-Sat: 09:00 - 20:00 • Sun: 10:00 - 16:00</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

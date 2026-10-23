import React from 'react';
import { Menu, MessageSquare, User } from 'lucide-react';
import { WHATSAPP_PHONE_RAW } from '../utils/booking';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenBooking,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#131313] border-b border-[rgba(253,251,247,0.08)] px-4 sm:px-6 py-3 transition-all">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Left: Mobile Menu Toggle */}
        <div className="flex items-center space-x-3.5">
          <button
            onClick={onOpenMenu}
            aria-label="Open Navigation Menu"
            className="p-1.5 text-[#e5e2e1] hover:text-[#e9c176] transition-colors focus:outline-none"
          >
            <Menu className="w-6 h-6 stroke-[1.5]" />
          </button>

          {/* Logo & Brand Monogram matching Image 1.jpeg */}
          <a
            href="#"
            className="flex items-center space-x-2.5 group focus:outline-none"
            aria-label="Urban Edge Studio Home"
          >
            {/* Architectural U Monogram */}
            <div className="w-6 h-6 border-l-2 border-r-2 border-b-2 border-[#e9c176] flex items-center justify-center">
              <span className="text-[10px] text-[#e9c176] font-serif font-bold">U</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif tracking-wider text-base sm:text-lg font-normal text-[#e9c176] leading-none">
                Urban Edge
              </span>
              <span className="text-[8px] uppercase tracking-[0.28em] text-[#9a8f80] mt-0.5 font-sans font-medium">
                STUDIO
              </span>
            </div>
          </a>
        </div>

        {/* Right Action Icons: WhatsApp Chat & Client Profile */}
        <div className="flex items-center space-x-4">
          <a
            href={`https://wa.me/91${WHATSAPP_PHONE_RAW}?text=Hello%20Urban%20Edge%20Studio%20Concierge%2C%20I%20would%20like%20to%20inquire%20about%20a%20grooming%20session.`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="text-[#e5e2e1] hover:text-[#e9c176] transition-colors p-1"
            title="WhatsApp Concierge"
          >
            <MessageSquare className="w-5 h-5 stroke-[1.5]" />
          </a>

          <button
            onClick={onOpenBooking}
            aria-label="Client Account and Reservations"
            className="text-[#e5e2e1] hover:text-[#e9c176] transition-colors p-1"
            title="Reserve / Profile"
          >
            <User className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </header>
  );
};

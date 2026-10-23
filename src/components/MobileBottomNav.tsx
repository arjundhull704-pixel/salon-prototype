import React from 'react';
import { Scissors, Phone, Navigation, Clock, UserCheck } from 'lucide-react';
import { CALL_PHONE_RAW } from '../utils/booking';

interface MobileBottomNavProps {
  onOpenBooking: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenBooking }) => {
  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#131313]/98 backdrop-blur-md border-t border-[rgba(253,251,247,0.12)] px-2 py-2"
    >
      <div className="grid grid-cols-5 text-center">
        {/* Services */}
        <a
          href="#services"
          className="flex flex-col items-center justify-center py-1 text-[#9a8f80] hover:text-[#e9c176] active:text-[#e9c176] transition-colors"
        >
          <Scissors className="w-4 h-4 stroke-[1.75]" />
          <span className="text-[9px] uppercase tracking-[0.12em] font-medium mt-1 font-sans">
            SERVICES
          </span>
        </a>

        {/* Call: 9779178559 */}
        <a
          href={`tel:${CALL_PHONE_RAW}`}
          className="flex flex-col items-center justify-center py-1 text-[#9a8f80] hover:text-[#e9c176] active:text-[#e9c176] transition-colors"
        >
          <Phone className="w-4 h-4 stroke-[1.75]" />
          <span className="text-[9px] uppercase tracking-[0.12em] font-medium mt-1 font-sans">
            CALL
          </span>
        </a>

        {/* Directions */}
        <a
          href="#concierge"
          className="flex flex-col items-center justify-center py-1 text-[#9a8f80] hover:text-[#e9c176] active:text-[#e9c176] transition-colors"
        >
          <Navigation className="w-4 h-4 stroke-[1.75]" />
          <span className="text-[9px] uppercase tracking-[0.12em] font-medium mt-1 font-sans">
            DIRECTIONS
          </span>
        </a>

        {/* Hours */}
        <a
          href="#hours"
          className="flex flex-col items-center justify-center py-1 text-[#9a8f80] hover:text-[#e9c176] active:text-[#e9c176] transition-colors"
        >
          <Clock className="w-4 h-4 stroke-[1.75]" />
          <span className="text-[9px] uppercase tracking-[0.12em] font-medium mt-1 font-sans">
            HOURS
          </span>
        </a>

        {/* Artisans / Reserve */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-1 text-[#e9c176] hover:text-[#fdfbf7] active:text-[#fdfbf7] transition-colors"
        >
          <UserCheck className="w-4 h-4 stroke-[1.75]" />
          <span className="text-[9px] uppercase tracking-[0.12em] font-medium mt-1 font-sans">
            ARTISANS
          </span>
        </button>
      </div>
    </nav>
  );
};

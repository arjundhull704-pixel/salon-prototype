import React from 'react';
import { Bell } from 'lucide-react';
import { getStudioStatus } from '../utils/booking';

export const OpeningHoursSection: React.FC = () => {
  const currentStatus = getStudioStatus();

  return (
    <section id="hours" className="w-full bg-[#131313] py-12 sm:py-16 px-4 sm:px-6 border-b border-[rgba(253,251,247,0.08)]">
      <div className="max-w-4xl mx-auto">
        <div>
          {/* Section Header */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold">
              AVAILABILITY
            </span>

            {/* Live Open Today indicator */}
            <div className="inline-flex items-center space-x-1.5 bg-[#1c1b1b] border border-[rgba(253,251,247,0.12)] px-2.5 py-1">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.16em] text-[#fdfbf7] font-semibold">
                OPEN TODAY
              </span>
            </div>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#fdfbf7] font-normal tracking-tight mb-5">
            Opening Hours
          </h2>

          {/* Schedule Table Container matching Image 1.jpeg */}
          <div className="bg-[#1c1b1b] border border-[rgba(253,251,247,0.08)] divide-y divide-[rgba(253,251,247,0.06)]">
            <div className="flex items-center justify-between p-3.5 sm:p-4">
              <span className="font-serif text-xs sm:text-sm text-[#fdfbf7] font-medium tracking-wide">
                Monday – Friday
              </span>
              <span className="font-sans text-xs text-[#c8c6c3] font-mono tracking-wider">
                09:00 – 20:00
              </span>
            </div>

            <div className="flex items-center justify-between p-3.5 sm:p-4">
              <span className="font-serif text-xs sm:text-sm text-[#fdfbf7] font-medium tracking-wide">
                Saturday
              </span>
              <span className="font-sans text-xs text-[#c8c6c3] font-mono tracking-wider">
                09:00 – 18:00
              </span>
            </div>

            <div className="flex items-center justify-between p-3.5 sm:p-4">
              <span className="font-serif text-xs sm:text-sm text-[#fdfbf7] font-medium tracking-wide">
                Sunday
              </span>
              <span className="font-sans text-xs text-[#c8c6c3] font-mono tracking-wider">
                10:00 – 16:00
              </span>
            </div>

            {/* Walk-in notice card */}
            <div className="p-3.5 sm:p-4 bg-[#161616] flex items-center space-x-2.5 text-xs text-[#d1c5b4]">
              <Bell className="w-3.5 h-3.5 text-[#e9c176] shrink-0 stroke-[1.75]" />
              <span className="font-sans font-light text-[11px] sm:text-xs">
                Walk-ins welcomed upon chair availability
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

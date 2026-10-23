import React from 'react';
import { Phone, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { CALL_PHONE_RAW, WHATSAPP_PHONE_RAW } from '../utils/booking';

interface HeroProps {
  onScrollToServices: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToServices }) => {
  return (
    <section className="relative w-full bg-[#131313] border-b border-[rgba(253,251,247,0.08)]">
      {/* Hero Image at Top matching Image 1.jpeg */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden bg-[#0e0e0e]">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=85"
          alt="Urban Edge Studio Bespoke Atelier"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.1]"
          loading="eager"
        />
        {/* Soft bottom vignette into dark background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/30 to-black/25" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-12 relative z-10 pb-8 sm:pb-12">
        <div className="bg-[#1c1b1b] border border-[rgba(253,251,247,0.08)] p-6 sm:p-8 text-left shadow-2xl">
          {/* Badge: ⊛ BESPOKE SANCTUARY */}
          <div className="inline-flex items-center space-x-1.5 border border-[#e9c176]/40 bg-[#161616] px-2.5 py-1 mb-4">
            <span className="text-[#e9c176] text-xs">⊛</span>
            <span className="text-[10px] sm:text-[11px] uppercase font-sans tracking-[0.2em] text-[#e9c176] font-semibold">
              BESPOKE SANCTUARY
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#fdfbf7] font-normal leading-[1.2] tracking-tight mb-3">
            Artisanal Grooming for the Modern Gentleman
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-[#c8c6c3] font-light leading-relaxed mb-6 font-sans">
            A disciplined synthesis of architectural precision, restorative hot-towel rituals, and tailored masculine luxury.
          </p>

          {/* Primary CTA: VIEW SERVICES & RITUALS */}
          <button
            onClick={onScrollToServices}
            className="w-full flex items-center justify-center space-x-2 bg-[#e9c176] hover:bg-[#fdfbf7] text-[#131313] py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] transition-all duration-300 shadow-md group focus:outline-none"
          >
            <span>VIEW SERVICES & RITUALS</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Action Buttons: DIRECT CALL & WHATSAPP */}
          <div className="grid grid-cols-2 gap-3 mt-3">
            {/* Direct Call to 9779178559 */}
            <a
              href={`tel:${CALL_PHONE_RAW}`}
              className="flex items-center justify-center space-x-2 border border-[rgba(253,251,247,0.12)] hover:border-[#e9c176] bg-[#161616] hover:bg-[#e9c176]/10 text-[#e5e2e1] hover:text-[#e9c176] py-3 px-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] transition-all text-center"
            >
              <Phone className="w-3.5 h-3.5 text-[#e9c176] shrink-0" />
              <span>DIRECT CALL</span>
            </a>

            {/* WhatsApp to 9034044077 */}
            <a
              href={`https://wa.me/91${WHATSAPP_PHONE_RAW}?text=Hello%20Urban%20Edge%20Studio%2C%20I%20would%20like%20to%20reserve%20an%20artisanal%20grooming%20session.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border border-[rgba(253,251,247,0.12)] hover:border-[#e9c176] bg-[#161616] hover:bg-[#e9c176]/10 text-[#e5e2e1] hover:text-[#e9c176] py-3 px-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] transition-all text-center"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#e9c176] shrink-0" />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-4 grid grid-cols-3 divide-x divide-[rgba(253,251,247,0.08)] bg-[#1c1b1b] border border-[rgba(253,251,247,0.08)] text-center py-4 sm:py-5">
          <div className="px-2">
            <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#fdfbf7] font-normal block">
              12<span className="text-[#e9c176] text-base sm:text-lg">+</span>
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#9a8f80] mt-0.5 block font-medium">
              YEARS HERITAGE
            </span>
          </div>

          <div className="px-2">
            <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#fdfbf7] font-normal block">
              100<span className="text-[#e9c176] text-base sm:text-lg">%</span>
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#9a8f80] mt-0.5 block font-medium">
              TAILORED CUT
            </span>
          </div>

          <div className="px-2">
            <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#fdfbf7] font-normal block">
              5<span className="text-[#e9c176] text-base sm:text-lg">★</span>
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#9a8f80] mt-0.5 block font-medium">
              PRIVATE LOUNGE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

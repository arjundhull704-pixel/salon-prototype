import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, ArrowUpRight, Compass, Copy, Check } from 'lucide-react';
import { CALL_PHONE_RAW, WHATSAPP_PHONE_RAW, FORMATTED_CALL_PHONE, FORMATTED_WHATSAPP_PHONE } from '../utils/booking';

export const ConciergeSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(CALL_PHONE_RAW);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("452 Mercer St, New York, NY 10013")}`;

  return (
    <section id="concierge" className="w-full bg-[#131313] py-12 sm:py-16 px-4 sm:px-6 border-b border-[rgba(253,251,247,0.08)]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold mb-1">
            DIRECT ACCESS
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#fdfbf7] font-normal tracking-tight mb-2">
            Concierge & Location
          </h2>
          <p className="text-xs sm:text-sm text-[#9a8f80] font-light leading-relaxed max-w-2xl font-sans">
            Reach our private grooming coordinator directly via telephone, encrypted WhatsApp, or visit the atelier.
          </p>
        </div>

        {/* 3 Contact Action Cards matching Image 1.jpeg */}
        <div className="space-y-3 mb-6">
          {/* 1. Direct Studio Line */}
          <div className="group bg-[#1c1b1b] border border-[rgba(253,251,247,0.08)] hover:border-[#e9c176]/40 p-3.5 sm:p-4 flex items-center justify-between transition-colors">
            <a
              href={`tel:${CALL_PHONE_RAW}`}
              className="flex items-center space-x-3.5 flex-1"
              aria-label={`Call direct studio line at ${FORMATTED_CALL_PHONE}`}
            >
              <div className="w-9 h-9 border border-[rgba(253,251,247,0.1)] bg-[#161616] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#9a8f80] group-hover:text-[#e9c176] transition-colors" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-[#9a8f80] font-sans font-medium">
                  DIRECT STUDIO LINE
                </p>
                <p className="font-serif text-sm sm:text-base text-[#fdfbf7] font-normal group-hover:text-[#e9c176] transition-colors">
                  +91 {CALL_PHONE_RAW}
                </p>
              </div>
            </a>

            <div className="flex items-center space-x-1">
              <button
                onClick={handleCopyPhone}
                aria-label="Copy direct studio line number"
                className="p-1.5 text-[#9a8f80] hover:text-[#e9c176] transition-colors"
                title="Copy Number"
              >
                {copiedPhone ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
              <a
                href={`tel:${CALL_PHONE_RAW}`}
                className="p-1.5 text-[#9a8f80] group-hover:text-[#e9c176] transition-colors"
                aria-label="Call direct line"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2. WhatsApp Consultation */}
          <a
            href={`https://wa.me/91${WHATSAPP_PHONE_RAW}?text=Greetings%20Urban%20Edge%20Studio%20Concierge%2C%20I%20would%20like%20to%20inquire%20about%20a%20grooming%20ritual.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#1c1b1b] border border-[rgba(253,251,247,0.08)] hover:border-[#e9c176]/40 p-3.5 sm:p-4 flex items-center justify-between transition-colors block"
            aria-label={`Chat with concierge on WhatsApp at ${FORMATTED_WHATSAPP_PHONE}`}
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-9 h-9 border border-[rgba(253,251,247,0.1)] bg-[#161616] flex items-center justify-center shrink-0">
                <MessageSquare className="w-4 h-4 text-[#9a8f80] group-hover:text-[#e9c176] transition-colors" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-[#9a8f80] font-sans font-medium">
                  WHATSAPP CONSULTATION
                </p>
                <p className="font-serif text-sm sm:text-base text-[#fdfbf7] font-normal group-hover:text-[#e9c176] transition-colors">
                  Instant Booking Chat <span className="text-[11px] font-sans text-[#9a8f80] font-normal">(+91 {WHATSAPP_PHONE_RAW})</span>
                </p>
              </div>
            </div>

            <div className="p-1.5 text-[#9a8f80] group-hover:text-[#e9c176] transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* 3. Atelier Location */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#1c1b1b] border border-[rgba(253,251,247,0.08)] hover:border-[#e9c176]/40 p-3.5 sm:p-4 flex items-center justify-between transition-colors block"
            aria-label="View atelier location on Google Maps"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-9 h-9 border border-[rgba(253,251,247,0.1)] bg-[#161616] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#9a8f80] group-hover:text-[#e9c176] transition-colors" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-[#9a8f80] font-sans font-medium">
                  ATELIER LOCATION
                </p>
                <p className="font-serif text-sm sm:text-base text-[#fdfbf7] font-normal group-hover:text-[#e9c176] transition-colors">
                  452 Mercer St, Soho, NY
                </p>
              </div>
            </div>

            <div className="p-1.5 text-[#9a8f80] group-hover:text-[#e9c176] transition-colors">
              <Compass className="w-4 h-4 text-[#e9c176]" />
            </div>
          </a>
        </div>

        {/* Map Image / Graphic matching Image 1.jpeg */}
        <div className="relative border border-[rgba(253,251,247,0.1)] overflow-hidden bg-[#161616]">
          <div className="h-48 sm:h-64 w-full relative overflow-hidden bg-[#161a20]">
            {/* Dark map graphic mimicking Manhattan map */}
            <svg
              className="w-full h-full object-cover filter contrast-125 brightness-80 opacity-80"
              viewBox="0 0 800 400"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="800" height="400" fill="#131922" />
              {/* Rivers */}
              <path d="M 0 0 L 220 0 L 280 200 L 330 400 L 0 400 Z" fill="#1a232f" />
              <path d="M 580 0 L 520 220 L 500 400 L 800 400 L 800 0 Z" fill="#1a232f" />
              {/* Manhattan Island */}
              <path d="M 220 0 L 580 0 L 520 220 L 500 400 L 330 400 L 280 200 Z" fill="#1f262e" />
              
              {/* Street Grid */}
              <g stroke="#2d3744" strokeWidth="1.5">
                <line x1="280" y1="40" x2="560" y2="40" />
                <line x1="290" y1="90" x2="550" y2="90" />
                <line x1="300" y1="140" x2="540" y2="140" />
                <line x1="310" y1="190" x2="530" y2="190" />
                <line x1="320" y1="240" x2="520" y2="240" />
                <line x1="325" y1="290" x2="510" y2="290" />
                <line x1="330" y1="340" x2="505" y2="340" />

                <line x1="360" y1="0" x2="380" y2="400" />
                <line x1="410" y1="0" x2="425" y2="400" />
                <line x1="460" y1="0" x2="470" y2="400" />
                <line x1="510" y1="0" x2="500" y2="400" />
              </g>

              {/* Broadway Angle */}
              <line x1="480" y1="0" x2="390" y2="400" stroke="#3e4c5e" strokeWidth="2.5" />

              {/* Park */}
              <rect x="400" y="110" width="45" height="25" fill="#1b2a22" stroke="#2c4234" />
              <circle cx="422" cy="122" r="3" fill="#60a5fa" />
              <text x="430" y="125" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Washington Sq Park</text>

              {/* Soho Tag */}
              <text x="380" y="225" fill="#c5a059" fontSize="12" fontFamily="serif" fontWeight="bold">SOHO</text>
              <text x="365" y="240" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">LOWER MANHATTAN</text>

              {/* Surrounding Areas */}
              <text x="120" y="160" fill="#64748b" fontSize="10" fontFamily="sans-serif">Hoboken</text>
              <text x="90" y="220" fill="#64748b" fontSize="10" fontFamily="sans-serif">Journal Square</text>
              <text x="620" y="110" fill="#64748b" fontSize="9" fontFamily="sans-serif">LaGuardia</text>
            </svg>

            {/* Glowing Center Pin on Mercer St */}
            <div className="absolute top-[54%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full bg-[#e9c176] opacity-75" />
                <span className="relative inline-flex w-4 h-4 bg-[#c5a059] border-2 border-[#131313]" />
              </span>
            </div>

            {/* Bottom Badge matching Image 1.jpeg */}
            <div className="absolute bottom-3 left-3 z-10">
              <div className="bg-[#131313]/90 backdrop-blur-sm border border-[rgba(253,251,247,0.12)] px-2.5 py-1.5 flex items-center space-x-1.5">
                <MapPin className="w-3 h-3 text-[#e9c176]" />
                <span className="text-[9px] uppercase tracking-[0.16em] text-[#fdfbf7] font-semibold font-sans">
                  SOHO ARTS DISTRICT • VALET AVAILABLE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

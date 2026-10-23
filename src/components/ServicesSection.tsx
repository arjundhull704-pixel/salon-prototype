import React from 'react';
import { Scissors, Check, Calendar, ChevronRight, Wine } from 'lucide-react';
import { SERVICES, ServiceItem } from '../utils/booking';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="w-full bg-[#131313] py-12 sm:py-16 px-4 sm:px-6 border-b border-[rgba(253,251,247,0.08)]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header matching Image 1.jpeg */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold mb-1">
              CURATED TREATMENTS
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#fdfbf7] font-normal tracking-tight">
              Services & Rituals
            </h2>
          </div>

          {/* Scissors Icon framed on top right */}
          <div className="w-9 h-9 border border-[rgba(253,251,247,0.12)] flex items-center justify-center bg-[#1c1b1b] shrink-0">
            <Scissors className="w-4 h-4 text-[#e9c176] stroke-[1.5]" />
          </div>
        </div>

        {/* Subtext */}
        <p className="text-xs sm:text-sm text-[#9a8f80] font-light leading-relaxed mb-6 font-sans">
          Every appointment begins with personalized hair and scalp consultation, followed by custom blade tapering and organic herbal finish.
        </p>

        {/* Service Cards List */}
        <div className="space-y-4">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`relative bg-[#1c1b1b] border ${
                service.isSignature
                  ? 'border-[#e9c176]/40'
                  : 'border-[rgba(253,251,247,0.08)] hover:border-[#e9c176]/30'
              } p-4 sm:p-5 transition-all duration-300 group`}
            >
              {/* Signature Badge */}
              {service.isSignature && (
                <div className="absolute top-0 right-0 bg-[#c5a059] text-[#131313] px-2.5 py-0.5 text-[8px] sm:text-[9px] uppercase font-bold tracking-[0.2em]">
                  SIGNATURE CHOICE
                </div>
              )}

              <div className="flex flex-row gap-4 items-start">
                {/* Left Thumbnail */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 overflow-hidden border border-[rgba(253,251,247,0.08)] bg-[#131313] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    loading="lazy"
                  />
                </div>

                {/* Right Details */}
                <div className="flex-1 min-w-0">
                  {/* Title & Price Header */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="pr-2">
                      <h3 className="font-serif text-base sm:text-lg text-[#fdfbf7] font-medium leading-snug group-hover:text-[#e9c176] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-[#9a8f80] font-sans font-medium mt-0.5">
                        {service.duration}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-serif text-xl sm:text-2xl text-[#fdfbf7] font-normal">
                        ₹{service.priceINR}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#c8c6c3] font-light leading-relaxed my-2.5 font-sans">
                    {service.description}
                  </p>

                  {/* Highlight & Reserve Button */}
                  <div className="flex items-center justify-between pt-2 border-t border-[rgba(253,251,247,0.06)] flex-wrap gap-2">
                    <div className="flex items-center space-x-1.5 text-xs text-[#9a8f80] font-sans">
                      {service.isSignature ? (
                        <Wine className="w-3.5 h-3.5 text-[#e9c176]" />
                      ) : (
                        <Check className="w-3.5 h-3.5 text-[#e9c176]" />
                      )}
                      <span className="text-[11px] sm:text-xs text-[#d1c5b4]">{service.highlight}</span>
                    </div>

                    <button
                      onClick={() => onSelectService(service)}
                      className={`flex items-center space-x-1 text-[11px] sm:text-xs uppercase tracking-[0.15em] font-semibold transition-colors ${
                        service.isSignature
                          ? 'text-[#e9c176] hover:text-[#fdfbf7]'
                          : 'text-[#e9c176] hover:text-[#fdfbf7]'
                      }`}
                    >
                      {service.isSignature ? (
                        <>
                          <span>BOOK RITUAL</span>
                          <Calendar className="w-3.5 h-3.5 ml-1" />
                        </>
                      ) : (
                        <>
                          <span>RESERVE</span>
                          <ChevronRight className="w-3.5 h-3.5 ml-0.5 transform group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

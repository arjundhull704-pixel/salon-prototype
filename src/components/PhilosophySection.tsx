import React from 'react';
import { Sparkles, Armchair } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="w-full bg-[#131313] py-12 sm:py-16 px-4 sm:px-6 border-b border-[rgba(253,251,247,0.08)]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#1c1b1b] border border-[rgba(253,251,247,0.08)] p-6 sm:p-8 relative">
          {/* Studio Monogram Emblem at Top matching Image 1.jpeg */}
          <div className="w-10 h-10 border border-[#e9c176]/40 flex items-center justify-center bg-[#131313] mb-5">
            <span className="text-[#e9c176] font-serif text-base font-bold">Å</span>
          </div>

          {/* Subtitle */}
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold mb-1">
            STUDIO HERITAGE
          </p>

          {/* Main Title */}
          <h2 className="font-serif text-2xl sm:text-3xl text-[#fdfbf7] font-normal tracking-tight mb-3">
            Master Grooming Philosophy
          </h2>

          {/* Editorial Paragraph exactly matching Image 1.jpeg */}
          <p className="text-xs sm:text-sm text-[#c8c6c3] font-light leading-relaxed mb-6 max-w-2xl font-sans">
            Urban Edge Studio was founded on an unapologetic belief: men deserve an uncompromising grooming haven that respects their time, individuality, and aesthetic standards. We reject generic clip joints in favor of a bespoke atelier mindset.
          </p>

          {/* 3 Value Pillars matching Image 1.jpeg */}
          <div className="space-y-4 pt-1">
            {/* 1. Artisanal Japanese Steel */}
            <div className="flex items-start space-x-3.5">
              <div className="w-7 h-7 shrink-0 border border-[rgba(253,251,247,0.1)] bg-[#131313] flex items-center justify-center mt-0.5">
                <span className="text-[#e9c176] text-xs font-serif font-bold">〒</span>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-xs sm:text-sm text-[#fdfbf7] tracking-wide mb-0.5">
                  Artisanal Japanese Steel
                </h3>
                <p className="text-[11px] sm:text-xs text-[#9a8f80] font-light leading-relaxed font-sans">
                  Hand-forged blades ensuring frictionless glide and microscopic precision.
                </p>
              </div>
            </div>

            {/* 2. Botanical Formulation */}
            <div className="flex items-start space-x-3.5">
              <div className="w-7 h-7 shrink-0 border border-[rgba(253,251,247,0.1)] bg-[#131313] flex items-center justify-center mt-0.5">
                <Sparkles className="w-3.5 h-3.5 text-[#e9c176] stroke-[1.5]" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-xs sm:text-sm text-[#fdfbf7] tracking-wide mb-0.5">
                  Botanical Formulation
                </h3>
                <p className="text-[11px] sm:text-xs text-[#9a8f80] font-light leading-relaxed font-sans">
                  Small-batch organic balms, essential oils, and paraben-free skin tonics.
                </p>
              </div>
            </div>

            {/* 3. Private Consultation Space */}
            <div className="flex items-start space-x-3.5">
              <div className="w-7 h-7 shrink-0 border border-[rgba(253,251,247,0.1)] bg-[#131313] flex items-center justify-center mt-0.5">
                <Armchair className="w-3.5 h-3.5 text-[#e9c176] stroke-[1.5]" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-xs sm:text-sm text-[#fdfbf7] tracking-wide mb-0.5">
                  Private Consultation Space
                </h3>
                <p className="text-[11px] sm:text-xs text-[#9a8f80] font-light leading-relaxed font-sans">
                  A quiet, unhurried environment with bespoke audio and tailored hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Eye } from 'lucide-react';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  notes: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'precision-fade',
    title: 'Precision Fade',
    category: 'Haircut Architecture',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=85',
    notes: 'Micro-calibrated shear work fading seamlessly to skin with sharp edge alignment.',
  },
  {
    id: 'hot-towel-ritual',
    title: 'Hot Towel Ritual',
    category: 'Restorative Shave',
    image: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=800&q=85',
    notes: 'Eucalyptus steam compress followed by sandalwood bristle lather and Japanese steel glide.',
  },
  {
    id: 'beard-architecture',
    title: 'Beard Architecture',
    category: 'Facial Sculpture',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=85',
    notes: 'Natural cheek line demarcation and jawline balance with argan moisture sealing.',
  },
  {
    id: 'studio-sanctuary',
    title: 'Studio Sanctuary',
    category: 'Atelier Interior',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=85',
    notes: 'Brutalist blackened steel, natural walnut counters, and private acoustics designed for calm.',
  },
];

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="aesthetic" className="w-full bg-[#131313] py-12 sm:py-16 px-4 sm:px-6 border-b border-[rgba(253,251,247,0.08)]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold mb-1">
            VISUAL CURATION
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#fdfbf7] font-normal tracking-tight mb-2">
            Studio Aesthetic & Works
          </h2>
          <p className="text-xs sm:text-sm text-[#9a8f80] font-light leading-relaxed max-w-2xl font-sans">
            Exemplary fades, artisan hot towel treatments, and our moody brutalist studio interior.
          </p>
        </div>

        {/* 2x2 Image Grid Matching Image 1.jpeg */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative cursor-pointer overflow-hidden bg-[#1c1b1b] border border-[rgba(253,251,247,0.08)] hover:border-[#e9c176]/50 aspect-square"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                loading="lazy"
              />

              {/* Bottom gradient fade for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Bottom Label exactly matching Image 1.jpeg */}
              <div className="absolute bottom-2.5 left-2.5 sm:bottom-3.5 sm:left-3.5 right-2 sm:right-3">
                <h3 className="font-serif text-xs sm:text-sm md:text-base text-[#fdfbf7] tracking-normal font-normal group-hover:text-[#e9c176] transition-colors leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

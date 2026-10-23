import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Compass } from 'lucide-react';
import { GalleryItem } from './GallerySection';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-3xl w-full bg-[#1c1b1b] border border-[#e9c176]/30 overflow-hidden cursor-default shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close image inspection"
            className="absolute top-4 right-4 z-20 p-2 bg-black/60 text-[#fdfbf7] hover:text-[#e9c176] transition-colors"
          >
            <X className="w-5 h-5 stroke-[1.75]" />
          </button>

          {/* Image */}
          <div className="w-full max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain filter contrast-[1.05]"
            />
          </div>

          {/* Details Bar */}
          <div className="p-6 bg-[#161616] border-t border-[rgba(253,251,247,0.08)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold font-sans">
                {item.category}
              </span>
              <span className="text-xs text-[#9a8f80] font-sans">
                Atelier Portfolio № {item.id}
              </span>
            </div>

            <h3 className="font-serif text-2xl text-[#fdfbf7] font-normal mb-2">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#c8c6c3] font-light font-sans leading-relaxed">
              {item.notes}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { getStudioStatus } from '../utils/booking';

interface FooterProps {
  onOpenVault: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVault }) => {
  const status = getStudioStatus();

  return (
    <footer className="w-full bg-[#0e0e0e] border-t border-[rgba(253,251,247,0.08)] py-14 px-4 sm:px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Brand Name */}
        <h2 className="font-serif text-2xl sm:text-3xl text-[#e9c176] font-normal tracking-wide mb-1">
          Urban Edge
        </h2>
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#9a8f80] mb-6 font-sans">
          BESPOKE ATELIER
        </p>

        {/* Operating Status Badge matching screenshot */}
        <div className="inline-block bg-[#1c1b1b] border border-[rgba(253,251,247,0.12)] px-4 py-2 mb-8">
          <p className="text-[11px] sm:text-xs text-[#d1c5b4] font-sans tracking-wide">
            {status.isOpen ? 'Open Today Until 20:00' : 'Opens 09:00 Tomorrow'} • 452 Mercer St, New York
          </p>
        </div>

        {/* Links row */}
        <div className="flex items-center space-x-6 sm:space-x-8 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#9a8f80] mb-8 font-sans">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e9c176] transition-colors"
          >
            INSTAGRAM
          </a>
          <span>•</span>
          <a
            href="#aesthetic"
            className="hover:text-[#e9c176] transition-colors"
          >
            EDITORIAL
          </a>
          <span>•</span>
          <button
            onClick={onOpenVault}
            className="hover:text-[#e9c176] transition-colors uppercase tracking-[0.2em]"
          >
            PRIVATE VAULT
          </button>
        </div>

        {/* Copyright */}
        <p className="text-[10px] tracking-[0.25em] text-[#6d665b] uppercase font-sans">
          © 2026 URBAN EDGE STUDIO. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

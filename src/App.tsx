import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection, GalleryItem } from './components/GallerySection';
import { PhilosophySection } from './components/PhilosophySection';
import { OpeningHoursSection } from './components/OpeningHoursSection';
import { ConciergeSection } from './components/ConciergeSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { NavigationDrawer } from './components/NavigationDrawer';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { VaultModal } from './components/VaultModal';
import { ServiceItem, WHATSAPP_PHONE_RAW } from './utils/booking';
import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedService(null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] flex flex-col font-sans selection:bg-[#e9c176] selection:text-[#131313] pb-16 md:pb-0">
      {/* Header */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenBooking={handleOpenGeneralBooking}
        onOpenWhatsApp={() => {
          window.open(
            `https://wa.me/91${WHATSAPP_PHONE_RAW}?text=Hello%20Urban%20Edge%20Studio%2C%20I%20would%20like%20to%20reserve%20an%20appointment.`,
            '_blank'
          );
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onScrollToServices={handleScrollToServices}
          onOpenBooking={handleOpenGeneralBooking}
        />

        <ServicesSection onSelectService={handleSelectService} />

        <GallerySection onOpenLightbox={(item) => setActiveLightboxItem(item)} />

        <PhilosophySection />

        <OpeningHoursSection />

        <ConciergeSection />
      </main>

      {/* Footer */}
      <Footer onOpenVault={() => setIsVaultOpen(true)} />

      {/* Floating WhatsApp Quick Action Button for Desktop */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-30">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`https://wa.me/91${WHATSAPP_PHONE_RAW}?text=Hello%20Urban%20Edge%20Studio%2C%20I%20would%20like%20to%20book%20a%20grooming%20session.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Concierge"
          className="flex items-center space-x-2.5 bg-[#25D366] text-[#131313] px-3.5 py-2.5 shadow-2xl border border-black/20 hover:bg-[#20bd5a] transition-colors"
        >
          <MessageSquare className="w-4 h-4 fill-current stroke-none" />
          <span className="text-xs font-bold uppercase tracking-[0.14em]">
            WhatsApp Concierge
          </span>
        </motion.a>
      </div>

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomNav onOpenBooking={handleOpenGeneralBooking} />

      {/* Modals & Overlays */}
      <NavigationDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenBooking={handleOpenGeneralBooking}
        onOpenVault={() => setIsVaultOpen(true)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />

      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />

      <VaultModal
        isOpen={isVaultOpen}
        onClose={() => setIsVaultOpen(false)}
      />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Phone, Check, MessageSquare, Sparkles, Wine, ArrowRight } from 'lucide-react';
import {
  SERVICES,
  ARTISANS,
  TIME_SLOTS,
  ServiceItem,
  ArtisanBarber,
  CALL_PHONE_RAW,
  WHATSAPP_PHONE_RAW,
  buildWhatsAppLink,
  validateBookingForm,
} from '../utils/booking';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialService ? initialService.id : SERVICES[0].id
  );
  const [selectedArtisanId, setSelectedArtisanId] = useState<string>('any');
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-20');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(TIME_SLOTS[1]);
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  useEffect(() => {
    if (initialService) {
      setSelectedServiceId(initialService.id);
    }
  }, [initialService]);

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const selectedArtisan = ARTISANS.find((a) => a.id === selectedArtisanId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm({
      serviceId: selectedServiceId,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      fullName,
      phone,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const randomCode = 'UE-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(randomCode);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFullName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  const whatsAppLink = buildWhatsAppLink(WHATSAPP_PHONE_RAW, {
    serviceName: selectedService.title,
    barberName: selectedArtisan ? selectedArtisan.name : 'First Available Master Barber',
    date: selectedDate,
    timeSlot: selectedTimeSlot,
    clientName: fullName || 'Valued Client',
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1c1b1b] border border-[#e9c176]/30 w-full max-w-2xl max-h-[92vh] overflow-y-auto pointer-events-auto p-6 sm:p-8 text-left relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close reservation modal"
                className="absolute top-5 right-5 p-2 text-[#9a8f80] hover:text-[#e9c176] transition-colors"
              >
                <X className="w-5 h-5 stroke-[1.75]" />
              </button>

              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Title */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold mb-1">
                      PRIVATE APPOINTMENT
                    </p>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#fdfbf7] font-normal tracking-tight">
                      Reserve Grooming Ritual
                    </h2>
                    <p className="text-xs sm:text-sm text-[#9a8f80] mt-1 font-sans">
                      Select your desired treatment, master artisan, and preferred private consultation window.
                    </p>
                  </div>

                  {/* 1. Service Selection */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] text-[#e5e2e1] font-semibold mb-2 font-sans">
                      1. Select Ritual
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SERVICES.map((service) => (
                        <button
                          type="button"
                          key={service.id}
                          onClick={() => setSelectedServiceId(service.id)}
                          className={`p-3 text-left border transition-all ${
                            selectedServiceId === service.id
                              ? 'border-[#e9c176] bg-[#e9c176]/10 text-[#fdfbf7]'
                              : 'border-[rgba(253,251,247,0.08)] bg-[#161616] text-[#9a8f80] hover:border-[#e9c176]/40'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <span className="font-serif text-sm text-[#fdfbf7] font-medium block">
                              {service.title}
                            </span>
                            <span className="font-serif text-sm text-[#e9c176]">
                              ₹{service.priceINR}
                            </span>
                          </div>
                          <span className="text-[10px] uppercase tracking-[0.12em] text-[#9a8f80] block mt-1 font-sans">
                            {service.duration}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Master Artisan Selection */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] text-[#e5e2e1] font-semibold mb-2 font-sans">
                      2. Master Blade Artisan
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedArtisanId('any')}
                        className={`p-2.5 text-center border transition-all text-xs font-sans ${
                          selectedArtisanId === 'any'
                            ? 'border-[#e9c176] bg-[#e9c176]/15 text-[#e9c176] font-semibold'
                            : 'border-[rgba(253,251,247,0.08)] bg-[#161616] text-[#9a8f80]'
                        }`}
                      >
                        First Available
                      </button>
                      {ARTISANS.map((artisan) => (
                        <button
                          type="button"
                          key={artisan.id}
                          onClick={() => setSelectedArtisanId(artisan.id)}
                          className={`p-2.5 text-center border transition-all text-xs font-sans ${
                            selectedArtisanId === artisan.id
                              ? 'border-[#e9c176] bg-[#e9c176]/15 text-[#e9c176] font-semibold'
                              : 'border-[rgba(253,251,247,0.08)] bg-[#161616] text-[#9a8f80]'
                          }`}
                        >
                          {artisan.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. Date & Time Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-[#e5e2e1] font-semibold mb-2 font-sans">
                        3. Appointment Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-[#161616] border border-[rgba(253,251,247,0.15)] focus:border-[#e9c176] p-2.5 text-xs text-[#fdfbf7] outline-none font-sans"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.16em] text-[#e5e2e1] font-semibold mb-2 font-sans">
                        4. Consultation Window
                      </label>
                      <select
                        value={selectedTimeSlot}
                        onChange={(e) => setSelectedTimeSlot(e.target.value)}
                        className="w-full bg-[#161616] border border-[rgba(253,251,247,0.15)] focus:border-[#e9c176] p-2.5 text-xs text-[#fdfbf7] outline-none font-sans"
                        required
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot} className="bg-[#1c1b1b]">
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 4. Guest Details */}
                  <div className="space-y-3 pt-2 border-t border-[rgba(253,251,247,0.08)]">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-[#e5e2e1] font-semibold font-sans">
                      5. Guest Information
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          placeholder="Full Name *"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-[#161616] border border-[rgba(253,251,247,0.15)] focus:border-[#e9c176] p-3 text-xs text-[#fdfbf7] outline-none font-sans placeholder:text-[#6d665b]"
                          required
                        />
                        {errors.fullName && (
                          <p className="text-[10px] text-red-400 mt-1 font-sans">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <input
                          type="tel"
                          placeholder="Contact Telephone *"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-[#161616] border border-[rgba(253,251,247,0.15)] focus:border-[#e9c176] p-3 text-xs text-[#fdfbf7] outline-none font-sans placeholder:text-[#6d665b]"
                          required
                        />
                        {errors.phone && (
                          <p className="text-[10px] text-red-400 mt-1 font-sans">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <textarea
                      placeholder="Special Requests (e.g. single-malt whiskey pour, eucalyptus compress preference, or quiet appointment)"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={2}
                      className="w-full bg-[#161616] border border-[rgba(253,251,247,0.15)] focus:border-[#e9c176] p-3 text-xs text-[#fdfbf7] outline-none font-sans placeholder:text-[#6d665b]"
                    />
                  </div>

                  {/* Submission Buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-[#e9c176] hover:bg-[#fdfbf7] text-[#131313] py-3.5 px-6 font-sans font-bold text-xs uppercase tracking-[0.16em] transition-all flex items-center justify-center space-x-2"
                    >
                      <span>CONFIRM RESERVATION</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#e9c176]/40 hover:border-[#e9c176] bg-[#161616] text-[#e9c176] py-3.5 px-4 font-sans text-xs uppercase tracking-[0.14em] transition-all flex items-center justify-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>RESERVE VIA WHATSAPP</span>
                    </a>
                  </div>
                </form>
              ) : (
                /* Success Confirmation Screen */
                <div className="text-center py-6 space-y-6">
                  <div className="w-16 h-16 border-2 border-[#e9c176] bg-[#161616] flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-[#e9c176]" />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold mb-1">
                      ATELIER RESERVATION CONFIRMED
                    </p>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#fdfbf7] font-normal">
                      We Look Forward to Welcoming You
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9a8f80] mt-2 font-sans max-w-md mx-auto">
                      Your private session has been reserved. A confirmation message has been queued for your arrival at 452 Mercer St.
                    </p>
                  </div>

                  {/* Receipt Summary Card */}
                  <div className="bg-[#161616] border border-[rgba(253,251,247,0.1)] p-5 text-left max-w-md mx-auto space-y-3 font-sans text-xs">
                    <div className="flex justify-between border-b border-[rgba(253,251,247,0.06)] pb-2">
                      <span className="text-[#9a8f80]">Confirmation Ref:</span>
                      <span className="font-mono text-[#e9c176] font-bold">{confirmationCode}</span>
                    </div>
                    <div className="flex justify-between border-b border-[rgba(253,251,247,0.06)] pb-2">
                      <span className="text-[#9a8f80]">Guest:</span>
                      <span className="text-[#fdfbf7] font-medium">{fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-[rgba(253,251,247,0.06)] pb-2">
                      <span className="text-[#9a8f80]">Ritual:</span>
                      <span className="text-[#fdfbf7] font-medium">{selectedService.title}</span>
                    </div>
                    <div className="flex justify-between border-b border-[rgba(253,251,247,0.06)] pb-2">
                      <span className="text-[#9a8f80]">Artisan Barber:</span>
                      <span className="text-[#fdfbf7]">{selectedArtisan ? selectedArtisan.name : 'First Available Master'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9a8f80]">Schedule:</span>
                      <span className="text-[#e9c176]">{selectedDate} at {selectedTimeSlot}</span>
                    </div>
                  </div>

                  {/* Direct WhatsApp / Call Followup */}
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <a
                      href={whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-[#131313] py-3 px-4 font-sans text-xs uppercase tracking-[0.14em] font-semibold transition-all flex items-center justify-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>SEND TO WHATSAPP (+91 9034044077)</span>
                    </a>

                    <button
                      onClick={handleReset}
                      className="border border-[rgba(253,251,247,0.15)] text-[#fdfbf7] hover:border-[#e9c176] py-3 px-6 text-xs uppercase tracking-[0.14em] font-sans transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

/**
 * Urban Edge Studio - Booking & Studio Business Logic
 */

export interface ServiceItem {
  id: string;
  title: string;
  duration: string;
  category: string;
  priceINR: number;
  priceUSD: number;
  description: string;
  highlight: string;
  image: string;
  isSignature?: boolean;
}

export interface ArtisanBarber {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  avatar: string;
}

export const CALL_PHONE_RAW = "9779178559";
export const WHATSAPP_PHONE_RAW = "9034044077";

export const FORMATTED_CALL_PHONE = "+91 97791 78559";
export const FORMATTED_WHATSAPP_PHONE = "+91 90340 44077";

export const STUDIO_ADDRESS = "452 Mercer St, Soho, New York, NY 10013";

export const SERVICES: ServiceItem[] = [
  {
    id: "bespoke-haircut",
    title: "Signature Bespoke Haircut",
    duration: "45 MINUTES • WASH & STYLING",
    category: "Haircut",
    priceINR: 65,
    priceUSD: 65,
    description: "Precision scissor and clipper execution customized to head shape and hair growth vectors. Finished with botanical rinse and tactile matte clay styling.",
    highlight: "Includes scalp massage",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "straight-razor-shave",
    title: "Hot Towel Straight Razor Shave",
    duration: "40 MINUTES • TRADITIONAL BLADE",
    category: "Shave",
    priceINR: 50,
    priceUSD: 50,
    description: "Steamed eucalyptus compress infusions, badger bristle lathering with sandalwood cream, dual-pass Japanese steel razor work, and cold witch-hazel mist.",
    highlight: "Cedarwood astringent finish",
    image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "beard-architecture",
    title: "Beard Architecture & Conditioning",
    duration: "35 MINUTES • SCULPT & HYDRATE",
    category: "Beard",
    priceINR: 45,
    priceUSD: 45,
    description: "Geometric jawline contouring, cheek line straight razor clean-up, deep argan oil steam immersion, and organic wax brush treatment.",
    highlight: "Hot steam conditioning",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "executive-package",
    title: "The Executive Grooming Package",
    duration: "85 MINUTES • COMPLETE RITUAL",
    category: "Package",
    priceINR: 130,
    priceUSD: 130,
    description: "The ultimate atelier experience: Bespoke Haircut, Hot Towel Straight Razor Shave or Full Beard Sculpture, refreshing clay mask, and artisanal single-malt whiskey pour.",
    highlight: "Complimentary Beverage",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80",
    isSignature: true,
  },
];

export const ARTISANS: ArtisanBarber[] = [
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Master Blade Artisan & Founder",
    experience: "14 Years Experience",
    specialty: "Architectural Tapering & Straight Razor",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "julian-vance",
    name: "Julian Vance",
    role: "Senior Texture Specialist",
    experience: "9 Years Experience",
    specialty: "Scissor Geometry & Scissor-Over-Comb",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "marcus-hayes",
    name: "Marcus Hayes",
    role: "Beard & Facial Sculptor",
    experience: "11 Years Experience",
    specialty: "Hot Towel Immersion & Argan Treatment",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
];

export const TIME_SLOTS = [
  "09:30 AM",
  "10:45 AM",
  "11:30 AM",
  "01:15 PM",
  "02:30 PM",
  "03:45 PM",
  "05:00 PM",
  "06:15 PM",
  "07:15 PM",
];

export interface StudioStatus {
  isOpen: boolean;
  message: string;
  todayHours: string;
}

/**
 * Checks if Urban Edge Studio is currently open based on operating schedule
 * Mon-Fri: 09:00 - 20:00
 * Sat: 09:00 - 18:00
 * Sun: 10:00 - 16:00
 */
export function getStudioStatus(date: Date = new Date()): StudioStatus {
  const day = date.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
  const hour = date.getHours() + date.getMinutes() / 60;

  if (day >= 1 && day <= 5) {
    // Mon - Fri
    const isOpen = hour >= 9 && hour < 20;
    return {
      isOpen,
      message: isOpen ? "Open today until 20:00" : "Opens at 09:00 tomorrow",
      todayHours: "09:00 – 20:00",
    };
  } else if (day === 6) {
    // Saturday
    const isOpen = hour >= 9 && hour < 18;
    return {
      isOpen,
      message: isOpen ? "Open today until 18:00" : "Opens at 10:00 Sunday",
      todayHours: "09:00 – 18:00",
    };
  } else {
    // Sunday
    const isOpen = hour >= 10 && hour < 16;
    return {
      isOpen,
      message: isOpen ? "Open today until 16:00" : "Opens at 09:00 Monday",
      todayHours: "10:00 – 16:00",
    };
  }
}

/**
 * Generate a pre-filled WhatsApp link for direct reservation
 */
export function buildWhatsAppLink(
  phone: string = WHATSAPP_PHONE_RAW,
  options?: {
    serviceName?: string;
    barberName?: string;
    date?: string;
    timeSlot?: string;
    clientName?: string;
  }
): string {
  const cleanPhone = phone.replace(/\D/g, "");
  const fullPhone = cleanPhone.startsWith("91") ? cleanPhone : `91${cleanPhone}`;

  if (!options || !options.serviceName) {
    const text = encodeURIComponent(
      "Greetings Urban Edge Studio Concierge. I would like to inquire about reserving a grooming ritual at the Soho atelier."
    );
    return `https://wa.me/${fullPhone}?text=${text}`;
  }

  const text = encodeURIComponent(
    `Greetings Urban Edge Concierge. I wish to book the *${options.serviceName}* with *${options.barberName || "Any Available Master Barber"}* on *${options.date || "Next Available"}* at *${options.timeSlot || "Preferred Slot"}* for guest *${options.clientName || "Valued Client"}*.`
  );
  return `https://wa.me/${fullPhone}?text=${text}`;
}

/**
 * Validates reservation form
 */
export function validateBookingForm(data: {
  serviceId?: string;
  artisanId?: string;
  date?: string;
  timeSlot?: string;
  fullName?: string;
  phone?: string;
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.serviceId) {
    errors.serviceId = "Please select a service or ritual";
  }
  if (!data.date) {
    errors.date = "Please select an appointment date";
  }
  if (!data.timeSlot) {
    errors.timeSlot = "Please select an available time slot";
  }
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name";
  }
  if (!data.phone || data.phone.trim().length < 7) {
    errors.phone = "Please enter a valid phone number";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

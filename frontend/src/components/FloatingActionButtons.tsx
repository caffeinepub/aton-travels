import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/917006946979"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 w-[52px] h-[52px] rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
      >
        <SiWhatsapp className="w-6 h-6" />
      </a>

      {/* Call Now */}
      <a
        href="tel:+917006946979"
        aria-label="Call Now"
        className="w-[52px] h-[52px] rounded-full bg-teal hover:bg-teal-dark text-offwhite flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}

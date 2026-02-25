import { Link } from '@tanstack/react-router';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Tour Packages', path: '/packages' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
];

const services = [
  'Kashmir Valley Tours',
  'Leh Ladakh Adventure',
  'Vaishno Devi Pilgrimage',
  'All India Tours',
  'Taxi & Transport',
  'Hotel Bookings',
  'Flight Bookings',
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'aton-travels');

  return (
    <footer className="bg-teal-dark text-offwhite">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-amber flex items-center justify-center">
                <span className="font-display font-bold text-teal-dark text-sm">AT</span>
              </div>
              <span className="font-display font-bold text-xl text-offwhite">AtoN Travels</span>
            </div>
            <p className="text-offwhite/70 font-body text-sm leading-relaxed mb-5">
              Your trusted travel partner for unforgettable journeys across Kashmir, Ladakh, and all of India. Creating memories that last a lifetime.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-offwhite/10 hover:bg-amber flex items-center justify-center transition-colors duration-200"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-offwhite/10 hover:bg-amber flex items-center justify-center transition-colors duration-200"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-offwhite/10 hover:bg-amber flex items-center justify-center transition-colors duration-200"
              >
                <SiYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-offwhite text-base mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-offwhite/70 hover:text-amber font-body text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-offwhite text-base mb-4 uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-offwhite/70 font-body text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-offwhite text-base mb-4 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <span className="text-offwhite/70 font-body text-sm">
                  Srinagar, Jammu & Kashmir<br />India — 190001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber shrink-0" />
                <a
                  href="tel:+917006946979"
                  className="text-offwhite/70 hover:text-amber font-body text-sm transition-colors duration-200"
                >
                  7006946979
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber shrink-0" />
                <a
                  href="mailto:arsalandezayker@gmail.com"
                  className="text-offwhite/70 hover:text-amber font-body text-sm transition-colors duration-200 break-all"
                >
                  arsalandezayker@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-offwhite/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-offwhite/50 font-body text-xs">
            © {year} AtoN Travels. All rights reserved.
          </p>
          <p className="text-offwhite/50 font-body text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-amber fill-amber" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber hover:text-amber/80 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

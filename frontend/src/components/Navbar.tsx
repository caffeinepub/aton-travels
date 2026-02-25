import { useState, useEffect } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { Menu, X, Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Packages', path: '/packages' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || mobileOpen
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-full bg-teal flex items-center justify-center shadow-sm">
              <span className="font-display font-bold text-offwhite text-sm">AT</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`font-display font-bold text-lg transition-colors duration-300 ${
                  isScrolled || mobileOpen ? 'text-teal-dark' : 'text-offwhite'
                }`}
              >
                AtoN Travels
              </span>
              <span
                className={`font-body text-[10px] uppercase tracking-widest transition-colors duration-300 ${
                  isScrolled || mobileOpen ? 'text-amber' : 'text-amber/90'
                }`}
              >
                Kashmir & Beyond
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md font-body text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-amber'
                    : isScrolled
                    ? 'text-slate-dark hover:text-teal'
                    : 'text-offwhite/90 hover:text-offwhite'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/917006946979"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold font-body transition-all duration-200 ${
                isScrolled
                  ? 'text-green-600 hover:bg-green-50'
                  : 'text-offwhite/90 hover:text-offwhite'
              }`}
            >
              <SiWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="tel:+917006946979"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber text-teal-dark font-semibold font-body text-sm hover:bg-amber-dark transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${
              isScrolled || mobileOpen ? 'text-teal-dark' : 'text-offwhite'
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg font-body text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'bg-teal/10 text-teal font-semibold'
                    : 'text-slate-dark hover:bg-teal/5 hover:text-teal'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
              <a
                href="https://wa.me/917006946979"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-green-500 text-white font-semibold font-body text-sm hover:bg-green-600 transition-colors"
              >
                <SiWhatsapp className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+917006946979"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-amber text-teal-dark font-semibold font-body text-sm hover:bg-amber-dark transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now: 7006946979
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

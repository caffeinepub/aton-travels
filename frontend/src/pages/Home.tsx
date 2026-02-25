import { Link } from '@tanstack/react-router';
import { MapPin, Users, Award, Clock, ChevronRight, Star } from 'lucide-react';
import TestimonialsPreview from '../components/TestimonialsPreview';

const stats = [
  { icon: Award, value: '10+', label: 'Years of Experience' },
  { icon: Users, value: '5000+', label: 'Happy Travelers' },
  { icon: MapPin, value: '50+', label: 'Destinations Covered' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
];

const featuredServices = [
  {
    icon: '🏔️',
    title: 'Tour Packages',
    desc: 'Curated Kashmir, Leh Ladakh & All India tours for every traveler.',
    link: '/packages',
  },
  {
    icon: '🚗',
    title: 'Taxi & Transport',
    desc: 'Comfortable, reliable vehicles with experienced local drivers.',
    link: '/services',
  },
  {
    icon: '🏨',
    title: 'Hotel Bookings',
    desc: 'Handpicked stays from cozy guesthouses to luxury houseboats.',
    link: '/services',
  },
  {
    icon: '✈️',
    title: 'Flight Bookings',
    desc: 'Best fares for domestic and international flights.',
    link: '/services',
  },
];

const featuredPackages = [
  {
    image: '/assets/generated/package-kashmir.dim_600x400.jpg',
    title: 'Kashmir Valley Tour',
    duration: '6 Days / 5 Nights',
    price: 'From ₹18,999',
    badge: 'Most Popular',
  },
  {
    image: '/assets/generated/package-ladakh.dim_600x400.jpg',
    title: 'Leh Ladakh Adventure',
    duration: '8 Days / 7 Nights',
    price: 'From ₹24,999',
    badge: 'Adventure',
  },
  {
    image: '/assets/generated/package-vaishno.dim_600x400.jpg',
    title: 'Vaishno Devi Pilgrimage',
    duration: '4 Days / 3 Nights',
    price: 'From ₹9,999',
    badge: 'Spiritual',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/generated/hero-kashmir.dim_1920x1080.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2 bg-amber/20 backdrop-blur-sm border border-amber/30 rounded-full px-4 py-1.5 mb-6">
            <MapPin className="w-4 h-4 text-amber" />
            <span className="text-amber text-sm font-body font-medium">Jammu & Kashmir, India</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-shadow-lg leading-tight mb-6">
            Your Journey,<br />
            <span className="text-amber">Our Responsibility</span>
          </h1>

          <p className="text-white/85 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 text-shadow leading-relaxed">
            Discover the paradise of Kashmir, the rugged beauty of Leh Ladakh, and the wonders of India with AtoN Travels — your trusted local travel partner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber text-slate-dark font-semibold font-body text-base hover:bg-amber-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Packages <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold font-body text-base hover:bg-white/25 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60">
          <span className="text-xs font-body">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-white/30 rounded-full animate-pulse" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-teal py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="flex justify-center mb-2">
                <Icon className="w-6 h-6 text-amber" />
              </div>
              <div className="font-display text-3xl font-bold text-offwhite">{value}</div>
              <div className="text-offwhite/70 text-sm font-body mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Teaser */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber font-body font-semibold text-sm uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle font-body">
              From curated tour packages to seamless transport — we handle every detail of your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <Link
                key={service.title}
                to={service.link as '/services' | '/packages'}
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-display font-semibold text-lg text-teal mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{service.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-amber text-sm font-semibold font-body group-hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-teal text-teal font-semibold font-body hover:bg-teal hover:text-offwhite transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="section-padding bg-muted/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber font-body font-semibold text-sm uppercase tracking-widest mb-2">
              Top Picks
            </p>
            <h2 className="section-title">Featured Tour Packages</h2>
            <p className="section-subtitle font-body">
              Handcrafted itineraries for every kind of traveler — adventure seekers, families, couples, and pilgrims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPackages.map((pkg) => (
              <div
                key={pkg.title}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-amber text-slate-dark text-xs font-semibold font-body px-3 py-1 rounded-full">
                    {pkg.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-teal mb-1">{pkg.title}</h3>
                  <p className="text-sm text-muted-foreground font-body mb-3">{pkg.duration}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-teal font-bold font-body">{pkg.price}</span>
                    <Link
                      to="/contact"
                      className="px-4 py-2 rounded-full bg-teal text-offwhite text-sm font-semibold font-body hover:bg-teal-dark transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal text-offwhite font-semibold font-body hover:bg-teal-dark transition-all duration-200 shadow-md"
            >
              View All Packages <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <TestimonialsPreview />

      {/* CTA Banner */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/generated/package-ladakh.dim_600x400.jpg')" }}
        />
        <div className="absolute inset-0 bg-teal/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-offwhite mb-4">
            Ready to Plan Your Dream Trip?
          </h2>
          <p className="text-offwhite/80 font-body text-lg mb-8">
            Contact us today and let our experts craft the perfect itinerary for you. No hidden charges, no hassle — just pure travel joy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber text-slate-dark font-semibold font-body hover:bg-amber-dark transition-all duration-200 shadow-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/+919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-500 text-white font-semibold font-body hover:bg-green-600 transition-all duration-200 shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from '@tanstack/react-router';
import { Clock, CheckCircle, ChevronRight, Star } from 'lucide-react';

const packages = [
  {
    id: 1,
    image: '/assets/generated/package-kashmir.dim_600x400.jpg',
    title: 'Kashmir Valley Tour',
    duration: '6 Days / 5 Nights',
    badge: 'Most Popular',
    badgeColor: 'bg-amber text-slate-dark',
    price: '₹18,999',
    priceNote: 'per person',
    rating: 4.9,
    reviews: 128,
    highlights: [
      'Shikara ride on Dal Lake',
      'Gulmarg Gondola cable car',
      'Pahalgam valley excursion',
      'Mughal Gardens visit',
      'Houseboat stay experience',
    ],
    description:
      'Experience the paradise on earth — from the serene Dal Lake to the snow-capped peaks of Gulmarg. This comprehensive Kashmir tour covers all the iconic destinations.',
  },
  {
    id: 2,
    image: '/assets/generated/package-ladakh.dim_600x400.jpg',
    title: 'Leh Ladakh Adventure',
    duration: '8 Days / 7 Nights',
    badge: 'Adventure',
    badgeColor: 'bg-teal text-offwhite',
    price: '₹24,999',
    priceNote: 'per person',
    rating: 4.8,
    reviews: 96,
    highlights: [
      'Pangong Tso Lake visit',
      'Nubra Valley & sand dunes',
      'Khardung La Pass (world\'s highest motorable road)',
      'Monasteries tour (Hemis, Thiksey)',
      'Magnetic Hill experience',
    ],
    description:
      'Conquer the roof of the world! This adventure-packed Leh Ladakh tour takes you through dramatic mountain passes, pristine lakes, and ancient monasteries.',
  },
  {
    id: 3,
    image: '/assets/generated/package-vaishno.dim_600x400.jpg',
    title: 'Vaishno Devi Pilgrimage',
    duration: '4 Days / 3 Nights',
    badge: 'Spiritual',
    badgeColor: 'bg-amber text-slate-dark',
    price: '₹9,999',
    priceNote: 'per person',
    rating: 4.9,
    reviews: 215,
    highlights: [
      'Vaishno Devi shrine darshan',
      'Katra base camp stay',
      'Bhairon Baba temple visit',
      'Guided trek assistance',
      'Pony/helicopter options available',
    ],
    description:
      'Embark on a sacred journey to the holy shrine of Mata Vaishno Devi. Our pilgrimage package ensures a comfortable and spiritually fulfilling experience for devotees.',
  },
  {
    id: 4,
    image: '/assets/generated/package-india.dim_600x400.jpg',
    title: 'All India Grand Tour',
    duration: '15 Days / 14 Nights',
    badge: 'Premium',
    badgeColor: 'bg-teal text-offwhite',
    price: '₹45,999',
    priceNote: 'per person',
    rating: 4.7,
    reviews: 54,
    highlights: [
      'Taj Mahal & Agra Fort',
      'Rajasthan forts & palaces',
      'Kerala backwaters cruise',
      'Goa beaches & heritage',
      'Delhi heritage tour',
    ],
    description:
      'Discover the incredible diversity of India in one grand tour. From the Himalayan valleys to tropical beaches, this premium package covers India\'s most iconic destinations.',
  },
  {
    id: 5,
    title: 'Kashmir Honeymoon Special',
    duration: '7 Days / 6 Nights',
    badge: 'Romantic',
    badgeColor: 'bg-pink-500 text-white',
    price: '₹22,999',
    priceNote: 'per couple',
    rating: 5.0,
    reviews: 87,
    image: '/assets/generated/gallery-01.dim_800x600.jpg',
    highlights: [
      'Luxury houseboat stay on Dal Lake',
      'Private shikara sunset ride',
      'Gulmarg snow activities',
      'Candlelight dinner arrangements',
      'Couple spa & wellness',
    ],
    description:
      'Make your honeymoon truly magical in the paradise of Kashmir. Specially curated romantic experiences, luxury stays, and private moments in the most beautiful settings.',
  },
  {
    id: 6,
    title: 'Gulmarg Winter Wonderland',
    duration: '5 Days / 4 Nights',
    badge: 'Winter Special',
    badgeColor: 'bg-blue-500 text-white',
    price: '₹16,999',
    priceNote: 'per person',
    rating: 4.8,
    reviews: 63,
    image: '/assets/generated/gallery-03.dim_800x600.jpg',
    highlights: [
      'Skiing & snowboarding lessons',
      'Gondola ride to Apharwat Peak',
      'Snow sledging & snowball fights',
      'Cozy bonfire evenings',
      'Winter photography sessions',
    ],
    description:
      'Experience the magic of Gulmarg in winter — Asia\'s premier ski destination. Perfect for adventure lovers and families looking for a snowy escape.',
  },
];

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3.5 h-3.5 ${star <= Math.floor(rating) ? 'text-amber fill-amber' : 'text-muted-foreground'}`}
          />
        ))}
      </div>
      <span className="text-xs text-muted-foreground font-body">
        {rating} ({reviews} reviews)
      </span>
    </div>
  );
}

export default function TourPackages() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 px-4 bg-teal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-amber font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Explore & Discover
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-offwhite mb-4">
            Tour Packages
          </h1>
          <p className="text-offwhite/80 font-body text-lg max-w-2xl mx-auto">
            Handcrafted itineraries for every kind of traveler — from spiritual seekers to adventure enthusiasts.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className={`absolute top-3 left-3 text-xs font-semibold font-body px-3 py-1 rounded-full ${pkg.badgeColor}`}>
                    {pkg.badge}
                  </span>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <Clock className="w-3.5 h-3.5 text-amber" />
                    <span className="text-white text-xs font-body">{pkg.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-xl text-teal mb-2">{pkg.title}</h3>
                  <StarRating rating={pkg.rating} reviews={pkg.reviews} />
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mt-3 mb-4">
                    {pkg.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {pkg.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs font-body text-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <li className="text-xs text-muted-foreground font-body pl-5">
                        +{pkg.highlights.length - 3} more inclusions
                      </li>
                    )}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="font-display text-2xl font-bold text-teal">{pkg.price}</span>
                      <span className="text-xs text-muted-foreground font-body ml-1">{pkg.priceNote}</span>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-amber text-slate-dark text-sm font-semibold font-body hover:bg-amber-dark transition-colors duration-200"
                    >
                      Book Now <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-16 px-4 bg-teal-light/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-teal mb-4">
            Don't See What You're Looking For?
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-8">
            We specialize in custom travel planning. Tell us your dream destination, budget, and travel dates — we'll craft the perfect itinerary just for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal text-offwhite font-semibold font-body hover:bg-teal-dark transition-all duration-200 shadow-md"
          >
            Request Custom Package
          </Link>
        </div>
      </section>
    </>
  );
}

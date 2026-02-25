import { Link } from '@tanstack/react-router';
import { Mountain, Car, Hotel, Plane, Map, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Mountain,
    title: 'Tour Packages',
    subtitle: 'Kashmir, Leh Ladakh & All India',
    description:
      'Explore our carefully curated tour packages covering the stunning valleys of Kashmir, the rugged landscapes of Leh Ladakh, the spiritual trails of Vaishno Devi, and iconic destinations across India. Each package is designed to offer the best experiences within your budget.',
    features: [
      'Kashmir Valley Tours (Dal Lake, Gulmarg, Pahalgam)',
      'Leh Ladakh Adventure (Pangong Lake, Nubra Valley)',
      'Vaishno Devi Pilgrimage packages',
      'All India tours (Rajasthan, Kerala, Goa & more)',
      'Honeymoon & family packages',
      'Group tour discounts available',
    ],
    color: 'bg-teal/10',
    iconColor: 'text-teal',
    badge: 'Most Popular',
  },
  {
    icon: Car,
    title: 'Taxi & Transport Services',
    subtitle: 'Comfortable & Reliable',
    description:
      'Travel in comfort with our fleet of well-maintained vehicles and experienced local drivers. Whether you need airport transfers, sightseeing trips, or long-distance travel across Jammu & Kashmir, we have the right vehicle for every journey.',
    features: [
      'Airport & railway station transfers',
      'Sightseeing tours in Srinagar, Gulmarg, Pahalgam',
      'Leh Ladakh road trips with experienced drivers',
      'AC sedans, SUVs, and tempo travellers',
      'Outstation taxi services across J&K',
      '24/7 availability for emergencies',
    ],
    color: 'bg-amber-light/50',
    iconColor: 'text-amber-dark',
    badge: null,
  },
  {
    icon: Hotel,
    title: 'Hotel Bookings',
    subtitle: 'Handpicked Stays',
    description:
      'From luxurious houseboats on Dal Lake to cozy mountain guesthouses and premium hotels, we offer a wide range of accommodation options to suit every budget and preference. All our partner properties are personally vetted for quality and comfort.',
    features: [
      'Luxury houseboats on Dal Lake',
      'Heritage hotels in Srinagar',
      'Mountain resorts in Gulmarg & Pahalgam',
      'Budget guesthouses for backpackers',
      'Camps and glamping in Leh Ladakh',
      'Best rate guarantee',
    ],
    color: 'bg-teal/10',
    iconColor: 'text-teal',
    badge: null,
  },
  {
    icon: Plane,
    title: 'Flight Bookings',
    subtitle: 'Best Fares Guaranteed',
    description:
      'Let us handle your flight bookings and get the best available fares for domestic and international routes. We compare prices across airlines to ensure you travel at the most competitive rates, with flexible options for changes and cancellations.',
    features: [
      'Domestic flights across India',
      'International flight bookings',
      'Group booking discounts',
      'Flexible date search for best prices',
      'Assistance with check-in and boarding',
      'Travel insurance add-ons available',
    ],
    color: 'bg-amber-light/50',
    iconColor: 'text-amber-dark',
    badge: null,
  },
  {
    icon: Map,
    title: 'Custom Travel Planning',
    subtitle: 'Tailored Just for You',
    description:
      'Have a specific destination in mind or a unique travel dream? Our expert travel planners will craft a completely personalized itinerary based on your interests, budget, travel dates, and group size. No two trips are the same — yours will be uniquely yours.',
    features: [
      'One-on-one consultation with travel experts',
      'Fully customized day-by-day itineraries',
      'Budget planning and cost optimization',
      'Special arrangements for honeymoons & anniversaries',
      'Corporate and MICE travel planning',
      'Adventure and trekking trip planning',
    ],
    color: 'bg-teal/10',
    iconColor: 'text-teal',
    badge: 'New',
  },
];

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 px-4 bg-teal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-amber font-body font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-offwhite mb-4">
            Our Services
          </h1>
          <p className="text-offwhite/80 font-body text-lg max-w-2xl mx-auto">
            Comprehensive travel services designed to make your journey seamless, comfortable, and unforgettable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, subtitle, description, features, color, iconColor, badge }) => (
              <div
                key={title}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border flex flex-col"
              >
                <div className={`${color} p-6`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-card flex items-center justify-center shadow-xs">
                      <Icon className={`w-7 h-7 ${iconColor}`} />
                    </div>
                    {badge && (
                      <span className="bg-amber text-slate-dark text-xs font-semibold font-body px-3 py-1 rounded-full">
                        {badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-xl text-teal mb-1">{title}</h3>
                  <p className="text-amber-dark font-body text-sm font-medium">{subtitle}</p>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
                    {description}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm font-body text-foreground">
                        <ChevronRight className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full text-center py-3 rounded-full bg-teal text-offwhite font-semibold font-body text-sm hover:bg-teal-dark transition-colors duration-200 mt-auto"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-amber-light/40">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-teal mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-8">
            Talk to our travel experts and we'll help you plan the perfect trip from scratch.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal text-offwhite font-semibold font-body hover:bg-teal-dark transition-all duration-200 shadow-md"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

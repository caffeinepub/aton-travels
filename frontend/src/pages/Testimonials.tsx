import { Star, Quote } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Delhi, India',
    rating: 5,
    trip: 'Kashmir Valley Tour',
    date: 'October 2025',
    review:
      'AtoN Travels made our Kashmir honeymoon absolutely magical! The houseboat stay on Dal Lake, the shikara rides at sunrise, the Mughal Gardens — every detail was perfectly arranged. The team was responsive, professional, and genuinely caring. We felt like royalty throughout the trip. Highly recommend to every couple!',
    avatar: 'R',
  },
  {
    id: 2,
    name: 'Priya & Vikram Nair',
    location: 'Bangalore, India',
    rating: 5,
    trip: 'Leh Ladakh Adventure',
    date: 'August 2025',
    review:
      'Our Leh Ladakh adventure with AtoN was beyond expectations. The team handled all permits, accommodation, and transport seamlessly. The Pangong Lake views were breathtaking — we still can\'t believe we were there! The driver was experienced with mountain roads and the guide was incredibly knowledgeable. 10/10 experience!',
    avatar: 'P',
  },
  {
    id: 3,
    name: 'Sunita Mehta',
    location: 'Mumbai, India',
    rating: 5,
    trip: 'Vaishno Devi Pilgrimage',
    date: 'November 2025',
    review:
      'Traveled with my family of 6 for Vaishno Devi pilgrimage. AtoN Travels arranged everything from Jammu to the shrine. The guides were knowledgeable and very supportive, especially with our elderly parents. The accommodation was clean and comfortable. A truly blessed and well-organized journey.',
    avatar: 'S',
  },
  {
    id: 4,
    name: 'Arjun Kapoor',
    location: 'Pune, India',
    rating: 5,
    trip: 'Leh Ladakh Adventure',
    date: 'July 2025',
    review:
      'As a solo traveler, I was a bit nervous about Ladakh, but AtoN Travels made me feel completely safe and well-taken care of. The itinerary was perfectly paced — enough time at each location without feeling rushed. Khardung La Pass was a highlight I\'ll never forget. Already planning my next trip with them!',
    avatar: 'A',
  },
  {
    id: 5,
    name: 'Deepika & Rohan Singh',
    location: 'Hyderabad, India',
    rating: 5,
    trip: 'Kashmir Honeymoon Special',
    date: 'September 2025',
    review:
      'We booked the honeymoon package and it was absolutely perfect. The luxury houseboat was stunning, the private shikara ride at sunset was incredibly romantic, and the candlelight dinner arrangements were beyond our expectations. AtoN Travels truly understands how to make special moments unforgettable.',
    avatar: 'D',
  },
  {
    id: 6,
    name: 'Kavita Joshi',
    location: 'Jaipur, India',
    rating: 4,
    trip: 'All India Grand Tour',
    date: 'December 2025',
    review:
      'Booked the All India Grand Tour for our family of 4. The itinerary was well-planned covering Rajasthan, Kerala, and Goa. The hotels were excellent and the local guides at each destination were very informative. Minor hiccup with one flight connection but the team resolved it quickly. Overall a wonderful experience!',
    avatar: 'K',
  },
  {
    id: 7,
    name: 'Mohammed Farooq',
    location: 'Lucknow, India',
    rating: 5,
    trip: 'Kashmir Valley Tour',
    date: 'June 2025',
    review:
      'Being from Lucknow, I had always dreamed of visiting Kashmir. AtoN Travels turned that dream into reality. The Pahalgam valley was breathtaking, the Gulmarg gondola ride was thrilling, and the local food recommendations were spot on. The team\'s local knowledge made all the difference. Will definitely book again!',
    avatar: 'M',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-amber fill-amber' : 'text-muted-foreground'}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const avgRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 px-4 bg-teal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-amber font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Happy Travelers
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-offwhite mb-4">
            Customer Testimonials
          </h1>
          <p className="text-offwhite/80 font-body text-lg max-w-2xl mx-auto">
            Real stories from real travelers who explored the world with AtoN Travels.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 px-4 bg-amber-light/40 border-b border-border">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          <div>
            <div className="font-display text-4xl font-bold text-teal">{avgRating}</div>
            <div className="flex justify-center mt-1">
              <StarRating rating={5} />
            </div>
            <div className="text-muted-foreground font-body text-sm mt-1">Average Rating</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-border" />
          <div>
            <div className="font-display text-4xl font-bold text-teal">{testimonials.length}+</div>
            <div className="text-muted-foreground font-body text-sm mt-1">Verified Reviews</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-border" />
          <div>
            <div className="font-display text-4xl font-bold text-teal">5000+</div>
            <div className="text-muted-foreground font-body text-sm mt-1">Happy Travelers</div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border flex flex-col"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-teal/20 mb-3" />

                <StarRating rating={t.rating} />

                <p className="mt-4 text-sm text-muted-foreground font-body leading-relaxed italic flex-1">
                  "{t.review}"
                </p>

                <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-teal flex items-center justify-center shrink-0">
                    <span className="text-offwhite font-display font-bold text-base">
                      {t.avatar}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground font-body truncate">{t.name}</p>
                    <p className="text-xs text-muted-foreground font-body">{t.location}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-amber font-body font-medium bg-amber-light px-2 py-1 rounded-full block">
                      {t.trip}
                    </span>
                    <span className="text-xs text-muted-foreground font-body mt-1 block">{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-teal-light/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-teal mb-4">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-8">
            Join thousands of happy travelers who have explored Kashmir and beyond with AtoN Travels.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal text-offwhite font-semibold font-body hover:bg-teal-dark transition-all duration-200 shadow-md"
          >
            Plan Your Trip Today
          </Link>
        </div>
      </section>
    </>
  );
}

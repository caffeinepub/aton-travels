import { Star } from 'lucide-react';

const previewTestimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Delhi, India',
    rating: 5,
    review:
      'AtoN Travels made our Kashmir honeymoon absolutely magical! The houseboat stay on Dal Lake, the shikara rides at sunrise — every detail was perfectly arranged. Highly recommend!',
    trip: 'Kashmir Valley Tour',
  },
  {
    id: 2,
    name: 'Priya & Vikram Nair',
    location: 'Bangalore, India',
    rating: 5,
    review:
      'Our Leh Ladakh adventure with AtoN was beyond expectations. The team handled all permits, accommodation, and transport seamlessly. The Pangong Lake views were breathtaking!',
    trip: 'Leh Ladakh Adventure',
  },
  {
    id: 3,
    name: 'Sunita Mehta',
    location: 'Mumbai, India',
    rating: 5,
    review:
      'Traveled with my family of 6 for Vaishno Devi pilgrimage. AtoN Travels arranged everything from Jammu to the shrine. The guides were knowledgeable and very supportive.',
    trip: 'Vaishno Devi Pilgrimage',
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

export default function TestimonialsPreview() {
  return (
    <section className="section-padding bg-teal-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber font-body font-semibold text-sm uppercase tracking-widest mb-2">
            Happy Travelers
          </p>
          <h2 className="section-title">What Our Guests Say</h2>
          <p className="section-subtitle font-body">
            Real experiences from travelers who explored Kashmir and beyond with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <StarRating rating={t.rating} />
              <p className="mt-4 text-sm text-muted-foreground font-body leading-relaxed italic">
                "{t.review}"
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                  <span className="text-teal font-display font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground font-body">{t.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{t.location}</p>
                </div>
                <span className="ml-auto text-xs text-amber font-body font-medium bg-amber-light px-2 py-1 rounded-full">
                  {t.trip}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 text-teal font-semibold font-body hover:text-teal-dark transition-colors border-b-2 border-teal/30 hover:border-teal pb-0.5"
          >
            Read All Reviews →
          </a>
        </div>
      </div>
    </section>
  );
}

import { Shield, Users, Clock, Award, CheckCircle, MapPin } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const trustIndicators = [
  {
    icon: Shield,
    title: 'Licensed & Registered',
    desc: 'Fully licensed travel agency registered with the Government of Jammu & Kashmir.',
  },
  {
    icon: Users,
    title: 'Expert Local Team',
    desc: 'Our team of experienced guides and travel experts know every corner of Kashmir.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    desc: 'Round-the-clock assistance before, during, and after your journey.',
  },
  {
    icon: Award,
    title: '10+ Years Experience',
    desc: 'Over a decade of crafting unforgettable travel experiences across India.',
  },
];

const whyChooseUs = [
  'Personalized itineraries tailored to your preferences',
  'Transparent pricing with no hidden charges',
  'Handpicked hotels, houseboats, and guesthouses',
  'Experienced, multilingual local guides',
  'Emergency support and travel insurance assistance',
  'Eco-friendly and responsible tourism practices',
];

export default function AboutUs() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 px-4 bg-teal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-offwhite blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-amber font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-offwhite mb-4">
            About AtoN Travels
          </h1>
          <p className="text-offwhite/80 font-body text-lg max-w-2xl mx-auto">
            Born in the heart of Kashmir, built on trust, and driven by a passion for travel.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src="/assets/generated/about-team.dim_800x500.jpg"
                  alt="AtoN Travels Team"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-4 bg-amber rounded-xl px-5 py-4 shadow-lg">
                <div className="font-display text-3xl font-bold text-slate-dark">10+</div>
                <div className="text-slate-dark/80 text-sm font-body font-medium">Years of Trust</div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-4">
              <p className="text-amber font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-teal mb-6">
                Your Trusted Travel Partner in Jammu & Kashmir
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-5">
                AtoN Travels was founded with a simple yet powerful vision: to share the breathtaking beauty of Jammu & Kashmir with the world, while ensuring every traveler feels safe, comfortable, and truly cared for. Rooted in the valleys of Kashmir, we bring an insider's knowledge and a heartfelt passion to every journey we plan.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Over the past decade, we have served thousands of happy travelers — from honeymooners discovering the romance of Dal Lake to adventure seekers conquering the high passes of Leh Ladakh, and families on spiritual pilgrimages to Vaishno Devi. Our commitment is simple: <strong className="text-teal">Your Journey, Our Responsibility.</strong>
              </p>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 bg-teal-light/50 rounded-full px-4 py-2">
                  <MapPin className="w-4 h-4 text-teal" />
                  <span className="text-teal text-sm font-body font-medium">Based in Srinagar, J&K</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal text-offwhite font-semibold font-body hover:bg-teal-dark transition-all duration-200 shadow-md"
              >
                Plan Your Trip With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-teal-light/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Our Mission
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-teal mb-6">
            Making Travel Accessible, Safe & Memorable
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            We believe travel has the power to transform lives. Our mission is to make every journey — whether a weekend getaway or a month-long expedition — seamless, enriching, and filled with moments that last a lifetime. We are committed to responsible tourism that benefits local communities and preserves the natural beauty of our homeland.
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Travelers Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border text-center"
              >
                <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-teal" />
                </div>
                <h3 className="font-display font-semibold text-lg text-teal mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-teal text-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-offwhite mb-3">
              Why Choose AtoN Travels?
            </h2>
            <p className="text-offwhite/75 font-body text-lg">
              We go beyond booking — we create experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChooseUs.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white/10 rounded-lg px-5 py-4">
                <CheckCircle className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                <span className="text-offwhite/90 font-body text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

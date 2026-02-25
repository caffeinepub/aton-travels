import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useSubmitInquiry } from '../hooks/useQueries';

interface FormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelDates: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  destination: '',
  travelDates: '',
  message: '',
};

const destinations = [
  'Kashmir Valley Tour',
  'Leh Ladakh Adventure',
  'Vaishno Devi Pilgrimage',
  'All India Grand Tour',
  'Kashmir Honeymoon Special',
  'Gulmarg Winter Wonderland',
  'Custom Itinerary',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const submitInquiry = useSubmitInquiry();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitInquiry.mutateAsync(form);
      setSubmitted(true);
      setForm(initialForm);
    } catch (err) {
      // error handled via mutation state
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 px-4 bg-teal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-amber font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-offwhite mb-4">
            Contact Us
          </h1>
          <p className="text-offwhite/80 font-body text-lg max-w-2xl mx-auto">
            Ready to plan your dream trip? Reach out to us and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section className="py-8 px-4 bg-amber-light/40 border-b border-border">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+917006946979"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-teal text-offwhite font-semibold font-body hover:bg-teal-dark transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Call Now: 7006946979
          </a>
          <a
            href="https://wa.me/917006946979"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-green-500 text-white font-semibold font-body hover:bg-green-600 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <SiWhatsapp className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-teal mb-6">
                  Business Information
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground font-body text-sm">Address</p>
                      <p className="text-muted-foreground font-body text-sm mt-0.5">
                        Srinagar, Jammu & Kashmir<br />India — 190001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground font-body text-sm">Phone</p>
                      <a href="tel:+917006946979" className="text-teal hover:text-teal-dark font-body text-sm mt-0.5 block transition-colors">
                        7006946979
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground font-body text-sm">Email</p>
                      <a href="mailto:arsalandezayker@gmail.com" className="text-teal hover:text-teal-dark font-body text-sm mt-0.5 block transition-colors">
                        arsalandezayker@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground font-body text-sm">Business Hours</p>
                      <p className="text-muted-foreground font-body text-sm mt-0.5">
                        Mon – Sat: 9:00 AM – 7:00 PM<br />
                        Sunday: 10:00 AM – 4:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground font-body text-sm">WhatsApp</p>
                      <a
                        href="https://wa.me/917006946979"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-body text-sm mt-0.5 block transition-colors"
                      >
                        7006946979
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div>
                <h3 className="font-display text-lg font-semibold text-teal mb-3">Find Us</h3>
                <div className="rounded-xl overflow-hidden border border-border shadow-card">
                  <div className="bg-teal-light/30 h-56 flex flex-col items-center justify-center gap-3 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-amber-light/20" />
                    <div className="relative z-10 text-center">
                      <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center mx-auto mb-3 shadow-md">
                        <MapPin className="w-6 h-6 text-offwhite" />
                      </div>
                      <p className="font-display font-semibold text-teal text-base">AtoN Travels</p>
                      <p className="text-muted-foreground font-body text-sm mt-1">Srinagar, J&K, India</p>
                      <a
                        href="https://maps.google.com/?q=Srinagar,Jammu+and+Kashmir,India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-teal text-sm font-semibold font-body hover:text-teal-dark transition-colors border-b border-teal/30"
                      >
                        Open in Google Maps →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl shadow-card border border-border p-8">
                <h2 className="font-display text-2xl font-bold text-teal mb-2">
                  Send Us an Inquiry
                </h2>
                <p className="text-muted-foreground font-body text-sm mb-6">
                  Fill in the form below and our travel experts will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-teal mb-2">
                      Inquiry Submitted!
                    </h3>
                    <p className="text-muted-foreground font-body text-sm max-w-sm">
                      Thank you for reaching out! Our team will contact you within 24 hours to discuss your travel plans.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2 rounded-full border-2 border-teal text-teal font-semibold font-body text-sm hover:bg-teal hover:text-offwhite transition-all duration-200"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold font-body text-foreground mb-1.5">
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors placeholder:text-muted-foreground"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold font-body text-foreground mb-1.5">
                          Email Address <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold font-body text-foreground mb-1.5">
                          Phone Number <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors placeholder:text-muted-foreground"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold font-body text-foreground mb-1.5">
                          Travel Destination <span className="text-destructive">*</span>
                        </label>
                        <select
                          name="destination"
                          value={form.destination}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                        >
                          <option value="">Select destination</option>
                          {destinations.map((d) => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold font-body text-foreground mb-1.5">
                        Preferred Travel Dates
                      </label>
                      <input
                        type="text"
                        name="travelDates"
                        value={form.travelDates}
                        onChange={handleChange}
                        placeholder="e.g., March 15–22, 2026 or flexible"
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors placeholder:text-muted-foreground"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold font-body text-foreground mb-1.5">
                        Message / Special Requirements
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your travel plans, group size, budget, or any special requirements..."
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors placeholder:text-muted-foreground resize-none"
                      />
                    </div>

                    {submitInquiry.isError && (
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                        <AlertCircle className="w-4 h-4 text-destructive shrink-0" />
                        <p className="text-destructive text-sm font-body">
                          Something went wrong. Please try again or contact us directly.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitInquiry.isPending}
                      className="w-full py-3.5 rounded-full bg-teal text-offwhite font-semibold font-body hover:bg-teal-dark transition-all duration-200 shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {submitInquiry.isPending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-offwhite/30 border-t-offwhite rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Submit Inquiry'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useState } from 'react';
import { Camera } from 'lucide-react';
import Lightbox from '../components/Lightbox';

const galleryImages = [
  {
    src: '/assets/generated/gallery-01.dim_800x600.jpg',
    alt: 'Colorful houseboats on Dal Lake at sunrise',
    caption: 'Dal Lake Houseboats, Srinagar',
    category: 'Kashmir',
  },
  {
    src: '/assets/generated/gallery-02.dim_800x600.jpg',
    alt: 'Snow-covered mountain pass in Ladakh',
    caption: 'Mountain Pass, Leh Ladakh',
    category: 'Ladakh',
  },
  {
    src: '/assets/generated/gallery-03.dim_800x600.jpg',
    alt: 'Lush green meadow in Gulmarg',
    caption: 'Gulmarg Meadows, Kashmir',
    category: 'Kashmir',
  },
  {
    src: '/assets/generated/gallery-04.dim_800x600.jpg',
    alt: 'Traditional Kashmiri handicraft market',
    caption: 'Kashmiri Handicraft Market',
    category: 'Culture',
  },
  {
    src: '/assets/generated/gallery-05.dim_800x600.jpg',
    alt: 'Family at Vaishno Devi mountain trail',
    caption: 'Vaishno Devi Pilgrimage Trail',
    category: 'Pilgrimage',
  },
  {
    src: '/assets/generated/gallery-06.dim_800x600.jpg',
    alt: 'Aerial view of Srinagar city',
    caption: 'Srinagar City, Jammu & Kashmir',
    category: 'Kashmir',
  },
];

const categories = ['All', 'Kashmir', 'Ladakh', 'Culture', 'Pilgrimage'];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
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
            Visual Journey
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-offwhite mb-4">
            Photo Gallery
          </h1>
          <p className="text-offwhite/80 font-body text-lg max-w-2xl mx-auto">
            A glimpse into the breathtaking landscapes and vibrant culture of Jammu & Kashmir.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold font-body transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-teal text-offwhite shadow-md'
                    : 'bg-card border border-border text-muted-foreground hover:text-teal hover:border-teal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((image, index) => (
              <div
                key={image.src}
                className="group relative overflow-hidden rounded-xl cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
                onClick={() => setLightboxIndex(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-body text-sm font-medium">{image.caption}</p>
                  <span className="text-amber text-xs font-body mt-0.5">{image.category}</span>
                </div>
                {/* Camera icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground font-body">
              No images in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
}

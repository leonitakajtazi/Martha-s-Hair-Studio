import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold text-brand-primary mb-4">Our Work</h2>
        <p className="text-lg text-brand-text max-w-2xl mx-auto mb-12">
          A glimpse into the transformations we've created.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((image) => {
            if (image.id === 1) {
              return (
                <a
                  key={image.id}
                  href="https://maps.app.goo.gl/nnvsHHYP1A5uzJPL8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View location on Google Maps"
                  className="group relative block overflow-hidden rounded-lg shadow-lg aspect-[3/4]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300"></div>
                </a>
              );
            }
            return (
              <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;


import React from 'react';
import { BUSINESS_INFO, TESTIMONIALS } from '../constants';
import StarRating from './StarRating';
import { QuoteIcon } from './icons/QuoteIcon';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold text-brand-primary mb-4">What Our Clients Say</h2>
        <div className="flex justify-center items-center space-x-2 mb-12">
            <StarRating rating={BUSINESS_INFO.rating} />
            <span className="text-brand-text font-medium">Based on {BUSINESS_INFO.reviews} reviews</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-left relative">
              <QuoteIcon className="absolute top-4 right-4 w-12 h-12 text-brand-secondary/50" />
              <p className="text-brand-text mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-bold text-brand-primary">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

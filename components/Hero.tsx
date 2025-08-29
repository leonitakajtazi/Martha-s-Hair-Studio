
import React from 'react';
import { BUSINESS_INFO } from '../constants';
import StarRating from './StarRating';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/66e59d7b092c7078b3e6ea2b/47e7ab52-4339-4e28-be28-ccd4d5b3dc9c/new+side+2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-center text-white px-6 z-10">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-wide">
          Experience the Art of Hair
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
          At Martha's Hair Studio, we blend creativity with expertise to craft the perfect look for you.
        </p>
        <div className="flex justify-center items-center space-x-4 mb-8">
            <StarRating rating={BUSINESS_INFO.rating} />
            <span className="text-brand-secondary">{BUSINESS_INFO.rating} stars from {BUSINESS_INFO.reviews} reviews</span>
        </div>
        <a href="#contact" className="bg-brand-primary text-white text-lg px-10 py-4 rounded-full hover:bg-opacity-90 transition-all font-bold shadow-lg">
          Book an Appointment
        </a>
      </div>
    </section>
  );
};

export default Hero;

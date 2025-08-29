
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="wow-image-wrapper">
             <img src="https://img.freepik.com/premium-photo/beautiful-long-blond-hair-girl-beauty-salon-after-hair-care-view-from-back-hairdresser_217290-1053.jpg" alt="Martha, the salon owner" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold text-brand-primary mb-4">Welcome to Our Studio</h2>
            <p className="text-lg text-brand-text mb-6 leading-relaxed">
              Nestled in the heart of New York, Martha's Hair Studio is a sanctuary of style and relaxation. Founded by Martha, a passionate stylist with over 15 years of experience, our studio is dedicated to providing personalized hair care in a warm and inviting environment.
            </p>
            <p className="text-lg text-brand-text leading-relaxed">
              We believe that a great hairstyle is more than just a cut; it's a form of self-expression. Our mission is to work with you to create a look that not only enhances your natural beauty but also reflects your unique personality. We use only the highest quality products to ensure your hair stays healthy, vibrant, and beautiful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

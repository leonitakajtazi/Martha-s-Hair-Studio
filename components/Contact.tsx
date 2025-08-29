
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  const addressQuery = encodeURIComponent(BUSINESS_INFO.address);
  // Use a Google Maps embed URL that does not require an API key.
  const mapSrc = `https://maps.google.com/maps?q=${addressQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-brand-primary mb-4">Visit Us or Get in Touch</h2>
          <p className="text-lg text-brand-text max-w-2xl mx-auto">We're looking forward to welcoming you to our studio.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-brand-background p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-brand-primary mb-6">Contact Information</h3>
            <div className="space-y-4 text-lg">
              <p>
                <strong className="block text-brand-text">Address:</strong>
                <a href={BUSINESS_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">{BUSINESS_INFO.address}</a>
              </p>
              <p>
                <strong className="block text-brand-text">Phone:</strong>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-brand-primary hover:underline">{BUSINESS_INFO.phoneDisplay}</a>
              </p>
              <div>
                <strong className="block text-brand-text mb-2">Hours:</strong>
                <ul className="list-disc list-inside text-brand-text">
                  <li>Tuesday - Friday: 10am - 7pm</li>
                  <li>Saturday: 9am - 5pm</li>
                  <li>Sunday & Monday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={mapSrc}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Martha's Hair Studio"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

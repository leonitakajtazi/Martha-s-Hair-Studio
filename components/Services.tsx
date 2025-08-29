import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

// FIX: Updated ServiceCard to handle the icon as a component.
// It now creates an instance of the icon component and passes the necessary className.
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-transform transform hover:-translate-y-2">
      <div className="inline-block p-4 bg-brand-secondary rounded-full mb-4">
        <Icon className="w-10 h-10 text-brand-primary" />
      </div>
      <h3 className="text-2xl font-serif font-bold text-brand-primary mb-2">{service.name}</h3>
      <p className="text-brand-text mb-4">{service.description}</p>
      <p className="text-lg font-bold text-brand-accent">{service.price}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold text-brand-primary mb-4">Our Services</h2>
        <p className="text-lg text-brand-text max-w-2xl mx-auto mb-12">
          We offer a wide range of services to cater to your every hair need.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

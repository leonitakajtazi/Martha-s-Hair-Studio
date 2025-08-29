import type React from 'react';

export interface Service {
  name: string;
  description: string;
  price: string;
  // FIX: Changed type from React.ReactElement to a React Function Component that accepts SVG props.
  // This allows passing the component itself instead of a JSX element, avoiding JSX in .ts files.
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

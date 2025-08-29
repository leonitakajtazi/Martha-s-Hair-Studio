import { ScissorsIcon, SparklesIcon, PaintBrushIcon, SunIcon } from './components/icons/ServiceIcons';
import type { Service, GalleryImage, Testimonial } from './types';

export const BUSINESS_INFO = {
  name: "Martha's Hair Studio",
  phone: "+12129288795",
  phoneDisplay: "(212) 928-8795",
  address: "601 W 162nd St, New York, NY 10032, United States",
  rating: 4.7,
  reviews: 95,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=601+W+162nd+St%2C+New+York%2C+NY+10032"
};

// FIX: Replaced JSX elements with component references for icons to prevent errors in a .ts file.
// The rendering of the icon is now handled within the ServiceCard component.
export const SERVICES: Service[] = [
  {
    name: "Haircut & Style",
    description: "A customized haircut designed by your stylist to fit your individual style and preferences.",
    price: "$75+",
    icon: ScissorsIcon,
  },
  {
    name: "Full Color & Highlights",
    description: "Transform your look with our expert coloring services, from subtle shades to bold new hues.",
    price: "$150+",
    icon: PaintBrushIcon,
  },
  {
    name: "Balayage & Ombré",
    description: "Achieve a natural, sun-kissed look with our beautifully blended balayage or ombré.",
    price: "$200+",
    icon: SunIcon,
  },
  {
    name: "Special Occasion Styling",
    description: "Perfect for weddings, proms, or any event where you want to look your absolute best.",
    price: "$95+",
    icon: SparklesIcon,
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
    { id: 1, src: "https://s3-media0.fl.yelpcdn.com/bphoto/-H0IoLp-R0e4EZfioe_ucA/348s.jpg", alt: "Elegant hairstyle with blonde highlights" },
    { id: 2, src: "https://s3-media0.fl.yelpcdn.com/bphoto/7_Q-4ouD0_emozegg2YBEw/348s.jpg", alt: "Chic bob haircut" },
    { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRLYcQd1Nja8n0XhnvzyXKBnB0qG5gyYWn0CsVTPUB4iB_SB9gmNjfFn1c8JT82RnRNI&usqp=CAU", alt: "Long wavy brunette hair" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Martha is a true artist! I walked out feeling like a new person. The salon has such a relaxing and welcoming atmosphere. I can't recommend her enough.",
    author: "Jessica M.",
  },
  {
    quote: "I've been coming to Martha's for years. The quality and care are consistent, and my hair has never been healthier. The best studio in Washington Heights!",
    author: "Sarah L.",
  },
  {
    quote: "Absolutely phenomenal experience. From the consultation to the final result, everything was perfect. They truly listen to what you want.",
    author: "Emily R.",
  },
];
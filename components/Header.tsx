import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNUJzXjYc3un8uGStcJ8PtVE0nLd56GVG_w&s"
              alt={`${BUSINESS_INFO.name} logo`}
              className="h-12 w-auto"
            />
           <span className={`font-serif text-2xl font-bold transition-colors ${isScrolled ? 'text-brand-primary' : 'text-brand-primary'}`}>
  {BUSINESS_INFO.name}
</span>

          </a>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`text-lg font-medium transition-colors ${isScrolled ? 'text-brand-text hover:text-brand-primary' : 'text-white hover:text-brand-secondary'}`}>
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`transition-colors ${isScrolled ?'text-brand-primary' : 'text-brand-secondary'}`}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl">
            <nav className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-brand-text hover:text-brand-primary text-lg p-2 rounded-md transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

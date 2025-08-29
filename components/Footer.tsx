
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <p className="font-serif text-2xl mb-2">{BUSINESS_INFO.name}</p>
        <p className="text-brand-secondary mb-4">{BUSINESS_INFO.address}</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-white hover:text-brand-secondary transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
          <a href="#" className="text-white hover:text-brand-secondary transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.465c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7.177a4.823 4.823 0 100 9.646 4.823 4.823 0 000-9.646zm0 7.853a3.03 3.03 0 110-6.06 3.03 3.03 0 010 6.06zM20.94 5.572a1.448 1.448 0 10-2.897 0 1.448 1.448 0 002.897 0z" clipRule="evenodd" /></svg></a>
        </div>
        <p className="text-brand-secondary text-sm">
          &copy; {new Date().getFullYear()} Martha's Hair Studio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

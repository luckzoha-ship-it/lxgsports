import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenPartnerModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border py-16 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-dark-border">
          {/* Logo & Info column */}
          <div className="space-y-4 md:col-span-2">
            <Link to="/" className="flex items-center gap-1.5 group">
              <span className="font-display font-black text-2xl tracking-wider text-white group-hover:text-brand-red transition-colors duration-300">
                LXG
              </span>
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-red bg-brand-red/10 px-2 py-0.5 rounded border border-brand-red/20 group-hover:bg-brand-red/20 transition-all duration-300">
                events
              </span>
            </Link>
            <p className="text-gray-400 font-sans text-sm max-w-sm leading-relaxed">
              We don’t just create experiences. We build the physical and digital frameworks that move sports, entertainment, and corporate industries forward.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300">
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.482 20.454 12 20.454 12 20.454s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-display text-white text-sm uppercase tracking-widest font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white hover:underline transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <button 
                  onClick={onOpenPartnerModal} 
                  className="text-gray-400 hover:text-white hover:underline transition-colors text-left"
                >
                  Be a Partner
                </button>
              </li>
            </ul>
          </div>

          {/* Company Links Column */}
          <div>
            <h4 className="font-display text-white text-sm uppercase tracking-widest font-bold mb-4">
              Support
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white hover:underline transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-gray-500 font-sans text-xs gap-4">
          <div>
            Copyrights © 2026 LXG Events Pvt. Ltd. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors duration-300"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

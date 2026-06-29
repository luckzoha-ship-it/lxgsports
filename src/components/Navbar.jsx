import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenPartnerModal }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Event Management', path: '/event-management' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-1.5 group">
              <span className="font-display font-black text-2xl tracking-wider text-white group-hover:text-brand-red transition-colors duration-300">
                LXG
              </span>
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-red bg-brand-red/10 px-2 py-0.5 rounded border border-brand-red/20 group-hover:bg-brand-red/20 transition-all duration-300">
                events
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans font-semibold text-sm tracking-wider uppercase transition-all duration-300 relative py-1 hover:text-white ${
                  isActive(link.path)
                    ? 'text-brand-red font-bold'
                    : 'text-gray-400'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenPartnerModal}
              className="group flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-sans font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-md transition-all duration-300 shadow-lg shadow-brand-red/15 hover:shadow-brand-red/25 hover:translate-y-[-1px]"
            >
              Be a Partner
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-bg/95 border-b border-dark-border px-4 pt-2 pb-6 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block font-sans font-semibold text-sm tracking-wider uppercase py-2 border-b border-gray-900 ${
                isActive(link.path) ? 'text-brand-red' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenPartnerModal();
            }}
            className="w-full flex justify-center items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-sans font-bold text-xs uppercase tracking-widest py-3.5 rounded-md transition-all duration-300"
          >
            Be a Partner
            <ArrowRight size={14} />
          </button>
        </div>
      )}
    </nav>
  );
}

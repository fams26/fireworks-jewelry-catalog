'use client';

import { useState } from 'react';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-retro-yellow/30 shadow-retro-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-gradient-to-br from-retro-yellow to-retro-pink rounded-full p-1 shadow-retro-md">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-display font-bold text-retro-purple text-lg">
                ✨
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl sm:text-2xl font-bold bg-gradient-to-r from-retro-purple to-retro-pink bg-clip-text text-transparent">
                Fireworks
              </h1>
              <p className="text-xs text-retro-magenta font-semibold">
                Jewelry Addict
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#catalogo"
              onClick={() => handleScroll('catalogo')}
              className="font-semibold text-retro-purple hover:text-retro-pink transition-colors"
            >
              Catálogo
            </a>
            <a
              href="#nosotros"
              onClick={() => handleScroll('nosotros')}
              className="font-semibold text-retro-purple hover:text-retro-pink transition-colors"
            >
              Sobre Nosotros
            </a>
            <a
              href="#contacto"
              onClick={() => handleScroll('contacto')}
              className="font-semibold text-retro-purple hover:text-retro-pink transition-colors"
            >
              Contacto
            </a>
          </nav>

          {/* Social Icons + Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-green-100 rounded-full transition-all"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
            </a>

            {/* Instagram */}
            <a
              href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-pink-100 rounded-full transition-all"
              title="Instagram"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-retro-pink" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-all"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-retro-purple" />
              ) : (
                <Menu className="w-6 h-6 text-retro-purple" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-retro-yellow/30 space-y-3">
            <button
              onClick={() => handleScroll('catalogo')}
              className="block w-full text-left px-4 py-2 font-semibold text-retro-purple hover:bg-retro-yellow/20 rounded-lg transition-all"
            >
              Catálogo
            </button>
            <button
              onClick={() => handleScroll('nosotros')}
              className="block w-full text-left px-4 py-2 font-semibold text-retro-purple hover:bg-retro-yellow/20 rounded-lg transition-all"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => handleScroll('contacto')}
              className="block w-full text-left px-4 py-2 font-semibold text-retro-purple hover:bg-retro-yellow/20 rounded-lg transition-all"
            >
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

'use client';

import { Instagram, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-gradient-to-b from-cream to-retro-purple/10 border-t-2 border-retro-yellow/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-retro-yellow to-retro-pink rounded-full flex items-center justify-center text-white font-bold">
                ✨
              </div>
              <div>
                <h3 className="font-display font-bold text-retro-purple">
                  Fireworks
                </h3>
                <p className="text-xs text-retro-magenta font-semibold">
                  Addict
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Collares únicos retro-pop. Cada diseño es una explosión de color y
              creatividad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-retro-purple mb-4">
              Menú
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#catalogo"
                  className="text-sm text-gray-600 hover:text-retro-pink transition-colors font-medium"
                >
                  Catálogo
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-sm text-gray-600 hover:text-retro-pink transition-colors font-medium"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-sm text-gray-600 hover:text-retro-pink transition-colors font-medium"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-retro-purple mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-500 transition-colors font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-retro-pink transition-colors font-medium"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Info */}
          <div>
            <h4 className="font-display font-bold text-retro-purple mb-4">
              Compras
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Contáctame directamente por WhatsApp para coordinar tu pedido,
              pago y envío.
            </p>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              className="inline-block bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all"
            >
              Enviar Mensaje
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-retro-yellow/30 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 text-center sm:text-left">
            © {currentYear} <span className="font-bold text-retro-pink">Fireworks Jewelry Addict</span> by
            Pame. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-retro-pink fill-retro-pink" />
            <span>en Costa Rica</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-green-100 hover:bg-green-200 rounded-full transition-all transform hover:scale-110"
            title="WhatsApp"
          >
            <MessageCircle className="w-6 h-6 text-green-600" />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-retro-pink/20 hover:bg-retro-pink/30 rounded-full transition-all transform hover:scale-110"
            title="Instagram"
          >
            <Instagram className="w-6 h-6 text-retro-pink" />
          </a>
        </div>
      </div>
    </footer>
  );
}

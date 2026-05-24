'use client';

import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToCatalog = () => {
    const element = document.getElementById('catalogo');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-retro-yellow/30 via-cream to-retro-pink/20 min-h-screen flex items-center justify-center">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-retro-yellow/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-retro-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-retro-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-block mb-6 sm:mb-8">
          <div className="bg-white border-2 border-retro-pink px-4 py-2 rounded-full">
            <p className="text-xs sm:text-sm font-bold text-retro-pink uppercase tracking-wider">
              ✨ Colecciones Limitadas ✨
            </p>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
          <span className="bg-gradient-to-r from-retro-purple via-retro-pink to-retro-magenta bg-clip-text text-transparent">
            Fireworks Jewelry
          </span>
          <br />
          <span className="text-retro-yellow drop-shadow-lg">Addict</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-base sm:text-xl lg:text-2xl text-retro-purple/80 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Collares únicos, retro-pop y maximalistas. Cada diseño es una explosión de
          <span className="font-bold text-retro-pink"> color y personalidad</span>
          .
        </p>

        {/* CTA Principal */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16">
          <button
            onClick={scrollToCatalog}
            className="bg-gradient-to-r from-retro-pink to-retro-magenta hover:from-retro-magenta hover:to-retro-pink text-white font-display font-bold text-lg px-8 sm:px-12 py-4 rounded-2xl shadow-retro-lg hover:shadow-lg transition-all transform hover:scale-105"
          >
            Ver Catálogo
          </button>
          <a
            href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-retro-purple text-retro-purple hover:bg-retro-purple/10 font-semibold text-lg px-8 sm:px-12 py-4 rounded-2xl transition-all transform hover:scale-105"
          >
            Instagram
          </a>
        </div>

        {/* Características */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {[
            { icon: '✨', title: 'Artesanal', desc: 'Hechos a mano con amor' },
            { icon: '🎨', title: 'Únicos', desc: 'Piezas limitadas' },
            { icon: '🚚', title: 'Envío CR', desc: 'Envíos a todo el país' },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-retro-yellow/50 hover:shadow-retro-md transition-all"
            >
              <div className="text-3xl sm:text-4xl mb-2">{feature.icon}</div>
              <h3 className="font-display font-bold text-retro-purple mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToCatalog}
          className="animate-bounce cursor-pointer"
        >
          <ArrowDown className="w-8 h-8 text-retro-pink mx-auto" />
        </button>
      </div>
    </section>
  );
}

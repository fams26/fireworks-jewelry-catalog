'use client';

import { Truck, Sparkles } from 'lucide-react';

export default function FreeShippingBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-retro-pink/20 via-retro-yellow/20 to-retro-pink/20 border-y-2 border-retro-pink py-4 sm:py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner principal */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative">
          {/* Camión animado izquierda */}
          <div className="hidden sm:flex items-center justify-center animate-bounce">
            <Truck className="w-8 h-8 text-retro-pink" />
          </div>

          {/* Contenido principal */}
          <div className="text-center space-y-2 sm:space-y-0">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-retro-yellow animate-spin" />
              <h3 className="font-display text-lg sm:text-xl font-black text-retro-pink">
                ¡ENVÍO GRATIS!
              </h3>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-retro-yellow animate-spin" />
            </div>
            
            <p className="text-sm sm:text-base font-semibold text-retro-purple">
              En compras mayores a <span className="font-display text-lg text-retro-pink">₡50,000</span>
            </p>

            <p className="text-xs sm:text-sm text-gray-600">
              A todo Costa Rica • Sin requisitos adicionales
            </p>
          </div>

          {/* Camión animado derecha */}
          <div className="hidden sm:flex items-center justify-center animate-bounce" style={{ animationDelay: '0.2s' }}>
            <Truck className="w-8 h-8 text-retro-pink transform -scale-x-100" />
          </div>

          {/* Decoración en móvil */}
          <div className="sm:hidden flex items-center gap-3 mt-2">
            <div className="w-1 h-1 bg-retro-pink rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-retro-yellow rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-1 bg-retro-pink rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Línea animada de fondo */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute w-full h-0.5 top-1/2 bg-gradient-to-r from-transparent via-retro-pink to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

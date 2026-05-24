'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

export default function ImageLightbox({
  images,
  initialIndex = 0,
  onClose,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="dialog"
      aria-modal="true"
    >
      {/* Imagen principal */}
      <div className="relative max-w-4xl max-h-[90vh] flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
        />

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-all backdrop-blur-sm"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Navegación si hay múltiples imágenes */}
        {images.length > 1 && (
          <>
            {/* Botón anterior */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all backdrop-blur-sm group"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Botón siguiente */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all backdrop-blur-sm group"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Indicador de página */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold text-sm">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Miniaturas de navegación */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentIndex
                      ? 'border-white scale-110 shadow-lg'
                      : 'border-white/50 hover:border-white'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Instrucciones */}
      <div className="absolute bottom-4 left-4 text-white/70 text-xs">
        <p>Usa ← → o haz clic para navegar</p>
        <p>Presiona ESC para cerrar</p>
      </div>
    </div>
  );
}

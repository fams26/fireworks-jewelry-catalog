'use client';

import { useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  product: {
    id: string;
    fields: {
      SKU: string;
      Nombre: string;
      Descripción: string;
      Precio: number;
      Materiales: string;
      Dimensiones: string;
      Categoría: string;
      'Foto Principal': Array<{ url: string }>;
      'Foto Modelo'?: Array<{ url: string }>;
      Disponibilidad: string;
    };
  };
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const field = product.fields;
  const mainImage = field['Foto Principal']?.[0]?.url || '/placeholder.jpg';
  const modelImage = field['Foto Modelo']?.[0]?.url;
  const currentImage = isHovered && modelImage ? modelImage : mainImage;

  // Estado de disponibilidad
  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'Disponible':
        return 'bg-retro-lime text-retro-black';
      case 'Bajo Pedido':
        return 'bg-retro-yellow text-retro-black';
      case 'Agotado':
        return 'bg-gray-400 text-white';
      default:
        return 'bg-retro-purple text-white';
    }
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hola Pame 👋\n\nMe interesa el collar: *${field.Nombre}*\nSKU: ${field.SKU}\nPrecio: ₡${field.Precio.toLocaleString('es-CR')}\n\n¿Podrías compartirme más detalles?`
    );
    window.open(
      `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${message}`,
      '_blank'
    );
  };

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div
        className="relative rounded-2xl overflow-hidden bg-white shadow-retro-sm hover:shadow-retro-lg transition-all duration-300 transform hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Imagen del producto */}
        <div className="relative w-full aspect-square bg-gradient-to-br from-retro-yellow/10 to-retro-pink/10 overflow-hidden">
          <img
            src={currentImage}
            alt={field.Nombre}
            className="w-full h-full object-cover transition-all duration-500 ease-out"
          />

          {/* Overlay con acciones */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <button
                onClick={handleWhatsApp}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFavorite(!isFavorite);
                }}
                className={`p-2 rounded-lg font-semibold transition-all ${
                  isFavorite
                    ? 'bg-retro-pink text-white'
                    : 'bg-white/90 text-retro-pink hover:bg-white'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Badge de disponibilidad */}
          <div
            className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${getAvailabilityColor(
              field.Disponibilidad
            )} shadow-lg`}
          >
            {field.Disponibilidad}
          </div>

          {/* Badge "Foto modelo disponible" */}
          {modelImage && isHovered && (
            <div className="absolute top-3 left-3 bg-retro-purple/90 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
              ✓ Probado en modelo
            </div>
          )}
        </div>

        {/* Info del producto */}
        <div className="p-4 sm:p-5">
          {/* SKU */}
          <p className="text-xs text-retro-purple/60 font-semibold uppercase tracking-wider mb-2">
            {field.SKU}
          </p>

          {/* Nombre */}
          <h3 className="font-display text-lg sm:text-xl text-retro-purple font-bold mb-2 line-clamp-2 group-hover:text-retro-pink transition-colors">
            {field.Nombre}
          </h3>

          {/* Descripción */}
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-3">
            {field.Descripción}
          </p>

          {/* Materiales */}
          <p className="text-xs text-retro-purple/70 mb-3 line-clamp-2">
            <span className="font-semibold">Materiales:</span> {field.Materiales}
          </p>

          {/* Dimensiones */}
          <p className="text-xs text-retro-purple/70 mb-4 line-clamp-1">
            <span className="font-semibold">Medidas:</span> {field.Dimensiones}
          </p>

          {/* Precio y CTA */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Precio</p>
              <p className="font-display text-2xl sm:text-3xl text-retro-pink font-bold">
                ₡{field.Precio.toLocaleString('es-CR')}
              </p>
            </div>
            <button
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-retro-pink to-retro-magenta hover:from-retro-magenta hover:to-retro-pink text-white px-4 py-3 rounded-xl font-bold shadow-retro-md hover:shadow-retro-lg transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

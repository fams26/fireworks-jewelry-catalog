'use client';

import { useState } from 'react';
import { X, MessageCircle, Heart, Share2 } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

interface ProductModalProps {
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
      'Foto Detalle'?: Array<{ url: string }>;
      Disponibilidad: string;
    };
  };
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const field = product.fields;

  // Compilar todas las imágenes
  const images = [
    field['Foto Principal']?.[0]?.url,
    field['Foto Modelo']?.[0]?.url,
    field['Foto Detalle']?.[0]?.url,
  ].filter(Boolean);

  const currentImage = images[selectedImageIndex];

  const getAvailabilityStatus = (status: string) => {
    const statusMap: Record<string, { color: string; text: string }> = {
      Disponible: { color: 'bg-retro-lime', text: '✓ Disponible ahora' },
      'Bajo Pedido': { color: 'bg-retro-yellow', text: '⏱ Bajo pedido' },
      Agotado: { color: 'bg-gray-400', text: '✕ Agotado' },
    };
    return statusMap[status] || { color: 'bg-retro-purple', text: status };
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola Pame 👋\n\nMe interesa el collar: *${field.Nombre}*\n\n📋 Detalles:\nSKU: ${field.SKU}\nPrecio: ₡${field.Precio.toLocaleString('es-CR')}\nMateriales: ${field.Materiales}\nMedidas: ${field.Dimensiones}\n\n¿Puedo hacer mi pedido?`
    );
    window.open(
      `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${message}`,
      '_blank'
    );
  };

  const availabilityInfo = getAvailabilityStatus(field.Disponibilidad);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        {/* Modal */}
        <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 flex justify-between items-center p-6 bg-gradient-to-r from-retro-yellow/20 to-retro-pink/20 border-b border-retro-yellow/30">
            <h2 className="font-display text-2xl text-retro-purple font-bold">
              {field.Nombre}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/50 rounded-full transition-all"
            >
              <X className="w-6 h-6 text-retro-purple" />
            </button>
          </div>

          {/* Contenido */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Galería de imágenes */}
            <div className="space-y-4">
              {/* Imagen principal - CLICKEABLE PARA ZOOM */}
              <button
                onClick={() => setShowLightbox(true)}
                className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-retro-yellow/10 to-retro-pink/10 cursor-zoom-in group"
              >
                <img
                  src={currentImage}
                  alt={field.Nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay con instrucción */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white font-semibold bg-black/50 px-4 py-2 rounded-lg">
                    Click para ampliar
                  </span>
                </div>
              </button>

              {/* Miniaturas */}
              {images.length > 1 && (
                <div className="flex gap-3">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === idx
                          ? 'border-retro-pink shadow-retro-md scale-105'
                          : 'border-gray-200 hover:border-retro-purple/50'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Vista ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Badge: "Click para ampliar" */}
              <div className="text-xs text-retro-purple/60 bg-retro-yellow/20 p-2 rounded-lg text-center">
                📸 Haz click en la imagen para verla en tamaño completo
              </div>
            </div>

            {/* Información del producto */}
            <div className="space-y-6">
              {/* SKU y Categoría */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-retro-purple/60 uppercase bg-retro-yellow/30 px-3 py-1 rounded-full">
                  {field.SKU}
                </span>
                <span className="text-xs font-semibold text-retro-purple/70">
                  {field.Categoría}
                </span>
              </div>

              {/* Disponibilidad */}
              <div
                className={`${availabilityInfo.color} text-retro-black px-4 py-3 rounded-xl font-bold text-center`}
              >
                {availabilityInfo.text}
              </div>

              {/* Descripción */}
              <div>
                <h3 className="font-display text-sm font-bold text-retro-purple mb-2">
                  Descripción
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {field.Descripción}
                </p>
              </div>

              {/* Materiales */}
              <div>
                <h3 className="font-display text-sm font-bold text-retro-purple mb-2">
                  Materiales
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {field.Materiales}
                </p>
              </div>

              {/* Dimensiones */}
              <div>
                <h3 className="font-display text-sm font-bold text-retro-purple mb-2">
                  Medidas
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {field.Dimensiones}
                </p>
              </div>

              {/* Precio */}
              <div className="bg-gradient-to-r from-retro-yellow/20 to-retro-pink/20 p-4 rounded-2xl border-2 border-retro-pink/30">
                <p className="text-sm text-gray-600 mb-1">Precio</p>
                <p className="font-display text-4xl text-retro-pink font-bold">
                  ₡{field.Precio.toLocaleString('es-CR')}
                </p>
              </div>

              {/* Botones de acción */}
              <div className="space-y-3 pt-6 border-t border-gray-200">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-display font-bold text-lg flex items-center justify-center gap-3 shadow-retro-lg hover:shadow-lg transition-all transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6" />
                  Contactar por WhatsApp
                </button>

                <div className="flex gap-3">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`flex-1 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                      isFavorite
                        ? 'bg-retro-pink/20 text-retro-pink border-2 border-retro-pink'
                        : 'bg-gray-100 text-gray-700 border-2 border-gray-200 hover:border-retro-pink'
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`}
                    />
                    Favorito
                  </button>

                  <button className="flex-1 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 bg-gray-100 text-gray-700 border-2 border-gray-200 hover:border-retro-purple transition-all">
                    <Share2 className="w-5 h-5" />
                    Compartir
                  </button>
                </div>
              </div>

              {/* Nota de envío */}
              <div className="bg-retro-purple/10 p-4 rounded-xl">
                <p className="text-xs text-retro-purple font-semibold mb-1">
                  💌 ENVÍOS A COSTA RICA
                </p>
                <p className="text-xs text-gray-700">
                  Coordina directamente con Pame por WhatsApp para detalles de
                  envío y formas de pago.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <ImageLightbox
          images={images}
          initialIndex={selectedImageIndex}
          onClose={() => setShowLightbox(false)}
        />
      )}
    </>
  );
}

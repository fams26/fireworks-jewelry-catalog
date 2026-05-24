'use client';

import { useState } from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

interface FeaturedSectionProps {
  products: any[];
  onViewAll: () => void;
}

export default function FeaturedSection({
  products,
  onViewAll,
}: FeaturedSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Mostrar solo los primeros 6 productos como destacados
  const featuredProducts = products.slice(0, 6);

  if (featuredProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-ivory via-cream to-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-retro-yellow" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-retro-purple">
              Nuestros Favoritos
            </h2>
            <Sparkles className="w-6 h-6 text-retro-yellow" />
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Los 6 collares más hermosos seleccionados especialmente para ti.
            Cada uno es una obra de arte retro-pop.
          </p>
        </div>

        {/* Grid de 6 collares (2x3 en desktop, 1 en mobile, 2 en tablet) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {/* Botón "Ver Todos" - Solo si hay más de 6 productos */}
        {products.length > 6 && (
          <div className="flex justify-center">
            <button
              onClick={onViewAll}
              className="group bg-gradient-to-r from-retro-pink to-retro-magenta hover:from-retro-magenta hover:to-retro-pink text-white font-display font-bold text-lg px-8 sm:px-12 py-4 rounded-2xl shadow-retro-lg hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-3"
            >
              Ver todos los collares ({products.length})
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>

      {/* Modal de detalle */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

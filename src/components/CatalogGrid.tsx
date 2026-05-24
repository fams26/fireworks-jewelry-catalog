'use client';

import { useState, useEffect } from 'react';
import { Search, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import FeaturedSection from './FeaturedSection';

interface Product {
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
}

const ITEMS_PER_PAGE = 9; // 9 collares por página (grid 3x3)

export default function CatalogGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [showAllMode, setShowAllMode] = useState(false); // true = mostrar todos, false = destacados
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch productos desde Airtable
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Intentando conectar a Airtable...');
        console.log('Base ID:', process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

        const response = await fetch(
          `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/${process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME}`,
          {
            headers: {
              'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        );

        console.log('Response status:', response.status);

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error de Airtable:', errorData);
          throw new Error('Error fetching products');
        }

        const data = await response.json();
        console.log('Productos recibidos:', data.records);

        setProducts(data.records || []);

        // Extraer categorías únicas
        const uniqueCategories = [
          ...new Set(
            data.records
              .map((r: Product) => r.fields.Categoría)
              .filter(Boolean)
          ),
        ] as string[];
        setCategories(['Todas', ...uniqueCategories]);

        setLoading(false);
      } catch (error) {
        console.error('Error completo:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filtrar productos
  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'Todas') {
      filtered = filtered.filter(
        (p) => p.fields.Categoría === selectedCategory
      );
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.fields.Nombre.toLowerCase().includes(term) ||
          p.fields.Descripción.toLowerCase().includes(term) ||
          p.fields.SKU.toLowerCase().includes(term)
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset a primera página cuando filtran
  }, [searchTerm, selectedCategory, products]);

  // Paginación
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const handleViewAll = () => {
    setShowAllMode(true);
    setCurrentPage(1);
    // Scroll al catálogo
    setTimeout(() => {
      const element = document.getElementById('catalogo-completo');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Si no está en modo "ver todos", mostrar destacados
  if (!showAllMode) {
    return (
      <div className="w-full bg-cream min-h-screen">
        <FeaturedSection products={products} onViewAll={handleViewAll} />

        {/* Botón volver a destacados (solo si hay muchos productos) */}
        {products.length > 6 && (
          <div className="py-8 text-center">
            <button
              onClick={() => setShowAllMode(false)}
              className="text-retro-purple hover:text-retro-pink font-semibold text-sm transition-colors"
            >
              ← Volver a destacados
            </button>
          </div>
        )}
      </div>
    );
  }

  // MODO "VER TODOS" - Catálogo completo con paginación
  return (
    <div id="catalogo-completo" className="w-full bg-cream min-h-screen">
      {/* Header con búsqueda */}
      <div className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-sm border-b border-retro-yellow/30 shadow-retro-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-6">
            {/* Título */}
            <h2 className="font-display text-2xl sm:text-3xl text-retro-purple font-bold">
              Todos los Collares
            </h2>

            {/* Buscador */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-retro-purple w-5 h-5" />
              <input
                type="text"
                placeholder="Busca por nombre, material o SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-retro-purple/30 focus:border-retro-pink focus:outline-none bg-white text-retro-black placeholder-gray-400 transition-all"
              />
            </div>

            {/* Filtros por categoría */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all text-sm sm:text-base ${
                    selectedCategory === cat
                      ? 'bg-retro-pink text-white shadow-retro-md scale-105'
                      : 'bg-white border-2 border-retro-purple/30 text-retro-purple hover:border-retro-pink hover:shadow-retro-sm'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid de productos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-retro-yellow to-retro-pink rounded-full animate-pulse mx-auto mb-4"></div>
              <p className="text-retro-purple font-display text-lg">
                Cargando collares mágicos...
              </p>
            </div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="flex justify-center items-center h-96">
            <div className="text-center">
              <ShoppingBag className="w-16 h-16 text-retro-purple/30 mx-auto mb-4" />
              <p className="text-retro-purple font-display text-xl">
                No encontramos collares con esos criterios
              </p>
              <p className="text-gray-500 mt-2">
                Intenta ajustar tu búsqueda o filtros
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Info de paginación */}
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-sm text-retro-purple/70">
                Mostrando {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} de{' '}
                {filteredProducts.length} collares
              </div>
              <div className="text-sm text-gray-600">
                Página {currentPage} de {totalPages}
              </div>
            </div>

            {/* Grid 3x3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {paginatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>

            {/* Paginación */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`p-3 rounded-lg transition-all ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-retro-yellow text-retro-black hover:bg-retro-pink hover:text-white shadow-retro-md'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Números de página */}
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-lg font-bold transition-all ${
                          currentPage === page
                            ? 'bg-retro-pink text-white shadow-retro-md scale-110'
                            : 'bg-white border-2 border-retro-purple/30 text-retro-purple hover:border-retro-pink'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>

                <button
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className={`p-3 rounded-lg transition-all ${
                    currentPage === totalPages
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-retro-yellow text-retro-black hover:bg-retro-pink hover:text-white shadow-retro-md'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Botón volver a destacados */}
            <div className="text-center mt-12 pt-8 border-t border-retro-yellow/30">
              <button
                onClick={() => setShowAllMode(false)}
                className="text-retro-purple hover:text-retro-pink font-semibold transition-colors"
              >
                ← Volver a nuestros favoritos
              </button>
            </div>
          </>
        )}
      </div>

      {/* Modal de detalle */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

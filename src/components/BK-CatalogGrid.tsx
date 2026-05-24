'use client';

import { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, MessageCircle } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

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

export default function CatalogGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);

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
              .map((r) => r.fields.Categoría)
              .filter(Boolean)
          ),
        ];
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
  }, [searchTerm, selectedCategory, products]);

  return (
    <div className="w-full bg-cream min-h-screen">
      {/* Header con búsqueda */}
      <div className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-sm border-b border-retro-yellow/30 shadow-retro-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-6">
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
            <div className="mb-4 text-sm text-retro-purple/70">
              Mostrando {filteredProducts.length} de {products.length} collares
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
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

# 📐 ARQUITECTURA TÉCNICA - Fireworks Jewelry Addict Catalog

## 1. VISIÓN GENERAL DE LA ARQUITECTURA

```
┌─────────────────────────────────────────────────────────────┐
│                      CLIENTE (BROWSER)                        │
│  Next.js 14 + React + Tailwind CSS (Vercel)                 │
│  - Header + Hero + Catalog Grid + About + Footer            │
│  - Product Cards (Hover interactivo)                        │
│  - Product Modal (Detalle completo)                         │
│  - Búsqueda y filtros en tiempo real                        │
└────────────────────────┬────────────────────────────────────┘
                         │ FETCH API
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                      AIRTABLE API                             │
│  (Backend Headless CMS)                                      │
│  - Base: "Fireworks Jewelry"                                 │
│  - Tabla: "Productos"                                        │
│  - 12 campos: SKU, Nombre, Descripción, Precio, etc.       │
│  - Almacenamiento de archivos (imágenes)                    │
└─────────────────────────────────────────────────────────────┘
```

## 2. STACK TECNOLÓGICO SELECCIONADO

### Frontend
- **Framework**: Next.js 14 (React)
  - ✅ Renderizado híbrido (SSG + SSR)
  - ✅ Rutas dinámicas automáticas
  - ✅ Optimización de imágenes
  - ✅ API Routes (no necesarias en este caso)
  - ✅ Excelente SEO

- **Estilos**: Tailwind CSS 3.4
  - ✅ Utilidades CSS rápidas
  - ✅ Configuración personalizada de colores Retro-Pop
  - ✅ Responsive first
  - ✅ Dark mode support (opcional)

- **Componentes**: React 18 + Lucide React
  - ✅ Icons bonitos y escalables
  - ✅ Componentes reutilizables
  - ✅ State management con hooks (useState, useEffect)

- **Hosting**: Vercel
  - ✅ Deployment automático desde Git
  - ✅ CDN global
  - ✅ Serverless functions (si se necesitan)
  - ✅ Preview deployments
  - ✅ Gratis para uso personal

### Backend / Base de Datos
- **Airtable API**
  - ✅ CMS visual sin código
  - ✅ API REST sencilla
  - ✅ Manejo de archivos (imágenes)
  - ✅ Automaciones (opcional)
  - ✅ Permisos granulares
  - ✅ $10/mes plan básico (suficiente para 20-50 productos)

**¿Por qué NO SQL tradicional?**
- Lylie debe actualizar productos fácilmente sin tocar código
- Airtable ofrece UI visual intuitiva
- No hay backend complejo que mantener
- Escalable a corto-mediano plazo

## 3. FLUJO DE DATOS

### Obtener Catálogo (Cargar página)
```
1. Usuario abre sitio
2. CatalogGrid.jsx ejecuta useEffect()
3. Fetch a: https://api.airtable.com/v0/{BASE_ID}/Productos
4. Header: Authorization: Bearer {API_KEY}
5. Respuesta: JSON con array de productos
6. Renderizar tarjetas con ProductCard.jsx
7. State: filteredProducts (después de búsqueda/filtros)
```

### Interacción de Usuario: Comprar Collar
```
1. Usuario ve ProductCard
2. Hace clic en "WhatsApp" o icono
3. handleWhatsApp() construye mensaje:
   - Nombre del collar
   - SKU
   - Precio en ₡
   - Link a WhatsApp: https://wa.me/+506XXXXXXXX?text={message}
4. Se abre WhatsApp Web o app nativa
5. Lylie recibe mensaje y coordina directo
```

## 4. ESTRUCTURA DE COMPONENTES

### Layout Hierarchy
```
<html>
  <body>
    <Header />         → Navbar + Logo + Social Links
    <HeroSection />    → Hero visual + CTA
    <CatalogGrid />    → Grid de ProductCards
      └─ <ProductCard />     → Tarjeta individual
         └─ <ProductModal /> → Modal al hacer clic
    <AboutSection />   → Sobre Nosotros / Lylie
    <Footer />         → Contacto + Links
  </body>
</html>
```

### Componentes Principales

#### Header.jsx
- Logo responsivo
- Navegación (Catálogo, Sobre, Contacto)
- Links a redes (Instagram, WhatsApp)
- Menu móvil (hamburguesa)

#### CatalogGrid.jsx
- Fetching de Airtable API
- Búsqueda por nombre/SKU/materiales
- Filtros por categoría
- Estado de carga y errores
- Grid responsivo (1 → 2 → 3 columnas)

#### ProductCard.jsx
- Imagen con hover (cambia a foto modelo)
- Badge de disponibilidad (color según estado)
- Info: SKU, Nombre, Descripción, Materiales, Dimensiones
- Precio destacado
- Botón WhatsApp
- Favorito (heart icon)

#### ProductModal.jsx
- Galería de imágenes (seleccionable)
- Información completa del producto
- Disponibilidad detallada
- Botón WhatsApp mejorado
- Botón Favorito y Compartir

#### HeroSection.jsx
- Animaciones de fondo (float, pulse)
- Título principal con gradient
- Subtítulo
- CTAs (Ver Catálogo, Instagram)
- Características (3 cards)

#### AboutSection.jsx
- Historia de Lylie
- Valores de la marca
- Grid de 6 valores
- CTA: Contacta con Lylie

#### Footer.jsx
- Branding
- Links rápidos
- Contacto (WhatsApp, Instagram)
- Derechos de autor
- Social icons

## 5. FLUJO DE FILTROS Y BÚSQUEDA

```javascript
// En CatalogGrid.jsx

useEffect(() => {
  // 1. Comenzar con todos los productos
  let filtered = products;

  // 2. Aplicar filtro de categoría
  if (selectedCategory !== 'Todas') {
    filtered = filtered.filter(
      (p) => p.fields.Categoría === selectedCategory
    );
  }

  // 3. Aplicar búsqueda de texto
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.fields.Nombre.toLowerCase().includes(term) ||
        p.fields.Descripción.toLowerCase().includes(term) ||
        p.fields.SKU.toLowerCase().includes(term)
    );
  }

  // 4. Actualizar estado
  setFilteredProducts(filtered);
}, [searchTerm, selectedCategory, products]);
```

## 6. INTEGRACIÓN WHATSAPP

### Formato del Mensaje
```
Hola Lylie 👋

Me interesa el collar: *Collar Maxi Fucsia Dream*
SKU: FWJ-001
Precio: ₡45,000

¿Podrías compartirme más detalles?
```

### Construcción de URL
```javascript
const message = encodeURIComponent(`
  Hola Lylie 👋
  
  Me interesa el collar: *${field.Nombre}*
  SKU: ${field.SKU}
  Precio: ₡${field.Precio.toLocaleString('es-CR')}
  
  ¿Puedo hacer mi pedido?
`);

const whatsappUrl = `https://wa.me/${NUMERO}?text=${message}`;

// Abre en nueva pestaña
window.open(whatsappUrl, '_blank');
```

## 7. PALETA DE COLORES (Retro-Pop)

| Nombre | Hex | Uso |
|--------|-----|-----|
| Amarillo Retro | #FFE135 | Acentos, botones secundarios |
| Púrpura Retro | #6B3FA0 | Texto principal, bordes |
| Rosa Retro | #FF1493 | CTAs, hover states |
| Magenta Retro | #FF006E | Gradientes |
| Lima Neon | #39FF14 | Disponible |
| Cyan Retro | #00D9FF | Acentos opcionales |
| Oro Retro | #FFD700 | Decoración, premium |
| Negro Profundo | #1A1A1A | Contraste fuerte |
| Crema (fondo) | #FAF8F3 | Fondo limpio |
| Marfil (fondo) | #FFFEF9 | Fondo alternativo |

## 8. TIPOGRAFÍA

- **Display**: Fredoka One (encabezados, títulos)
- **Body**: Poppins (texto, descripción)
- Ambas importadas desde Google Fonts

## 9. DISEÑO RESPONSIVO

### Breakpoints
```
- Mobile: < 640px (1 columna)
- Tablet: 640px - 1024px (2 columnas)
- Desktop: > 1024px (3 columnas)
```

### CSS Classes Responsive
```
- grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
- text-lg sm:text-xl lg:text-2xl
- px-4 sm:px-6 lg:px-8
- gap-4 sm:gap-6 lg:gap-8
```

## 10. OPTIMIZACIONES DE RENDIMIENTO

### Frontend
- ✅ Image optimization (Next.js Image component)
- ✅ Code splitting automático
- ✅ Lazy loading de componentes (si es necesario)
- ✅ CSS purging (Tailwind)
- ✅ Caché en navegador

### Backend
- ✅ Airtable API es rápida (CDN global)
- ✅ No hay N+1 queries
- ✅ Datos estáticos cacheable
- ✅ Vercel CDN con edge caching

## 11. SEGURIDAD

- ✅ API Key en `.env.local` (no en código)
- ✅ Airtable con lectura pública (solo GET)
- ✅ Vercel con HTTPS obligatorio
- ✅ No hay datos sensibles en frontend
- ✅ WhatsApp de Lylie es pública (intención)

## 12. SEO Y METADATA

### Open Graph
- Title: "Fireworks Jewelry Addict | Collares Retro-Pop Únicos"
- Description: "Collares únicos retro-pop artesanales por Lylie"
- Image: (se puede añadir después)
- Locale: es_CR

### Meta Tags
```html
<meta name="keywords" content="collares, joyería, retro-pop, ...">
<meta name="author" content="Lylie">
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## 13. PLAN DE ESCALABILIDAD

### Fase 1 (Actual)
- ✅ Catálogo estático con Airtable
- ✅ WhatsApp para ventas
- ✅ Máx: 20-50 productos

### Fase 2 (Futuro)
- ℹ️ Dashboard de Lylie para ver ordenes
- ℹ️ Email automático al recibir compra
- ℹ️ Instagram Shopping integration
- ℹ️ Estadísticas de visitas

### Fase 3 (Largo plazo)
- ℹ️ Carrito de compras real
- ℹ️ Pasarela de pago (Tilopay, Greenpay)
- ℹ️ Gestión de inventario automática
- ℹ️ Sistema de reseñas/testimonios

## 14. MANTENIMIENTO FUTURO

### Actualizaciones de Productos
1. Lylie abre Airtable
2. Añade/edita/borra un producto
3. El sitio se actualiza **automáticamente** en segundos
4. No necesita deploy

### Cambios de Contenido
- Sobre Nosotros: editar `AboutSection.jsx`
- Hero: editar `HeroSection.jsx`
- Colores: editar `tailwind.config.js`
- Después de editar: commit a GitHub → Vercel deploya automáticamente

### Monitoreo
- Vercel Analytics (básico, gratis)
- Vercel Logs (para errores)
- Google Analytics (opcional, agregar después)

---

**Documentación creada**: Enero 2024
**Stack**: Next.js 14 + Tailwind CSS + Airtable API
**Hosting**: Vercel
**Status**: Listo para producción ✅

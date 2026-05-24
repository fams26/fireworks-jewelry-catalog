# 🎨 Fireworks Jewelry Addict - Catálogo Web Interactivo

**Catálogo web profesional retro-pop para joyería artesanal costarricense.**

![Status](https://img.shields.io/badge/status-ready%20to%20deploy-brightgreen)
![Stack](https://img.shields.io/badge/stack-Next.js%2B%20Tailwind%2B%20Airtable-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Tabla de Contenidos

- [Características](#características)
- [Stack Técnico](#stack-técnico)
- [Instalación Rápida](#instalación-rápida)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Configuración](#configuración)
- [Despliegue](#despliegue)
- [Actualizar Productos](#actualizar-productos)
- [Solución de Problemas](#solución-de-problemas)

---

## ✨ Características

### 🎯 Catálogo
- ✅ **Grid responsivo** de 1 → 2 → 3 columnas
- ✅ **Búsqueda** por nombre, SKU y materiales
- ✅ **Filtros por categoría** dinámicos
- ✅ **Tarjetas interactivas** con hover imagen alternativa
- ✅ **Modal detallado** con galería de imágenes

### 📞 Contacto
- ✅ **Botones WhatsApp** que prefabricán el mensaje
- ✅ **Links a Instagram** para seguir la marca
- ✅ **Número costarricense** integrado (+506)

### 🎨 Diseño
- ✅ **Estética Retro-Pop Maximalista**
- ✅ **Colores ultra vibrantes** (fucsia, verde neón, amarillo, etc.)
- ✅ **Fondos limpios** para que las fotos brillen
- ✅ **Animaciones suaves** (float, pulse, shimmer)
- ✅ **100% responsive** (móvil, tablet, desktop)

### 📊 Gestión
- ✅ **CMS sin código** (Airtable)
- ✅ **Actualización en tiempo real** de productos
- ✅ **Almacenamiento de imágenes** integrado
- ✅ **12 campos por producto** (SKU, precio, materiales, etc.)

### 📄 Secciones
- ✅ **Hero** con CTAs principales
- ✅ **Catálogo** con búsqueda y filtros
- ✅ **Sobre Nosotros** (historia de Lylie)
- ✅ **Footer** con contacto y redes

---

## 🛠️ Stack Técnico

| Capa | Tecnología | Razón |
|------|------------|-------|
| **Frontend** | Next.js 14 + React 18 | SSG, rutas dinámicas, SEO, Vercel |
| **Estilos** | Tailwind CSS 3.4 | Utilidades CSS rápidas, responsive |
| **Icons** | Lucide React | 300+ iconos escalables |
| **Backend** | Airtable API | CMS visual, sin código, archivos |
| **Hosting** | Vercel | Deploy automático, CDN global, gratis |
| **Fuentes** | Google Fonts | Fredoka One + Poppins |

---

## 🚀 Instalación Rápida

### 1. Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/fireworks-jewelry-catalog.git
cd fireworks-jewelry-catalog
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Configurar Variables de Entorno
```bash
cp .env.local.example .env.local
# Edita .env.local con tus credenciales
```

### 4. Ejecutar en Desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

### 5. Desplegar en Vercel
```bash
npm install -g vercel
vercel
```

**[Ver guía completa →](./SETUP_GUIDE.md)**

---

## 📁 Estructura del Proyecto

```
fireworks-jewelry-catalog/
├── src/
│   ├── app/
│   │   ├── page.jsx              # Página principal
│   │   ├── layout.jsx            # Layout global
│   │   └── globals.css           # Estilos globales
│   └── components/
│       ├── Header.jsx            # Navbar
│       ├── HeroSection.jsx       # Sección hero
│       ├── CatalogGrid.jsx       # Grid de productos
│       ├── ProductCard.jsx       # Tarjeta individual
│       ├── ProductModal.jsx      # Modal detalle
│       ├── AboutSection.jsx      # Sobre nosotros
│       └── Footer.jsx            # Footer
├── public/
│   └── (imágenes, favicon)
├── .env.local                    # Variables (NO COMMIT)
├── tailwind.config.js            # Config Tailwind
├── postcss.config.js             # Config PostCSS
├── next.config.js                # Config Next.js
├── package.json                  # Dependencias
├── README.md                      # Este archivo
├── SETUP_GUIDE.md                # Guía de setup
└── ARQUITECTURA_TECNICA.md       # Documentación técnica
```

---

## ⚙️ Configuración

### Variables de Entorno (.env.local)

```env
# Airtable
NEXT_PUBLIC_AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
NEXT_PUBLIC_AIRTABLE_TABLE_NAME=Productos
AIRTABLE_API_KEY=patXXXXXXXXXXXXXXXX

# Contacto
NEXT_PUBLIC_WHATSAPP_NUMBER=+50683029823
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/fireworks_jewelry_addict

# Site
NEXT_PUBLIC_SITE_TITLE=Fireworks Jewelry Addict
NEXT_PUBLIC_SITE_DESCRIPTION=Collares únicos retro-pop artesanales por Lylie
```

### Estructura en Airtable

**Base**: `Fireworks Jewelry`  
**Tabla**: `Productos`

| Campo | Tipo | Ejemplo |
|-------|------|---------|
| ID | Autonúmero | 1 |
| SKU | Texto | FWJ-001 |
| Nombre | Texto | Collar Maxi Fucsia Dream |
| Descripción | Texto largo | Collar maxi con cuentas grandes... |
| Precio | Número | 45000 |
| Materiales | Texto largo | Resina acrílica, perlas, acero |
| Dimensiones | Texto | 45cm de largo, cuentas 15mm |
| Categoría | Opción única | Maxi Cuentas, Con Dijes, Minimalista |
| Foto Principal | Adjunto | [sube imagen] |
| Foto Modelo | Adjunto | [sube imagen modelo] |
| Foto Detalle | Adjunto | [sube close-up] |
| Disponibilidad | Opción única | Disponible, Bajo Pedido, Agotado |

**[Guía de Airtable →](./SETUP_GUIDE.md#configurar-airtable)**

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Amarillo | #FFE135 | Acentos, botones secundarios |
| Púrpura | #6B3FA0 | Texto principal |
| Rosa | #FF1493 | CTAs, hover |
| Magenta | #FF006E | Gradientes |
| Lima | #39FF14 | "Disponible" |
| Cyan | #00D9FF | Acentos opcionales |
| Negro | #1A1A1A | Contraste |
| Crema | #FAF8F3 | Fondo limpio |

---

## 📦 Despliegue

### Opción A: Vercel (Recomendado)

1. **Sube a GitHub**
   ```bash
   git push origin main
   ```

2. **Ve a [vercel.com](https://vercel.com)**
3. Crea nuevo proyecto desde tu repo
4. Añade variables de entorno
5. Click en "Deploy" ✨

Tu sitio estará en: `https://fireworks-jewelry-catalog.vercel.app`

### Opción B: Dominio Personalizado

En Vercel → Settings → Domains → Añade tu dominio

---

## 🔄 Actualizar Productos

### Método 1: Airtable Web (Recomendado)

1. Ve a [airtable.com](https://airtable.com)
2. Abre tu base `Fireworks Jewelry`
3. Añade, edita o borra productos
4. **Los cambios aparecen en el sitio automáticamente**

### Método 2: Editar Código

Para cambios en diseño, colores o contenido:

1. Edita los archivos en `src/`
2. Commit a GitHub
3. Vercel deploya automáticamente

---

## 🎯 Cómo Funciona

### Flujo de Usuario

```
1. Usuario entra al sitio
   ↓
2. Ve Hero + CTA "Ver Catálogo"
   ↓
3. Scroll a Catálogo
   ↓
4. Busca/filtra por categoría
   ↓
5. Ve ProductCard con imagen y precio
   ↓
6. Hover → ve imagen alternativa (modelo)
   ↓
7. Click → abre ProductModal
   ↓
8. Mira galería completa + detalles
   ↓
9. Haz clic en "Contactar por WhatsApp"
   ↓
10. Se abre WhatsApp con mensaje prefabricado
    ↓
11. Lylie responde y coordina compra + envío
```

### Integración WhatsApp

Cada producto envía un mensaje automático como este:

```
Hola Lylie 👋

Me interesa el collar: *Collar Maxi Fucsia Dream*
SKU: FWJ-001
Precio: ₡45,000

¿Puedo hacer mi pedido?
```

---

## 📊 Analytics (Opcional)

Vercel incluye analytics básico gratis. Para más:

1. **Google Analytics** → Agregar `gtag` en `layout.jsx`
2. **Plausible Analytics** → Alternativa simple
3. **Fathom Analytics** → Privacy-friendly

---

## 🛡️ Seguridad

- ✅ API Key en `.env.local` (nunca en código)
- ✅ Airtable lectura pública (intencional)
- ✅ Vercel HTTPS obligatorio
- ✅ No hay datos sensibles en frontend
- ✅ WhatsApp número público (intención)

---

## 🐛 Solución de Problemas

### Los productos no cargan
```
✓ Verifica AIRTABLE_API_KEY en .env.local
✓ Verifica AIRTABLE_BASE_ID correcto
✓ Tabla debe llamarse exactamente "Productos"
✓ Reinicia: Ctrl+C y npm run dev
```

### Las imágenes no se ven
```
✓ Asegúrate de subir en campo "Foto Principal"
✓ Los archivos deben ser .jpg, .png o .webp
✓ Verifica permisos en Airtable
```

### WhatsApp no abre
```
✓ Verifica formato: +506XXXXXXXX
✓ Número debe ser válido
✓ Usa código de país correcto
```

### Estilos rotos
```
✓ npm install nuevamente
✓ npm run build && npm run dev
✓ Limpia caché del navegador
```

**[Ver más → SETUP_GUIDE.md](./SETUP_GUIDE.md#solucionar-problemas)**

---

## 📚 Documentación

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Guía paso a paso
- **[ARQUITECTURA_TECNICA.md](./ARQUITECTURA_TECNICA.md)** - Documentación técnica
- **[PRODUCTOS_EJEMPLO.json](./PRODUCTOS_EJEMPLO.json)** - Datos de ejemplo

---

## 📞 Contacto

- 📱 **WhatsApp**: +50683029823
- 📸 **Instagram**: [@fireworks_jewelry_addict](https://www.instagram.com/fireworks_jewelry_addict)
- 💌 **Email**: [Tu email aquí]

---

## 📄 Licencia

MIT © 2024 Fireworks Jewelry Addict by Lylie

---

## 🎊 ¿Qué Sigue?

- [ ] Prueba en desarrollo (localhost:3000)
- [ ] Configura Airtable con tus productos
- [ ] Deploy en Vercel
- [ ] Personaliza colores/contenido si lo deseas
- [ ] Comparte el sitio en redes
- [ ] ¡Empieza a vender! 🎉

**¿Necesitas ayuda?** Contáctame por WhatsApp 💬

---

**Creado con ❤️ por Felix**  
**Fireworks Jewelry Addict | Estabecida 2024**

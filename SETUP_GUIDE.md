# 🚀 GUÍA COMPLETA DE SETUP - Fireworks Jewelry Catalog

## ÍNDICE
1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Configurar Airtable](#configurar-airtable)
3. [Configurar Variables de Entorno](#configurar-variables-de-entorno)
4. [Instalar y Ejecutar Localmente](#instalar-y-ejecutar-localmente)
5. [Desplegar en Vercel](#desplegar-en-vercel)
6. [Solucionar Problemas](#solucionar-problemas)

---

## Estructura del Proyecto

```
fireworks-jewelry-catalog/
├── src/
│   ├── app/
│   │   ├── page.jsx          (página principal)
│   │   ├── layout.jsx        (layout global)
│   │   └── globals.css       (estilos globales)
│   └── components/
│       ├── Header.jsx
│       ├── HeroSection.jsx
│       ├── CatalogGrid.jsx
│       ├── ProductCard.jsx
│       ├── ProductModal.jsx
│       ├── AboutSection.jsx
│       └── Footer.jsx
├── public/
│   └── (imágenes, favicon, etc.)
├── .env.local              (variables de entorno - NO COMMITS)
├── .gitignore
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── next.config.js
```

---

## Configurar Airtable

### Paso 1: Crear una Cuenta en Airtable
1. Ve a [airtable.com](https://airtable.com)
2. Crea una cuenta gratuita (o inicia sesión si ya tienes)
3. Crea un nuevo workspace (ej: "Fireworks Jewelry")

### Paso 2: Crear la Base de Datos

1. **Crea una nueva base** → selecciona "Blank"
2. Renómbrala: `Fireworks Jewelry`
3. Haz clic en la tabla predeterminada y renómbrala: `Productos`

### Paso 3: Configurar los Campos

Elimina la tabla por defecto y crea estos campos en orden:

| Campo | Tipo | Notas |
|-------|------|-------|
| **ID** | Autonúmero | (Airtable lo crea automáticamente) |
| **SKU** | Texto | Ej: "FWJ-001" |
| **Nombre** | Texto | Ej: "Collar Maxi Fucsia Dream" |
| **Descripción** | Texto largo | Descripción del collar |
| **Precio** | Número | En Colones (₡) |
| **Materiales** | Texto largo | Ej: "Resina acrílica, perlas, acero" |
| **Dimensiones** | Texto | Ej: "45cm de largo, cuentas 15mm" |
| **Categoría** | Opción única | Opciones: "Maxi Cuentas", "Con Dijes", "Minimalista", etc. |
| **Foto Principal** | Adjunto | Sube la imagen |
| **Foto Modelo** | Adjunto | (Opcional) Collar puesto en modelo |
| **Foto Detalle** | Adjunto | (Opcional) Detalle de materiales |
| **Disponibilidad** | Opción única | Opciones: "Disponible", "Bajo Pedido", "Agotado" |

### Paso 4: Obtener tus Credenciales de API

1. Ve a [airtable.com/account/api](https://airtable.com/account/api)
2. Haz clic en "Generate API key"
3. **Copia tu API KEY** (la guardarás en `.env.local`)

### Paso 5: Obtener el ID de la Base

1. En Airtable, abre tu base `Fireworks Jewelry`
2. La URL se verá así: `https://airtable.com/app**BASEXXXX**/tbl...`
3. Copia el `BASEXXXX` (el ID de la base)

---

## Configurar Variables de Entorno

### Crear archivo `.env.local`

En la raíz de tu proyecto, crea un archivo llamado `.env.local` y pega esto:

```
# Airtable Configuration
NEXT_PUBLIC_AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
NEXT_PUBLIC_AIRTABLE_TABLE_NAME=Productos
AIRTABLE_API_KEY=patXXXXXXXXXXXXXXXX

# WhatsApp (ya tienes)
NEXT_PUBLIC_WHATSAPP_NUMBER=+50683029823

# Instagram (ya tienes)
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/fireworks_jewelry_addict

# Site Configuration
NEXT_PUBLIC_SITE_TITLE=Fireworks Jewelry Addict
NEXT_PUBLIC_SITE_DESCRIPTION=Collares únicos retro-pop artesanales por Lylie
```

**Reemplaza:**
- `appXXXXXXXXXXXXXX` → Tu ID de base de Airtable
- `patXXXXXXXXXXXXXXXX` → Tu API KEY de Airtable

⚠️ **IMPORTANTE**: Nunca hagas commit de `.env.local` a Git. Añádelo a `.gitignore`

---

## Instalar y Ejecutar Localmente

### 1. Clonar o Descargar el Proyecto

```bash
git clone <tu-repo>
cd fireworks-jewelry-catalog
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Ejecutar el Servidor de Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 4. Prueba la Integración

- Deberías ver tus productos de Airtable cargados
- Haz clic en un collar → se abre el WhatsApp con un mensaje preconfigurado
- Prueba los filtros por categoría

---

## Desplegar en Vercel

### Opción A: Deploy Directo desde GitHub (Recomendado)

1. **Sube tu proyecto a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Inicial: Fireworks Jewelry Catalog"
   git remote add origin https://github.com/tu-usuario/fireworks-jewelry-catalog.git
   git push -u origin main
   ```

2. **Ve a [vercel.com](https://vercel.com)** → Inicia sesión con GitHub
3. Haz clic en **"New Project"** → selecciona tu repo
4. En **"Environment Variables"**, añade:
   ```
   NEXT_PUBLIC_AIRTABLE_BASE_ID = appXXXXXXXXXXXXXX
   NEXT_PUBLIC_AIRTABLE_TABLE_NAME = Productos
   AIRTABLE_API_KEY = patXXXXXXXXXXXXXXXX
   NEXT_PUBLIC_WHATSAPP_NUMBER = +50683029823
   NEXT_PUBLIC_INSTAGRAM_URL = https://www.instagram.com/fireworks_jewelry_addict
   ```

5. Haz clic en **"Deploy"** ✨
6. Tu sitio estará disponible en: `https://fireworks-jewelry-catalog.vercel.app`

### Opción B: Dominio Personalizado

1. En Vercel, ve a **"Settings"** → **"Domains"**
2. Añade tu dominio (ej: `fireworksjewelry.com`)
3. Sigue las instrucciones de DNS

---

## Estructura de Datos en Airtable

Aquí está el JSON de ejemplo de lo que debe tener cada producto:

```json
{
  "id": "recXXXXXXXXXXXXXX",
  "fields": {
    "SKU": "FWJ-001",
    "Nombre": "Collar Maxi Fucsia Dream",
    "Descripción": "Collar maxi con cuentas grandes en fucsia neón y perlas blancas. Perfecta para looks retro-pop audaces.",
    "Precio": 45000,
    "Materiales": "Resina acrílica, perlas de agua dulce, acero inoxidable",
    "Dimensiones": "45cm de largo, cuentas de 15mm",
    "Categoría": "Maxi Cuentas",
    "Foto Principal": [
      {
        "id": "attXXXXXXXXXXXXXX",
        "url": "https://dl.airtable.com/.attachments/...",
        "filename": "collar-fucsia.jpg",
        "size": 245678,
        "type": "image/jpeg"
      }
    ],
    "Foto Modelo": [
      {
        "id": "attXXXXXXXXXXXXXX",
        "url": "https://dl.airtable.com/.attachments/...",
        "filename": "modelo-fucsia.jpg",
        "size": 456789,
        "type": "image/jpeg"
      }
    ],
    "Disponibilidad": "Disponible"
  },
  "createdTime": "2024-01-15T10:30:00.000Z"
}
```

---

## Solucionar Problemas

### ❌ Error: "API Key inválida" o "No products found"

**Solución:**
1. Verifica que `AIRTABLE_API_KEY` está correcto en `.env.local`
2. Verifica que `NEXT_PUBLIC_AIRTABLE_BASE_ID` es correcto
3. Asegúrate de que la tabla se llama exactamente `Productos`
4. Reinicia el servidor: Ctrl+C y `npm run dev`

### ❌ Las imágenes no cargan

**Solución:**
1. Asegúrate de haber subido imágenes en Airtable
2. Los adjuntos deben estar en los campos "Foto Principal", "Foto Modelo", etc.
3. Verifica que los nombres de los campos coincidan exactamente

### ❌ El WhatsApp no abre

**Solución:**
1. Verifica que `NEXT_PUBLIC_WHATSAPP_NUMBER` es correcto (formato: +506...)
2. Asegúrate de que es un número válido de Costa Rica

### ❌ Los estilos se ven raros

**Solución:**
1. Asegúrate de que `tailwind.config.js` está en la raíz
2. Ejecuta: `npm install` nuevamente
3. Limpia el caché: `npm run build` y luego `npm run dev`

---

## Mantenimiento

### Actualizar Productos en Airtable

1. Abre [Airtable](https://airtable.com)
2. Ve a tu base `Fireworks Jewelry`
3. Añade, edita o elimina productos
4. Los cambios aparecerán en el sitio **automáticamente** en segundos

### Editar el Contenido

- **Sobre Nosotros**: Edita `src/components/AboutSection.jsx`
- **Hero Section**: Edita `src/components/HeroSection.jsx`
- **Colores**: Edita `tailwind.config.js` (paleta de colores)

---

## Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start

# Linter
npm run lint
```

---

## ¿Necesitas Ayuda?

- 📧 **Email**: Tu email
- 💬 **WhatsApp**: +506...
- 📱 **Instagram**: @fireworks_jewelry_addict

¡Bienvenido al mundo de Fireworks Jewelry Addict! 🎨✨

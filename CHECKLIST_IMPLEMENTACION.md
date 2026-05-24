# ✅ CHECKLIST DE IMPLEMENTACIÓN - Fireworks Jewelry Catalog

## FASE 1: PREPARACIÓN (30 minutos)

### Cuentas y Credenciales
- [ ] Crear cuenta en [GitHub.com](https://github.com) (si no tienes)
- [ ] Crear cuenta en [Airtable.com](https://airtable.com)
- [ ] Crear cuenta en [Vercel.com](https://vercel.com)
- [ ] Obtener API Key de Airtable (airtable.com/account/api)
- [ ] Copiar ID de tu base de Airtable

### Ambiente Local
- [ ] Instalar [Node.js](https://nodejs.org/) v18 o superior
- [ ] Instalar [Git](https://git-scm.com/) (opcional pero recomendado)
- [ ] Instalar editor de código ([VS Code](https://code.visualstudio.com/) recomendado)
- [ ] Crear carpeta para el proyecto: `fireworks-jewelry-catalog`

---

## FASE 2: DESCARGAR ARCHIVOS (5 minutos)

### Archivos Base
- [ ] Descargar los archivos proporcionados
- [ ] Copiar carpeta del proyecto a tu computadora
- [ ] Abrir en terminal/cmd en la carpeta del proyecto

```bash
# En la terminal
cd fireworks-jewelry-catalog
ls -la  # Verificar que están los archivos
```

---

## FASE 3: CONFIGURAR AIRTABLE (20 minutos)

### Crear Base de Datos
- [ ] Ir a [airtable.com](https://airtable.com)
- [ ] Crear nueva base: **"Fireworks Jewelry"**
- [ ] Crear tabla: **"Productos"**

### Crear Campos
Crear estos campos EN ORDEN:

- [ ] **ID** (Autonúmero - Airtable lo crea)
- [ ] **SKU** (Texto - Ej: "FWJ-001")
- [ ] **Nombre** (Texto - Ej: "Collar Maxi Fucsia")
- [ ] **Descripción** (Texto largo)
- [ ] **Precio** (Número)
- [ ] **Materiales** (Texto largo)
- [ ] **Dimensiones** (Texto)
- [ ] **Categoría** (Opción única)
  - [ ] Opción 1: "Maxi Cuentas"
  - [ ] Opción 2: "Con Dijes"
  - [ ] Opción 3: "Minimalista"
  - [ ] Opción 4: (Agregar tus categorías)
- [ ] **Foto Principal** (Adjunto)
- [ ] **Foto Modelo** (Adjunto)
- [ ] **Foto Detalle** (Adjunto)
- [ ] **Disponibilidad** (Opción única)
  - [ ] Opción 1: "Disponible"
  - [ ] Opción 2: "Bajo Pedido"
  - [ ] Opción 3: "Agotado"

### Agregar Productos de Ejemplo
- [ ] Agregar al menos 1 producto con toda la información
- [ ] Subir fotos en campos "Foto Principal" y "Foto Modelo" (si tienes)
- [ ] Verifica que el producto aparece completo

### Obtener Credenciales
- [ ] Copiar **ID de la base** de la URL (appXXXXXXXXXXXXXX)
- [ ] Generar **API Key** en airtable.com/account/api
- [ ] Copiar ambos valores (los necesitarás después)

---

## FASE 4: CONFIGURAR VARIABLES DE ENTORNO (5 minutos)

### Editar .env.local
- [ ] Abrir archivo `.env.local` en editor de código
- [ ] Reemplazar los siguientes valores:

```env
# Reemplazar appXXXXXXXXXXXXXX con tu ID de base
NEXT_PUBLIC_AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX

# Dejar igual
NEXT_PUBLIC_AIRTABLE_TABLE_NAME=Productos

# Reemplazar patXXXXXXXXXXXXXXXX con tu API Key
AIRTABLE_API_KEY=patXXXXXXXXXXXXXXXX

# Tu número (ya configurado)
NEXT_PUBLIC_WHATSAPP_NUMBER=+50683029823

# Tu Instagram (ya configurado)
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/fireworks_jewelry_addict

# Dejar igual o personalizarlo
NEXT_PUBLIC_SITE_TITLE=Fireworks Jewelry Addict
NEXT_PUBLIC_SITE_DESCRIPTION=Collares únicos retro-pop artesanales por Lylie
```

- [ ] Guardar archivo
- [ ] **NO** compartir este archivo con nadie (tiene datos sensibles)

---

## FASE 5: INSTALAR Y EJECUTAR LOCALMENTE (10 minutos)

### Terminal
```bash
# Abrir terminal en la carpeta del proyecto
cd fireworks-jewelry-catalog

# Instalar dependencias
npm install
# Esperar a que termine (1-2 minutos)

# Ejecutar servidor de desarrollo
npm run dev
```

### Navegador
- [ ] Abrir navegador
- [ ] Ir a: **http://localhost:3000**
- [ ] Deberías ver el sitio funcionando
- [ ] Verifica que los productos cargan desde Airtable
- [ ] Prueba búsqueda y filtros
- [ ] Haz clic en un collar → debe abrir modal
- [ ] Haz clic en WhatsApp → debe abrir WhatsApp

### Si hay errores
- [ ] Verifica credenciales en `.env.local`
- [ ] Revisa que la tabla se llama exactamente "Productos"
- [ ] Verifica que al menos 1 producto existe en Airtable
- [ ] Reinicia servidor: Ctrl+C en terminal y `npm run dev` nuevamente

---

## FASE 6: PERSONALIZACIÓN (OPCIONAL - 20 minutos)

### Contenido (Editar archivos .jsx)
- [ ] **Sobre Nosotros**: Edita `src/components/AboutSection.jsx`
  - [ ] Reemplaza "Hola! Soy Lylie" con tu historia
  - [ ] Reemplaza descripción de productos
  
- [ ] **Hero Section**: Edita `src/components/HeroSection.jsx`
  - [ ] Cambia títulos si lo deseas

### Colores Retro-Pop (Avanzado)
- [ ] Edita `tailwind.config.js` si quieres otros colores
- [ ] Paleta actual: Amarillo, Púrpura, Rosa, etc.

---

## FASE 7: SUBIR A GITHUB (10 minutos)

### Crear Repositorio
- [ ] Ir a [GitHub.com](https://github.com)
- [ ] Crear nuevo repositorio: `fireworks-jewelry-catalog`
- [ ] NO inicializar con README

### Subir Código
```bash
# En terminal de tu proyecto

# Inicializar git
git init

# Agregar archivos
git add .

# Verificar que .env.local NO está incluido
# (debería estar en .gitignore)
git status

# Crear primer commit
git commit -m "Initial commit: Fireworks Jewelry Catalog"

# Agregar repositorio remoto
git remote add origin https://github.com/TU_USUARIO/fireworks-jewelry-catalog.git

# Subir a GitHub
git branch -M main
git push -u origin main
```

- [ ] Verifica en GitHub que tus archivos están subidos
- [ ] Verifica que `.env.local` NO está subido

---

## FASE 8: DESPLEGAR EN VERCEL (10 minutos)

### Conectar Vercel
- [ ] Ir a [vercel.com](https://vercel.com)
- [ ] Hacer login con GitHub
- [ ] Dar permisos para acceder a tus repositorios
- [ ] Click en "New Project"
- [ ] Seleccionar repositorio `fireworks-jewelry-catalog`
- [ ] Click en "Import"

### Configurar Variables de Entorno
- [ ] En la pantalla de "Environment Variables", agregar:

| Clave | Valor |
|-------|-------|
| `NEXT_PUBLIC_AIRTABLE_BASE_ID` | appXXXXXXXXXXXXXX |
| `NEXT_PUBLIC_AIRTABLE_TABLE_NAME` | Productos |
| `AIRTABLE_API_KEY` | patXXXXXXXXXXXXXXXX |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | +50683029823 |
| `NEXT_PUBLIC_INSTAGRAM_URL` | https://www.instagram.com/fireworks_jewelry_addict |

- [ ] Click en "Deploy"
- [ ] Esperar a que termine el deploy (2-5 minutos)

### Verificar Deployment
- [ ] Se te dirá la URL: `https://fireworks-jewelry-catalog.vercel.app`
- [ ] Abre esa URL en navegador
- [ ] Verifica que funciona igual que en localhost
- [ ] Prueba una búsqueda y un click en WhatsApp

---

## FASE 9: DOMINIO PERSONALIZADO (OPCIONAL - 20 minutos)

### Si tienes dominio (ej: fireworksjewelry.com)
- [ ] En Vercel: Settings → Domains
- [ ] Agregar dominio
- [ ] Seguir instrucciones de DNS
- [ ] Esperar 24-48 horas para que propague

---

## FASE 10: LANZAMIENTO (5 minutos)

### Compartir con el Mundo
- [ ] Compartir link en Instagram Stories
- [ ] Compartir en Instagram Caption
- [ ] Compartir en TikTok
- [ ] Compartir en WhatsApp
- [ ] Pedir feedback a amigos/familia

### Primera Campaña
- [ ] Publicar fotos de los collares en Instagram
- [ ] Link en biografía de Instagram
- [ ] Crear carousel de "Cómo comprar en 3 pasos"
- [ ] Invita a seguir @fireworks_jewelry_addict

---

## MANTENIMIENTO FUTURO

### Actualizar Productos (Semanal)
- [ ] Abre Airtable
- [ ] Añade nuevos collares
- [ ] Edita precios/disponibilidad
- [ ] **El sitio se actualiza automáticamente**

### Cambiar Contenido (Mensual)
- [ ] Edita `AboutSection.jsx` si cambias historia
- [ ] Edita `HeroSection.jsx` si quieres cambiar textos
- [ ] Commit a GitHub → Vercel deploya automáticamente

### Monitoreo
- [ ] Vercel Dashboard para ver errores
- [ ] Revisa analytics (opcional)
- [ ] Responde WhatsApps de clientes 💬

---

## 🎊 ¡FELICIDADES!

Una vez completados todos los pasos, tu sitio estará:

✅ Vivo en Vercel  
✅ Conectado a Airtable  
✅ Con WhatsApp integrado  
✅ Listo para recibir pedidos  
✅ Totalmente responsive  

---

## 📱 NOTAS RÁPIDAS

### Si olvidaste qué archivo editar:
- Logo/Nav: `Header.jsx`
- Hero: `HeroSection.jsx`
- Catálogo: `CatalogGrid.jsx`
- Sobre Nosotros: `AboutSection.jsx`
- Colores: `tailwind.config.js`

### Si algo no funciona:
1. Verifica `.env.local`
2. Reinicia servidor
3. Revisa console del navegador (F12)
4. Leer SETUP_GUIDE.md

### Para agregar más productos:
1. Airtable → Tabla Productos → Nuevo registro
2. Llenar campos
3. Subir foto en "Foto Principal"
4. ¡Listo! Aparece en el sitio automáticamente

---

**Status**: Listo para ir a producción ✅  
**Tiempo total**: ~2 horas para la instalación completa  
**Soporte**: WhatsApp +50683029823

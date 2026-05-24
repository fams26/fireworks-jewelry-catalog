import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fireworks Jewelry Addict | Collares Retro-Pop Únicos',
  description: 'Collares únicos retro-pop artesanales por Lylie. Maxi-cuentas vibrantes, piezas limitadas y envíos a Costa Rica.',
  keywords: 'collares, joyería, retro-pop, artesanal, Costa Rica, accesorios',
  authors: [{ name: 'Lylie', url: 'https://www.instagram.com/fireworks_jewelry_addict' }],
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: 'https://fireworksjewelry.com',
    siteName: 'Fireworks Jewelry Addict',
    title: 'Fireworks Jewelry Addict',
    description: 'Collares únicos retro-pop artesanales',
  },
  icons: {
    icon: '✨',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-cream">
        {children}
      </body>
    </html>
  )
}

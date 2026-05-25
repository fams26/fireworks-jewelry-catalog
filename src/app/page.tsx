'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CatalogGrid from '../components/CatalogGrid';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import FreeShippingBanner from '../components/FreeShippingBanner';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <HeroSection />
      
      {/* Banner de envío gratis */}
      <FreeShippingBanner />
      
      <section id="catalogo" className="bg-cream">
        <CatalogGrid />
      </section>
      <AboutSection />
      <Footer />
    </main>
  );
}

'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CatalogGrid from '../components/CatalogGrid';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <HeroSection />
      <section id="catalogo" className="bg-cream">
      <CatalogGrid />
      </section>
      <AboutSection />
      <Footer />
    </main>
  );
}

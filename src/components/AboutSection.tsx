'use client';

import { Sparkles, Heart, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-gradient-to-b from-cream via-ivory to-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-black mb-4 text-retro-purple">
            Sobre Nosotros
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-retro-yellow to-retro-pink mx-auto rounded-full"></div>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16">
          {/* Imagen/Elemento visual */}
          <div className="relative">
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-retro-yellow/30 to-retro-pink/30 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-retro-lg border-2 border-retro-yellow/50">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-retro-yellow/20 rounded-xl">
                    <Sparkles className="w-8 h-8 text-retro-yellow" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-retro-purple">
                      Nuestra Esencia
                    </h3>
                    <p className="text-sm text-gray-600">Creatividad sin límites</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-retro-pink/20 rounded-xl">
                    <Heart className="w-8 h-8 text-retro-pink" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-retro-purple">
                      Hecho con Amor
                    </h3>
                    <p className="text-sm text-gray-600">Cada pieza es especial</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-retro-purple/20 rounded-xl">
                    <Zap className="w-8 h-8 text-retro-purple" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-retro-purple">
                      Energía Retro-Pop
                    </h3>
                    <p className="text-sm text-gray-600">Diseños que explotan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-retro-pink mb-3">
                ¡Hola! Soy Pame 👋
              </h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                En 2024 nació <span className="font-bold text-retro-pink">Fireworks Jewelry Addict</span>, 
                mi proyecto de joyería artesanal donde cada collar es una explosión de color, 
                creatividad y personalidad.
              </p>
            </div>

            <div>
              <h4 className="font-display font-bold text-retro-purple mb-2 text-lg">
                ¿Qué hace especial cada pieza?
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Cada collar es único. Uso materiales de calidad como resina acrílica, 
                perlas naturales, acero quirúrgico y gemas facetadas translúcidas. 
                Mi inspiración viene de la estética retro-pop: colores ultra vibrantes, 
                maxi-cuentas llamativas y un toque de máximo lujo artesanal.
              </p>
            </div>

            <div>
              <h4 className="font-display font-bold text-retro-purple mb-2 text-lg">
                Mi Misión
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Quiero que cada persona que use un collar Fireworks se sienta 
                <span className="font-bold text-retro-pink"> confiada, audaz y radiante</span>. 
                No son accesorios ordinarios; son expresiones de tu personalidad.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4 sm:pt-6 border-t-2 border-retro-yellow/30">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 sm:px-8 py-3 rounded-xl transition-all shadow-retro-md hover:shadow-lg"
              >
                Contacta con Pame
              </a>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="mt-16 sm:mt-20 border-t-2 border-retro-yellow/30 pt-12">
          <h3 className="font-display text-2xl font-bold text-retro-purple mb-8 text-center">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Calidad Premium',
                desc: 'Cada material es seleccionado con cuidado para durabilidad y belleza.',
              },
              {
                title: 'Sostenibilidad',
                desc: 'Prácticas responsables en cada paso de nuestro proceso creativo.',
              },
              {
                title: 'Exclusividad',
                desc: 'Diseños únicos pensados para realzar cualquier estilo y forma de expresión personal.',
              },
              {
                title: 'Creatividad Sin Límites',
                desc: 'Siempre buscando nuevas formas de sorprender y expresar.',
              },
              {
                title: 'Atención Personalizada',
                desc: 'Trato directo y cercano con cada cliente es nuestro orgullo.',
              },
              {
                title: 'Diversidad de Diseños',
                desc: 'Desde minimalista hasta maximalista, hay algo para ti.',
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border-2 border-retro-yellow/30 hover:border-retro-pink/50 hover:shadow-retro-md transition-all"
              >
                <h4 className="font-display font-bold text-retro-purple mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

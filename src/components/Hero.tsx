'use client';

export function Hero() {
  return (
    <header className="bg-white border-b border-gray-100 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 BÊTA GRATUITE · CARTES GRAPHIQUES
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Vous cherchez une carte graphique ?
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            Fixez votre prix. Nous surveillons le marché pour vous.
          </p>
          
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            DealRadar suit les offres et vous prévient lorsqu'une vraie opportunité apparaît.
          </p>
        </div>
      </div>
    </header>
  );
}

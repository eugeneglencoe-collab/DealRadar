'use client';

export function Hero() {
  return (
    <header className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          DealRadar
        </h1>
        <p className="text-lg md:text-xl text-blue-50 mb-6 max-w-2xl mx-auto leading-relaxed">
          Votre radar personnel des prix
        </p>
        <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto font-light">
          Donnez-nous le produit que vous voulez acheter et votre prix cible.
          <br />
          DealRadar surveille les offres pour vous et vous prévient lorsqu'une vraie opportunité apparaît.
        </p>
      </div>
    </header>
  );
}

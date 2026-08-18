'use client';

export function IsItForYou() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          C'est pour vous si…
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 border border-green-200 bg-green-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">✅ Idéal</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Vous savez quel GPU vous voulez</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Vous avez un budget en tête</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Vous pouvez attendre 2-4 semaines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">50-100€ d'économie vous intéresse</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">❌ Pas adapté</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 font-bold">✗</span>
                <span className="text-gray-600">Vous voulez acheter maintenant</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 font-bold">✗</span>
                <span className="text-gray-600">Vous cherchez conseil sur quel GPU</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 font-bold">✗</span>
                <span className="text-gray-600">Vous n'êtes pas sûr du modèle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 font-bold">✗</span>
                <span className="text-gray-600">Vous cherchez une IA généraliste</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

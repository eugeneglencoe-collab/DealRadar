'use client';

export function Positioning() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Pourquoi DealRadar ?
        </h2>

        <div className="space-y-8">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              vs ChatGPT / IA généraliste
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Une IA peut répondre quand vous lui demandez.
              <br />
              <strong>DealRadar est conçu pour surveiller votre achat dans le temps.</strong>
              <br />
              <span className="text-sm text-gray-600">Vous n'avez besoin de rien demander. Nous vous alertons.</span>
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              vs idealo / Keepa / Comparateurs
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Un comparateur affiche les prix du jour.
              <br />
              <strong>DealRadar combine : prix actuel + historique + votre cible + verdict.</strong>
              <br />
              <span className="text-sm text-gray-600">Nous vous disons quand acheter, pas seulement où.</span>
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="text-3xl mb-4">📬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              vs Tracker de prix classique
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Un tracker vous bombarde d'alertes quotidiennes.
              <br />
              <strong>DealRadar envoie 1-2 emails pertinents par semaine.</strong>
              <br />
              <span className="text-sm text-gray-600">C'est de la qualité, pas du bruit.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

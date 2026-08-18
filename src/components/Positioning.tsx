'use client';

export function Positioning() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Pourquoi DealRadar ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Vs. Une IA généraliste
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Une IA peut répondre à votre question <strong>aujourd'hui</strong>.
              <br />
              <br />
              DealRadar est conçu pour <strong>continuer à surveiller</strong> votre achat
              <strong> dans le temps</strong> et vous alerter au bon moment.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Vs. Un comparateur
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Un comparateur vous montre des <strong>prix</strong>.
              <br />
              <br />
              DealRadar vous aide à savoir <strong>quand acheter</strong>,
              pas seulement où.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

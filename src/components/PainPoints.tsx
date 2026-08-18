'use client';

export function PainPoints() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Acheter une carte graphique, c'est compliqué.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Aujourd'hui</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <span className="text-gray-700">Vous visitez 5 sites différents chaque jour</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <span className="text-gray-700">Les prix changent constamment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <span className="text-gray-700">Vous n'êtes jamais sûr si c'est vraiment une « bonne affaire »</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <span className="text-gray-700">Vous ratez des opportunités pendant votre travail</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 border border-blue-200 bg-blue-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Demain avec DealRadar</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span className="text-gray-700">Vous entrez l'URL et votre prix cible</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span className="text-gray-700">Nous surveillons automatiquement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span className="text-gray-700">Vous recevez une alerte quand c'est intéressant</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span className="text-gray-700">Vous achetez au bon moment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

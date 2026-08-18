'use client';

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Saisissez le produit',
      description: 'L\'URL de la carte graphique que vous voulez acheter',
      icon: '🔗',
    },
    {
      number: '2',
      title: 'Fixez votre prix cible',
      description: 'À partir de quel prix c\'est vraiment intéressant pour vous',
      icon: '💰',
    },
    {
      number: '3',
      title: 'Nous surveillons',
      description: 'DealRadar suit l\'offre. Vous recevez une alerte quand c\'est pertinent.',
      icon: '📡',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Comment ça marche
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <span className="text-3xl">{step.icon}</span>
              </div>
              <div className="text-sm font-semibold text-blue-600 mb-2">ÉTAPE {step.number}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-gray-700">
            <strong>Temps d'attente typique :</strong> 2-7 jours avant une première alerte
            <br />
            <span className="text-sm text-gray-600 block mt-2">Dépend des variations de prix. Il est possible de ne jamais recevoir d'alerte si les prix ne descendent pas à votre niveau.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'C\'est gratuit ?',
    answer: 'Oui. DealRadar est actuellement en bêta gratuite. La monétisation viendra plus tard, mais les utilisateurs actuels garderont accès à la fonctionnalité de base.',
  },
  {
    question: 'Pourquoi avez-vous mon email ?',
    answer: 'Pour vous envoyer une alerte quand une opportunité est détectée. C\'est le seul moyen de vous contacter.',
  },
  {
    question: 'Est-ce que je vais recevoir du spam ?',
    answer: 'Non. Vous recevrez 1-2 emails par semaine typiquement, uniquement si une opportunité est détectée. Pas de newsletter, pas de marketing, rien d\'autre.',
  },
  {
    question: 'Combien de temps avant une alerte ?',
    answer: 'Généralement 2-7 jours. Cela dépend des variations de prix sur le marché. Il est aussi possible de ne jamais recevoir d\'alerte si les prix ne descendent pas à votre niveau.',
  },
  {
    question: 'Quels GPU acceptez-vous ?',
    answer: 'Actuellement les cartes graphiques hautes performances : Nvidia RTX et AMD Radeon RX. Nous ajoutons progressivement d\'autres composants (CPU, RAM, etc.) et autres catégories de produits.',
  },
  {
    question: 'Comment obtenez-vous les prix ?',
    answer: 'Nous aggrégeons les offres des principaux marchands. Nous ne scrappons pas ; nous utilisons des données publiques et accessibles.',
  },
  {
    question: 'Est-ce que je peux modifier mon prix cible ?',
    answer: 'Pendant la bêta, contactez-nous pour toute modification. Cette fonctionnalité sera automatisée en Phase 1.',
  },
  {
    question: 'Vous vendez mes données ?',
    answer: 'Non. Jamais.',
  },
  {
    question: 'Pourquoi des emails et pas des SMS ?',
    answer: 'Les emails sont moins urgents. Vous pouvez agir quand vous le souhaitez dans votre période d\'achat de 2-4 semaines. Les SMS créent une urgence artificielle qui ne correspond pas à notre philosophie.',
  },
  {
    question: 'C\'est actuellement en bêta. Que dois-je savoir ?',
    answer: 'DealRadar est en phase de test. Certains processus d\'analyse peuvent être revérifiés manuellement pour garantir la qualité. L\'interface peut évoluer rapidement. Nous apprécions votre feedback pour améliorer le produit.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Questions fréquentes
        </h2>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition text-left"
              >
                <span className="font-semibold text-gray-900">{item.question}</span>
                <span className="text-xl text-gray-500 flex-shrink-0 ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

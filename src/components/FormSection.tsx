'use client';

import { useState } from 'react';
import { UrlForm } from './UrlForm';

export function FormSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-8 md:p-12 shadow-sm">
          {!submitted ? (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
                C'est gratuit. Pas de carte bancaire requise.
              </h2>
              <p className="text-center text-gray-600 mb-10">
                3 champs. 1 minute. C'est tout.
              </p>
              <UrlForm onSubmitted={() => setSubmitted(true)} />
            </>
          ) : (
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Merci !</h3>
              <p className="text-gray-700 mb-6">
                Nous avons bien reçu votre demande.
              </p>
              <p className="text-gray-600 mb-8">
                Nous allons analyser le produit et vous contacterons à l'adresse e-mail fournie avec nos premières observations.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Soumettre un autre produit
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { UrlForm } from '@/components/UrlForm';
import { ExampleCard } from '@/components/ExampleCard';
import { Hero } from '@/components/Hero';
import { Positioning } from '@/components/Positioning';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900">
              M'alerter quand ce produit atteint mon prix
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Remplissez le formulaire ci-dessous et nous vous préviendrons.
            </p>
            {!submitted ? (
              <UrlForm onSubmitted={() => setSubmitted(true)} />
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-2xl mb-2">✅</div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Merci !
                </h3>
                <p className="text-green-800 mb-4">
                  Nous avons bien reçu votre demande. Nous allons analyser le produit et vous contacterons à l'adresse e-mail fournie.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-green-600 hover:text-green-700 font-medium underline"
                >
                  Soumettre un autre produit
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            Exemple fictif
          </h2>
          <ExampleCard />
        </div>
      </section>

      <Positioning />
      <Footer />
    </main>
  );
}

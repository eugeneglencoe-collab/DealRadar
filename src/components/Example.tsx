'use client';

import { ExampleCard } from './ExampleCard';

export function Example() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Voici ce que vous verrez
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Quand DealRadar analyse votre GPU
        </p>
        <ExampleCard />
      </div>
    </section>
  );
}

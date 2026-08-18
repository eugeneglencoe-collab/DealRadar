'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8 text-sm">
          <div>
            <h4 className="text-white font-semibold mb-4">DealRadar</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Surveillance de prix pour cartes graphiques. Achetez au bon moment.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-xs text-gray-500">
            © {currentYear} DealRadar. Phase de bêta gratuite.
          </p>
        </div>
      </div>
    </footer>
  );
}

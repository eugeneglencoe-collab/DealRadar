'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-4">DealRadar</h4>
            <p className="text-sm text-gray-400">
              Votre radar personnel des prix. Surveillez vos produits et ne ratez jamais une bonne affaire.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">À propos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200 transition">
                  Statut
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200 transition">
                  Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200 transition">
                  Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} DealRadar. Tous les droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

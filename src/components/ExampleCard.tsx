'use client';

export function ExampleCard() {
  const example = {
    product: 'RTX 5070 Ti',
    currentPrice: 799,
    targetPrice: 750,
    recentBestPrice: 759,
    recentAvgPrice: 861,
    dealScore: 85,
    verdict: 'ATTENDRE' as const,
  };

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case 'ACHETER':
        return 'bg-green-50 border-green-200 text-green-900';
      case 'ATTENDRE':
        return 'bg-yellow-50 border-yellow-200 text-yellow-900';
      case 'ÉVITER':
        return 'bg-red-50 border-red-200 text-red-900';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-900';
    }
  };

  const getVerdictEmoji = (verdict: string) => {
    switch (verdict) {
      case 'ACHETER':
        return '🟢';
      case 'ATTENDRE':
        return '🟠';
      case 'ÉVITER':
        return '🔴';
      default:
        return '⚪';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-10">
      <div className="mb-6 inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
        ⚠️ Exemple fictif
      </div>

      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        {example.product}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <p className="text-gray-600 text-xs font-medium mb-1 uppercase">Prix actuel</p>
          <p className="text-2xl font-bold text-blue-600">{example.currentPrice}€</p>
        </div>

        <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
          <p className="text-gray-600 text-xs font-medium mb-1 uppercase">Votre cible</p>
          <p className="text-2xl font-bold text-purple-600">{example.targetPrice}€</p>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
          <p className="text-gray-600 text-xs font-medium mb-1 uppercase">Meilleur 30j</p>
          <p className="text-2xl font-bold text-green-600">{example.recentBestPrice}€</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <p className="text-gray-600 text-xs font-medium mb-1 uppercase">Moyen 30j</p>
          <p className="text-2xl font-bold text-gray-600">{example.recentAvgPrice}€</p>
        </div>
      </div>

      <div className={`rounded-lg p-6 border-2 ${getVerdictColor(example.verdict)} mb-6`}>
        <p className="text-xs font-medium mb-2 uppercase opacity-70">Verdict</p>
        <p className="text-3xl font-bold">
          {getVerdictEmoji(example.verdict)} {example.verdict}
        </p>
        <p className="text-sm mt-3 opacity-80">La tendance baisse. Une opportunité est probable bientôt.</p>
      </div>

      <p className="text-xs text-gray-500 text-center italic">
        Ceci est un exemple fictif. Les analyses réelles combinent prix actuel, historique, votre prix cible et un verdict d'achat.
      </p>
    </div>
  );
}

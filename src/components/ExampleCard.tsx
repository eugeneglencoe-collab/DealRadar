'use client';

export function ExampleCard() {
  const example = {
    product: 'RTX 5070 Ti',
    currentPrice: 799,
    targetPrice: 750,
    recentBestPrice: 759,
    recentAvgPrice: 861,
    dealScore: 88,
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
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-10">
      <div className="mb-2 inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
        ⚠️ Exemple fictif
      </div>

      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        {example.product}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-6">
          <p className="text-gray-600 text-sm font-medium mb-1">Prix actuel</p>
          <p className="text-3xl font-bold text-blue-600">{example.currentPrice}€</p>
        </div>

        <div className="bg-purple-50 rounded-lg p-6">
          <p className="text-gray-600 text-sm font-medium mb-1">Votre prix cible</p>
          <p className="text-3xl font-bold text-purple-600">{example.targetPrice}€</p>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <p className="text-gray-600 text-sm font-medium mb-1">Meilleur prix récent</p>
          <p className="text-3xl font-bold text-green-600">{example.recentBestPrice}€</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-gray-600 text-sm font-medium mb-1">Prix moyen récent</p>
          <p className="text-3xl font-bold text-gray-600">{example.recentAvgPrice}€</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-indigo-50 rounded-lg p-6">
          <p className="text-gray-600 text-sm font-medium mb-2">Deal Score</p>
          <div className="flex items-center gap-3">
            <div className="text-4xl font-bold text-indigo-600">{example.dealScore}</div>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${example.dealScore}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className={`rounded-lg p-6 border-2 ${getVerdictColor(example.verdict)}`}>
          <p className="text-sm font-medium mb-2">Verdict</p>
          <p className="text-2xl font-bold">
            {getVerdictEmoji(example.verdict)} {example.verdict}
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-600 text-center italic">
        Cet exemple montre ce que DealRadar vous permettra de voir une fois analysé.
      </p>
    </div>
  );
}

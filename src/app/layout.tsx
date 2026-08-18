import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DealRadar - Achetez votre GPU au meilleur moment',
  description: 'Surveillez les prix des cartes graphiques. Fixez votre prix cible. Recevez une alerte quand il\'s une vraie opportunité. Gratuit, en bêta.',
  metadataBase: new URL('https://dealradar.vercel.app'),
  keywords: [
    'prix GPU',
    'carte graphique prix',
    'alerte prix GPU',
    'surveillance prix RTX',
    'meilleur prix GPU',
    'RTX 5070',
    'Radeon RX prix',
  ],
  openGraph: {
    title: 'DealRadar - Achetez votre GPU au meilleur moment',
    description: 'Surveillez les prix des cartes graphiques. Fixez votre prix cible. Recevez une alerte quand c\'est une vraie opportunité.',
    url: 'https://dealradar.vercel.app',
    siteName: 'DealRadar',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="color-scheme" content="light" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DealRadar - Votre Radar Personnel des Prix',
  description: 'Surveillez vos produits préférés et recevez une alerte quand ils atteignent votre prix cible.',
  metadataBase: new URL('https://dealradar.vercel.app'),
  keywords: ['prix', 'alerte', 'surveillance', 'achat', 'comparateur'],
  openGraph: {
    title: 'DealRadar - Votre Radar Personnel des Prix',
    description: 'Surveillez vos produits préférés et recevez une alerte quand ils atteignent votre prix cible.',
    url: 'https://dealradar.vercel.app',
    siteName: 'DealRadar',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DealRadar',
      },
    ],
    type: 'website',
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
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

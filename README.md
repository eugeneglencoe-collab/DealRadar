# DealRadar - Phase 0

Votre radar personnel des prix.

## Qu'est-ce que DealRadar ?

DealRadar est un assistant d'aide à la décision d'achat conçu pour :
- Surveiller les produits que vous souhaitez acheter
- Vous alerter quand ils atteignent votre prix cible
- Vous aider à déterminer si c'est vraiment une bonne affaire

## Phase 0 - Validation commerciale

Cette phase valide l'intérêt des utilisateurs avant de construire l'infrastructure complète.

### Fonctionnalités Phase 0

- ✅ Landing page statique
- ✅ Formulaire de soumission (URL + prix cible + email)
- ✅ Validation des entrées (URL, prix, email)
- ✅ Stockage des soumissions via webhook
- ✅ Analytics de base
- ✅ SEO minimale
- ✅ Exemple fictif pour illustrer le concept

### Ce qu'il N'Y A PAS Phase 0

- ❌ Pas de scraping/extraction de prix
- ❌ Pas de base de données
- ❌ Pas d'authentification
- ❌ Pas de surveillance automatique
- ❌ Pas de notifications
- ❌ Pas de moteur de matching

## Setup local

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Open http://localhost:3000
```

## Tests

```bash
# Lancer les tests
npm test

# Lancer les tests en mode watch
npm run test:watch
```

## Linting et type checking

```bash
# Vérifier les types TypeScript
npm run type-check

# Lancer ESLint
npm run lint
```

## Build

```bash
# Générer la build de production
npm run build

# Lancer la build localement
npm run start
```

## Configuration - Stockage des formulaires

Actuellement, Phase 0 utilise le localStorage du navigateur pour stocker les soumissions localement.

### Pour passer à un stockage persistant en production :

#### Option 1 : Formspree.io (recommandé - simple, gratuit)

1. Accédez à https://formspree.io
2. Créez un compte gratuit
3. Créez un nouveau formulaire
4. Copiez l'ID du formulaire
5. Définissez `NEXT_PUBLIC_FORM_WEBHOOK_URL` dans `.env.local`:
   ```
   NEXT_PUBLIC_FORM_WEBHOOK_URL=https://formspree.io/f/YOUR_FORM_ID
   ```

Formspree collectera les soumissions et vous les enverra par email automatiquement.

#### Option 2 : Google Sheets + Apps Script

1. Créez une feuille Google Sheets
2. Ouvrez l'éditeur Apps Script (Extensions > Apps Script)
3. Créez un webhook pour recevoir les POST
4. Déployez en tant qu'application web
5. Définissez l'URL de déploiement dans `.env.local`

#### Option 3 : Votre propre API

Créez un endpoint simple qui reçoit les données POST et les stocke.

## Déploiement

Le projet est conçu pour être déployé facilement sur Vercel :

```bash
# 1. Push le code sur GitHub
git push origin main

# 2. Connectez votre repo à Vercel : https://vercel.com
# 3. Ajoutez vos variables d'environnement (NEXT_PUBLIC_FORM_WEBHOOK_URL)
# 4. Vercel déploiera automatiquement à chaque push
```

## Sécurité

- ✅ Validation des URLs (prévention SSRF)
- ✅ Validation des emails
- ✅ Validation des prix
- ✅ Pas de stockage de données sensibles en local

## Roadmap

### Phase 1 (MVP)
- Base de données PostgreSQL
- Extraction de prix (2-3 sources)
- Matching produit automatique
- Historique des prix
- Deal Score
- Notifications email
- Surveillance des produits

### Phase 2
- Davantage de sources
- Pages SEO produit
- Pages d'historique
- Pages de marché
- Contenu généré automatiquement

### Phase 3+
- Extension navigateur
- Recherche textuelle
- Catégories supplémentaires
- Fonctionnalités premium

## Licence

Propriétaire - Tous droits réservés

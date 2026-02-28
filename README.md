# LYBRAN SERVICES - Site vitrine

Site web professionnel pour **LYBRAN SERVICES**, une entreprise de services numériques spécialisée dans la création de contenu digital pour les entreprises et vendeurs en ligne.

Le site est **inspiré de l'expérience utilisateur de Fiverr** (structure claire, cartes de services, call-to-action visibles), tout en proposant un **design original, minimaliste et adapté à une petite agence**.

---

## Contenu du projet

- `index.html` : page principale du site (one-page) comprenant :
  - **Page d’accueil** (section `#hero`) avec :
    - Slogan : _"Boostez votre visibilité en ligne avec LYBRAN SERVICES"_
    - Navigation fixe
    - Bouton "Contacter sur WhatsApp"
    - Carte d’offre type "marketplace" inspirée de Fiverr
  - **Page Services** (section `#services`) :
    - Création de textes publicitaires
    - Création de visuels professionnels
    - Contenu prêt à publier
    - Planning mensuel de publication  
    Chaque service inclut : description, bénéfices et bouton de contact WhatsApp.
  - **Page Offres / Tarifs** (section `#offers`) :
    - Pack mensuel :
      - 12 posts
      - 6 visuels
      - planning de publication  
      Avec **prix promotionnel** et bouton WhatsApp.
  - **Page À propos** (section `#about`) :
    - Présentation de LYBRAN SERVICES
    - Mission : aider les entreprises à attirer des clients en ligne
    - Approche : simple, rapide, professionnelle
  - **Pourquoi nous choisir** (section `#why-us`)
  - **Call-to-action final** (section `#cta`)
  - **Footer** :
    - Contact WhatsApp
    - Copyright
    - Navigation principale

- `style.css` : styles globaux du site
  - Palette : bleu foncé, blanc, vert accent
  - Design moderne, minimaliste
  - Cartes avec ombre légère
  - Layout responsive (mobile, tablette, desktop)
  - Navbar fixe et menu mobile
  - Animations douces au scroll (classes `.js-reveal`)

- `script.js` : JavaScript
  - Gestion du menu mobile (ouverture/fermeture)
  - Mise à jour automatique de l’année dans le footer
  - Animations au scroll via `IntersectionObserver`

- Dossier `images/` (optionnel) :
  - Vous pouvez y ajouter vos visuels (logo, photos, exemples de posts…)

---

## Lancer le site en local

1. Télécharger ou cloner le projet dans un dossier sur votre machine.
2. Ouvrir le fichier `index.html` dans votre navigateur (double clic ou clic droit → "Ouvrir avec").

Aucune dépendance ni installation n’est nécessaire : **le site est entièrement statique** (HTML / CSS / JS).

---

## Personnalisation

- **Coordonnées WhatsApp**
  - Remplacez `33600000000` par votre numéro de téléphone au format international dans `index.html`.
  - Mettez à jour les messages pré-remplis (`text=...`) si nécessaire.

- **Identité visuelle**
  - Vous pouvez ajuster les couleurs principales dans `style.css` (sections `body`, `.section--accent`, boutons, etc.).
  - Ajoutez votre logo dans `images/` et remplacez le logo texte `LY` par une image si besoin.

- **Contenus textes**
  - Tous les textes de sections (services, offres, à propos, CTA) peuvent être modifiés directement dans `index.html`.

---

## Points clés UX / UI

- **Navigation simple et lisible**, avec barre fixe en haut de l’écran.
- **Sections clairement identifiées** pour reproduire une logique de "pages" (Accueil, Services, Offres, À propos).
- **Boutons WhatsApp visibles** à plusieurs endroits pour maximiser la conversion.
- **Responsive design** :
  - Grilles adaptées pour mobile / tablette / desktop
  - Menu burger sur petits écrans
- **Animations légères au scroll** pour donner du dynamisme sans gêner la lecture.

---

## Hébergement

Le site est prêt à être hébergé sur :

- GitHub Pages
- Netlify
- Vercel
- Ou tout autre hébergeur de sites statiques

Il suffit de déployer l’ensemble des fichiers (`index.html`, `style.css`, `script.js`, et éventuellement le dossier `images/`).


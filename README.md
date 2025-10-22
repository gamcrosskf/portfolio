# Portfolio - Terminal Theme

Un portfolio moderne avec un design inspiré du thème terminal de panr, créé avec Vue.js.

## 🚀 Fonctionnalités

- **Design Terminal Cyan/Bleu** : Interface sobre et élégante inspirée des terminaux
- **Section À Propos** : Présentation personnelle avec ASCII art
- **Section Compétences** : Liste interactive des compétences avec barres de progression
- **Section Projets** : Showcase de vos projets avec liens GitHub et démos
- **Intégration LinkedIn** : Lien vers votre profil professionnel
- **Section Contact** : Moyens de contact et téléchargement de CV
- **Responsive** : Adapté à tous les écrans

## 🛠️ Technologies

- Vue.js 3
- Vite
- CSS3 avec animations
- Font Fira Code

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build
```

## ⚙️ Personnalisation

### Modifier vos informations

1. **Section À Propos** : Éditez `src/components/AboutSection.vue`
2. **Compétences** : Modifiez le tableau `skills` dans `src/components/SkillsSection.vue`
3. **Projets** : Modifiez le tableau `projects` dans `src/components/ProjectsSection.vue`
4. **Contact** : Modifiez le tableau `contactMethods` dans `src/components/ContactSection.vue`

### Modifier les couleurs

Les couleurs sont définies dans `src/style.css` avec les variables CSS :

```css
--cyan: #00ffff;
--cyan-dark: #00b8d4;
--blue-dark: #0a1929;
--blue-darker: #051320;
```

## 📝 License

MIT

---

Fait avec ❤ | Inspiré par le thème terminal de panr
// Configuration globale du portfolio
export const portfolioConfig = {
  // Informations personnelles
  personal: {
    name: 'Farrugia Kenzo',
    title: 'Développeur Full Stack',
    description: [
      'Bonjour ! Je suis un développeur passionné par la conception d\'applications alliant performance, fiabilité et innovation.',
      'Mon parcours en Master 2 Informatique m\'a permis d\'explorer plusieurs domaines : développement web (Angular, Vue.js), programmation logicielle (Java, C#, C), et intelligence artificielle (Keras, PyTorch, Scikit-learn).',
      'J\'aime concevoir des solutions complètes, du front-end dynamique jusqu\'à la logique backend et la gestion des bases de données (MySQL).',
      'Organisé et curieux, je travaille avec Git et les méthodes agiles pour développer des projets structurés, collaboratifs et évolutifs.'
    ],
    location: 'France',
    email: 'kenzo.farrugia@hotmail.com'
  },

  // Compétences
  skills: [
    {
      name: 'Développement Web',
      icon: '�',
      items: [
        { name: 'Vue.js', level: 90, type: 'file' },
        { name: 'HTML5 / CSS3', level: 90, type: 'file' },
        { name: 'JavaScript / TypeScript', level: 90, type: 'file' },
        { name: 'Angular', level: 80, type: 'file' }
      ]
    },
    {
      name: 'Programmation',
      icon: '💻',
      items: [
        { name: 'Java', level: 95, type: 'file' },
        { name: 'C', level: 95, type: 'file' },
        { name: 'Python', level: 85, type: 'file' },
        { name: 'C++', level: 75, type: 'file' },
        { name: 'C# (.NET)', level: 75, type: 'file' }
      ]
    },
    {
      name: 'Base de Données',
      icon: '�️',
      items: [
        { name: 'MySQL', level: 85, type: 'dir' },
        { name: 'PostgreSQL', level: 85, type: 'dir' },
        { name: 'MongoDB', level: 80, type: 'dir' }
      ]
    },
    {
      name: 'Intelligence Artificielle',
      icon: '🧠',
      items: [
        { name: 'Scikit-learn', level: 80, type: 'file' },
        { name: 'Keras', level: 75, type: 'file' },
        { name: 'PyTorch', level: 70, type: 'file' }
      ]
    },
    {
      name: 'Outils & Méthodologies',
      icon: '🛠️',
      items: [
        { name: 'Git / GitHub', level: 90, type: 'dir' },
        { name: 'Méthodes Agiles (Scrum)', level: 80, type: 'dir' },
        { name: 'REST APIs', level: 80, type: 'file' },
        { name: 'Docker', level: 70, type: 'file' },
        { name: 'CI/CD', level: 70, type: 'file' }
      ]
    }
  ],

  // Projets
  projects: [
    {
      name: 'Portfolio - Farrugia Kenzo',
      description: 'Mon portfolio personnel présentant mes compétences, projets et expériences.',
      technologies: ['Vue.js', 'CSS3', 'Vite'],
      github: 'https://github.com/gamcrosskf/portfolio',
      live: 'https://gamcrosskf.github.io/portfolio'
    },
    {
      name: 'Chess Game avec IA',
      description: 'Jeu d\'échecs Python avec interface Tkinter et 3 moteurs IA (MinMax, Alpha-Beta, Multi-threadé).',
      technologies: ['Python', 'Tkinter', 'AI'],
      github: 'https://github.com/gamcrosskf/chess',
      live: null
    }
  ],

  // Liens sociaux
  social: {
    linkedin: 'https://www.linkedin.com/in/kenzo-farrugia-a883b5271',
    github: 'https://github.com/gamcrosskf',
    twitter: null,
    email: 'mailto:kenzo.farrugia@hotmail.com'
  },

  // Contact
  contact: [
    {
      name: 'Email',
      icon: '📧',
      value: 'kenzo.farrugia@hotmail.com',
      link: 'mailto:kenzo.farrugia@hotmail.com'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      value: 'linkedin.com/in/kenzo-farrugia',
      link: 'https://www.linkedin.com/in/kenzo-farrugia-a883b5271'
    },
    {
      name: 'GitHub',
      icon: '💻',
      value: 'github.com/gamcrosskf',
      link: 'https://github.com/gamcrosskf'
    }
  ],

  // CV
  cv: {
    downloadLink: null // Mettre le chemin vers votre CV quand disponible
  }
}

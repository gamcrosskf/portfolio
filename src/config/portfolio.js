// Configuration globale du portfolio
export const portfolioConfig = {
  // Informations personnelles
  personal: {
    name: "Farrugia Kenzo",
    bash: "kfarrugia",
    title: "Développeur Full Stack",
    description: [
      "Bonjour ! Je suis un développeur passionné par la conception d'applications alliant performance, fiabilité et innovation.",
      "Mon parcours en Master 2 Informatique m'a permis d'explorer plusieurs domaines : développement web (Angular, Vue.js), programmation logicielle (Java, C#, C), et intelligence artificielle (Keras, PyTorch, Scikit-learn).",
      "J'aime concevoir des solutions complètes, du front-end dynamique jusqu'à la logique backend et la gestion des bases de données (MySQL).",
      "Organisé et curieux, je travaille avec Git et les méthodes agiles pour développer des projets structurés, collaboratifs et évolutifs."
    ],
    location: "France",
    email: "kenzo.farrugia@hotmail.com"
  },

  // Compétences
  skills: [
    {
      name: "Développement Web",
      icon: "🌐",
      items: [
        { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "HTML5 / CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "JavaScript / TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" }
      ]
    },
    {
      name: "Programmation",
      icon: "💻",
      items: [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "C# (.NET)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" }
      ]
    },
    {
      name: "Base de Données",
      icon: "🗄️",
      items: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
      ]
    },
    {
      name: "Intelligence Artificielle",
      icon: "🧠",
      items: [
        { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "Keras", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" }
      ]
    },
    {
      name: "Outils & Méthodologies",
      icon: "🛠️",
      items: [
        { name: "Git / GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Scrum", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
        { name: "REST APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "CI/CD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" }
      ]
    }
  ],

  // Projets
  projects: [
    {
      name: "Portfolio - Farrugia Kenzo",
      description: "Mon portfolio personnel présentant mes compétences, projets et expériences.",
      technologies: ["Vue.js", "CSS3", "Vite"],
      github: "https://github.com/gamcrosskf/portfolio",
      live: "https://gamcrosskf.github.io/portfolio"
    },
    {
      name: "Chess Game avec IA",
      description: "Jeu d'échecs Python avec interface Tkinter et 3 moteurs IA (MinMax, Alpha-Beta, Multi-threadé).",
      technologies: ["Python", "Tkinter", "AI"],
      github: "https://github.com/gamcrosskf/chess",
      live: null
    }
  ],

  // Liens sociaux
  social: {
    linkedin: "https://www.linkedin.com/in/kenzo-farrugia-a883b5271",
    github: "https://github.com/gamcrosskf",
    email: "mailto:kenzo.farrugia@hotmail.com"
  },

  // Contact
  contact: [
    {
      name: "Email",
      icon: "",
      value: "kenzo.farrugia@hotmail.com",
      link: "mailto:kenzo.farrugia@hotmail.com"
    },
    {
      name: "LinkedIn",
      icon: "",
      value: "linkedin.com/in/kenzo-farrugia",
      link: "https://www.linkedin.com/in/kenzo-farrugia-a883b5271"
    },
    {
      name: "GitHub",
      icon: "",
      value: "github.com/gamcrosskf",
      link: "https://github.com/gamcrosskf"
    }
  ],

  // CV
  cv: {
    downloadLink: null
  }
}

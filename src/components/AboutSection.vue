<template>
  <section id="about" class="section">
    <div class="command-line">
      <span class="prompt">{{ config.personal.bash }}@portfolio:~$</span>
      <span class="command">cat about.txt</span>
      <span class="cursor">_</span>
    </div>
    
    <div class="section-content fade-in">
      <h2 class="section-title">
        <span class="bracket">[</span>
        <span class="title-text">À propos de moi</span>
        <span class="bracket">]</span>
      </h2>
      
      <div class="about-content">
        <div class="ascii-art">
          <pre>
    ____             __  ____      ___    
   / __ \____  _____/ /_/ __/___  / (_)___
  / /_/ / __ \/ ___/ __/ /_/ __ \/ / / __ \
 / ____/ /_/ / /  / /_/ __/ /_/ / / / /_/ /
/_/    \____/_/   \__/_/  \____/_/_/\____/
          </pre>
        </div>
        
        <div class="about-text">
        <p class="output-line">
            <span class="cyan">></span> Bonjour ! Je suis un développeur passionné par la conception
            d’applications alliant performance, fiabilité et innovation.
        </p>
        <p class="output-line">
            <span class="cyan">></span> Mon parcours en Master 2 Informatique m’a permis d’explorer plusieurs
            domaines : développement web (Angular, Vue.js), programmation logicielle (Java, C#, C),
            et intelligence artificielle (Keras, PyTorch, Scikit-learn).
        </p>
        <p class="output-line">
            <span class="cyan">></span> J’aime concevoir des solutions complètes, du front-end dynamique
            jusqu’à la logique backend et la gestion des bases de données (MySQL).
        </p>
        <p class="output-line">
            <span class="cyan">></span> Organisé et curieux, je travaille avec Git et les méthodes agiles
            pour développer des projets structurés, collaboratifs et évolutifs.
        </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    config: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.section {
  margin-bottom: 3rem;
  scroll-margin-top: 2rem;
}

.command-line {
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: var(--gray-light);
}

.prompt {
  color: var(--green);
  margin-right: 0.5rem;
}

.command {
  color: var(--cyan);
}

.cursor {
  color: var(--cyan);
  animation: blink 1s step-end infinite;
}

.section-content {
  background-color: rgba(0, 255, 255, 0.03);
  padding: 2rem;
  border-left: 3px solid var(--cyan);
  border-radius: 4px;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--white);
}

.bracket {
  color: var(--cyan);
  font-weight: bold;
}

.title-text {
  margin: 0 0.5rem;
}

.about-content {
  display: grid;
  gap: 2rem;
}

.ascii-art {
  color: var(--cyan);
  font-size: 0.5rem;
  line-height: 1.2;
  overflow-x: auto;
  opacity: 0.7;
}

.ascii-art pre {
  margin: 0;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.output-line {
  color: var(--gray-light);
  line-height: 1.8;
  padding-left: 1rem;
  position: relative;
}

.output-line .cyan {
  position: absolute;
  left: 0;
  color: var(--cyan);
}

@media (max-width: 768px) {
  .section-content {
    padding: 1.5rem;
  }
  
  .section-title {
    font-size: 1.4rem;
  }
  
  .ascii-art {
    font-size: 0.4rem;
  }
}
</style>

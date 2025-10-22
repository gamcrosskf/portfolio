<template>
  <section id="skills" class="section">
    <div class="command-line">
      <span class="prompt">kenzo-farrugia@portfolio:~$</span>
      <span class="command">ls -la skills/</span>
      <span class="cursor">_</span>
    </div>
    
    <div class="section-content fade-in">
      <h2 class="section-title">
        <span class="bracket">[</span>
        <span class="title-text">Compétences</span>
        <span class="bracket">]</span>
      </h2>
      
      <div class="skills-grid">
        <div 
          v-for="(category, index) in skills" 
          :key="index"
          class="skill-category slide-in"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="category-header">
            <span class="icon">{{ category.icon }}</span>
            <h3 class="category-title">{{ category.name }}</h3>
          </div>
          <ul class="skill-list">
            <li 
              v-for="(skill, idx) in category.items" 
              :key="idx"
              class="skill-item"
            >
              <span class="file-icon">{{ skill.type === 'dir' ? '📁' : '📄' }}</span>
              <span class="skill-name">{{ skill.name }}</span>
              <div class="skill-bar">
                <div 
                  class="skill-progress" 
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
              <span class="skill-percent">{{ skill.level }}%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: [
        {
            name: 'Développement Web',
            icon: '🌐',
            items: [
            { name: 'Angular', level: 85, type: 'file' },
            { name: 'Vue.js', level: 80, type: 'file' },
            { name: 'JavaScript / TypeScript', level: 90, type: 'file' },
            { name: 'HTML5 / CSS3', level: 95, type: 'file' }
            ]
        },
        {
            name: 'Programmation',
            icon: '💻',
            items: [
            { name: 'Java', level: 85, type: 'file' },
            { name: 'C# (.NET)', level: 80, type: 'file' },
            { name: 'Python', level: 85, type: 'file' },
            { name: 'C', level: 75, type: 'file' }
            ]
        },
        {
            name: 'Base de Données',
            icon: '🗄️',
            items: [
            { name: 'MySQL', level: 85, type: 'dir' },
            { name: 'PostgreSQL', level: 80, type: 'dir' }
            ]
        },
        {
            name: 'Intelligence Artificielle',
            icon: '🧠',
            items: [
            { name: 'Keras / TensorFlow', level: 75, type: 'file' },
            { name: 'PyTorch', level: 70, type: 'file' },
            { name: 'Scikit-learn', level: 80, type: 'file' },
            { name: 'Deep Learning', level: 75, type: 'dir' },
            { name: 'Apprentissage Supervisé', level: 80, type: 'dir' }
            ]
        },
        {
            name: 'Outils & Méthodologies',
            icon: '🛠️',
            items: [
            { name: 'Git / GitHub', level: 90, type: 'dir' },
            { name: 'Méthodes Agiles (Scrum)', level: 80, type: 'dir' },
            { name: 'Docker', level: 70, type: 'file' },
            { name: 'CI/CD', level: 65, type: 'file' },
            { name: 'REST APIs', level: 80, type: 'file' }
            ]
        }
        ]
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-radius: 4px;
  border: 1px solid rgba(0, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.skill-category:hover {
  border-color: var(--cyan);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 255, 255, 0.2);
}

.icon {
  font-size: 1.5rem;
}

.category-title {
  color: var(--cyan);
  font-size: 1.2rem;
  font-weight: 500;
}

.skill-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  display: grid;
  grid-template-columns: 20px 1fr auto 50px;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.9rem;
}

.file-icon {
  font-size: 0.85rem;
}

.skill-name {
  color: var(--gray-light);
}

.skill-bar {
  height: 8px;
  background-color: rgba(0, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--cyan-dark), var(--cyan));
  border-radius: 4px;
  transition: width 1s ease-out;
  position: relative;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.skill-percent {
  color: var(--cyan);
  font-size: 0.85rem;
  text-align: right;
}

@media (max-width: 768px) {
  .section-content {
    padding: 1.5rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .skill-item {
    grid-template-columns: 20px 1fr;
    gap: 0.5rem;
  }
  
  .skill-bar {
    grid-column: 1 / -1;
  }
  
  .skill-percent {
    grid-column: 1 / -1;
    text-align: left;
    padding-left: 20px;
  }
}
</style>

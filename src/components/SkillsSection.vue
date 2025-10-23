<template>
  <section id="skills" class="section">
    <div class="command-line">
      <span class="prompt">{{ config.personal.bash }}@portfolio:~$</span>
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
              <img v-if="skill.logo" :src="skill.logo" :alt="skill.name" class="skill-logo" />
              <span class="skill-name">{{ skill.name }}</span>
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
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  computed: {
    skills() {
      return this.config.skills
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
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.95rem;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.skill-item:hover {
  background-color: rgba(0, 255, 255, 0.05);
  transform: translateX(5px);
}

.skill-logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
  filter: brightness(0.9);
  transition: transform 0.2s ease;
}

.skill-item:hover .skill-logo {
  transform: scale(1.15);
}

.skill-name {
  color: var(--gray-light);
  font-weight: 500;
}

@media (max-width: 768px) {
  .section-content {
    padding: 1.5rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .skill-logo {
    width: 24px;
    height: 24px;
  }
}
</style>

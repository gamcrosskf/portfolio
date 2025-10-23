<template>
  <section id="projects" class="section">
    <div class="command-line">
      <span class="prompt">kenzo-farrugia@portfolio:~$</span>
      <span class="command">cat projects.json</span>
      <span class="cursor">_</span>
    </div>
    
    <div class="section-content fade-in">
      <h2 class="section-title">
        <span class="bracket">[</span>
        <span class="title-text">Projets</span>
        <span class="bracket">]</span>
      </h2>
      
      <div class="projects-grid">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="project-card slide-in"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div class="project-header">
            <span class="folder-icon">📂</span>
            <h3 class="project-title">{{ project.name }}</h3>
            <div class="project-links">
              <a 
                v-if="project.github" 
                :href="project.github" 
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
                title="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                v-if="project.live" 
                :href="project.live" 
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
                title="Voir le projet"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
          
          <p class="project-description">{{ project.description }}</p>
          
          <div class="project-tech">
            <span 
              v-for="(tech, idx) in project.technologies" 
              :key="idx"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  computed: {
    projects() {
      return this.config.projects
    },
    linkedinUrl() {
      return this.config.social.linkedin
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.project-card {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-radius: 4px;
  border: 1px solid rgba(0, 255, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-card:hover {
  border-color: var(--cyan);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.15);
  transform: translateY(-5px);
}

.project-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.folder-icon {
  font-size: 1.5rem;
}

.project-title {
  color: var(--cyan);
  font-size: 1.1rem;
  font-weight: 500;
  flex: 1;
}

.project-links {
  display: flex;
  gap: 0.8rem;
}

.project-link {
  color: var(--gray);
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
}

.project-link:hover {
  color: var(--cyan);
}

.project-description {
  color: var(--gray-light);
  line-height: 1.6;
  font-size: 0.9rem;
  flex: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background-color: rgba(0, 255, 255, 0.1);
  color: var(--cyan);
  padding: 0.3rem 0.8rem;
  border-radius: 3px;
  font-size: 0.8rem;
  border: 1px solid rgba(0, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .section-content {
    padding: 1.5rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

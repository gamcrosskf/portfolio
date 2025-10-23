<template>
  <div class="terminal-container">
    <TerminalHeader />
    <div class="terminal-content">
      <AboutSection :config="config" />
      <SkillsSection :config="config" />
      <ProjectsSection :config="config" />
      <ContactSection :config="config" />
    </div>
    <TerminalFooter :config="config" />
  </div>
</template>

<script>
import { portfolioConfig } from './config/portfolio.js'
import TerminalHeader from './components/TerminalHeader.vue'
import TerminalFooter from './components/TerminalFooter.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'

export default {
  name: 'App',
  components: {
    TerminalHeader,
    TerminalFooter,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactSection
  },
  data() {
    return {
      config: portfolioConfig
    }
  }
}
</script>

<style scoped>
.terminal-container {
  max-width: 1200px;
  margin: 2rem auto;
  background-color: var(--blue-dark);
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 255, 255, 0.15);
  overflow: hidden;
  border: 1px solid rgba(0, 255, 255, 0.2);
}

.terminal-content {
  padding: 2rem;
  min-height: 70vh;
}

@media (max-width: 768px) {
  .terminal-container {
    margin: 1rem;
    border-radius: 4px;
  }
  
  .terminal-content {
    padding: 1rem;
  }
}
</style>

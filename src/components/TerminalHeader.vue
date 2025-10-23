<template>
  <div class="terminal-header">
    <div class="terminal-buttons">
      <span class="btn close"></span>
      <span class="btn minimize"></span>
      <span class="btn maximize"></span>
    </div>
    <div class="terminal-title">
      <span class="prompt">{{ config.personal.bash }}@portfolio:~$</span>
    </div>
    <div class="terminal-menu">
      <a href="#about" class="menu-item">./about</a>
      <a href="#skills" class="menu-item">./skills</a>
      <a href="#projects" class="menu-item">./projects</a>
      <a href="#contact" class="menu-item">./contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TerminalHeader',
  props: {
    config: {
      type: Object,
      required: true
    }
  }
}

</script>

<style scoped>
.terminal-header {
  background-color: var(--blue-darker);
  padding: 0.8rem 1.5rem;
  border-bottom: 2px solid var(--cyan);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.terminal-buttons {
  display: flex;
  gap: 0.5rem;
}

.btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.close {
  background-color: #ff5f56;
}

.minimize {
  background-color: #ffbd2e;
}

.maximize {
  background-color: #27c93f;
}

.terminal-title {
  flex: 1;
  text-align: center;
  color: var(--cyan);
  font-weight: 500;
  font-size: 0.9rem;
}

.prompt {
  color: var(--cyan);
}

.terminal-menu {
  display: flex;
  gap: 1rem;
}

.menu-item {
  color: var(--gray);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.3s ease;
  position: relative;
}

.menu-item:hover {
  color: var(--cyan);
}

.menu-item::before {
  content: '$ ';
  color: var(--cyan);
}

@media (max-width: 768px) {
  .terminal-header {
    flex-wrap: wrap;
    padding: 0.6rem 1rem;
  }
  
  .terminal-menu {
    width: 100%;
    justify-content: center;
    margin-top: 0.5rem;
    gap: 0.5rem;
  }
  
  .menu-item {
    font-size: 0.75rem;
  }
}
</style>

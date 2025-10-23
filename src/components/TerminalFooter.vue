<template>
  <div class="terminal-footer">
    <div class="footer-content">
      <span class="footer-text">
        <span class="cyan">~</span> Made by {{ config.personal.name }}
      </span>
      <span class="footer-year">{{ currentYear }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TerminalFooter',
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.terminal-footer {
  background-color: var(--blue-darker);
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(0, 255, 255, 0.2);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--gray);
}

.cyan {
  color: var(--cyan);
}

.heart {
  color: #ff5f56;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.footer-year {
  color: var(--cyan-dark);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    font-size: 0.75rem;
  }
}
</style>

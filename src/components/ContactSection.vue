<template>
  <section id="contact" class="section">
    <div class="command-line">
      <span class="prompt">{{ config.personal.bash }}@portfolio:~$</span>
      <span class="command">./contact.sh</span>
      <span class="cursor">_</span>
    </div>
    
    <div class="section-content fade-in">
      <h2 class="section-title">
        <span class="bracket">[</span>
        <span class="title-text">Contact</span>
        <span class="bracket">]</span>
      </h2>
      
      <div class="contact-content">
        <p class="contact-intro">
          <span class="cyan">></span> Intéressé par une collaboration ? N'hésitez pas à me contacter !
        </p>
        
        <div class="contact-methods">
          <a 
            v-for="(method, index) in contactMethods" 
            :key="index"
            :href="method.link"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-card"
          >
            <div class="contact-icon">{{ method.icon }}</div>
            <div class="contact-info">
              <h3 class="contact-name">{{ method.name }}</h3>
              <p class="contact-value">{{ method.value }}</p>
            </div>
            <div class="arrow">→</div>
          </a>
        </div>

        <div class="linkedin-cta">
        <p class="cta-text">
          <span class="cyan">></span> Mon profil LinkedIn pour en savoir plus
        </p>
        <a 
          href="https://www.linkedin.com/in/kenzo-farrugia-a883b5271" 
          target="_blank"
          rel="noopener noreferrer"
          class="linkedin-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          Voir mon LinkedIn
        </a>
      </div>
        
        <div class="download-cv">
          <p class="cv-text">
            <span class="cyan">></span> Téléchargez mon CV
          </p>
          <a href="#" class="cv-btn" @click.prevent="downloadCV">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Télécharger CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  computed: {
    contactMethods() {
      return this.config.contact
    }
  },
  methods: {
    downloadCV() {
      const link = this.config.cv.downloadLink
      if (link) {
        window.open(link, '_blank')
      } else {
        alert('Fonction de téléchargement du CV à implémenter.')
      }
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

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-intro {
  color: var(--gray-light);
  font-size: 1.1rem;
  padding-left: 1rem;
}

.contact-intro .cyan {
  position: absolute;
  left: 0;
  color: var(--cyan);
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 255, 255, 0.1);
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 255, 255, 0.1),
    transparent
  );
  transition: left 0.5s ease;
}

.contact-card:hover::before {
  left: 100%;
}

.contact-card:hover {
  border-color: var(--cyan);
  transform: translateX(5px);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.15);
}

.contact-icon {
  font-size: 2rem;
}

.contact-info {
  flex: 1;
}

.contact-name {
  color: var(--cyan);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.contact-value {
  color: var(--gray-light);
  font-size: 0.85rem;
}

.arrow {
  color: var(--cyan);
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.contact-card:hover .arrow {
  transform: translateX(5px);
}

.download-cv {
  margin-top: 2rem;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  border: 1px solid rgba(0, 255, 255, 0.2);
  text-align: center;
}

.cv-text {
  color: var(--gray-light);
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.cv-text .cyan {
  color: var(--cyan);
  margin-right: 0.5rem;
}

.cv-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 2rem;
  background-color: rgba(0, 255, 255, 0.1);
  color: var(--cyan);
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid var(--cyan);
}

.cv-btn:hover {
  background-color: var(--cyan);
  color: var(--blue-dark);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
}

.linkedin-cta {
  margin-top: 2rem;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  border: 1px solid rgba(0, 255, 255, 0.2);
  text-align: center;
}

.cta-text {
  color: var(--gray-light);
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.cta-text .cyan {
  color: var(--cyan);
  margin-right: 0.5rem;
}

.linkedin-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 2rem;
  background-color: #0077b5;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid #0077b5;
}

.linkedin-btn:hover {
  background-color: transparent;
  border-color: var(--cyan);
  color: var(--cyan);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .section-content {
    padding: 1.5rem;
  }
  
  .contact-methods {
    grid-template-columns: 1fr;
  }
  
  .download-cv {
    padding: 1.5rem;
  }

  .linkedin-cta {
    padding: 1.5rem;
  }
}
</style>

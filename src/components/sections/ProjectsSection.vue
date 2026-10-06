<script setup>
// Each object = one project card. Edit the text here, not in the template.
// image = the screenshot in public/assets/projects/
// visualLabel and lines = from the old placeholder window (not used anymore)
// actionStyle = 'primary' (dark button) or 'ghost' (outlined button)
const projects = [
  {
    image: '/assets/projects/jf-villiamor.png',
    visualLabel: 'jf-villiamor.pages.dev',
    lines: [70, 85, 48, 60, 36],
    type: 'Client website',
    title: 'JF Villiamor — Business Page Growth & Lead Generation',
    description:
      'Business website for a client offering Facebook page growth and lead generation services, including Meta ads support and a Business AI chatbot setup.',
    features: [
      'Multi-page site with a dedicated Meta Ads results page',
      'Chatbot / auto-reply widget',
      'Image gallery with lightbox',
      'Responsive for desktop and mobile',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    actionLabel: 'View live site',
    actionUrl: 'https://jf-villiamor.pages.dev/',
    actionStyle: 'primary',
  },
  {
    image: '/assets/projects/personal-portfolio.png',
    visualLabel: 'index.html',
    lines: [78, 52, 64, 40, 70],
    type: 'Personal project',
    title: 'Personal Portfolio Website',
    description:
      'My personal portfolio website, showcasing my background, skills, projects, learning experience, and certificates.',
    features: [
      'Responsive design for desktop, tablet, and mobile',
      'Component-based structure using Vue.js',
      'Reusable sections and data-driven content',
      'Direct links to GitHub, LinkedIn, and email',
    ],
    stack: ['Vue.js', 'Vite', 'HTML', 'CSS', 'JavaScript'],
    actionLabel: 'View source on GitHub',
    actionUrl: 'https://github.com/selahbunag18-glitch',
    actionStyle: 'ghost',
  },
]
</script>

<template>
  <section class="section" id="projects">
    <div class="section-inner">
      <div class="section-head">
        <h2>Projects</h2>
      </div>

      <div class="project-list">
        <div v-for="project in projects" :key="project.title" class="project-card">
          <div class="project-visual">
            <img
              :src="project.image"
              :alt="'Screenshot of ' + project.title"
              class="project-visual-image"
              loading="lazy"
            >
          </div>

          <div class="project-info">
            <p class="mono-label">{{ project.type }}</p>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>

            <div class="project-features">
              <ul>
                <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>

            <div class="project-stack">
              <p class="mono-label">Built with</p>
              <ul class="tag-list">
                <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
              </ul>
            </div>

            <div class="project-actions">
              <a
                :href="project.actionUrl"
                target="_blank"
                rel="noopener noreferrer"
                :class="['btn', 'btn-' + project.actionStyle, 'btn-sm']"
              >{{ project.actionLabel }}</a>
            </div>
          </div>
        </div>
      </div>

      <p class="projects-note">More projects are on the way as I keep building — check back soon, or follow along on <a href="https://github.com/selahbunag18-glitch" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

// Each object = one project card. Edit the text here, not in the template.
// isFlipped = true when the card is showing its back side
// liveUrl / githubUrl = the action button only shows if the link exists
const projects = ref([
  {
    image: '/assets/projects/jf-villiamor.png',
    title: 'JF Villiamor - Business Page Growth & Lead Generation',
    description:
      'Business website for a client offering Facebook page growth and lead generation services, including Meta ads support and a Business AI chatbot setup.',
    features: [
      'Multi-page site with a dedicated Meta Ads results page',
      'Chatbot / auto-reply widget',
      'Image gallery with lightbox',
      'Responsive for desktop and mobile',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://jf-villiamor.pages.dev/',
    isFlipped: false,
  },
  {
    image: '/assets/projects/personal-portfolio.png',
    title: 'Personal Portfolio Website',
    description:
      'My personal portfolio website, showcasing my background, skills, projects, learning experience, and certificates.',
    features: [
      'Responsive design for desktop, tablet, and mobile',
      'Component-based structure using Vue.js',
      'Reusable sections and data-driven content',
      'Direct links to GitHub, LinkedIn, and email',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Vite'],
    isFlipped: false,
  },
])

// Flips only the card that was clicked
function toggleCard(project) {
  project.isFlipped = !project.isFlipped
}
</script>

<template>
  <section class="section" id="projects">
    <div class="section-inner">
      <div class="section-head">
        <p class="eyebrow">Projects</p>
        <h2>Featured work.</h2>
      </div>

      <div class="flip-grid">
        <!-- Outer card -->
        <div
          v-for="project in projects"
          :key="project.title"
          class="flip-card"
          :class="{ 'is-flipped': project.isFlipped }"
        >
          <!-- Inner element: this is the part that rotates -->
          <div class="flip-inner">
            <!-- FRONT FACE -->
            <!-- "inert" stops keyboard focus and clicks on the side that is hidden -->
            <div class="flip-face flip-front" :inert="project.isFlipped ? true : null">
              <h3>{{ project.title }}</h3>
              <img :src="project.image" :alt="'Screenshot of ' + project.title" class="flip-image" loading="lazy">

              <p>{{ project.description }}</p>
              <a href="#" class="learn-more" @click.prevent="toggleCard(project)">Learn More →</a>
            </div>

            <!-- BACK FACE -->
            <div class="flip-face flip-back" :inert="project.isFlipped ? null : true">
              <button type="button" class="back-button" @click="toggleCard(project)">← Back</button>
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

              <!-- Action button stays at the bottom -->
              <div class="flip-actions">
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary btn-sm"
                >View live site</a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-ghost btn-sm"
                >View Source on GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="projects-note">More projects are on the way as I keep building — check back soon, or follow along on <a href="https://github.com/selahbunag18-glitch" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import TagList from './TagList.vue'

defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: { type: Array, required: true },
  stack: { type: Array, required: true },
  liveUrl: { type: String, default: '' },    // the button only shows if a link exists
  githubUrl: { type: String, default: '' },
})

// Each card keeps its OWN flip state, so cards never flip together
const isFlipped = ref(false)

function toggleCard() {
  isFlipped.value = !isFlipped.value
}
</script>

<template>
  <div class="flip-card" :class="{ 'is-flipped': isFlipped }">
    <div class="flip-inner">
      <!-- FRONT ("inert" blocks keyboard focus on the hidden side) -->
      <div class="flip-face flip-front" :inert="isFlipped ? true : null">
        <img :src="image" :alt="'Screenshot of ' + title" class="flip-image" loading="lazy">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <a href="#" class="learn-more" @click.prevent="toggleCard">Learn More →</a>
      </div>

      <!-- BACK -->
      <div class="flip-face flip-back" :inert="isFlipped ? null : true">
        <button type="button" class="back-button" @click="toggleCard">← Back</button>

        <h3>{{ title }}</h3>
        <p>{{ description }}</p>

        <div class="project-features">
          <ul>
            <li v-for="feature in features" :key="feature">{{ feature }}</li>
          </ul>
        </div>

        <div class="project-stack">
          <p class="mono-label">Built with</p>
          <TagList :items="stack" />
        </div>

        <div class="flip-actions">
          <a
            v-if="liveUrl"
            :href="liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary btn-sm"
          >View live site</a>
          <a
            v-if="githubUrl"
            :href="githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-ghost btn-sm"
          >View Source on GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>
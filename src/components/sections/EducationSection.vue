<script setup>
// Each object = one education card. Edit the text here, not in the template.
const educationItems = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Nueva Ecija University of Science and Technology',
    badge: '4th Year',
  },
]
</script>

<template>
  <section class="section section-alt" id="education">
    <div class="section-inner">
      <div class="section-head">
        <p class="eyebrow">Education</p>
        <h2>Where I'm studying.</h2>
      </div>

      <div v-for="item in educationItems" :key="item.degree" class="edu-card">
        <div>
          <h3>{{ item.degree }}</h3>
          <p>{{ item.school }}</p>
        </div>
        <span class="badge">{{ item.badge }}</span>
      </div>
    </div>
  </section>
</template>
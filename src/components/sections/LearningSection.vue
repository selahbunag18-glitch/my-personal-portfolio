<script setup>
// Each object = one learning card. Edit the text here, not in the template.
const learningItems = [
  {
    label: 'Academic work',
    title: 'Coursework & class projects',
    text: 'Building and applying IT and web development fundamentals through my BSIT coursework at NEUST.',
  },
  {
    label: 'Personal development',
    title: 'Self-directed projects',
    text: 'Practicing HTML, CSS, JavaScript, PHP, and Laravel on my own projects, including this portfolio.',
  },
  {
    label: 'Hands-on learning',
    title: 'Tools & workflow',
    text: 'Getting comfortable with Git, GitHub, XAMPP, and VS Code as part of a real development workflow.',
  },
  {
    label: 'Continuous learning',
    title: 'Webinars & training',
    text: 'Attending webinars on AI in education and digital marketing to broaden my perspective beyond code.',
  },
]
</script>

<template>
  <section class="section section-alt" id="learning">
    <div class="section-inner">
      <div class="section-head">
        <h2>Experience &amp; Learning</h2>
        <p class="section-lede">
          My experience comes from academic projects, personal projects,
          and continuous learning in web development.
        </p>
      </div>

      <div class="learning-grid">
        <div v-for="item in learningItems" :key="item.title" class="learning-card">
          <p class="mono-label">{{ item.label }}</p>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
// Each object = one skill card. Edit the text here, not in the template.
const skills = [
  { title: 'Languages', items: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'Frameworks & Libraries', items: ['React.js', 'Angular', 'Basic Vue.js', 'Bootstrap', 'Tailwind CSS'] },
  { title: 'Tools', items: ['Visual Studio Code (VS Code)', 'Git', 'GitHub', 'Figma'] },
  { title: 'Web Technologies', items: ['Responsive Web Design', 'REST APIs', 'JSON'] },
  { title: 'AI Technologies', items: ['ChatGPT', 'Notebook', 'Claude'] },
  { title: 'Other', items: ['Laravel (Basic)', 'UI/UX Design', 'Web Development', 'Problem Solving'] },
]

// 0 -> "01", 1 -> "02", ...
function formatNumber(index) {
  return String(index + 1).padStart(2, '0')
}
</script>

<template>
  <section class="section section-alt" id="skills">
    <div class="section-inner">
      <div class="section-head">
        <p class="eyebrow">Skills</p>
        <h2>Technical skills</h2>
        <p class="section-lede">Technologies and tools I currently use and am comfortable with.</p>
      </div>

      <div class="skills-grid">
        <div v-for="(skill, index) in skills" :key="skill.title" class="skill-card">
          <h3><span class="mono-label">{{ formatNumber(index) }}</span>{{ skill.title }}</h3>
          <ul class="tag-list">
            <li v-for="item in skill.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({
  degree: { type: String, required: true },
  school: { type: String, required: true },
  badge: { type: String, required: true },
})
</script>

<template>
  <div class="edu-card">
    <div>
      <h3>{{ degree }}</h3>
      <p>{{ school }}</p>
    </div>
    <span class="badge">{{ badge }}</span>
  </div>
</template>
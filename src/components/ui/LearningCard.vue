<script setup>
defineProps({
  label: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
})
</script>

<template>
  <div class="learning-card">
    <p class="mono-label">{{ label }}</p>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>
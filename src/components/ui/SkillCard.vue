<script setup>
defineProps({
  eyebrow: { type: String, required: true }, // small label, e.g. "Skills"
  title: { type: String, required: true },
  lede: { type: String, default: '' },        // optional paragraph under the title
})
</script>

<template>
  <div class="section-head">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="lede" class="section-lede">{{ lede }}</p>
  </div>
</template>
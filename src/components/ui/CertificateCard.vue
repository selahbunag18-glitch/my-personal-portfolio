<script setup>
defineProps({
  image: { type: String, required: true },
  imageWidth: { type: Number, required: true },
  imageHeight: { type: Number, required: true },
  imageAlt: { type: String, required: true },
  linkLabel: { type: String, required: true }, // accessible name of the thumbnail button
  title: { type: String, required: true },
  theme: { type: String, required: true },
  meta: { type: Array, required: true },       // [{ label, value }]
})

// Tells the parent section to open its lightbox
const emit = defineEmits(['open'])
</script>

<template>
  <article class="cert-card">
    <button type="button" class="cert-thumb" :aria-label="linkLabel" @click="emit('open')">
      <img :src="image" :alt="imageAlt" loading="lazy" :width="imageWidth" :height="imageHeight">
      <span class="cert-thumb-hint">View full certificate</span>
    </button>

    <div class="cert-card-body">
      <div class="cert-card-top">
        <img src="/assets/icons/Certificate.png" alt="" class="icon-certificate" width="26" height="26">
        <span class="mono-label">Certificate of Participation</span>
      </div>
      <h3>{{ title }}</h3>
      <p class="cert-theme">{{ theme }}</p>
      <dl class="cert-meta">
        <div v-for="row in meta" :key="row.label">
          <dt>{{ row.label }}</dt>
          <dd>{{ row.value }}</dd>
        </div>
      </dl>
    </div>
  </article>
</template>
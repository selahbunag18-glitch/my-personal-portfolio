<script setup>
defineProps({
  href: { type: String, required: true },
  icon: { type: String, required: true },  // "email", "github", ... (file name in public/assets/icons/)
  label: { type: String, required: true },
  text: { type: String, required: true },  // the value shown under the label
  external: { type: Boolean, default: false },
})
</script>

<template>
  <a
    :href="href"
    :target="external ? '_blank' : null"
    :rel="external ? 'noopener noreferrer' : null"
    class="contact-card"
  >
    <img :src="'/assets/icons/' + icon + '.png'" alt="" :class="'icon-' + icon" width="22" height="22">
    <div>
      <span class="mono-label">{{ label }}</span>
      <span>{{ text }}</span>
    </div>
  </a>
</template>
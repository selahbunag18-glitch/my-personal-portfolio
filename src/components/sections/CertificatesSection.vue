<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'

// Each object = one certificate card. Edit the text here, not in the template.
// meta = the small Date / Format / Issued by rows under each certificate
const certificates = [
  {
    image: '/assets/certificates/cert-asia-ai-summit-2026.png',
    imageWidth: 502,
    imageHeight: 707,
    imageAlt:
      'Certificate of Participation presented to Nethuselah Bunag for the Asia AI Summit for Education 2026, held online July 29–30, 2026, issued by CUMULi Trainings.',
    linkLabel: 'Open full-size Asia AI Summit for Education 2026 certificate',
    title: 'Asia AI Summit for Education 2026',
    theme: '"Bridging the Gaps Among Technology, Businesses and Education"',
    meta: [
      { label: 'Date', value: 'July 29–30, 2026' },
      { label: 'Format', value: 'Online event' },
      { label: 'Issued by', value: 'CUMULi Trainings' },
    ],
  },
  {
    image: '/assets/certificates/cert-upskilltechph-marketing101.png',
    imageWidth: 766,
    imageHeight: 540,
    imageAlt:
      'Certificate of Participation presented to Nethuselah Bunag for the UpskillTechPH webinar Marketing 101: Intro to SMM and SEO, Drive Online Traffic, dated August 1, 2026.',
    linkLabel: 'Open full-size UpskillTechPH Marketing 101 certificate',
    title: 'Marketing 101: Intro to SMM and SEO',
    theme: '"Drive Online Traffic" — hosted by UpskillTechPH Training Services',
    meta: [
      { label: 'Date', value: 'August 1, 2026' },
      { label: 'Duration', value: '1 hour' },
    ],
  },
]

// ----- Lightbox -----
// null = closed. When a certificate is stored here, the lightbox is open.
const selectedCertificate = ref(null)
const closeButton = ref(null) // the X button
let lastFocused = null        // remembers which thumbnail was clicked

function openCertificate(cert) {
  lastFocused = document.activeElement
  selectedCertificate.value = cert
}

function closeCertificate() {
  selectedCertificate.value = null
}

// Runs every time the lightbox opens or closes
watch(selectedCertificate, async (cert) => {
  // Stop the page behind from scrolling while it is open
  document.body.style.overflow = cert ? 'hidden' : ''

  if (cert) {
    await nextTick()
    closeButton.value?.focus() // keyboard users start on the X
  } else if (lastFocused) {
    lastFocused.focus() // go back to the thumbnail that was clicked
  }
})

// ESC closes the lightbox
function handleKeydown(event) {
  if (event.key === 'Escape') closeCertificate()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section class="section" id="certificates">
    <div class="section-inner">
      <div class="section-head">
        <p class="eyebrow">Certificates</p>
        <h2>Webinar participation.</h2>
        <p class="section-lede">Certificates of participation from webinars I've attended — not professional licenses or certifications.</p>
      </div>

      <div class="cert-grid">
        <article v-for="cert in certificates" :key="cert.title" class="cert-card">
          <button
            type="button"
            class="cert-thumb"
            :aria-label="cert.linkLabel"
            @click="openCertificate(cert)"
          >
            <img
              :src="cert.image"
              :alt="cert.imageAlt"
              loading="lazy"
              :width="cert.imageWidth"
              :height="cert.imageHeight"
            >
            <span class="cert-thumb-hint">View full certificate</span>
          </button>

          <div class="cert-card-body">
            <div class="cert-card-top">
              <img src="/assets/icons/Certificate.png" alt="" class="icon-certificate" width="26" height="26">
              <span class="mono-label">Certificate of Participation</span>
            </div>
            <h3>{{ cert.title }}</h3>
            <p class="cert-theme">{{ cert.theme }}</p>
            <dl class="cert-meta">
              <div v-for="row in cert.meta" :key="row.label">
                <dt>{{ row.label }}</dt>
                <dd>{{ row.value }}</dd>
              </div>
            </dl>
          </div>
        </article>
      </div>

      <p class="cert-note">Click a certificate to view it full size.</p>
    </div>
  </section>

  <!-- Lightbox. Teleport puts it directly in <body> so no parent can clip or shift it. -->
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="selectedCertificate"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="selectedCertificate.title"
        @click.self="closeCertificate"
      >
        <button
          ref="closeButton"
          type="button"
          class="lightbox-close"
          aria-label="Close"
          @click="closeCertificate"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>

        <img
          class="lightbox-image"
          :src="selectedCertificate.image"
          :alt="selectedCertificate.imageAlt"
        >
      </div>
    </Transition>
  </Teleport>
</template>
<script setup>
// Each object = one certificate card. Edit the text here, not in the template.
// meta = the small Date / Format / Issued by rows under each certificate
const certificates = [
  {
    image: '/assets/certificates/cert-asia-ai-summit-2026.png',
    imageWidth: 502,
    imageHeight: 707,
    imageAlt:
      'Certificate of Participation presented to Nethuselah Bunag for the Asia AI Summit for Education 2026, held online July 29–30, 2026, issued by CUMULi Trainings.',
    linkLabel: 'Open full-size Asia AI Summit for Education 2026 certificate in a new tab',
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
    linkLabel: 'Open full-size UpskillTechPH Marketing 101 certificate in a new tab',
    title: 'Marketing 101: Intro to SMM and SEO',
    theme: '"Drive Online Traffic" — hosted by UpskillTechPH Training Services',
    meta: [
      { label: 'Date', value: 'August 1, 2026' },
      { label: 'Duration', value: '1 hour' },
    ],
  },
]
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
          <a
            class="cert-thumb"
            :href="cert.image"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="cert.linkLabel"
          >
            <img
              :src="cert.image"
              :alt="cert.imageAlt"
              loading="lazy"
              :width="cert.imageWidth"
              :height="cert.imageHeight"
            >
            <span class="cert-thumb-hint">View full certificate</span>
          </a>

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
</template>
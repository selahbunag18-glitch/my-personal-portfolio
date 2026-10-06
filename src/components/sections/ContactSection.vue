<script setup>
// Each object = one contact card. Edit the text here, not in the template.
// icon = file name in public/assets/icons/ (without .png)
// external = true opens the link in a new tab
const contactLinks = [
  {
    icon: 'email',
    label: 'Email',
    text: 'nethuselahbunag@gmail.com',
    href: 'mailto:nethuselahbunag@gmail.com',
    external: false,
  },
  {
    icon: 'github',
    label: 'GitHub',
    text: 'selahbunag18-glitch',
    href: 'https://github.com/selahbunag18-glitch',
    external: true,
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    text: 'nethuselah-bunag',
    href: 'https://www.linkedin.com/in/nethuselah-bunag-23469a424/',
    external: true,
  },
  {
    icon: 'facebook',
    label: 'Facebook',
    text: 'nethuselah s.p bunag',
    href: 'https://web.facebook.com/nethuselah.sp.bunag',
    external: true,
  },
]
</script>

<template>
  <section class="section contact" id="contact">
    <div class="section-inner contact-inner">
      <p class="eyebrow">Contact</p>
      <h2>Let's talk.</h2>
      <p class="section-lede">Open to internship opportunities, collaboration, or just a conversation about web development. Reach out through any of these.</p>

      <div class="contact-grid">
        <a
          v-for="link in contactLinks"
          :key="link.icon"
          :href="link.href"
          :target="link.external ? '_blank' : null"
          :rel="link.external ? 'noopener noreferrer' : null"
          class="contact-card"
        >
          <img
            :src="'/assets/icons/' + link.icon + '.png'"
            alt=""
            :class="'icon-' + link.icon"
            width="22"
            height="22"
          >
          <div>
            <span class="mono-label">{{ link.label }}</span>
            <span>{{ link.text }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
// The three links under the hero buttons
const heroLinks = [
  {
    label: 'GitHub',
    icon: 'github',
    href: 'https://github.com/selahbunag18-glitch',
    external: true,
  },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/nethuselah-bunag-23469a424/',
    external: true,
  },
  {
    label: 'Email',
    icon: 'email',
    href: 'mailto:nethuselahbunag@gmail.com',
    external: false,
  },
]
</script>

<template>
  <section class="hero" id="top">
    <div class="hero-inner">
      <div class="hero-copy">
        <p class="eyebrow">
          <span class="status-dot" aria-hidden="true"></span>
          Nueva Ecija, Philippines
        </p>

        <h1 class="hero-name">
          Nethuselah<br>S.P.&nbsp;Bunag
        </h1>

        <p class="hero-role">
          Web Developer <span class="hero-role-sep">/</span> Frontend Developer
        </p>

        <p class="hero-intro">
          I build responsive websites and user-friendly web interfaces
          with a focus on clean design and practical functionality.
        </p>

        <span class="badge badge-outline">
          Open to Web Development Opportunities
        </span>

        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">View my work</a>
          <a href="#contact" class="btn btn-ghost">Get in touch</a>
        </div>

        <div class="hero-links">
          <a
            v-for="link in heroLinks"
            :key="link.icon"
            :href="link.href"
            :target="link.external ? '_blank' : null"
            :rel="link.external ? 'noopener noreferrer' : null"
            class="hero-link"
          >
            <img
              :src="'/assets/icons/' + link.icon + '.png'"
              alt=""
              :class="'icon-' + link.icon"
              width="18"
              height="18"
            >
            <span>{{ link.label }}</span>
          </a>
        </div>
      </div>

      <div class="hero-photo-wrap">
        <img
          src="/assets/profile/nethuselah-bunag.png"
          alt="Portrait of Nethuselah S.P. Bunag"
          loading="lazy"
          class="hero-photo"
          width="380"
          height="475"
        >
      </div>
    </div>
  </section>
</template>
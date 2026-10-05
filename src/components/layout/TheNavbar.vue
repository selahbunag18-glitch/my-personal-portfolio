<script setup>
import { ref } from 'vue'
import { navLinks } from '../../data/navLinks.js'

// The desktop menu skips links marked showOnDesktop: false (Education is mobile-only)
const desktopLinks = navLinks.filter((link) => link.showOnDesktop)

// true = mobile menu is open
const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="nav" id="nav">
    <div class="nav-inner">
      <a href="#top" class="nav-mark" aria-label="Back to top">
        <img src="/assets/logo.png" alt="NB3 logo" class="nav-logo">
        <span class="nav-mark-text">Nethuselah Bunag</span>
      </a>

      <nav class="nav-links" aria-label="Primary">
        <a
          v-for="link in desktopLinks"
          :key="link.href"
          :href="link.href"
          :class="{ 'nav-cta': link.isCta }"
        >{{ link.label }}</a>
      </nav>

      <button
        class="nav-toggle"
        id="navToggle"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-controls="navMobile"
        @click="toggleMenu"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <div class="nav-mobile" id="navMobile" :class="{ open: isMenuOpen }">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        @click="closeMenu"
      >{{ link.label }}</a>
    </div>
  </header>
</template>
<script setup>
import TheNavbar from './components/layout/TheNavbar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import LearningSection from './components/sections/LearningSection.vue'
import CertificatesSection from './components/sections/CertificatesSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import TheFooter from './components/layout/TheFooter.vue'
import BackToTop from './components/ui/BackToTop.vue'
import { useScrollReveal } from './composables/useScrollReveal.js'

// Turns on the scroll-reveal effect
useScrollReveal()
</script>

<template>
  <TheNavbar />
  <HeroSection />
  <AboutSection />
  <SkillsSection />
  <ProjectsSection />
  <LearningSection />
  <CertificatesSection />
  <EducationSection />
  <ContactSection />
  <TheFooter />
  <BackToTop />
</template>
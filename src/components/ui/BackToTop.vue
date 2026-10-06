<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// true = the button is shown (page scrolled more than 480px)
const isVisible = ref(false)

function handleScroll() {
  isVisible.value = window.scrollY > 480
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  handleScroll() // check once in case the page loads already scrolled
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button
    class="to-top"
    id="toTop"
    :class="{ visible: isVisible }"
    aria-label="Back to top"
    @click="scrollToTop"
  >
    <img src="/assets/icons/arrow-up.png" alt="" class="icon-arrow-up" width="18" height="18">
  </button>
</template>
import { onMounted, onUnmounted } from 'vue'

// Same elements as the old script
const TARGETS =
  '.section-head, .skill-card, .project-card, .learning-card, .cert-card, .edu-card, .contact-card'

export function useScrollReveal() {
  let observer = null

  onMounted(() => {
    const elements = document.querySelectorAll(TARGETS)
    if (!elements.length) return

    // Browser has no IntersectionObserver: show everything right away
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('reveal', 'in'))
      return
    }

    // 1. Hide the elements first (the CSS .reveal rule)
    elements.forEach((el) => el.classList.add('reveal'))

    // 2. Show each one when it scrolls into view
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target) // reveal only once
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
  })

  // Stop watching when the component is removed
  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
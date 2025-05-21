<template>
  <div ref="el" :class="['fade-in', directionClass, { 'is-visible': isVisible }]">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'

const props = defineProps({
  direction: {
    type: String,
    default: 'up', // 'left'・'right'・'up' が使える
  }
})

const el = ref(null)
const isVisible = ref(false)

const directionClass = computed(() => {
  switch (props.direction) {
    case 'left':
      return 'from-left'
    case 'right':
      return 'from-right'
    default:
      return 'from-up'
  }
})

let observer

onMounted(async () => {
  await nextTick()
  
  setTimeout(() => {
    if (el.value && el.value.getBoundingClientRect().top < window.innerHeight) {
    isVisible.value = true
    return
  }
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      observer.unobserve(el.value)
    }
  })

  observer.observe(el.value)
  }, 800 )



})

onUnmounted(() => {
  if (observer && el.value) {
    observer.unobserve(el.value)
  }
})
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transition:
    opacity 2.0s ease-out,
    transform 2.0s ease-out;
}

.from-up {
  transform: translateY(50px);
}
.from-left {
  transform: translateX(-50px);
}
.from-right {
  transform: translateX(50px);
}

.is-visible {
  opacity: 1;
  transform: translate(0);
}


</style>

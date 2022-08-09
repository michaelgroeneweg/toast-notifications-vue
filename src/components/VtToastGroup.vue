<template>
  <transition-group name="toast" tag="div" class="vt-toast__grid-container" :class="positionGroup">
    <slot />
  </transition-group>
</template>

<script setup>
const props = defineProps({
  position: {
    type: String,
    default: 'top-right',
  },
})

const positionGroup = computed(() => {
  if (props.position === 'top-right') return 'vt-toast--top-right'
  if (props.position === 'top-left') return 'vt-toast--top-left'
  if (props.position === 'top-center') return 'vt-toast--top-center'
  if (props.position === 'bottom-left') return 'vt-toast--bottom-right'
  if (props.position === 'bottom-left') return 'vt-toast--bottom-left'
  if (props.position === 'bottom-center') return 'vt-toast--bottom-center'
})
</script>

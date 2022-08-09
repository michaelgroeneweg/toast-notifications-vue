<script setup lang="ts">
import VtProgressBar from './VtProgressBar.vue'
import '../scss/index.scss'
import CloseIcon from './icons/Close.vue'
import Alert from './icons/Alert.vue'

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'info',
    required: false,
  },
  title: { type: String, default: null, required: false },
  message: {
    type: String,
    default: 'Ooops! A message was not provided.',
    required: false,
  },
  autoClose: { type: Boolean, default: true, required: false },
  duration: { type: Number, default: 5, required: false },
})

const emit = defineEmits(['close'])
</script>

<template>
  <div class="vt-toast">
    <button class="vt-toast__button">
      <close-icon class="icon--sm" />
    </button>
    <div class="vt-toast__container">
      <div class="vt-toast__icon"><alert class="icon--lg" /></div>
      <div class="vt-toast__content">
        <div class="vt-toast__title">Oops! Something went wrong.</div>
        <div class="vt-toast__message">
          We're sorry, the requested content is not available. Please try again later.
        </div>
      </div>
    </div>
    <VtProgressBar></VtProgressBar>
  </div>
</template>

<template>
  <button>{{label}}</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineOptions({
    name: 'LButton'
})

defineProps({
  label: {
    type: String,
    default: 'Button',
  }
})

</script>

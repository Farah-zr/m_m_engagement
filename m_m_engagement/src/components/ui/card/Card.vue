<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('rounded-[4px] border bg-card text-card-foreground', props.class)">
    <slot />
  </div>
</template>

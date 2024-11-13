<script setup lang="ts">
import { cn } from '@/utils/utils'
import { DialogClose, type DialogCloseProps } from 'radix-vue'

const props = defineProps<DialogCloseProps>()

const emit = defineEmits(['close-dialog'])
</script>

<template>
  <DialogClose
    v-bind="props"
    @click="$emit('close-dialog')"
    :class="
      cn(
        // 'absolute right-4 top-4 rounded-sm opacity-70 hover:bg-accent hover:text-accent-foreground dark:hover:bg-background focus:shadow-border/20 disabled:pointer-events-none'
        'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none'
      )
    "
  >
    <slot />
  </DialogClose>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  class?: HTMLAttributes['class']
  defaultValue?: string | number
  modelValue?: string | number
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue
})
</script>

<template>
  <textarea
    v-model="modelValue"
    :class="
      cn(
        'flex min-h-[60px] w-full rounded-[6px] border border-input bg-transparent px-3 py-2 text-sm placeholder:text-[13px] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )
    "
  />
</template>

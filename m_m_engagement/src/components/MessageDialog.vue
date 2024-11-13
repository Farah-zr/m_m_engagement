<template>
  <div>
    <Dialog v-model:open="modalOpen">
      <DialogTrigger v-if="withTrigger" as-child>
        <Button size="sm">
          <span>{{ triggerText }}</span>
        </Button>
      </DialogTrigger>
      <DialogContent
        class="p-0"
        :class="width"
        @escapeKeyDown="closeDialog"
        @pointerDownOutside="
          (event) => {
            if (!withTrigger) {
              event.preventDefault()
              closeDialog()
            }
          }
        "
      >
        <DialogHeader class="px-3 pt-3">
          <!-- * color here -->
          <DialogTitle class="text-[18px] text-muted-gold flex items-center">
            <slot name="icon"></slot>
            <span>{{ title }}</span>
          </DialogTitle>
        </DialogHeader>

        <div class="max-h-[70vh] overflow-y-auto px-3 py-2">
          <p class="text-sm">
            <slot name="dialog-content"></slot>
          </p>
        </div>

        <DialogFooter class="px-3 pb-3" :class="'sm:justify-end'">
          <Button :variant="'default'" size="sm" class="h-[30px]" @click="closeDialog">
            Close
          </Button>
        </DialogFooter>

        <DialogClose @close-dialog="closeDialog">
          <!-- * color here -->
          <Icon icon="lucide:x" class="text-sage" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup>
import { Icon } from '@iconify/vue'
import DialogClose from './ui/dialog/DialogClose.vue'
import DialogFooter from './ui/dialog/DialogFooter.vue'
import Button from './ui/button/Button.vue'
import DialogTitle from './ui/dialog/DialogTitle.vue'
import DialogHeader from './ui/dialog/DialogHeader.vue'
import DialogContent from './ui/dialog/DialogContent.vue'
import DialogTrigger from './ui/dialog/DialogTrigger.vue'
import Dialog from './ui/dialog/Dialog.vue'
import { onMounted, ref } from 'vue'

const props = defineProps(['withTrigger', 'triggerText', 'title', 'width'])

const emits = defineEmits(['close'])

const modalOpen = ref(false)

onMounted(async () => {
  if (!props.withTrigger) modalOpen.value = true
})

function closeDialog() {
  modalOpen.value = false
  emits('close')
}
</script>

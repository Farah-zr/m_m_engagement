<template>
  <!-- <div class="flex flex-col items-center justify-center h-full"> -->
  <div class="fixed top-0 left-0 h-full w-full">
    <div class="card-wrap absolute top-1/2 left-1/2">
      <Card class="card px-4 py-3 grid gap-4 rounded-[4px]">
        <CardHeader class="grid gap-2 text-center p-0">
          <CardTitle class="font-medium text-[var(--muted-gold)]"> M & M Love Journal </CardTitle>
          <CardDescription class="text-[var(--sage)]">
            A message from your heart is the best gift we could receive today. We can't wait to read
            your words of love!
          </CardDescription>
        </CardHeader>

        <CardContent class="w-full p-0 grid gap-4">
          <div class="grid gap-1 w-full">
            <Label class="text-[var(--muted-gold)]">Name</Label>
            <Input
              v-model:model-value="guestName"
              placeholder="Enter your name"
              class="px-2 py-1 w-full"
            />
          </div>

          <div class="grid gap-1 w-full">
            <Label class="text-[var(--muted-gold)]">Message</Label>
            <Textarea
              v-model:model-value="guestMsg"
              placeholder="Enter your message"
              class="px-2 py-1 w-full min-h-[170px] resize-none"
            />
          </div>
        </CardContent>

        <CardFooter class="w-full p-0">
          <Button
            class="w-full bg-[var(--sage)] text-white"
            :disabled="guestMsg.trim() === '' || guestName.trim() === ''"
            @click="sendGuestMsg"
          >
            <Icon
              v-if="loading"
              icon="mingcute:loading-3-line"
              class="w-4 h-4 animate-spin duration-300"
            />
            <span v-else>Send</span></Button
          >
        </CardFooter>
      </Card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-wrap {
  transform: translate(-50%, -50%);
  min-width: 290px;
}
.card {
  background: rgba(var(--header), 0.75);
}
</style>

<script setup>
import { send } from '@emailjs/browser'
import Button from './ui/button/Button.vue'
import Card from './ui/card/Card.vue'
import CardContent from './ui/card/CardContent.vue'
import CardDescription from './ui/card/CardDescription.vue'
import CardFooter from './ui/card/CardFooter.vue'
import CardHeader from './ui/card/CardHeader.vue'
import CardTitle from './ui/card/CardTitle.vue'
import Input from './ui/input/Input.vue'
import Label from './ui/label/Label.vue'
import Textarea from './ui/textarea/Textarea.vue'
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
const FROM_EMAIL = import.meta.env.VITE_FROM_EMAIL

const guestName = ref('')
const guestMsg = ref('')

const loading = ref(false)

function sendGuestMsg() {
  loading.value = true

  send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: guestName.value,
      from_email: FROM_EMAIL,
      message: guestMsg.value
    },
    PUBLIC_KEY
  )
    .then((res) => {
      console.log('Sent', res.status, res.text)
      loading.value = false
      guestName.value = ''
      guestMsg.value = ''
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
</script>

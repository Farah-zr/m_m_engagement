<template>
  <div class="card flex flex-col items-center text-center justify-center gap-5">
    <h2 class="antonia-italic text-[20px]">Capture the Love</h2>

    <div class="grid gap-2">
      <!-- <p>Upload pictures & videos you want to share with us!</p> -->
      <p>Upload your pictures & videos to share them with us!</p>

      <button type="button" @click="open">Browse Files</button>
    </div>

    <button type="button" @click="upload">Upload</button>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 6px;
  background-color: rgba(var(--card-rgb), 0.5);
  border: 1px solid var(--border-hex);
  padding: 8px 5px;
}
</style>

<script setup>
import { useFileDialog } from '@vueuse/core'
import { ref } from 'vue'

const uploadedFiles = ref([])

const { files, open, reset, onCancel, onChange } = useFileDialog({
  accept: 'image/*',
  multiple: true
})

onChange((files) => {
  uploadedFiles.value = Array.from(files)
  console.log(uploadedFiles.value)
})

function upload() {
  if (uploadedFiles.value.length > 0) {
    const formData = new FormData()

    uploadedFiles.value.forEach((file) => {
      formData.append('files', file, file.name)
    })

    fetch('https://m-m-engagement-git-dev-farahs-projects.vercel.app/upload', {
      method: 'POSt',
      body: formData
    })
      .then((res) => res.json())
      .then((data) => console.log('uploaded', data))
      .catch((error) => console.error(error))
  }
}
</script>

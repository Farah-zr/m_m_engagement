<template>
  <div>
    <input type="file" ref="fileInput" multiple @change="handleFile" />

    <button @click="upload">Upload</button>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup>
import { ref } from 'vue'

const files = ref()

function handleFile(event) {
  files.value = Array.from(event.target.files)
}

function upload() {
  if (files.value.length > 0) {
    const formData = new FormData()

    files.value.forEach((file) => {
      formData.append('files', file, file.name)
    })

    fetch('http://localhost:5000/upload', {
      method: 'POSt',
      body: formData
    })
      .then((res) => res.json())
      .then((data) => console.log('uploaded', data))
      .catch((error) => console.error(error))
  }
}
</script>

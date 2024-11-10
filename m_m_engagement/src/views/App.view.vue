<template>
  <Header />
  <div id="content">
    <WelcomeMessage />
    <UploadFile />
  </div>
</template>

<style lang="scss" scoped>
#content {
  height: calc(100vh - 40px);
}
</style>

<script setup>
import Header from '@/components/Header.vue'
import UploadFile from '@/components/UploadFile.vue'
import WelcomeMessage from '@/components/WelcomeMessage.vue'
</script>

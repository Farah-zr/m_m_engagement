<template>
  <Header />
  <div id="content">
    <WelcomeMessage />
  </div>
</template>

<style lang="scss" scoped>
#content {
  height: calc(100vh - 40px);
  margin: 10px 15px;
  // overflow: auto;
}
</style>

<script setup>
import Header from '@/components/Header.vue'
import WelcomeMessage from '@/components/WelcomeMessage.vue'
</script>

<template>
  <Header />
  <div id="content">
    <!-- <WelcomeMessage /> -->
    <GuestbookForm />
  </div>
</template>

<style lang="scss" scoped>
#content {
  height: calc(100vh - 40px);
  margin: 10px 15px;
}
</style>

<script setup>
import GuestbookForm from '@/components/GuestbookForm.vue'
import Header from '@/components/Header.vue'
import WelcomeMessage from '@/components/WelcomeMessage.vue'
</script>

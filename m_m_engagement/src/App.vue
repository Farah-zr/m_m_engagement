<template>
  <!-- hidden on big screens for now -->
  <div class="app-content sm:hidden">
    <!-- bg images -->
    <img
      src="@/assets/images/flowers.png"
      alt="flowers"
      class="absolute -z-10 right-[-15px] bottom-[-45px] h-[224px]"
    />
    <img
      src="@/assets/images/leaves.png"
      alt="leaves"
      class="absolute -z-10 left-[-55px] top-0 h-[250px]"
    />

    <RouterView />
  </div>
</template>

<style scoped>
.app-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

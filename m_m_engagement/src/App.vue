<template>
  <div class="app-content">
    <!-- bg images -->
    <img
      src="@/assets/images/leaves-top-right.png"
      alt="leaves-top-right"
      class="absolute -z-10 right-[-94px] top-[-76px] h-[230px]"
    />

    <img
      src="@/assets/images/leaves-bottom-left.png"
      alt="leaves-bottom-left"
      class="absolute -z-10 left-[-105px] bottom-[-52px] h-[240px]"
    />

    <img
      src="@/assets/images/leaves-circular.png"
      alt="leaves-circle"
      class="absolute -z-10 right-[-250px] bottom-[75px] h-[300px]"
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

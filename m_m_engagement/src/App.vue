<template>
  <!-- hidden on big screens for now -->
  <div class="app-content sm:hidden">
    <!-- bg images -->
    <!-- <img
      src="@/assets/images/flowers.png"
      alt="flowers"
      class="absolute -z-10 right-[-15px] bottom-[-45px] h-[224px]"
    />
    <img
      src="@/assets/images/leaves.png"
      alt="leaves-top-left"
      class="absolute -z-10 left-[-55px] bottom-0 h-[240px]"
    />
    <img
      src="@/assets/images/leaves2.png"
      alt="leaves-top-right"
      class="absolute -z-10 right-[-128px] top-[-100px] h-[230px]"
    /> -->
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

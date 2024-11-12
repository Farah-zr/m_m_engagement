<template>
  <div class="welcome-msg flex flex-col items-center justify-center gap-5 mx-4">
    <div class="flex flex-col gap-[6px] items-center text-center text-[24px]">
      <!-- <div class="">Welcome to</div>
      <div class="antonia-italic text-[34px] text-[var(--muted-gold)] text-center">
        Mariam <br />
        & <br />
        Mohammed
      </div>
      <div class="">Engagement Dinner!</div> -->
      <div class="">
        We can't wait <br />
        to see all the memories <br />
        you help capture!
      </div>
      <!-- <div class="parisienne-regular text-[18px]">~ M & M</div> -->
      <img src="@/assets/images/logo.png" alt="logo" class="w-[20x] h-[18px]" />
    </div>

    <div class="text-[18px]">
      <RouterLink to="/upload">{{ 'Share the love' }}</RouterLink>
      <!-- <RouterLink to="/">{{ 'Share the love' }}</RouterLink> -->
      <Icon icon="material-symbols-light:arrow-right-alt" class="inline ml-1" />
    </div>

    <!-- <div class="text-center">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente dignissimos fugiat porro,
      molestias neque facilis accusantium saepe magni nam quia deserunt qui. Pariatur explicabo
      animi aliquam odit eligendi? At, illo.
    </div>

    <div class="signature antonia-italic text-[14px]">~ M & M</div> -->
  </div>
</template>

<style lang="scss" scoped>
.welcome-msg {
  color: var(--earthy);
  height: 100%;
}
</style>

<script setup>
import { Icon } from '@iconify/vue'
</script>

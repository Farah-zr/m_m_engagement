<template>
  <div class="w-full">
    <header>
      <div class="header-wrapper">
        <!-- <div class="logo parisienne-regular">Mohammed & Mariam</div> -->
        <div class="logo text-sage parisienne-regular font-medium">
          <RouterLink to="/">M & M</RouterLink>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  position: relative;
  background: rgba(var(--header-rgb), 0.75);
  border-bottom: 1px solid var(--border-hex);
  box-shadow: 0px 1px 1px rgba(var(--foreground), 0.1);
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}

.logo {
  font-size: 22px;
  // color: var(--sage);
}
</style>

<script setup></script>

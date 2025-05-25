<script setup>

</script>

<template>
  <div class="landing">
    <div class="landing-sidebar">

      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/toggle_button">Toggle Button</RouterLink>

    </div>

    <main class="landing-main">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
  @import url('assets/luisa-common.scss');
  @import url('assets/landing.scss');
</style>


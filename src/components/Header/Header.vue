<template>
  <div class="header">
    <app-logo></app-logo>
    This is Header
  </div>
</template>

<script>
import Logo from '../UI/icons/Logo/Logo.vue';

export default {
  components: {
    appLogo: Logo,
  },
};
</script>

<style lang="scss" scoped>
  @import '../../index.scss';

  .header {
    width: 100%;
    height: 80px;
    color: $header-font-color;
    font-size: 1.25rem;
    text-transform: uppercase;
    box-shadow:  0px 10px 12px -3px $shadow-color;
  }
</style>

<template>
  <div class="header">
    <div class="logo-wrapper">
      <div>HB</div>
      <logo-icon></logo-icon>
    </div>
    <div class="current-date">Today</div>
    <div class="toggle-switch">Toggle Switch</div>
  </div>
</template>

<script>
import LogoIcon from '@/ui/components/icons/LogoIcon/LogoIcon.vue';

export default {
  components: {
    LogoIcon,
  },
};
</script>

<style lang="scss" scoped>
  @import '@/index.scss';

  .header {
    width: 100%;
    height: 80px;
    padding: 10px;
    box-sizing: border-box;
    color: $header-font-color;
    font-size: 1.25rem;
    text-transform: uppercase;
    box-shadow:  0px 10px 12px -3px $shadow-color;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-wrapper {
      display: flex;
      align-items: center;

      .logo__icon {
        height: 2rem;
        margin-left: 1rem;
      }
    }
  }
</style>

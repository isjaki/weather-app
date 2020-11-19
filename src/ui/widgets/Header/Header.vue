<template>
  <div class="header">
    <!-- <div></div> -->
    <div class="logo-wrapper">
      <hamburger-button></hamburger-button>
      <logo-icon></logo-icon>
    </div>
    <div class="current-date">Today</div> <!-- here the current date will be displayed -->
    <div class="toggle-switch">
      <toggle-switch></toggle-switch>
    </div> <!-- here will be a switch button -->
  </div>
</template>

<script>
import ToggleSwitch from '@/ui/components/buttons/ToggleSwitch/ToggleSwitch.vue';
import HamburgerButton from '@/ui/components/buttons/HamburgerButton/HamburgerButton.vue';

export default {
  components: {
    ToggleSwitch,
    HamburgerButton,
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

    .current-date {
      font-weight: bold;
    }
  }
</style>

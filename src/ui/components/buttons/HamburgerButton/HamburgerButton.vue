<template>
  <div :class="['hamburger-btn', { opened: isOpened }]" @click="toggleOpened">
    <!-- <input type="checkbox"> -->
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    toggleOpened() {
      this.isOpened = !this.isOpened;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '@/index.scss';

  .hamburger-btn {
    width: 50px;
    height: 32px;
    position: relative;
    cursor: pointer;

    div {
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -2px;
      display: block;
      width: 100%;
      height: 4px;
      background-color: $hamburger-btn-color;
      border-radius: 100px;
      opacity: 1;
    }
  }

  .hamburger-btn:before,
  .hamburger-btn:after {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 4px;
    background-color: $hamburger-btn-color;
    border-radius: 100px;
    transition: all .2s ease-out;
  }

  .hamburger-btn:before {
    top: 0;
  }

  .hamburger-btn.opened::before {
    top: 50%;
    margin-top: -2px;
    transform: rotate(45deg);
  }

  .hamburger-btn:after {
    bottom: 0;
  }

  .hamburger-btn.opened::after {
    bottom: 50%;
    margin-bottom: -2px;
    transform: rotate(-45deg);
  }

  .hamburger-btn.opened {
    div {
      opacity: 0;
      transition: opacity .1s ease-out;
    }
  }
</style>

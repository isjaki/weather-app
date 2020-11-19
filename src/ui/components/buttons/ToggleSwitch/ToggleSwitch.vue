<template>
  <label for="toggle" class="switch">
    <input type="checkbox" id="toggle">
    <span class="slider"></span>
  </label>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 24px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      border-radius: 34px;
      transition: .7s;
    }

    .slider:before {
      position: absolute;
      box-sizing: border-box;
      content: "";
      height: 32px;
      width: 32px;
      left: 0px;
      bottom: -4px;
      border: 1px solid #ccc;
      border-radius: 50%;
      background-color: white;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
      transform: translateX(28px);
    }
  }
</style>

<template>
  <div class="city-card">
    <h3 class="location">Amsterdam</h3>
    <div class="weather-icon">
      <sunny-icon></sunny-icon>
    </div>
    <div class="temp">10</div>
    <div class="condition">SUNNY</div>
    <div class="min-max-temp"></div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  @import '@/index.scss';

  .sunny__icon {
    width: 150px;
    height: 150px;
  }

  .city-card {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 500px;
    // border: 1px solid;
    box-shadow:  0px 0px 20px 5px $shadow-color;
    border-radius: 15px;
    padding: 15px;

    .location {
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 300;
      margin: 0;
    }

    .weather-icon {
      padding: 20px 0;
    }

    .temp {
      font-size: 5.3rem;
    }

    .condition {
      font-size: 1.5rem;
    }
  }
</style>

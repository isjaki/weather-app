<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <city-card></city-card>
      <city-card></city-card>
      <city-card></city-card>
    </main>
  </div>
</template>

<script>
import Header from '@/ui/widgets/Header/Header.vue';
import CityCard from '@/ui/widgets/CityCard/CityCard.vue';

export default {
  components: {
    appHeader: Header,
    CityCard,
  },
};
</script>

<style lang="scss">
@import '@/index.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 100%;
}

main {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: calc(100% - 80px);
}
</style>

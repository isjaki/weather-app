<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import Header from '@/ui/widgets/Header/Header.vue';

export default {
  components: {
    appHeader: Header,
  },
};
</script>

<style lang="scss">
@import '@/index.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>

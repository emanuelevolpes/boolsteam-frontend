<script>
import AppJumbo from './components/AppJumbo.vue';
export default {
  name: 'App',
  components: {
    AppJumbo
  }
}
</script>

<template>
  <router-view></router-view>
  <AppJumbo></AppJumbo>
</template>


<style lang="scss">
//versione 1 - inclusione via app.vue
// @use './assets/scss/main.scss' as *;
</style>

<template>
  <div id="app">
    <router-view />
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue';
export default {
  data () {
    return {}
  },
  components: {
    Tabbar
  },
  methods: {}
}
</script>


<style lang="scss">
@import url('./assets/css/reset.css');
@import url('./assets/css/mediaQuery.css');
#app {
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
  .active  {
    color: tomato;
  }
}
</style>

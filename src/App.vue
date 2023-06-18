<template>
  <nav-bar></nav-bar>
  <router-view />
</template>

<script>
  import NavBar from '@/components/NavBar.vue';

  export default {
    components: {
      NavBar
    }
  }
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  left: 0;
  right: 0;
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <vue-header />
  </div>
</template>

<script>
import vueHeader from './components/vue-header.vue'

export default {
  name: 'App',
  components: {
    vueHeader
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: #2c3e50;
  width: 100%;
  height: 100vh;
}
</style>

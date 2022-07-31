<template>
  <div id="app">
    <vueHeader :showShop="toOpenShop" @closeShop="closeShop()" />
    <router-view @openShop="openShop()" />
  </div>
</template>

<script>
import vueHeader from './components/vue-header.vue'

export default {
  name: 'App',
  components: {
    vueHeader
  },

  data() {
    return {
      toOpenShop: false
    }
  },
  methods: {
    openShop() {
      console.log('toOpenShop: ',this.toOpenShop)
      this.toOpenShop = true
    },
    closeShop() {
      this.toOpenShop = false
    }
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  overflow-y: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: #2c3e50;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow-y: hidden;
}
a {
  text-decoration: none !important;
  color: inherit !important;
}
::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}
</style>

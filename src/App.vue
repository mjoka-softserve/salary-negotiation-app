<template>
  <div id="app">
    <NegotiationView msg="Negotiate your salary!"/>
  </div>
</template>

<script>
import NegotiationView from './components/NegotiationView.vue'

export default {
  name: 'App',
  components: {
    NegotiationView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="negotiation-view">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'NegotiationView',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
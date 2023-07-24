<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/home.vue'
</script>

<template>
  <Home>

  </Home>
  <div style="height: 200vh;"></div>
</template>

<script>
  export default {
    name: 'App',
    components: {Home}
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

  html,
  body {
    font-family: 'Caveat', sans-serif;
    margin-left: 0;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
  }
  
  #app {
    font-family: 'Caveat', sans-serif;
    /* background-color: #eeb4c7; */

  }
</style>

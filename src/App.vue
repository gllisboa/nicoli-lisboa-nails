<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Nav from './components/Nav.vue'

</script>

<template>
  <Nav/>
  <Home/>
  <About/>
</template>

<script>
  export default {
    name: 'App',
    components: {Home, Nav, About}
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

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
  }

  :root {
  --white: #ffffff;
  --pink-ligth: #eeb4c7;
  --pink-dark: #d74497;
  --pink-dark-opacity-4: rgb(215, 68, 151, 0.4);
  --pink-dark-opacity-3: rgb(215, 68, 151, 0.3);
  --pink-dark-opacity-2: rgb(215, 68, 151, 0.2);
  --pink-dark-opacity-1: rgb(215, 68, 151, 0.1);
  --pink-dark-opacity-05: rgb(215, 68, 151, 0.05);
}
</style>

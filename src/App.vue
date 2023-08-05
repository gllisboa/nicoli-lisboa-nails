<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/home.vue'
import About from './components/About.vue'
import Nav from  './components/nav.vue'

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
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto+Slab:wght@300;400;500&display=swap');


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
  --shadow-01: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  --shadow-02: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <router-view />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/circular-std');

/* @font-face {
  font-family: "Circular Std";
  src: local("Circular Std"),
   url(../src/assets/font/CircularStdFont.otf);
} */
#app {
  font-family: 'Circular Std';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

/* body {
  border: 2px solid red
} */

.container-top {
  margin-top: 30px
}
</style>

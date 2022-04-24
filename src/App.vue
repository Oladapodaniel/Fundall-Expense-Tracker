<template>
  <router-view />
</template>

<script>
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

.container-top {
  padding-top: 30px
}

body {
  line-height: 1.3;
}

input::-webkit-input-placeholder {/* Chrome/Opera/Safari/Edge */
	font-style: italic;
    color: #c4c5c3
}

input::-ms-input-placeholder { /* Microsoft Edge */
    font-style: italic;
    color: #c4c5c3
}

input:-ms-input-placeholder {/* IE 10+ */
	font-style: italic;
    color: #c4c5c3
}

.c-pointer {
  cursor: pointer;
}
</style>

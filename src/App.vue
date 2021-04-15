<template>
  <div id="app">
      <!-- <router-link to="/"></router-link> -->
    <router-view/>  
  </div>
</template>
<script>
  export default {
    created() {
        this.$store.state.userInfo = JSON.parse(localStorage.getItem('user'))
    },
  }
</script>
<style>
#app{
  height: 100vh;
  width: 100vw;
  min-height: 100vh;
  background: rgba(247,247,247,1);

}
*{
  box-sizing: border-box;
}
html, body, h1, h2, h3, h4, 
h5, h6, div, dl, dt, dd, ul,
ol, li, p, blockquote, pre,
hr, figure, table, caption,
th, td, form, fieldset, legend,
input, button, textarea, menu{
  margin: 0;
  padding: 0;
  outline: none;
}
</style>

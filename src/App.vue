<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style  lang='scss'>
body, div,h1,p,ul,ol,li{
  padding: 0;
  margin: 0;
}
html,body{
  height: 100%;
}
#app{
  height: 100%;
}
</style>

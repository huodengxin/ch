<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-view/> -->
    <Home/>
  </div>
</template>

<script>
import Home from '@/views/Home.vue'
import Car from '@/views/Car.vue'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>
<style lang="scss">
*{
  margin:0;
  padding:0;
}
html,body{
  width:100%;
  height:100%;
}
#app {
   width:100%;
   height:100%;
}

</style>

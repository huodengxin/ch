<template>
  <div class="home">
     <span>get</span>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapState} from 'vuex'
export default {
  name: 'home',
  components: {
    
  },
  computed: {
    ...mapState({
      slideList:state=>state.home.slideList
    })
  },
  created() {
    this.dataActions()
  },
  methods: {
    ...mapActions({
      dataActions:'home/dataActions'
    })
  },
}
</script>
<style lang="scss" scoped>
.home{
   width:100%;
   height:100%;
}
</style>


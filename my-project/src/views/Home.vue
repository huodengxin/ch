<template>
  <div class="home">
     <span>get</span>
     <button @click="gotoD">抽屉</button>
     <Drawer :class="{active:flag}"/>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapState} from 'vuex'
import Drawer from "../components/Drawer"
export default {
  name: 'home',
  components: {
    Drawer
  },
  data(){
        return {
          flag:false
        }
    },
  computed: {
    ...mapState({
      slideList:state=>state.home.slideList,
      drawerData:state=>state.home.drawerData 
    })
  },
  created() {
    this.dataActions()
    console.log(this.drawerData)
  },
  methods: {
    ...mapActions({
      dataActions:'home/dataActions',
      drawerActions:'home/drawerActions'
    }),
   gotoD(){
      this.drawerActions(97)
      this.flag=true;
    }
  },
}
</script>
<style lang="scss" scoped>
@keyframes draw{
  from{
     transform:translate(100%)
  }
  to{
    transform:translate(40%)
  }
}
.home{
   width:100%;
   height:100%;
   .drawer-box{
     transform: translate(100%)
   }
   .active{
     animation:draw 3s forwards;  
   }
}
</style>


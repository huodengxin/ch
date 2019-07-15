<template>
  <div class="home">
       <main ref='main'>
         <div>
            <div v-for="(item,index) in homeData" :key='index'>
              <div  key={item.id} ref='list'>
                <h4>{{item.code}}</h4>
                <div class="dlList">
                    <dl v-for="(el) in item.list" :key="el.Spelling">
                      <dt>
                        <img :src="el.CoverPhoto" alt="">
                      </dt>
                      <dd>{{el.Name}}</dd>
                    </dl>
                </div>
              </div>
            </div>
         </div>
      </main>
      <ul class="slide">
        <li>#</li>
        <li v-for="(item,index) in slideList" :key="item" @click='scrollto(index)'>{{item}}</li>
      </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'home',
  components: {
    
  },
  computed: {
    ...mapState({
      slideList:state=>state.home.slideList,
      homeData:state=>state.home.homeData
    })
  },
  created() {
    this.dataActions()
  },
  mounted() {
      this.bs=new BScroll(this.$refs.main,{
            probeType:3
      }) 
  },
  methods: {
    ...mapActions({
      dataActions:'home/dataActions'
    }),
    scrollto(ind){
      let el=this.$refs.list
      this.bs.scrollToElement(el[ind],500)
    }
  },
}
</script>
<style lang="scss" scoped>
.home{
   width:100%;
   height:100%;
   main{
      width:100%;
      height:100%;
      overflow: hidden;
      >div{
        h4{
          width:100%;
          height:30px;
          padding-left: 10px;
          box-sizing: border-box;
          line-height: 30px;
          background:#eee;
          color:#ccc;
        }
        .dlList{
            width:100%;
            padding: 0 10px;
            box-sizing: border-box;
            dl{
              width:100%;
              height:60px;
              display: flex;
              align-items: center;
              border-bottom: 1px solid #eee;
              img{
                width:45px;
                height:45px;
                margin-right: 20px;
              }
            }
        }
      }
   }
}
.slide{
  width:30px;
  height:70%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top:50%;
  right:0;
  list-style-type: none;
  transform: translate(-50%,-50%)
}
.slide li{
  flex:1;
}
</style>


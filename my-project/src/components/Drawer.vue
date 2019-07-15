<template>
    <div class="drawer-box">
        <div v-for="(item,index) in drawerData" :key='index' class="box">
            <p class="title">{{item.GroupName}}</p>
            <dl v-for="(val,index1) in item.GroupList" :key='index1'>
               <dd>
                   <img :src="val.Picture" alt="">
               </dd>
               <dt>
                   <p class="name">{{val.AliasName}}</p>
                   <p class="price">{{val.DealerPrice}}</p>
               </dt>
            </dl>
        </div>
        <div class='null' @click="$emit('changeFlag')">

        </div>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState({
           drawerData:state=>state.draw.drawerData 
        })
    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.drawer-box{
    width: 70%;
    height: 100%;
    background:#fff;
    position: absolute;
    top:0;
    right:-70%;
    z-index: 9999;
    // display: none;
    .box{
        width: 100%;
        background: #fff;
        .title{
            width: 100%;
            height: 20px;
            line-height: 20px;
            font-size: 17px;
            color:#717171;
            background: #f2f2f2;
            padding: 0 10px;
        }
        dl{
            display: flex;
            padding: 5px;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            dd{ 
                margin-right: 5px;
                img{
                    width: 90px;
                    height: 60px;
                }
            }
            .name{
                color:#5f687a;
                font-size: 18px;
            }
            .price{
                color:#f00;
                font-size: 15px;
            }
        }
    }
    .null{
        width:100%;
        height:100%;
    }
}
</style>
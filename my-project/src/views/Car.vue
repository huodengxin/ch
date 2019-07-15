<template>
    <div class="carBox">
        <div class="content">
            <div class="img">

            </div>
            <div class="info">
                <div class="left">
                    <p class="money">54.5-89.5万</p>
                    <p class="price">指导价 54.50-89.50万</p>
                </div>
                <div class="right">
                    询问底价
                </div>
            </div>
            <div class="car-list">
                <div class="top">
                    <span> 全部</span>
                    <span>2019</span>
                    <span>2018</span>
                </div>
                <div class="list">
                    <p class="title">1.5L/100kW 涡轮增压</p>
                    <ul class="lis">
                        <li>
                            <p>2019款 CK 1.5T 手动 汽油 国VI</p>
                            <p>136马力5档手动</p>
                            <p>
                                <span>指导价 9.14万</span>
                                <span>8.54万起</span>
                            </p>
                            <button data-id="134905" data-hover="hover">询问底价</button>
                        </li>
                         <li>
                            <p>2019款 CK 1.5T 手动 汽油 国VI</p>
                            <p>136马力5档手动</p>
                            <p>
                                <span>指导价 9.14万</span>
                                <span>8.54万起</span>
                            </p>
                            <button data-id="134905" data-hover="hover">询问底价</button>
                        </li>
                         <li>
                            <p>2019款 CK 1.5T 手动 汽油 国VI</p>
                            <p>136马力5档手动</p>
                            <p>
                                <span>指导价 9.14万</span>
                                <span>8.54万起</span>
                            </p>
                            <button data-id="134905" data-hover="hover">询问底价</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer">
            <p>询问底价</p>
            <p>本地经销商为你报价</p>
        </div>
    </div>
</template>
<script>
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
    .carBox{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .content{
            width: 100%;
            flex: 1;
            overflow-y: scroll;
            .img{
                width: 100%;
                height: 165px;
                background: #3aacff;
            }
            .info{
                padding: 20px 12px;
                background: #fff;
                display: flex;
                justify-content: space-between;
                .left{
                    .money{
                        font-size:20px;
                        //font-size: .32rem;
                        color:#f00;
                    }
                    .price{
                       //font-size: .26rem;
                       font-size: 13px;
                      color: silver; 
                    }
                }
                .right{
                    width: 180px;
                    height:35px;
                    text-align: center;
                    line-height: 35px;
                    background: #3aacff;
                    color:#fff;
                    border-radius: 5px;
                }
            }
            .car-list{
                .top{
                    //border-top: .15rem solid #f4f4f4;
                    border-top: 10px solid #f4f4f4;
                    //padding: 0 .3rem;
                    padding: 0 10px;
                    //font-size: .32rem;
                    font-size: 17px;
                    //height: .77rem;
                    height: 50px;
                    line-height: 50px;
                    background: #fff;  
                    span{
                        padding-right: 20px;
                    }
                }
                .list{
                    background: #fff;
                   .title{
                    padding: 0 10px;
                    //padding: 0 .2rem;
                    //height: .5rem;
                    height:30px;
                    line-height: 30px;
                    //font-size: .26rem;
                    font-size:13px;
                    color: #999;
                    background: #f4f4f4;
                   }
                    .lis{     
                        li{
                            background: #fff;
                            border-bottom: 10px solid #f4f4f4;
                            box-sizing: border-box;
                            button{
                                border: none;
                                border-top: 1px solid #eee;
                                width: 100%;
                                //height: .8rem;
                                height: 40px;
                                font-size: 17px;
                                color: #00afff;
                                background: #fff;
                                margin-left: -.3rem;
                            }
                        }
                        li p:first-child{
                            padding:10px;
                            font-size: 16px;
                            color:#3d3d3d;
                            //padding: 10px 0;
                        }
                        li  p:nth-child(2){
                            font-size: 13px;
                            color: #bdbdbd;
                            padding: 0 10px;
                        }
                        li p:nth-child(3){
                            text-align: right;
                            padding: 5px 10px;
                            span:first-child{
                                color:#818181;
                                font-size: 13px;
                            }
                            span:nth-child(2){
                                color:#f00;
                                font-size: 15px;
                            }
                        }
                    }

                }
            }
        }
        .footer{
            width: 100%;
            height: 50px;
            background: #3aacff;
            color:#fff;
            text-align: center;    
        }
        .footer p:first-child{
                font-size: 16px;
                margin-top: .12rem;
        }
        .footer p:nth-child(2) {
                font-size:14px;
        }       
       

    }
</style>
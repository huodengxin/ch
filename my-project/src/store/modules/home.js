import {homeFn,drawerFn} from '@/api/index'
const fn=()=>{
   let arr=[];
   for(let i=0;i<26;i++){
       arr.push(String.fromCharCode(65+i));
   }
   return arr
}
const state={
    slideList:fn(),
    homeData:[],
    drawerData:[]
}

const getters = {
   
}
//异步
const actions={
   dataActions({commit}){
      homeFn().then(res=>{
          commit('dataMu',res.data)
      })
   },
   //抽屉详情
   drawerActions({commit},payLoad){
    drawerFn(payLoad).then(res=>{
        commit("drawerList",res.data)
      })
   }
}
//同步
const mutations={
   dataMu(state,data){
      state.homeData=[...data]
      console.log(state.slideList,state.homeData)
   },
   //抽屉的数据
   drawerList(state,drawerData){
    state.drawerData=[...drawerData]
    console.log("123456",state.drawerData)
   }
}


export default {
   namespaced:true,
   state,
   getters,
   actions,
   mutations
}



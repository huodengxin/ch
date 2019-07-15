import {homeFn} from '@/api/index'
const fn=()=>{
   let arr=[];
   for(let i=0;i<26;i++){
       arr.push(String.fromCharCode(65+i));
   }
   return arr
}
const state={
    slideList:fn(),
    homeData:[]
}

const getters = {
   
}
//异步
const actions={
   dataActions({commit}){
      homeFn().then(res=>{
          commit('dataMu',res.data)
      })
   }
}
//同步
const mutations={
   dataMu(state,data){
      state.homeData=[...data]
      console.log(state.slideList,state.homeData)
   }
}


export default {
   namespaced:true,
   state,
   getters,
   actions,
   mutations
}



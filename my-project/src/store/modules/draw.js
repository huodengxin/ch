import {drawerFn} from '@/api/index'


const state={
    drawerData:[]
}

const getters = {
   
}
//异步
const actions={
   //抽屉详情
   drawerActions({commit},payLoad){
    drawerFn(payLoad).then(res=>{
        commit("drawerList",res.data)
      })
   }
}
//同步
const mutations={
   //抽屉的数据
   drawerList(state,drawerData){
    state.drawerData=[...drawerData]
   }
}


export default {
   namespaced:true,
   state,
   getters,
   actions,
   mutations
}



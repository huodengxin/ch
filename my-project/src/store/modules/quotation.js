import {quotationFn} from '@/api/index'


const state={
   quotationData:[]
}

const getters = {
   
}
//异步
const actions={
   //询低价
   dataActions({commit},params){
      quotationFn(params).then(res=>{
         res.data.list=res.data.list.map(item=>{
            item.price=item.vendorPrice.slice(0,item.vendorPrice.indexOf('.')+1);
            return item
         })
         commit('dataMu',res.data)
      })
   }
}
//同步
const mutations={
   dataMu(state,data){
      state.quotationData.push(data)
   }
}


export default {
   namespaced:true,
   state,
   getters,
   actions,
   mutations
}



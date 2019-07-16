import {quotationFn,cityFn} from '@/api/index'


const state={
   quotationData:[],
   cityId:''
}

const getters = {
   
}
//异步
const actions={
   //获取cityid
    cityActions({commit}){
      cityFn().then(res=>{
         commit('cityMu',res.data.CityID)
      })
   },
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
      state.quotationData=[data]
   },
   cityMu(state,id){
      state.cityId=id
   }
}


export default {
   namespaced:true,
   state,
   getters,
   actions,
   mutations
}



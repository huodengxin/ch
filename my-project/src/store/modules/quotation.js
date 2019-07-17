import {quotationFn,cityFn,addressFn,addressConFn} from '@/api/index'


const state={
   quotationData:[],
   cityId:'',
   CityName:'',
   addressList:[],
   addressConList:[],
   //定位地址
   location:'',
   //定位地址id
   locationId:''
}

const getters = {
   
}
//异步
const actions={
   //获取cityid
    cityActions({commit}){
      cityFn().then(res=>{
         state.location=res.data.CityName;
         state.locationId=res.data.CityID
         commit('cityMu',res.data)
      })
   },
   //询低价
   dataActions({commit},params){
      quotationFn(params).then(res=>{
         res.data.list=res.data.list&&res.data.list.map(item=>{
            item.price=item.vendorPrice.slice(0,item.vendorPrice.indexOf('.')+1);
            return item
         })
         commit('dataMu',res.data)
      })
   },
    //获取address
   addressActions({commit}){
       addressFn().then(res=>{
         commit('addressMu',res.data)
       })
   },
   //获取address中城市
   addressConActions({commit},payload){
      addressConFn(payload).then(res=>{
        commit('addressConMu',res.data)
      })
  },
}
//同步
const mutations={
   dataMu(state,data){
      state.quotationData=[data];
   },
   cityMu(state,{CityID,CityName}){
      state.cityId=CityID;
      state.CityName=CityName
   },
   addressMu(state,data){
      state.addressList=[...data]
   },
   addressConMu(state,data){
      state.addressConList=[...data]
   }
}


export default {
   namespaced:true,
   state,
   getters,
   actions,
   mutations
}



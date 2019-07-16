import {homeFn} from '@/api/index'

function mapData(data,codeData){
   return codeData.map((el,key)=>{
      el={
         code:el
      }
      el.list=[]
      data.forEach((item,index)=>{
         if(item.Spelling.slice(0,1)==el.code){
            el.list.push(item)
         }
      })
      return el
   })
}

function codeFn(data){
   let arr=[];
   data.forEach((item,index)=>{
      if(!arr.includes(item.Spelling.slice(0,1))){
         arr.push(item.Spelling.slice(0,1))
      }
   })
   return arr
}

const state={
    slideList:[],
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
      state.slideList=codeFn(data)
      state.homeData=mapData(data,state.slideList)
   }
}


export default {
   namespaced:true,
   state,
   getters,
   actions,
   mutations
}



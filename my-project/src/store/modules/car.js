import {carFn} from "@/api/index"
//处理年份的函数
function arrFn(arr){
    let yearArr=[];
    arr.forEach((item)=>{
        yearArr.unshift("全部")
        yearArr.push(item.market_attribute.year)
    })
    return Array.from(new Set(yearArr))
}
//处理列表数据
function listArr(arr,year){
    if(year=="全部"){
        return arr;
    }else{
        return arr.filter(item=>item.market_attribute.year==year)
    }
}
function sortNumber(a,b){
    return a.slice(0,3)-b.slice(0,3)
 }
 function numberSort(a,b){
    return a.slice(5,8)-b.slice(5,8)
 }
function titleFn(arr){
    let titleList=[];
    let data=[];
    let list=[]
    arr.map((item)=>{
        titleList.push(`${item.exhaust_str}/${item.max_power_str}${item.inhale_type}`)
    })
    titleList=Array.from(new Set(titleList))
    titleList.sort(sortNumber).sort(numberSort)
    titleList.map((val)=>{
            list=[];
            arr.map((item)=>{
                if(`${item.exhaust_str}/${item.max_power_str}${item.inhale_type}`===val){    
                    list.push(item)
                }    
            })
            data.push({index:val,list})
        }) 
        return data
}

const state={
    obj:{},
    dealer_price:"",
    official_refer_price:"",
    list:[],
    yearArr:[],
    newList:[],
    titleList:[]
}
const actions={
    carActions({commit},payLoad){
        carFn(payLoad).then(res=>{
           commit("carMutations",res.data)
        })
    }
}
const mutations={
    carMutations(state,obj){
        state.obj=obj;
        state.yearArr=arrFn(obj.list);
        state.list=obj.list;
        state.newList=titleFn(obj.list);
        state.dealer_price=obj.market_attribute.dealer_price;
        state.official_refer_price=obj.market_attribute.official_refer_price;
    },
    changeYear(state,item){
        state.newList=titleFn(listArr(state.list,item))
    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations
 }
 
 
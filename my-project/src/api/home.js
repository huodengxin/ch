import request from '../utils/request';

//首页楼层
export function homeFn(){
    return request({
        url:"/v2-car-getMasterBrandList.html?_1563177993779",
        method:'GET'
    })
}
//抽屉
export function drawerFn(params){
    return request({
        url:"/v2-car-getMakeListByMasterBrandId.html?MasterID="+params,
        method:'GET'
    })
}

//获取cityid
export function cityFn(){
    return request({
        url:"/location-client.html?_1563279707545",
        method:'GET'
    })
}

//咨询最低价
export function quotationFn(params){
    return request({
        url:"/v2-dealer-alllist.html",
        method:'GET',
        params
    })
}

//获取地址
export function addressFn(){
    return request({
        url:"/v1-city-alllist.html?_1563323257240",
        method:'GET'
    })
}

//获取地址城市
export function addressConFn(params){
    return request({
        url:"/v1-city-alllist.html",
        method:'GET',
        params
    })
}


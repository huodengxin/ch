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

//咨询最低价
export function quotationFn(params){
    return request({
        url:"v2-dealer-alllist.html",
        method:'GET',
        params
    })
}


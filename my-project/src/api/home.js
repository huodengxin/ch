import request from '../utils/request';

export function homeFn(){
    return request({
        url:"/v2-car-getMasterBrandList.html?_1563177993779",
        method:'GET'
    })
}
export function drawerFn(params){
    return request({
        url:"/v2-car-getMakeListByMasterBrandId.html?MasterID="+params,
        method:'GET'
    })
}


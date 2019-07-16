import request from "../utils/request"
export function carFn(params){
    return request({
        url:"/v2-car-getInfoAndListById.html?SerialID="+params,
        method:'GET'
    })
}
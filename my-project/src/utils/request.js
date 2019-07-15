import axios from "axios"
const service=axios.create({
   baseURL:'http://baojia.chelun.com',
   timeout:5000//超时请求
})
//请求拦截
service.interceptors.request.use(
  config=>{
    //console.log(config)//{url: "/user/login", method: "post", data: {…}, headers: {…}, baseURL: "http://127.0.0.1:7001/",...}
    //判断是否有登陆态  
    // if(getToken()){
    //       config.headers['authorization']=getToken()
    //   }  
    return config
  },
  error=>{
     return Promise.reject(error)
  }
)
//响应拦截
service.interceptors.response.use(
  response=>{
    //console.log(response.data)
   return response.data
  },
  error=>{
   return Promise.reject(error) 
  }
)

export default service;

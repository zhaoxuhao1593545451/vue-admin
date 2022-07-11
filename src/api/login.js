import service from '@/utils/request.js'
/*
  获取验证码
*/
export function getInterfaceData(method,url,data){
  return service.request({
    method,
    url,
    data
  })
}
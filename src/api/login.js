import service from '@/utils/request.js'
/*
  获取验证码
*/
export function getInterfaceData(type,url,data){
  return service.request({
    type,
    url,
    data
  })
}
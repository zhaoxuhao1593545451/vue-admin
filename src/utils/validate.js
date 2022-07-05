export function validateEmail(val){
  let reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(!reg.test(val)){
    return true
  }else{
    return false
  }
}
export function validatePassword(val){
  let reg=/^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  if(!reg.test(val)){
    return true
  }else{
    return false
  }
}
export function validateCode(val){
  let reg=/^[a-z0-9]{6}$/
  if(!reg.test(val)){
    return true
  }else{
    return false
  }
}
import { ElMessage, ElMessageBox } from 'element-plus'

export function confirm({content,tip,msg}){
  return new Promise((reslove,reject)=>{
    ElMessageBox.confirm(
      content,
      tip,
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true,
      }
    )
    .then(() => {
      msg&&ElMessage({
        type: 'success',
        message: msg,
      });
      reslove();
    })
    .catch()
  })
}

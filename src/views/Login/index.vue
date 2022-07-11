<template>
  <div class='loginContainer'>
    <div class='login-box'>
      <div class='tab'>
        <div v-for='(item,index) in tab' :key='item.id' :class='{tabToggle:tabIndex==index}' @click='handleTab(index)'>{{item.text}}</div>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="formRef" label-width="100px" class="demo-ruleForm">
        <el-form-item label="邮箱" prop="email">
          <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off" minlength='6' maxlength='20'></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="passwordRepeat" v-if='tabIndex==1'>
          <el-input type="password" v-model="ruleForm.passwordRepeat" autocomplete="off" minlength='6' maxlength='20'></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input v-model.number="ruleForm.code" minlength='6' maxlength='6'></el-input>
            </el-col>
            <el-col :span="9">
              <el-button type="success" class='block' @click='handleCodeBtn()' :disabled='codeObj.codeStatus'>{{codeObj.text}}</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="submitForm()" class="block" :disabled='btnDisable'>{{tabIndex=='0'?'登录':'注册'}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {getInterfaceData} from '@/api/login.js'
import {ref,reactive, isRef, isReactive,toRefs,onMounted} from 'vue'
import {useRouter} from 'vue-router'
import {validateEmail,validatePassword,validateCode} from '@/utils/validate.js'
export default {
  setup(props,context){
    const router=useRouter();
    const validate1 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'));
      } else if(validateEmail(value)){
        callback(new Error('邮箱格式不正确'));
      }else {
        callback();
      }
    };
    const validate2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }else if(validatePassword(value)){
        callback(new Error('密码为6到20位由数字和字母结合'));
      }else{
        callback();
      }
    };
    const validate3 = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入验证码'));
      }else if(validateCode(value)){
        callback(new Error('验证码为6位'));
      }else{
        callback();
      }
    };
    const validate4 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请重复输入密码'));
      }else if(value!=ruleForm.password){
        callback(new Error('两次密码输入不一致,请重新输入'));
      }else{
        callback();
      }
    };
    const rules=reactive({
      email: [
        { validator: validate1, trigger: 'blur' }
      ],
      password: [
        { validator: validate2, trigger: 'blur' }
      ],
      code: [
        { validator: validate3, trigger: 'blur' }
      ],
      passwordRepeat: [
        { validator: validate4, trigger: 'blur' }
      ],
    })
    const ruleForm=reactive({
      email: '',
      password: '',
      code: '',
      passwordRepeat:''
    })
    let tabIndex=ref(0)
    const tab=reactive([
      {text:'登录'},
      {text:'注册'}
    ])
    const handleTab = index =>{
      tabIndex.value=index;
      handleTimeEnd();
    }
    const formRef=ref()
    const submitForm= () => {
      router.push({path:'/home'})
      // formRef.value.validate((valid) => {
      //   if (valid) {
      //     alert('submit!');
      //   } else {
      //     console.log('error submit!!');
      //     return false;
      //   }
      // });
    }
    const codeObj=reactive({
      codeStatus:false,
      text:'获取验证码'
    })
    const handleCodeBtn =()=>{
      codeObj.codeStatus=true;
      handleTimeStart(60)
    }
    let timer=ref(null)
    const handleTimeStart=(num)=>{
      codeObj.text=num;
      timer=setInterval(()=>{
        if(num<=0){
          handleTimeEnd();
        }else{
          num--;
          codeObj.text=num;
        }
      },1000)
    }
    const handleTimeEnd=()=>{
      clearInterval(timer);
      codeObj.codeStatus=false;
      codeObj.text='获取验证码';
    }
    const btnDisable=ref(false)
    return{
      tabIndex,
      tab,
      rules,
      ruleForm,
      formRef,
      btnDisable,
      codeObj,
      timer,
      handleTab,
      validate1,
      validate2,
      validate3,
      validate4,
      submitForm,
      handleCodeBtn,
      handleTimeStart,
      handleTimeEnd
    }
  }
}
</script>

<style lang='scss' scoped>
  .loginContainer{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items:center;
    .login-box{
      .tab{
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        margin-bottom: 12px;
        div{
          width: 60px;
          height: 30px;
          line-height: 28px;
          text-align: center;
          margin-right:8px;
          background:#344a5f;
          color:#fff;
          cursor:pointer;
        }
        .tabToggle{
          background:red
        }
      }
      .block{
        width: 100%;
      }
    }
  }
</style>
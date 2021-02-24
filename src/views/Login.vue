<template>
  <div class="back">
    <div class="login-box">
      <div class="title"><i class="el-icon-user-solid"> 游戏运营管理系统</i></div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
          <el-form-item prop="username">
            <el-input placeholder="用户名"  v-model="ruleForm.username"></el-input>
          </el-form-item> 
          <el-form-item prop="password">
            <el-input placeholder="密码" v-model="ruleForm.password" type="password"></el-input>
            <div id="error" class="el-form-item__error"></div>
          </el-form-item> 
          <el-form-item >
            <el-checkbox v-model="checked" class="remember">记住用户名密码</el-checkbox>
            </el-form-item> 
          <el-form-item>
            <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>        
      </el-form>
    </div>
  </div>
</template>

<script>
  import {LoginCheck,setCookie,getCookie,clearCookie} from '@/api/login.js'

  export default {
    data() {
      return {
        checked:JSON.parse(localStorage.getItem('state')),
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      };
    },
    created(){
       
    },
    beforeMount(){
      let f =  getCookie()
      this.ruleForm.username = f.username
      this.ruleForm.password = f.password
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             if(this.checked == true) {
              setCookie(this.ruleForm.username,this.ruleForm.password)
              }else {
                clearCookie()
              }
            LoginCheck(this.ruleForm.username,this.ruleForm.password)
           } else {
              return false
           }
        });
      }
    },
    watch:{
      checked(newVal){
        if(newVal == false) {
          this.ruleForm.username = ''
          this.ruleForm.password = ''
          clearCookie()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
$textcolor:skyblue;
#app{
  height: 100%;
}
.back{
  height: 100%;
  padding-bottom: 200px;
  background-color: steelblue;
  background-image: url('../assets/image/aaa.jpg');
  background-size: cover;
}
.el-row {
  margin:15px;
}
.title{
  padding: 0 0 20px;
  text-align: center;
  color:$textcolor;
}
.remember{
  color:$textcolor;
}
.login-box{
  width: 350px;
  margin: 150px auto;
  padding: 20px 30px;
  position: relative;
  top: 50%;
  margin-top: -200px;
  background-color:#0b2431;
  border-radius: 5px;
  border:1px solid #4B7E8C;
  opacity: 0.7;
}
.login-btn {
  width: 100%;
  background-image: linear-gradient(to top, rgba(6, 48, 61, 0), rgb(32, 119, 134));
}
</style>

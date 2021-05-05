<template>
<div class="login">
      <div class="login-container">
          <div class="title">
              <h1>Login</h1>
          </div>
<el-form ref="loginForm"   size="medium ">
  <el-form-item >
      <i class="el-icon-user-solid"></i>
    <el-input v-model="loginForm.mobile" class="mobile"></el-input>
  </el-form-item>
    <el-form-item >
      <i class="el-icon-lock"></i>
    <el-input v-model="loginForm.password" type="password" class="password"></el-input>
  </el-form-item>
    <el-form-item >
    <el-button type="primary" class="login-btn">登录</el-button>
  </el-form-item>
</el-form>
  </div>
</div>
</template>

<script>

export default {

  data () {
    return {
      loginForm: {
        mobile: '',
        password: ''
      },
      passwordIsShow: false
    }
  }
}
</script>

<style lang="less" scoped>
body {
background:url("../../assets/2.jpg");
}
.login{
width: 100%;
height: 100vh;
background:url("../../assets/2.jpg");
display: flex;
justify-content: center;
align-items: center;
}
.login-container{
    // margin: 300px auto;
    width: 400px;
    height: 260px;
    background-color: rgba(250, 248, 248, 0.3);
    border-radius: 10px;
    padding: 16px;
    position: relative;
    .title{
        margin-bottom: 20px;
        color: #409eff;
    }
    .login-btn{
        width: 100%;
    }
}
i {
  z-index: 999;
  position: absolute;
  top: 12px;
  left: 10px;

}
.el-input__inner{
  padding-left: 20px;
}
</style>

<template>
  <div class="panel">
    <el-row
      type="flex"
      justify="center">
      <el-col :span="24" class="welcome-text text-center">
        <span>欢迎登陆！</span>
      </el-col>
    </el-row>
    <el-row
      type="flex"
      justify="center">
      <el-col :span="20">
        <!-- 账号 -->
        <el-input
          v-model="login.name"
          placeholder="请输入用户名"
          class="input-bottom-space">
          <font-awesome-icon
            slot="prefix"
            :icon="['fas', 'user']"
            class="login-icon"></font-awesome-icon>
        </el-input>
        <!-- 密码 -->
        <el-input
          v-model="login.pwd"
          placeholder="请输入密码"
          class="input-bottom-space">
          <font-awesome-icon
            slot="prefix"
            :icon="['fas', 'unlock-alt']"
            class="login-icon"></font-awesome-icon>
        </el-input>
        <el-row
          type="flex"
          class="login-register"
          justify="space-between">
          <!-- 忘记密码 -->
          <el-col :span="3">
            <el-link
              type="primary"
             :underline="false">忘记密码？</el-link>
          </el-col>
          <el-col :span="10"></el-col>
          <!-- 注册 -->
          <el-col :span="7">
            <span class="text-white text-14px">还没有账号？</span>
            <el-link
              type="primary"
             :underline="false">立即注册>></el-link>
          </el-col>
        </el-row>
        <!-- 登录 -->
        <el-button
          type="primary"
          class="login-button">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default{
  name: 'login-components',
  data () {
    return {
      login: {
        name: '',
        pwd: ''
      }
    }
  }
}
</script>

<style lang="sass" scoped>
$panelWidth: 720px;
$fontColor: #ffffff;

.text-white
  color: $fontColor;

.text-14px
  font-size: 14px;

.panel
  border-radius: 3px;
  opacity: 0.8;
  position: absolute;
  width: $panelWidth;
  height: 430px;
  margin-left: 50%;
  left: -$panelWidth / 2;
  top: 270px;
  background: #032327;

.welcome-text
  padding-top: 60px;
  padding-bottom: 20px;

.text-center
  text-align: center;

.text-center span
  font-size: 36px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: $fontColor;

.input-bottom-space
  margin-bottom: 33px;

.login-button
  width: 100%;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: $fontColor;
  letter-spacing: 46px;
  padding-left: 46px;

.login-icon
  font-size: 20px;
  padding: 17px 0 0 24px;

.login-register
  margin: -20px 0 10px 0px;
</style>

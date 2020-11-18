<template>
  <div class="bgcontainer">
    <div class="layout">
      <div class="logo">
        <embed
          :src="logo_url"
          type="image/svg+xml"
          width="189"
          height="60"
          style="margin: 9.4% 0px 0px 8%;"/>
      </div>
      <!-- 气泡 -->
      <div class="bubble">
        <cus-bubble :bubbleNum="bubbleNum"></cus-bubble>
      </div>
      <!-- 注册框容器 -->
      <div class="register-container">
        <customize-fieldset title="注册"></customize-fieldset>
        <el-row
          type="flex"
          justify="center">
          <el-col :span="12" class="register-form">
            <!-- 账号 -->
            <cus-input
              inputPlaceholder="请输入用户名"
              class="input-bottom-space">
              <font-awesome-icon
                :icon="['fas', 'user']"
                class="login-icon"></font-awesome-icon>
            </cus-input>
            <!-- 密码 -->
            <cus-input
              inputPlaceholder="请输入密码"
              class="input-bottom-space">
              <font-awesome-icon
                :icon="['fas', 'unlock-alt']"
                class="login-icon"></font-awesome-icon>
            </cus-input>
            <!-- 确认密码 -->
            <cus-input
              inputPlaceholder="请确认密码"
              class="input-bottom-space">
              <font-awesome-icon
                :icon="['fas', 'unlock-alt']"
                class="login-icon"></font-awesome-icon>
            </cus-input>
            <!-- 手机号 -->
            <cus-input
              inputPlaceholder="请输入常用手机号"
              class="input-bottom-space">
              <font-awesome-icon
                :icon="['fas', 'mobile-alt']"
                class="login-icon"></font-awesome-icon>
            </cus-input>
            <!-- 验证码 -->
            <cus-input
              inputPlaceholder="请输入短信验证码"
              class="input-bottom-space">
              <font-awesome-icon
                :icon="['fas', 'code']"
                class="login-icon"></font-awesome-icon>
            </cus-input>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import CustomizeFieldset from '../common/CustomizeFieldset'
import CusInput from '../common/CusInput'
import CusBubble from '../common/CusBubble'

export default {
  name: 'register-component',
  data () {
    return {
      bubbleNum: Math.floor(Math.random() * 20 + 30), // 气泡随机数
      logo_url: require('../../assets/jiumu.svg'),
      register: {
        name: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        verificationCode: ''
      }
    }
  },
  components: {
    CustomizeFieldset,
    CusInput,
    CusBubble
  }
}
</script>

<style lang="scss" scoped>
.bgcontainer{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  background: url(../../assets/img/bgimg.jpg) no-repeat;
  background-size: cover;
  background-position: center 0;
  z-index: -9;
}
.layout{
  display: grid;
  grid-template-columns: [column1] 18.75vw [column2] 62.5vw [column3] 18.75vw [column4];
  grid-template-rows: [row1] 22.03vh [row2] 77.87vh [row3];
}
.bubble{
  grid-column-start: column2;
  grid-column-end: column3;
  grid-row-start: row1;
  grid-row-end: row3;
  z-index: -8;
}
.register-container{
  grid-column-start: column2;
  grid-column-end: column3;
  grid-row-start: row2;
  grid-row-end: row3;
}
.register-form{
  padding-top: 82px;
}
.input-bottom-space {
  margin-bottom: 33px;
}
.login-icon{
  font-size: 24px;
  padding: 15px 0 0 24px;
}
</style>

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
        <div
          v-for="(item, index) in bubbleNum"
          :key="index"
          :style="[bubbleColor(), bubblePosition(), bubbleRadius()]">
        </div>
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
    CusInput
  },
  mounted () {},
  computed: {},
  methods: {
    /**
     * 使用函数计算是为了绕开computed的计算缓存
     * 目前没有找到办法完全用sass语法来控制，不能做到更新赋值
     * */
    // 计算气泡颜色与透明度
    bubbleColor () {
      let opacity = Math.random()
      if (opacity < 0.2) opacity = 0.2
      else if (opacity > 0.7) opacity = 0.7

      return {
        backgroundColor: `rgba(8, 163, 229, ${opacity})`
      }
    },
    // 计算气泡坐标位置
    bubblePosition () {
      return {
        marginTop: `${window.innerHeight * Math.random()}px`,
        marginLeft: `${window.innerWidth * 0.625 * Math.random()}px`
      }
    },
    // 计算气泡半径
    bubbleRadius () {
      const radius = Math.random() * 10 + 10
      return {
        width: `${radius}px`,
        height: `${radius}px`
      }
    }
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
  > div{
    position: absolute;
    border-radius: 50px;
  }
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

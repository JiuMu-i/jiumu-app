<template>
  <div>
    <!-- 登录框 -->
    <canvas id="login" width="780" height="470" class="canvas-class"></canvas>
    <div class="panel-main">
      <el-row
        type="flex"
        justify="center">
        <el-col :span="24" class="welcome-text text-center">
          <span>JiuMu</span>
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
              :underline="false"
              class="theme-class">忘记密码？</el-link>
            </el-col>
            <el-col :span="10"></el-col>
            <!-- 注册 -->
            <el-col :span="7">
              <span class="text-white text-14px">还没有账号？</span>
              <el-link
              :underline="false"
              @click="register"
              class="theme-class">立即注册>></el-link>
            </el-col>
          </el-row>
          <el-row
            type="flex"
            justify="center">
            <!-- 登录 -->
            <el-col :span="16">
              <el-button
                @click="loginMethod"
                class="login-button">登录</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../../main'

export default{
  name: 'login-component',
  data () {
    return {
      login: {
        name: '',
        pwd: ''
      }
    }
  },
  mounted () {
    this.initCanvas()
  },
  methods: {
    loginMethod () {
      eventBus.$emit('removePerspective', this.$store.state.perspectiveType.login)
    },
    register () {
      this.$emit('routerTo')
    },
    initCanvas () {
      const canvas = document.getElementById('login')
      let ctx = canvas.getContext('2d')
      // 绘制图形 -- 边框图形
      ctx.beginPath()
      // 属性设置
      ctx.shadowColor = '#DC4814'
      ctx.shadowBlur = 20
      ctx.fillStyle = '#DC4814'
      // 绘制路径
      ctx.moveTo(179, 17) // 1 165: 10 -> 180: 20
      ctx.lineTo(600, 17) // 2 583: 10 -> 598: 20
      ctx.lineTo(636, 69) // 3 618: 61 -> 633: 71
      ctx.lineTo(686, 69) // 4 670: 61 -> 685: 71
      ctx.lineTo(752, 160) // 5 734: 151 -> 749: 161
      ctx.lineTo(752, 304) // 6 734: 294 -> 749: 304
      ctx.lineTo(687, 401) // 7 670: 388 -> 685: 398
      ctx.lineTo(635, 401) // 8 618: 388 -> 633: 398
      ctx.lineTo(600, 453) // 9 583: 439 -> 598: 449
      ctx.lineTo(179, 453) // 10 165: 439 -> 180: 449
      ctx.lineTo(143, 401) // 11 129: 388 -> 144: 398
      ctx.lineTo(92, 401) // 12 80: 388 -> 95: 398
      ctx.lineTo(26, 305) // 13 15: 294 -> 30: 304
      ctx.lineTo(26, 162) // 14 15: 151 -> 30: 161
      ctx.lineTo(92, 69) // 15 80: 61 -> 95: 71
      ctx.lineTo(143, 69) // 16 129: 61 -> 71
      ctx.closePath()
      ctx.fill()
      // 绘制图形 -- 镂空图形
      ctx.beginPath()
      ctx.globalCompositeOperation = 'destination-out'
      ctx.fillStyle = '#032327'
      // 绘制路径
      ctx.moveTo(180, 22) // 1 165: 10 -> 180: 20
      ctx.lineTo(598, 22) // 2 583: 10 -> 598: 20
      ctx.lineTo(632, 74) // 3 618: 61 -> 633: 71
      ctx.lineTo(683, 74) // 4 670: 61 -> 685: 71
      ctx.lineTo(746, 162) // 5 734: 151 -> 749: 161
      ctx.lineTo(746, 305) // 6 734: 294 -> 749: 304
      ctx.lineTo(683, 396) // 7 670: 388 -> 685: 398
      ctx.lineTo(632, 396) // 8 618: 388 -> 633: 398
      ctx.lineTo(596, 447) // 9 583: 439 -> 598: 449
      ctx.lineTo(182, 447) // 10 165: 439 -> 180: 449
      ctx.lineTo(147, 396) // 11 129: 388 -> 144: 398
      ctx.lineTo(95, 396) // 12 80: 388 -> 95: 398
      ctx.lineTo(33, 303) // 13 15: 294 -> 30: 304
      ctx.lineTo(33, 162) // 14 15: 151 -> 30: 161
      ctx.lineTo(95, 74) // 15 80: 61 -> 95: 71
      ctx.lineTo(143, 74) // 16 129: 61 -> 71
      ctx.closePath()
      ctx.fill()
    }
  }
}
</script>

<style lang="scss" scoped>
$panelWidth: 720px;
$fontColor: #C2C9D3;

.theme-class {
  color: #DC4814;
}
.text-white {
  color: $fontColor;
}
.text-14px {
  font-size: 14px;
}
.canvas-class{
  position: absolute;
  margin-left: 50%;
  left: -390px;
  top: 250px;
}
.panel-main {
  opacity: 0.8;
  position: absolute;
  width: $panelWidth;
  height: 430px;
  margin-left: 50%;
  left: -$panelWidth / 2;
  top: 270px;
  background: #032327;
  clip-path: polygon(
    0% 33%,
    9% 12%,
    16% 12%,
    21% 0%,

    79% 0%,
    84% 12%,
    91% 12%,
    100% 33%,

    100% 66%,
    91% 88%,
    84% 88%,
    79% 100%,

    21% 100%,
    16% 88%,
    9% 88%,
    0 66%
  );
}
.welcome-text {
  padding-top: 60px;
  padding-bottom: 20px;
}
.text-center {
  text-align: center;
}
.text-center span {
  font-size: 48px;
  font-family: cursive;
  font-weight: bold;
  font-style: italic;
  color: $fontColor;
  line-height: 25px;
}
.input-bottom-space {
  margin-bottom: 33px;
}
.login-button {
  border: 1px solid #DC4814;
  width: 100%;
  height: 58px;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: $fontColor;
  letter-spacing: 46px;
  padding-left: 46px;
  background-color: #DC4814;
  box-shadow: #000000 2px 2px 5px 1px
}
.login-icon{
  font-size: 20px;
  padding: 17px 0 0 24px;
}
.login-register{
  margin: -20px 0 10px 0px;
}
</style>

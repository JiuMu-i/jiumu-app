<template>
  <div>
    <div
      v-for="(item, index) in bubbleNum"
      :key="index"
      :style="[bubbleColor(), bubblePosition(), bubbleRadius()]"
      class="cus-bubble">
    </div>
  </div>
</template>

<script>
export default {
  name: 'cus-bubble',
  props: {
    bubbleNum: {
      type: Number,
      default: 0,
      validator (val) {
        return isNaN(val) ? 0 : val
      }
    }
  },
  methods: {
    /**
     * 使用函数计算是为了绕开computed的计算缓存
     * 目前没有找到办法完全用sass语法来控制，不能做到更新赋值
     * 但是使用函数计算时应该避免页面的重绘引发的气泡重新计算位置的问题
     * */
    // 计算气泡颜色与透明度
    bubbleColor () {
      let opacity = Math.random()
      if (opacity < 0.2) opacity = 0.2
      else if (opacity > 0.7) opacity = 0.7

      return {
        backgroundColor: 'rgb(8, 163, 229)',
        opacity: opacity
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
.cus-bubble{
  position: absolute;
  border-radius: 50px;
  animation-name: bubble-flash;
  animation-duration: 1.5s;
  animation-timing-function: linear; // 匀速
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes bubble-flash{
  from {
    box-shadow: 0 0 20px 2px rgb(18, 163, 229);
  }
  to {
    box-shadow: 0 0 20px 8px rgb(18, 163, 229);
  }
}
</style>

<template>
  <transition :name="transitionName">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'cus-animation',
  props: {
    transitionName: String
  }
}
</script>

<style lang="scss" scoped>
/* wave animate */
.WaveLeft-enter,.WaveLeft-leave-to{
  opacity: 0;
}
.WaveLeft-enter-active,.WaveLeft-leave-active{
  transition: opacity 1s;
}
.WaveRight-enter,.WaveRight-leave-to{
  opacity: 0;
}
.WaveRight-enter-active,.WaveRight-leave-active{
  transition: opacity 1s;
}
</style>

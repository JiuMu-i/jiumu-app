<template>
  <div id="app">
    <cus-animation
      :transitionName="transitionName">
      <router-view></router-view>
    </cus-animation>
  </div>
</template>

<script>
import CusAnimation from '@/components/common/CusAnimation'

export default {
  name: 'App',
  components: {
    CusAnimation
  },
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route (to, from) {
      this.transitionName = to.meta.index > from.meta.index ? 'WaveRight' : 'WaveLeft'
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

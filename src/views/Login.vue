<template>
  <div>
    <div class="logo">
      <embed
        :src="logo_url"
        type="image/svg+xml"
        width="50"
        height="50"
        style="margin: -6px 0 0 -5px;"/>
    </div>
    <login-component @routerTo="routerTo"></login-component>
    <universe></universe>
  </div>
</template>

<script>
import LoginComponent from '../components/login/LoginComponent'
import Universe from '../components/home/Universe'

export default{
  name: 'login',
  components: {
    LoginComponent,
    Universe
  },
  data () {
    return {
      logo_url: require('../assets/logo.svg')
    }
  },
  methods: {
    routerTo () {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  position: absolute;
  width: 40px;
  height: 40px;
  margin: 30px 0 0 40px;
  border-radius: 50px;
  background: #000000;
}
</style>

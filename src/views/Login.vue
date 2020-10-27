<template>
  <div>
    <login-component></login-component>
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
  }
}
</script>

<style scoped>

</style>

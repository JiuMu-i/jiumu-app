<template>
  <div class="bgcontainer">
    <div class="logo"></div>
    <div class="bubble"></div>
    <div class="register-container"></div>
  </div>
</template>

<script>
export default {
  name: 'register-component'
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
.bubble{
  width: 600px;
  height: 100%;
  margin: auto 0;
}
</style>

<template>
  <div class="panel"></div>
</template>

<script>
export default{
  name: 'login-components'
}
</script>

<style lang="sass" scoped>
$panelWidth: 500px;
.panel
  border-radius: 3px;
  opacity: 0.4;
  position: absolute;
  width: $panelWidth;
  height: 350px;
  margin-left: 50%;
  left: -$panelWidth / 2;
  top: 270px;
  background: #847e7c;
</style>

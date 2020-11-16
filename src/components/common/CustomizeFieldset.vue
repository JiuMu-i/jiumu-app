<template>
  <div class="fieldset">
    <hr>
    <span>{{ title }}</span>
    <hr style="float: right;">
  </div>
</template>

<script>
export default {
  name: 'customize-fieldset',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.fieldset{
  hr {
    width: 42%;
  }
  > span{
    display: inline-block;
    position: absolute;
    left: 50%;
    transform: translateX(-53px);
    margin-top: -32px;
    font-size: 48px;
    color: #ffffff;
    letter-spacing: 10px;
  }
  &:after{
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
</style>

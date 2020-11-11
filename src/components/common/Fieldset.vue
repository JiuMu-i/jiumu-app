<template>
  <div
    :title="title"
    class="fieldset"></div>
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
  position: relative;
  border: 1px solid rgba(255, 255, 255, 1)
}
.fieldset::before{
  content: attr(title);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 1);
}
</style>

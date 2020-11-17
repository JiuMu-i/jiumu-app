<template>
  <div class="cus-input-panel">
    <div class="cus-input-sub-panel"></div>
    <span class="prefix-icon">
      <slot></slot>
    </span>
    <input
      :value="inputValue"
      :type="inputType"
      :placeholder="inputPlaceholder"
      :row="inputRow"
      :accept="inputAccept"
      :alt="inputAlt"
      :checked="inputChecked"
      :disabled="inputDisabled"
      :readonly="inputReadonly">
  </div>
</template>

<script>
export default {
  name: 'cus-input',
  props: {
    inputValue: {
      type: String,
      default: ''
    },
    inputType: {
      type: String,
      default: 'text',
      validator (val) {
        return [
          'button', 'checkbox',
          'color', 'date',
          'datetime', 'datetime-local',
          'email', 'file',
          'hidden', 'image',
          'month', 'number',
          'password', 'radio',
          'range', 'reset',
          'search', 'submit',
          'tel', 'text',
          'time', 'url',
          'week'
        ].indexOf(val) !== -1
      }
    },
    inputPlaceholder: {
      type: String,
      default: ''
    },
    inputRow: {
      type: Number,
      default: 1
    },
    inputAccept: {
      type: String
    },
    inputAlt: {
      type: String,
      default: ''
    },
    inputChecked: {
      type: Boolean,
      default: false
    },
    inputDisabled: {
      type: Boolean,
      default: false
    },
    inputReadonly: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.prefix-icon{
  position: absolute;
  color: #C0C4CC;
}
.cus-input-panel { // 父面板
  position: relative;
  width: 100%;
  height: 58px;
  border-radius: 4px;
  background: rgba(3, 35, 39, 0.6);
  border: 2px solid #5E9FF8;
  font-size: 20px;
  font-weight: 400;
  color: #C2C9D3;
  input {
    width: 90%;
    height: 58px;
    background: rgba(3, 35, 39, 0.6);
    font-size: 20px;
    font-weight: 400;
    color: #C2C9D3;
    border: transparent;
    padding: 0px 0px 0px 60px;
    &:focus { // 覆盖浏览器默认样式导致的边框颜色不可控问题
      outline: #DC4814;
    }
  }
  &::before { // 上边框
    content: '';
    position: absolute;
    top: -2px;
    border: 1px solid #5E9FF8;
  }
  &::after { // 下边框
    content: '';
    position: absolute;
    bottom: -2px;
    border: 1px solid #DC4814;
    box-shadow: 0 0 5px 0 #DC4814;
  }
  &:focus-within { // 聚焦时触发
    & { // 上边框颜色变化动画
      animation-name: top-animate-color;
      animation-duration: 0;
      animation-fill-mode: forwards;
      animation-delay: 800ms;
    }
    &::before { // 上边框收缩动画
      animation-name: top-animate-shrink;
      animation-duration: 500ms;
      animation-timing-function: ease-out; // 以低速结束
      animation-fill-mode: forwards;
      animation-delay: 800ms;
    }
    &::after { // 下边框展开动画
      animation-name: bottom-animate-unfold;
      animation-duration: 500ms;
      animation-timing-function: linear; // 匀速
      animation-fill-mode: forwards;
    }
    .cus-input-sub-panel { // 子面板
      &::before { // 左边框展开动画
        animation-name: left-animate-unfold;
        animation-duration: 300ms;
        animation-timing-function: linear; // 匀速
        animation-fill-mode: forwards;
        animation-delay: 500ms;
      }
      &::after { // 右边框展开动画
        animation-name: right-animate-unfold;
        animation-duration: 300ms;
        animation-timing-function: linear; // 匀速
        animation-fill-mode: forwards;
        animation-delay: 500ms;
      }
    }
  }
}
.cus-input-sub-panel {
  &::before { // 左边框
    content: '';
    position: absolute;
    left: -2px;
    bottom: 0;
    box-shadow: 0 0 5px 0 #DC4814;
  }
  &::after { // 右边框
    content: '';
    position: absolute;
    right: -2px;
    bottom: 0;
    box-shadow: 0 0 5px 0 #DC4814;
  }
}
@keyframes top-animate-color { // 上边框颜色动画
  to {
    border-top: 2px solid #DC4814;
    box-shadow: 0 0 5px 0 #DC4814;
  }
}
@keyframes bottom-animate-unfold { // 底边展开动画
  from {
    width: 0;
    left: 50%;
  }
  to {
    width: 100%;
    left: 0;
  }
}
@keyframes bottom-animate-shrink { // 底边收缩动画
  from {
    width: 100%;
    left: 0;
    border: 1px solid #DC4814;
  }
  to {
    width: 0;
    left: 50%;
    border: transparent;
  }
}
@keyframes top-animate-unfold { // 顶边展开动画
  from {
    width: 0;
    left: 50%;
    border: transparent;
  }
  to {
    width: 100%;
    left: 0;
    border: 1px solid #5E9FF8;
  }
}
@keyframes top-animate-shrink {  // 顶边收缩动画
  from {
    width: 100%;
    left: 0;
  }
  to {
    width: 0;
    left: 50%;
  }
}
@keyframes left-animate-unfold { // 左边展开动画
  from {
    height: 0;
    border-left: transparent;
  }
  to {
    height: 58px;
    border-left: 2px solid #DC4814;
  }
}
@keyframes left-animate-shrink { // 左边收缩动画
  from {
    height: 58px;
    border-left: 2px solid #DC4814;
  }
  to {
    height: 0;
    border-right: transparent;
  }
}
@keyframes right-animate-unfold { // 右边展开动画
  from {
    height: 0;
    border-right: transparent;
  }
  to {
    height: 58px;
    border-right: 2px solid #DC4814;
  }
}
@keyframes right-animate-shrink { // 右边收缩动画
  from {
    height: 58px;
    border-right: 2px solid #DC4814;
  }
  to {
    height: 0;
    border-right: transparent;
  }
}
</style>

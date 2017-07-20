<template>
  <button class="btn">
    <ink-ripple></ink-ripple>
    <slot></slot>
  </button>
</template>

<style lang="scss" src="./Button.scss"></style>

<script type="text/babel">
  import InkRipple from '../InkRipple/InkRipple.vue'

  export default {
    name: 'md-button',
    components: {
      InkRipple
    }
  }
</script>

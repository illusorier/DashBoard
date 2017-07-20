<template>
  <div>
    <div class="side-nav" :class="[classes]">
      <div class="logo"></div>
      <div class="sidenav-content">
        <slot></slot>
    </div>
    </div>
    <div class="sidenav-overlay" :class="{ active: active && isSmallScreen }" @click="toggle"></div>
  </div>
</template>

<style lang="scss" src="./SideNav.scss"></style>

<script type="text/babel">
  export default {
    name: 'sidenav',
    data: () => ({
      active: null,
      isSmallScreen: window.isSmallScreen
    }),
    computed: {
      classes () {
        return {
          'active': this.active
        }
      }
    },
    methods: {
      open () {
        this.active = true
        this.$el.focus()
      },
      close () {
        this.active = false
        this.$el.blur()
      },
      toggle () {
        if (this.active) {
          this.close()
        } else {
          this.open()
        }
      }
    },
    created () {
      if (window.isSmallScreen) {
        this.active = false
      } else {
        this.active = true
        console.log('hi')
      }
    }
  }
</script>

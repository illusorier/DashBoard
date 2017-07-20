<template>
  <li class="list-item list-item-expand">
    <div class="list-item-container" @click="toggle">
      <slot name="header"></slot>
    </div>
    <div class="list-expand" :class="classes" :style="bodyStyles">
      <slot name="expand"></slot>
    </div>
  </li>
</template>

<style lang="scss" src="./List.scss"></style>

<script type="text/babel">
  export default {
    data () {
      return {
        active: false,
        height: 0,
        transitionOff: true
      }
    },
    computed: {
      classes () {
        return {
          'active': this.active,
          'transition-off': this.transitionOff
        }
      },
      bodyStyles () {
        return {
          'margin-bottom': this.height
        }
      }
    },
    methods: {
      resetSiblings () {
        console.log(this.$parent)
        this.$parent.$children.forEach((child) => {
          if (child.$el !== this.$el) {
            child.active = false
          }
        })
      },
      calculateHeight () {
        this.height = -this.$el.querySelector('.list-expand').scrollHeight + 'px'
        window.setTimeout(() => {
          this.transitionOff = false
        })
      },
      toggle () {
        this.resetSiblings()
        this.calculateHeight()
        this.active = !this.active
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.calculateHeight()
      })
    }
  }
</script>

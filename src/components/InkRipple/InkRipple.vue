<template>
  <div class="ink-ripple">
    <div class="ripple" :class="classes" :style="styles" ref="ripple"></div>
  </div>
</template>

<style lang="scss" src="./InkRipple.scss"></style>

<script type="text/babel">
  const addEvent = (target, type, handler) => {
    if (type === 'start') {
      target.addEventListener('mousedown', handler)
      target.addEventListener('touchstart', handler)
    } else {
      target.addEventListener('mouseup', handler)
      target.addEventListener('touchend', handler)
    }
  }

  const removeEvent = (target, type, handler) => {
    if (type === 'start') {
      target.removeEventListener('mousedown', handler)
      target.removeEventListener('touchstart', handler)
    } else {
      target.removeEventListener('mouseup', handler)
      target.removeEventListener('touchend', handler)
    }
  }

  export default {
    name: 'ink-ripple',
    data: () => ({
      mounted: false,
      rippleElement: null,
      parentElement: null,
      parentDimensions: {
        width: null,
        height: null,
        top: null,
        left: null
      },
      fadeOut: false,
      active: false
    }),
    computed: {
      classes () {
        return {
          'md-fadeout': this.fadeOut,
          'md-active': this.active
        }
      },
      styles () {
        return {
          width: this.parentDimensions.width,
          height: this.parentDimensions.height,
          top: this.parentDimensions.top,
          left: this.parentDimensions.left
        }
      }
    },
    methods: {
      getParentSize () {
        const parent = this.parentElement

        return Math.round(Math.max(parent.offsetWidth, parent.offsetHeight)) + 'px'
      },
      getClickPosition (event) {
        if (this.$refs.ripple) {
          const rect = this.parentElement.getBoundingClientRect()
          let top = event.pageY
          let left = event.pageX
          if (event.type === 'touchstart') {
            top = event.changedTouches[0].pageY
            left = event.changedTouches[0].pageX
          }
          return {
            top: top - rect.top - this.$refs.ripple.offsetHeight / 2 - document.body.scrollTop + 'px',
            left: left - rect.left - this.$refs.ripple.offsetWidth / 2 - document.body.scrollLeft + 'px'
          }
        }
        return false
      },
      setDimensions () {
        const size = this.getParentSize()

        this.parentDimensions.width = size
        this.parentDimensions.height = size
      },
      setPositions (event) {
        const positions = this.getClickPosition(event)
        if (positions) {
          this.parentDimensions.top = positions.top
          this.parentDimensions.left = positions.left
        }
      },
      clearState () {
        this.active = false
        this.fadeOut = false
        this.setDimensions()
        removeEvent(document.body, 'end', this.endRipple)
      },
      startRipple (event) {
        this.clearState()

        addEvent(document.body, 'end', this.endRipple)

        this.$nextTick(() => {
          this.setPositions(event)
          this.active = true
        })
      },
      endRipple () {
        this.fadeOut = true

        removeEvent(document.body, 'end', this.endRipple)
      },
      registerTriggerEvent () {
        addEvent(this.parentElement, 'start', this.startRipple)
      },
      init () {
        this.rippleElement = this.$el
        this.parentElement = this.$el.parentNode
        this.previous = ['mouse']

        this.registerTriggerEvent()
        this.setDimensions()
      },
      destroy () {

      }
    },
    mounted () {
      window.setTimeout(() => {
        this.init()

        this.$nextTick(() => {
          this.mounted = true
        })
      }, 100)
    },
    beforeDestroy () {
      this.destroy()
    }
  }
</script>

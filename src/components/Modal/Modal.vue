<template>
  <div class="modal-container">
    <div class="modal" :class="[classes]">
      <div class="modal-content">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <md-button @click.native="confirm">{{ okText }}</md-button>
        <button class="btn-flat" @click="cancel">{{ cancelText }}</button>
      </div>
    </div>
    <div class="modal-overlay" @click="close"></div>
  </div>
</template>

<style lang="scss" src="./Modal.scss"></style>

<script type="text/babel">
  export default {
    props: {
      okText: {
        type: String,
        default: '确认'
      },
      cancelText: {
        type: String,
        default: '取消'
      }
    },
    data: () => ({
      active: false
    }),
    computed: {
      classes () {
        return {
          'modal-active': this.active
        }
      }
    },
    methods: {
      removeModal () {
        if (document.body.contains(this.$el)) {
          this.$el.parentNode.removeChild(this.$el)
        }
      },
      confirm () {
        this.$emit('modalConfirm')
      },
      cancel () {
        this.$emit('modalCancel')
      },
      open () {
        document.body.appendChild(this.$el)
        window.setTimeout(() => {
          this.active = true
        })
      },
      close () {
        if (document.body.contains(this.$el)) {
          document.body.removeChild(this.$el)
        }

        window.setTimeout(() => {
          this.active = false
        })
      }
    },
    mounted () {
      this.removeModal()
    },
    beforeDestroy () {
      this.removeModal()
    }
  }
</script>

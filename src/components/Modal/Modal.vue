<template>
  <div>
    <div class="modal"></div>
    <div class="modal-overlay">
      <div class="modal-footer">
        <button>{{ okText }}</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./Modal.scss"></style>

<script type="text/babel">
  export default {
    created () {
      console.log('modal loaded')
    },
    props: {
      okText: {
        type: String,
        default: '确认'
      }
    }
  }
</script>

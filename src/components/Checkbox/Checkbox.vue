<template>
  <div class="md-checkbox" :class="classes">
    <div class="md-checkbox-container" @click.stop="toggleCheck">
      <input type="checkbox">
    </div>
  </div>
</template>

<style lang="scss" src="./Checkbox.scss"></style>

<script type="text/babel">
  export default {
    name: 'md-checkbox',
    data () {
      return {
        checked: false
      }
    },
    computed: {
      classes () {
        return {
          'md-checked': this.checked
        }
      }
    },
    methods: {
      toggleCheck () {
        this.checked = !this.checked
      }
    }
  }
</script>

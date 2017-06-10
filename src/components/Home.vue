<template>
  <div class="home">
    <button @click="openModal('modal1')">Open</button>
    <modal ref="modal1"></modal>
  </div>
</template>

<script type="text/babel">
import Modal from '../components/Modal/Modal.vue'

export default {
  components: {
    Modal
  },
  methods: {
    openModal (ref) {
      console.log(this.$refs[ref])
      this.$refs[ref].open()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

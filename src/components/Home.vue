<template>
  <div class="home">
    <card>
      <card-content>
        <md-table>
          <md-table-header>
            <md-table-row>
              <md-table-head>
                姓名
              </md-table-head>
              <md-table-head>
                性别
              </md-table-head>
            </md-table-row>
          </md-table-header>
          <md-table-body>
            <md-table-row>
              <md-table-cell>
                illusorier
              </md-table-cell>
              <md-table-cell>
                male
              </md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
      </card-content>
    </card>
    <button @click="openModal('modal1')">Open</button>
    <md-button>Hello</md-button>
    <div>
      <md-checkbox></md-checkbox>
    </div>
    <modal ref="modal1"></modal>
  </div>
</template>

<script type="text/babel">
  export default {
    methods: {
      openModal (ref) {
        this.$refs[ref].open()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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

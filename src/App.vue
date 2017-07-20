<template>
  <div id="app">
    <header>
      <nav-bar>
        <md-button @click.native="toggleSidenav">
          <i class="material-icons">menu</i>
        </md-button>
      </nav-bar>
      <side-nav ref="sidenav">
        <list>
          <list-item>Getting Started</list-item>
          <list-expand>
            <div slot="header">
              <span>Components</span>
            </div>
            <div slot="expand">
              <list>
                <list-item>
                  <router-link to="/components/button">Button</router-link>
                </list-item>
                <list-item>
                  <router-link to="/components/card">Card</router-link>
                </list-item>
                <list-item>
                  <md-button>Checkbox</md-button>
                </list-item>
                <list-item>
                  <router-link to="/components/ink-ripple">Ink Ripple</router-link>
                </list-item>
                <list-item>
                  <router-link to="/components/modal">Modal</router-link>
                </list-item>
                <list-item>
                  <router-link to="/components/side-nav">SideNav</router-link>
                </list-item>
                <list-item>
                  <router-link to="/components/table">Table</router-link>
                </list-item>
              </list>
            </div>
          </list-expand>
        </list>
      </side-nav>
    </header>
    <main>
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script type="text/babel">
import NavBar from './components/NavBar/NavBar.vue'
import SideNav from './components/SideNav/SideNav.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    SideNav
  },
  methods: {
    toggleSidenav () {
      this.$refs.sidenav.toggle()
    }
  }
}
</script>

<style lang="scss">
header, main {
  padding-left: 300px;

  .container {
    padding: 16px;
  }

  nav {
    button {
      display: none!important;
    }
  }
}

@media screen and (max-width: 768px) {
  header, main {
    padding-left: 0 !important;

    nav {
      button {
        display: inline-block!important;
      }
    }
  }
}

main {
  padding-top: 64px;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

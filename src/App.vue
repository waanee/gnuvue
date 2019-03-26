<template>
  <div id="app">
    <header-component></header-component>
    <offcanvas-component></offcanvas-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/headComponent.vue'
import OffcanvasComponent from './components/offcanvas.vue'
import FooterComponent from './components/footerComponent.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome gnuvue app'
    }
  },
  components:{
    HeaderComponent, OffcanvasComponent, FooterComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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

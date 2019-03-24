<template>
  <div id="app">
    <header-component></header-component>
    <offcanvas-component></offcanvas-component>
    <router-link to="/">main</router-link> / 
    <router-link to="/about">about</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/headComponent.vue'
import OffcanvasComponent from './components/offcanvas.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome gnuvue app'
    }
  },
  components:{
    HeaderComponent, OffcanvasComponent
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

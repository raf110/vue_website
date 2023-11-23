<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <Header/>
    <router-view/>
    <Footer/>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Viga&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F9F5F1;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h1, h2, h3, h4, h5, h6{
  font-weight: bold!important;
  font-family: Viga!important;
}

p {
  font-family: Montserrat!important; 
}

</style>
<script>
// importem els compoenents
import Header from './components/HeaderComp';   
import Footer from './components/FooterComp';   
  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },
    data() {
        return {
          items: [
            {
              text: 'Home',
              href: '/home',
              to:"/home"
            },
            {
              text: 'Página actual',
              active: true
            }
          ]
        }
      }
  }
</script>
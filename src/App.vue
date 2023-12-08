<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <HeaderLoggedIn v-if="isTokenValid" />
    <Header v-else />
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
import HeaderLoggedIn from './components/HeaderLoggedInComp';
import Footer from './components/FooterComp';
  export default {
    name: 'App',
    loggedInUser: null,
    components: {
      Header,
      HeaderLoggedIn,
      Footer,
    },
    computed: {
      isTokenValid() {
        // Check if the token exists and is valid (you should implement this logic based on your authentication setup)
        const token = localStorage.getItem('token');
        // Implement your logic to check if the token is valid (e.g., not expired, signature verified, etc.)
        return token && this.isValidToken(token);
      },
    },
    methods: {
      async isValidToken() {
        /*try {
          const response = await this.$axios.post('http://your-backend-api/verify-token', { token });

          if (response.status === 200) {
            return true; // Token is valid
          } else {
            return false; // Token is invalid
          }
        } catch (error) {
          console.error('Error verifying token:', error);
          return false; // Request or verification error
        }*/
        // Implement your logic to check if the token is valid
        // For example, you might use a library like jsonwebtoken to verify the token
        // Return true if the token is valid, otherwise return false
        // Example:
        // const decodedToken = jwt.verify(token, 'yourSecretKey');
        // return !decodedToken.expired;
        return true; // Placeholder; replace with your actual validation logic
      },
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
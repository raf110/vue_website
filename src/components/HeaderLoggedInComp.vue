<template>
  <!-- definim el tipus de navbar -->
  <b-navbar toggleable="lg" type="dark" variant="info" aria-label="navegacio de la pagina">
    <!-- vinculem el logo amb la pagina d'inic -->
    <b-navbar-brand  class="nav-link logo" to="/home">
      <img src="../assets/logo.png" class="d-inline-block align-top logo" alt="" aria-label="logo de la pagina">
    </b-navbar-brand>
    <b-navbar-brand><h1>SIGN SYNCER</h1></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-container>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item aria-label="link to free translator" class="nav-link primary" to="/freetranslator">Free Translator</b-nav-item>
          <b-nav-item aria-label="link to " class="nav-link" to="/about">Plans & Pricing</b-nav-item>
          <b-nav-item aria-label="link to " class="nav-link" @click="logout">Log Out ({{ userEmail }})</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    userEmail() {
      // Retrieve the userEmail from localStorage
      return localStorage.getItem("userEmail") || "Unknown User";
    },
  },
  methods: {
    logout() {
      console.log('logout');
      // Perform logout logic, such as clearing the token
      localStorage.removeItem('token');
      localStorage.removeItem('userEmail');

      // Optionally, redirect to another route after logout
      //this.$router.push('/');

      // Reload the page
      //window.location.reload();
      window.location.href = '/';
    },
  }
}
</script>


<style scoped>
/*estil de la pagina per mostrar els elements en un grid i canviar els colors*/
li:has(>.router-link-exact-active, .router-link-active) {
  background-color: rgba(20, 47, 100, 0.5);
  color: #F9F5F1!important;
  border-radius: 10px;
}
.navbar-dark .navbar-nav .nav-link {
  color: #1C1414;
}
.navbar-nav {
  margin: 0.5em 2em;
  gap: 1.5em;
}
.primary {
  background-color: #9BB6ED;
  border-radius: 10px;
}
.bg-info {
  background-color: #FABB5A!important;
}
.logo {
  background-color: #FABB5A!important;
  color: #000000!important;
}
.navbar-expand-lg  {
  font-size: 1em;
}
.navbar-brand {
  margin-right: 0rem;
}

.d-inline-block {
  display: inline-block!important;
  height: 5rem;
}

@media (min-width: 992px) {
  .navbar-expand-lg .navbar-collapse {
    display: flex!important;
    flex-basis: auto;
    justify-content: flex-end;
  }
}
</style>


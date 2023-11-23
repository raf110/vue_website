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
                <b-nav-item aria-label="link to free translator" class="nav-link" to="/freetranslator">Free Translator</b-nav-item>
                <b-nav-item aria-label="link to " class="nav-link" to="/about">Plans and Pricing</b-nav-item>              
                <b-nav-item aria-label="link to " class="nav-link" to="/about">Sign Up</b-nav-item>              
                <b-nav-item aria-label="link to " class="nav-link" to="/about">Log In</b-nav-item>              
              </b-navbar-nav>
            </b-collapse>
          </b-container>
      </b-navbar>
    </template>
    
    <script>
    export default {
  
    }
    </script>
    
    
    <style scoped>
    /*estil de la pagina per mostrar els elements en un grid i canviar els colors*/
    .router-link-exact-active, .router-link-active {
      background-color: #909090;
      color: #000000!important;
    }
    .navbar-dark .navbar-nav .nav-link {
      color: #E7E3E4;
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

 
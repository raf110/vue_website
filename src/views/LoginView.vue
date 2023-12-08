<template>
    <div class="login">
        <LoginForm/>
    </div>       
  </template>

  <script>
  import LoginForm from "../components/LoginComp.vue";

  export default {
    components: {
      LoginForm  
    }
  }
  </script>

<style>
body {
  background:#fefefe;
}
.login {
  margin: 2em;
  display: flex;
  
}

.nav-tabs .nav-link {
  color: #729cee!important;
}

.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  color: #142F64!important;
}


</style>

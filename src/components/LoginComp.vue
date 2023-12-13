<template>
    <div class="container mt-5">
      <h2>Existing Account</h2>
      <b-jumbotron>
        <!-- Display error message if login fails -->
        <div v-if="loginError" class="error-box">
          {{ loginError }}
        </div>
      <b-form @submit.prevent="login">
        <!-- Email Address Input -->
        <b-form-group
          id="email-group"
          label="Email address:"
          label-for="email"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="Enter your email"
          ></b-form-input>
        </b-form-group>
<!-- Password Input with Show/Hide Icon -->
<b-form-group
  id="password-group"
  label="Password:"
  label-for="password"
  description="Password should be at least 8 characters."
>
  <b-input-group>
    <b-form-input
      id="password"
      v-model="password"
      :type="showPassword ? 'text' : 'password'"
      required
      placeholder="Enter your password"
    ></b-form-input>
    <b-input-group-append>
      <b-input-group-text>
        <font-awesome-icon
          :icon="showPassword ? ['far', 'eye'] : ['fas', 'eye']"
          @click="togglePassword"
        />
      </b-input-group-text>
    </b-input-group-append>
  </b-input-group>

  <!-- Use Bootstrap grid system to create two columns -->
  <div class="row">
    <div class="col-sm-6">
      <small class="form-text text-muted">
        Password should be at least 8 characters.
      </small>
    </div>
    <div class="col-sm-6 text-right">
      <!-- Forgot Password Link -->
      <b-link href="#">Forgot Password?</b-link>
    </div>
  </div>
</b-form-group>

  
        <div class="controls">
            <!-- Cancel Link -->
            <b-link @click="cancel">Cancel</b-link>
                
            <!-- Continue Button -->
            <b-button type="submit" variant="primary">Continue</b-button>
        </div>
      </b-form>
  
      <!-- Register Link -->
      <p class="mt-3">
        Still don't have an account?
        <b-link href="#">Register now!</b-link>
      </p>
    </b-jumbotron>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        rememberMe: false,
        showPassword: false,
        loginError: null
      };
    },
    methods: {
      async login() {
        try {
          const response = await this.$axios.post('http://localhost:3000/login', {
            email: this.email,
            password: this.password,
          });

          const token = response.data.token;
          const userEmail = response.data.user;
          localStorage.setItem('token', token);
          localStorage.setItem('userEmail', userEmail);

          // Reload the page
          //window.location.reload();
          //this.$router.push('/');
          //this.$router.go(-1);
          window.location.href = '/';

        } catch (error) {
          console.error(error.response.data.message);
          this.loginError = 'Incorrect email address or password. Please try again.';
        }
      },
      cancel() {
        // Redirect to the previous page
        this.$router.go(-1);
      },
      togglePassword() {
        this.showPassword = !this.showPassword;
      },
    },
  };
  </script>
  
<style>
  h2 {
    text-align: center;
    color: #333; /* Adjust the color as needed */
    margin-bottom: 20px;
  }
  .jumbotron {
    padding: 2rem 1rem;
    margin: 2rem 0;
    background-color: #fff!important;
    border-radius: 1.3rem;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);
    width: 50%; /* Adjust the maximum width as needed */
  }

  /* Style form elements */
  #email-group,
  #password-group,
  #forgot-password-group,
  #remember-me-group,
  #cancel-group,
  #continue-group,
  .mt-3 {
    margin-bottom: 1em;
  }

  #email,
  #password {
    border-radius: 0.5rem; /* Adjust border radius as needed */
    background-color: #D9D9D9;
    color: #3F3F3F;
  }

  .mt-3 b-link {
    color: #007bff; /* Adjust link color as needed */
  }

  .mt-5, .my-5{
    margin-top: 3rem !important;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .controls {
    margin: 1em;
    display: flex;
    justify-content: center;
    gap: 1.5em;
    align-items: center;
  }

  .custom-control-label {
    left: -2em!important;
  }

  .error-box {
    background-color: #f8d7da;
    /*color: #721c24;*/
    padding: 1em;
    border-radius: 0.5em;
    margin-top: -1em;
    margin-bottom: 2em;
  }
</style>

  
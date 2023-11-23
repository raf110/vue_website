<template>
  <div>
    <div>
      <b-jumbotron>
        <h2>What is Sign Syncer?</h2>
    
        <p class="lead">
          Sign Syncer is an easy to use service that simplifies communication between hearing and deaf people.
        <br>
          Translate your speech into sign language now!
        </p>
        
        <p class="lead bold">You can try the translator for free, no accound needed!</p>
        
   
        <b-button variant="primary" href="/#/freetranslator">Try Translating Now</b-button>
        
        <div class="box">
          <b-img rounded="circle" src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
        </div>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
  padding: 2rem 1rem;
  margin: 2rem 5rem;
  background-color: white;
  border-radius: 1.3rem;
  display: grid;
  justify-items: center;
  filter: drop-shadow(2px 4px 6px RGB(250,187,90,0.25));
}
.h2 {
  grid-column: 1;
}
.lead {
  grid-column: 1;
}
.bold {
  font-weight: bold;
}
.btn-primary {
  color: #142F64;
  background-color: #FABB5A;
  border-color: #FABB5A;
  grid-column: 1;
  width: 15em;
  height: 2.3em;
}
.box {
  grid-column: 2;
  grid-row: 1 / 5;
}

.rounded-circle {
  border-radius: 50%!important;
  width: 17em;
  height: 17em;
}

</style>

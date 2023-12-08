<template>
    <div>
        <b-card-group deck>
          <b-card title="Easy to Use" img-src="../assets/homepage/facil-de-usar.png" img-alt="Image" img-top>
          </b-card>
      
          <b-card title="Access Anywhere" img-src="../assets/homepage/globo.png" img-alt="Image" img-top>
          </b-card>
      
          <b-card title="Fast Translation" img-src="../assets/homepage/correo.png" img-alt="Image" img-top>
          </b-card>
        </b-card-group>
      </div>
  </template>
  
  <script>
  export default {
    name: 'HighlightsComp',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .card-deck {
    padding: 2rem 1rem;
    margin: 2rem 11rem;
    border-radius: 1.3rem;
    filter: drop-shadow(2px 4px 6px RGB(250,187,90,0.25));
  }

  .card-deck .card {
    margin: 1em 1.5em;
    background: white;
    border-radius: 25px;
    align-items: center;
  }

  img {
    width: 75%;
    padding: 0.5em 1em;
    margin: 1em 2em;
  }
  
  </style>
  
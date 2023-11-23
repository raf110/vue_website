<template>
  <div class="slide" aria-label="pagina d'inici">
    <!-- cridem el component -->
    <Calltoaction/>
    <Highlights/>
    <Steps/>
  </div>
</template>

<script>
// importem el componenet
import Calltoaction from "../components/CalltoactionComp.vue";
import Highlights from "../components/HighlightsComp.vue";
import Steps from "../components/StepsComp.vue";

export default {
  components: {
    Calltoaction,
    Highlights,
    Steps
  }
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
}
.slide {
  height:25%;
}
#app {
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

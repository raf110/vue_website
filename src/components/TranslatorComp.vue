<template>
  <div class="free">
    <div class="input">
      <b-input-group>
        <!-- Bind the input value to a data property -->
        <b-form-input v-model="inputText"></b-form-input>
        <b-input-group-append>
          <!-- Add a click event listener to the Translate button -->
          <b-button @click="translateText" class="outline">Translate</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>

    <div class="video">
      <b-jumbotron class="textintosign">
        <!-- Display the translated text -->
        <p>Your sentence in the structure of American Sign Language (hopefully):<br><br>{{ translatedText }}</p>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // Store the input text in a data property
      inputText: '',
      // Store the translated text in a data property
      translatedText: '',
    };
  },
  methods: {
    // Event handler for the Translate button
    async translateText() {
      try {
        // Make a request to your Node.js server API
        const response = await this.$axios.get(`api/translate?sentence=${encodeURIComponent(this.inputText)}`);

        //window.alert(`Translation result: ${JSON.stringify(response.data)}`);

        // Join the words into a single string, separated by a space. Display the result on website.
        this.translatedText = response.data.translatedWords.join(' ');

      } catch (error) {
        console.error('Error translating text:', error);
        window.alert('Error translating text. Please try again.');
      }
    },
  },
};
</script>

<style>
.input {
  width: 50%;
  margin: 1em auto;
}

.textintosign {
  padding: 2rem 1rem;
  margin: 2rem 5rem;
  background-color: white !important;
  border-radius: 1.3rem;
  display: grid;
  justify-items: center;
  filter: drop-shadow(2px 4px 6px RGB(250, 187, 90, 0.25));
}

.outline {
  width:auto!important;
  color: #142F64!important;
  border-color: #142F64!important;
  filter: drop-shadow(2px 4px 6px RGB(155,182,237,0.75));
  background-color: transparent!important;
}
.outline:hover {
  background-color: #142F64!important;
  color: #F9F5F1!important;
}
</style>

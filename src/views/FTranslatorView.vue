<template>
    <div class="free">
        <h2>Translator</h2>
        <h3>Free trial version</h3> 
        
        <div>
          <b-tabs content-class="mt-3" justified>
            <b-tab title="Sign to text">
              <b-jumbotron>
                <h4>Sign Language into Text (with patience)</h4>
                <Translate/>
            </b-jumbotron>
            </b-tab>
            <b-tab title="Explanation" active>
              <br>
              <br>
                <p>Select one of the other tabs above to access the translators</p>
              <br>
              <WEBRTC/>
              <br>
              <br>
              <br>
              <br>
              <br>            
              </b-tab>
            <b-tab title="Text to Sign">
              <b-jumbotron>
                <h4>Text into Sign Language (in process)</h4>
                <Translate2/>
              </b-jumbotron>
            </b-tab>
          </b-tabs>
        </div>

        <!--
        <TranslateForm v-on:formSubmit="translateText"></TranslateForm>
        <TranslateOutput v-text="translatedText"></TranslateOutput>-->

    </div>
  </template>

  <script>
  import Translate from "../components/VideotoText.vue";
  import Translate2 from "../components/TranslatorComp.vue";
  import WEBRTC from "../components/CameraComp.vue";
  export default {
    components: {
      Translate,
      Translate2,
      WEBRTC  
    }
  }
  </script>
  
  <style>
  body {
    background:#fefefe;
  }
  .free {
    margin: 2em;
  }

  .nav-tabs .nav-link {
    color: #729cee!important;
  }

  .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: #142F64!important;

  }
  </style>
  

  
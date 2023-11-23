<template>
    <div class="free">
        <h2>Translate to sign language</h2>
        <h3>Free trial version</h3> 
        
        <br>
        <Translate/>
        <br>
        <Translate2/>

        <!--
        <TranslateForm v-on:formSubmit="translateText"></TranslateForm>
        <TranslateOutput v-text="translatedText"></TranslateOutput>-->

    </div>
  </template>

  <script>
  import Translate from "../components/VideotoText.vue";
  import Translate2 from "../components/TranslatorComp.vue";
  export default {
    components: {
      Translate,
      Translate2      
    }
  }
  // importem el componenet
  /* import TranslateForm from "../components/TranslateForm.vue";
  import TranslateOutput from "../components/TranslateOutput.vue";
  
  export default {
    components: {
      TranslateForm,
      TranslateOutput
    },
  data: function(){
    return {
      translatedText:''
    }
  },
  methods: {
    translateText:function(text, language){
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170329T180255Z.3c18d2dc7b65d525.f23ed9a9efa992bded4ef96334e3c154f61d2dea&lang='+language+'&text='+text)
      .then((response) => {
        this.translatedText = response.body.text[0];
      });
    }
  }
  };*/
  </script>
  
  <style>
  body {
    background:#fefefe;
  }
  .free {
    margin: 2em;
  }
  </style>
  

  
<template>
  <div>
    <div class="buttonsdiv">
      <!-- Buttons -->
      <b-button class="videobuttons" @click="runScriptButton">Run</b-button>
      <b-button class="videobuttons" @click="stopScriptButton">Stop</b-button>
    </div>

    <!-- Display Message -->
    <div class="video">
      <b-jumbotron class="signintotext">
        <p>Your signs in text:</p>
        <p>{{ scriptOutputText }}</p>
      </b-jumbotron>
      <b-button class="outline" @click="clearScriptButton">Clear</b-button>
    </div>
  </div>
</template>

<script>

// replace all http://localhost:5000/ for 34.240.160.162 

export default {
  data() {
    return {
      videoStatusMessage: 'Pending video',
      scriptOutputText: '',
      intervalId: null,
    };
  },
  
  methods: {
    async runScriptButton() {
      try {
        const response = await fetch('http://localhost:5000/api/run-script');
        if (response.ok) {
          this.videoStatusMessage = 'Script started successfully!';
          this.intervalId = setInterval(this.fetchScriptOutput, 2000);
        } else {
          const result = await response.json();
          this.videoStatusMessage = result.error || 'Error starting script';
        }
      } catch (error) {
        console.error('Error starting script:', error);
        this.videoStatusMessage = 'Error starting script';
      }
    },

    async clearScriptButton() {
      try {
        const response = await fetch('http://localhost:5000/api/clear-script');
        if (response.ok) {
          this.videoStatusMessage = 'Script cleared successfully!';
          this.intervalId = setInterval(this.fetchScriptOutput, 2000);
        } else {
          const result = await response.json();
          this.videoStatusMessage = result.error || 'Error clearing script';
        }
      } catch (error) {
        console.error('Error clearing script:', error);
        this.videoStatusMessage = 'Error clearing script';
      }
    },

    async stopScriptButton() {
      try {
        const response = await fetch('http://localhost:5000/api/stop-script');
        if (response.ok) {
          this.videoStatusMessage = 'Script stopped successfully!';
          clearInterval(this.intervalId);
        } else {
          const result = await response.json();
          this.videoStatusMessage = result.error || 'Error stopping script';
        }
      } catch (error) {
        console.error('Error stopping script:', error);
        this.videoStatusMessage = 'Error stopping script';
      }
    },

    async fetchScriptOutput() {
      try {
        const outputResponse = await fetch('http://localhost:5000/api/get-output');
        if (outputResponse.ok) {
          const outputResult = await outputResponse.json();
          this.scriptOutputText = outputResult.join('');
        } else {
          this.scriptOutputText = 'Error fetching script output';
        }
      } catch (error) {
        console.error('Error fetching script output:', error);
        this.scriptOutputText = 'Error fetching script output';
      }
    },
  },
  
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
</script>

  <style>
  .input {
    width: 50%;
    margin: 1em auto;
  }

  .signintotext {
    padding: 2rem 1rem;
    margin: 2rem 5rem;
    background-color: white!important;;
    border-radius: 1.3rem;
    display: grid;
    justify-items: center;
    filter: drop-shadow(2px 4px 6px RGB(250,187,90,0.25));
  }

.videobuttons {
    margin: 1em 0.4em;
    width: 10%;
    color: #1C1414!important;
    background-color: rgb(155 182 237)!important;
    border-color: #9BB6ED!important;
    filter: drop-shadow(2px 4px 6px RGB(155,182,237,0.75));
}

.videobuttons:hover {
  margin: 1em 0.4em;
  color: #1C1414!important;
  background-color: rgba(155,182,237,0.5)!important;
  border-color: #9BB6ED!important;
  filter: drop-shadow(2px 4px 6px RGB(155,182,237,0.75));
}

.outline {
  width: 10%;
  color: #142F64!important;
  border-color: #142F64!important;
  filter: drop-shadow(2px 4px 6px RGB(155,182,237,0.75));
  background-color: transparent!important;
}
.outline:hover {
  background-color: #142F64!important;
  color: #F9F5F1!important;
}

video {
    width: 100%;
}

</style>



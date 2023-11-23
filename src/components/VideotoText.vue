<template>
  <div>
    <div class>
      <!-- Buttons -->
      <b-button class="videobuttons" @click="runScriptButton">Run</b-button>
      <b-button class="videobuttons" @click="stopScriptButton">Stop</b-button>
      <b-button class="videobuttons" @click="clearScriptButton">Clear</b-button>
    </div>

    <!-- Display Message -->
    <div class="video">
      <b-jumbotron>
        <p>Your signs in text:</p>

        <p>{{ scriptOutputText }}</p>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoStatusMessage: 'Pending video',
      scriptOutputText: '',
      intervalId: null, // Store the interval ID for later cleanup
    };
  },
  computed: {
    computedVideoStatusMessage() {
      return this.videoSent
        ? 'Video sent'
        : this.recordedVideoURL
        ? 'Video done'
        : 'Pending video';
    },
  },
  methods: {
    async runScriptButton() {
      try {
        // Call the API endpoint to start the script
        const response = await fetch('http://localhost:5000/run-script');
        const result = await response.json();

        // Update the status message based on the result
        this.videoStatusMessage =
          result.error || !result.message ? 'Error running script' : result.message;

        // Start polling for updates
        this.intervalId = setInterval(this.fetchScriptOutput, 2000); // Adjust the interval as needed
      } catch (error) {
        console.error('Error starting script:', error);
        this.videoStatusMessage = 'Error starting script';
      }
    },

    async clearScriptButton() {
      try {
        // Call the API endpoint to start the script
        const response = await fetch('http://localhost:5000/clear-script');
        const result = await response.json();

        // Update the status message based on the result
        this.videoStatusMessage =
          result.error || !result.message ? 'Error running script' : result.message;

        // Start polling for updates
        this.intervalId = setInterval(this.fetchScriptOutput, 2000); // Adjust the interval as needed
      } catch (error) {
        console.error('Error starting script:', error);
        this.videoStatusMessage = 'Error starting script';
      }
    },

    async stopScriptButton() {
      try {
        // Call the API endpoint to stop the script
        const response = await fetch('http://localhost:5000/stop-script');
        const result = await response.json();

        // Update the status message based on the result
        this.videoStatusMessage =
          result.error || !result.message ? 'Error stopping script' : result.message;

        // Stop polling for updates
        clearInterval(this.intervalId);
      } catch (error) {
        console.error('Error stopping script:', error);
        this.videoStatusMessage = 'Error stopping script';
      }
    },

    async fetchScriptOutput() {
      try {
        // Fetch the output from the new API endpoint
        const outputResponse = await fetch('http://localhost:5000/get-output');
        const outputResult = await outputResponse.json();

        // Update the script output as a continuous string
        this.scriptOutputText = outputResult.join('');
      } catch (error) {
        console.error('Error fetching script output:', error);
      }
    },
  },
  beforeDestroy() {
    // Cleanup the interval when the component is destroyed
    clearInterval(this.intervalId);
  },
};
</script>

  <style>
  .input {
    width: 50%;
    margin: 1em auto;
  }

  .jumbotron {
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
    color: #1C1414;
    background-color: rgb(155 182 237);
    border-color: #9BB6ED;
    filter: drop-shadow(2px 4px 6px RGB(155,182,237,0.75));
}

video {
    width: 100%;
}

</style>



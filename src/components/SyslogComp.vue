<template>
    <div>
      <h1>Syslog Viewer</h1>
      <div v-for="log in logs" :key="log">{{ log }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        logs: []
      };
    },
    methods: {
      async fetchLogs() {
        try {
          const response = await fetch('/logs');
          const data = await response.json();
          this.logs = data.logs;
        } catch (error) {
          console.error(error);
        }
      }
    },
    mounted() {
      this.fetchLogs();
    }
  };
  </script>
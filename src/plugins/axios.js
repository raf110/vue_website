// /src/services/axios.js

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000', // Replace with your Node.js server URL
});

export default instance;

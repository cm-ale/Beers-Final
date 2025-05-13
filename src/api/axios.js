import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // ⚠️ IMPORTANTE: esto debe coincidir con el puerto de json-server
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;


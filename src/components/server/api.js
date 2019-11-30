import axios from 'axios';

const api = () => axios.create({
        baseURL: `https://api.exchangeratesapi.io`,
        withCredentials: false,
        timeout: 5000
    });

export default api;

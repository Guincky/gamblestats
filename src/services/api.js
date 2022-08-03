import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.sokkerpro.net',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    
    }
});

export default api;
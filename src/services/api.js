import axios from 'axios'; 

const api = axios.create({
    // baseURL: 'https://sujeitoprogramador.com'
    baseURL: 'https://api.themoviedb.org/3/',
});

api.interceptors.request.use(async config => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGJiNjNjNmEzMjY4MzI2M2ZkYjJhMzk0ZTg4MDYxYyIsInN1YiI6IjYyNjU4YmExZTMyOTQzMDA1MGZjN2VkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZvJeLWjRbxvGnHYVDyzjp7_vq6EytVQCuMP7kdbWdG0';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
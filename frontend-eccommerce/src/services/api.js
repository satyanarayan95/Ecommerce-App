import axios from 'axios';

export const instance = new axios.create({
    baseURL:'http://localhost:8000',
})
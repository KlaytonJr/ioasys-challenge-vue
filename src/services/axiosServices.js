import axios from "axios";

// const apiKey = 'AIzaSyDd8-WpT9tLdVGdwDaGgJqcz3y3LrOk54c'
const apiURL = 'https://www.googleapis.com/books/v1/volumes?q=all'

const axiosInstance = axios.create({
    baseURL: apiURL
});

export const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint);
    },
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body);
    },
    put(endpoint, body) {
        return axiosInstance.put(endpoint, body);
    },
    delete(endpoint) {
        return axiosInstance.delete(endpoint);
    }
};
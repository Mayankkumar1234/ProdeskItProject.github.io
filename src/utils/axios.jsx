import axios from "axios";

// Create an axios instance with a base URL

const instance = axios.create({
    baseURL: "https://fakestoreapi.com/"
});

export default instance; 
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const apiService = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
});

export default apiService;


import axios from 'axios'
import { storage } from '../config/storage';
import { APP_PROD_MODE } from "@env"

const APIService = axios.create({
    baseURL: APP_PROD_MODE,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

APIService.interceptors.request.use(
    config => {
        const accessToken = storage.getString('token');
        if (accessToken) {
            config.headers.common = { Authorization: `Bearer ${accessToken}` };
        }
        return config;
    },
    error => {
        console.log("interceptor config error: " + error)
        Promise.reject(error.response || error.message);
    }
);

APIService.interceptors.response.use(
    response => {
        return response;
    },
    async function (error) {
        let originalRequest = error.config;
        if (error.response.status === 401 &&
            !originalRequest._retry) {
            originalRequest._retry = true;
            //TODO: delete token from auth context & navigate register or error page
            return console.log("401 status")
        }
        return Promise.reject(error.response || error.message);
    }
);

export default APIService;
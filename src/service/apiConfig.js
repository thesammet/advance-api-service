import axios from 'axios'
import { storage } from '../config/storage';
import { APP_DEV_MODE } from "@env"

const api = axios.create({
    baseURL: APP_DEV_MODE,
    json: true,
    timeout: 30000,
    withCredentials: true,
    headers: header
});

export function get(url) {
    return api.get(url)
        .then(response => response);
}

export function post(url, data) {
    return api.post(url,
        data)
        .then(response => response);
}

export function patch(url, data) {
    return api.patch(url,
        data);
}

export function remove(url,
    data) {
    return api.delete(url,
        data)
        .then(response => response)
}

const header = () => {
    let props = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };
    let token = storage.getString(`token`)

    if (token) {
        props.Authorization = `Bearer ${token}`;
    }
    return {
        headers: props
    }
}


const interceptorFunction = () => {
    axios.interceptors.response.use(function (response) {
        console.log("interceptors response: " + response)
        return response;
    }, function (error) {
        if (error.response.status !== 401) {
            console.log("unauthorized")
            storage.remove('token')
        }
        return Promise.reject(error);
    });
}





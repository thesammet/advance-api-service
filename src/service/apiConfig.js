import axios from 'axios'
import { storage } from '../config/storage';

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    json: true,
    timeout: 30000,
    withCredentials: true,
    headers: header
});

export async function get(url) {
    return await api.get(url)
        .then(response => JSON.stringify(response));
}

export async function post(url, data) {
    return api.post(url,
        data)
        .then(response => response);
}

export async function patch(url, data) {
    return await api.patch(url,
        data);
}

export async function remove(url,
    data) {
    return api.delete(url,
        data)
        .then(response => response)
}

let header = () => {
    let props = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    let token = storage.getString(`token`)
    if (token) {
        props.Authorization = `Bearer ${token}`;
    }
    return {
        headers: props
    }
}




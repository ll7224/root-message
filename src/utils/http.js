import axios from "axios";
import QS from "qs";

axios.defaults.timeout = 10000;

axios.defaults.baseURL = '/api'

axios.defaults.headers.post['Content-Type'] = 'application/json';
 
axios.interceptors.response.use(
    response => {
        return Promise.resolve(response.data)
    },
    error => {
        return Promise.reject(error.response);
    }
);

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url,params, {
            headers: {'Accept': '*/*'}
        })
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err.data)
        })
    })
}


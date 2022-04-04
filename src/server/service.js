import axios from "axios";
import Api_URL from "./api";
import Cookie from 'js-cookie'

const instance = axios.create({
    baseURL: Api_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

instance.interceptors.request.use((config) => {
        const token = Cookie.get('swagger');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
    }, (err) => {
        return Promise.reject(err)
    }
)
instance.interceptors.response.use((res) => {
    return res
}, async (err) => {
    if(err.response) {
        const originalConfig = err.config
        if(err.response.status === 403 && !originalConfig._retry) {
            originalConfig._retry = true
        }
    }
    return Promise.reject(err)
})

export default instance;
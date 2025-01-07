import axios from 'axios'

const API_URL = 'https://api.platzi.com'

export const login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/users/login`, { email, password })
    return response.data
}

export const register = async (name: string, email: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/register`, { email, password })
    return response.data
}
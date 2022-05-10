import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_LOCAL_BACKEND_URL}/api`
})

export default clienteAxios
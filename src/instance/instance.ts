import { deleteCookie } from 'cookies-next'
// services/api.js
import axios from 'axios'
import { getAccessToken } from './getAccessToken'

const instance = axios.create({
  baseURL: 'https://socialscribe-api.devstree.com/api/v1/', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
})

instance.interceptors.request.use(
  async (config) => {
    const session = await getAccessToken()
    console.log('🚀 ~ session:', session)
    if (session) {
      config.headers.Authorization = `Bearer ${session}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Interceptor to handle 401 Unauthorized responses
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error, 'error from instance')
    // console.log('error ==>', error);
    if (typeof window !== 'undefined') {
      if (
        // window.location.pathname !== "/login" &&
        // window.location.pathname !== "/forget-password" &&
        // window.location.pathname !== "/reset-password" &&
        error.response.status === 404
      ) {
        // message.error(error?.message);
        deleteCookie('isLogin')
        localStorage.clear()
        window.location.href = '/'
      }
    }
    return error
  }
)

export default instance

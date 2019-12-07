import Vue from 'vue'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://sva.talana.com:8000/api'
})

Vue.prototype.$axios = axiosInstance

export { axiosInstance }

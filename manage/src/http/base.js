import axios from 'axios'
import Vue from 'vue'

const instance = axios.create({
  baseURL: '/api',
  timeout: 3000
})

instance.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.common['Authorization'] = 'Bearer ' + token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  if (response.data.code === 9999) {
    Vue.prototype.$Message.error(response.data.msg);
    sessionStorage.removeItem('token');
  } else {
    return response.data;
  }
}, function (error) {
  return Promise.reject(error);
});

export default instance;
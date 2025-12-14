import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.PUBLIC_API_BASE,
  timeout: 5000,
});

let activeRequests = 0;

const show = () => {
  document.getElementById('global-loading')?.classList.remove('hidden');
};

const hide = () => {
  document.getElementById('global-loading')?.classList.add('hidden');
};

api.interceptors.request.use((config) => {
  activeRequests++;
  show();
  return config;
});

api.interceptors.response.use(
  (response) => {
    activeRequests--;
    if (activeRequests === 0) hide();
    return response;
  },
  (error) => {
    activeRequests--;
    if (activeRequests === 0) hide();
    return Promise.reject(error);
  }
);

export default api;

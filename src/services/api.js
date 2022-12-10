import axios from "axios";
import userStore from "../store/userStore";
const api = axios.create({ baseURL: "http://137.184.213.210" });

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = userStore.getState().user.token;
    console.log(token);
    if (token)
      config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export { api };

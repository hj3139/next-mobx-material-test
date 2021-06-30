// base
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class AxiosInstanceCreator {
  #instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.#instance = axios.create(config);

    this.interceptors();
  }

  interceptors() {
    this.#instance.interceptors.response.use(res => {
      if (res.data.code) {
        throw new Error(res.data.message).message;
      }

      return res;
    });
  }

  create() {
    return this.#instance;
  }
}

export default AxiosInstanceCreator;

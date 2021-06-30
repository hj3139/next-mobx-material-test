import AxiosInstanceCreator from 'services/api';

export const eventInstance = new AxiosInstanceCreator({
  baseURL: process.env.NEXT_PUBLIC_API_URL + '/api'
}).create();

export const eventAPI = {
  getEvent: (page = 0, size = 4) =>
    eventInstance
      .get(`/client/events/main/now-buy?page=${page}&size=${size}`)
      .then(res => res.data)
};

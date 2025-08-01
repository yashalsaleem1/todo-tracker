import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const addTaskAPI = (task) => {
  return axios.post(`${BASE_URL}/tasks/add/`, task);
};

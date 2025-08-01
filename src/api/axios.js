import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const addTaskAPI = (task) => {
  return axios.post(`${BASE_URL}/tasks/add/`, task)
    .then(res => {
      console.log('Task added:', res.data);
      return res.data;
    })
    .catch(error => {
      console.error('Error adding task:', error);
      throw error;
    });
};

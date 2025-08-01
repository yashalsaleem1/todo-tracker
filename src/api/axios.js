import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const BASE_URL_1 = process.env.REACT_APP_API_BASE_URL_1;

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

export const listTasks = () => {
  return axios.get(`${BASE_URL_1}`)
    .then(res => {
      console.log('Task added:', res.data);
      return res.data;
    })
    .catch(error => {
      console.error('Error adding task:', error);
      throw error;
    });
};

export const deleteTask = (id) => {
  return axios.delete(`${BASE_URL}/tasks/delete/${id}`)
    .then(res => {
      console.log('Task deleted:', res.data);
      return res.data;
    })
    .catch(error => {
      console.error('Error adding task:', error);
      throw error;
    });
};

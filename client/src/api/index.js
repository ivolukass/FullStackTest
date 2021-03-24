import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

// const url = 'http://localhost:5000/people';

export const fetchPeople = () => API.get('/people');
export const fetchPerson = (id) => API.get(`/people/${id}`);
export const createPerson = (newPerson) => API.post('/people', newPerson);
export const updatePerson = (id, updatedPerson) =>
  API.patch(`/people/${id}`, updatedPerson);
export const deletePerson = (id) => API.delete(`/people/${id}`);

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);

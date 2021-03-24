import * as api from '../api';
import {
  FETCH_ALL,
  FETCH,
  CREATE,
  UPDATE,
  DELETE,
} from '../constants/actionTypes';

export const getPeople = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPeople();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPerson = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPerson(id);
    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPerson = (person) => async (dispatch) => {
  try {
    const { data } = await api.createPerson(person);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePerson = (id, person) => async (dispatch) => {
  try {
    const { data } = await api.updatePerson(id, person);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePerson = (id) => async (dispatch) => {
  try {
    await api.deletePerson(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (people = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...people, action.payload];
    case UPDATE:
      return people.map((person) =>
        person._id === action.payload._id ? action.payload : person
      );
    case DELETE:
      return people.filter((person) => person._id !== action.payload);
    default:
      return people;
  }
};

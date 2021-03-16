import { combineReducers } from 'redux';

import people from './people';
import auth from './auth';

export default combineReducers({
  people,
  auth,
});

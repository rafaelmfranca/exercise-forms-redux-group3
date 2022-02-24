import { combineReducers } from 'redux';
import { personalFormReducer, professionalFormReducer } from './reducer';

const rootReducer = combineReducers({
  personalFormReducer,
  professionalFormReducer,
});

export default rootReducer;

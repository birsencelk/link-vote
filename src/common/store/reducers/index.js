import { combineReducers } from 'redux';
import linksReducer from './linksReducer';

const appReducer = combineReducers({
  links: linksReducer
});

export default appReducer;
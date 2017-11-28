import { combineReducers } from 'redux';
import CitySearchReducer from './components/CitySearch/CitySearchReducer';

const rootReducer = combineReducers({
  citySearch: CitySearchReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import avgColourReducer from './avgColourReducer';
import loadedImgReducer from './loadedImgReducer';

export default combineReducers({
  avgColour: avgColourReducer,
  loadedImg: loadedImgReducer
});
import { SET_AVG_COLOUR, SET_LOADED_IMG } from './types';

export const setAvgColour = (avgColour) => async dispatch => {
  dispatch({ type: SET_AVG_COLOUR, payload: avgColour });
};

export const setLoadedImg = (loadedImg) => async dispatch => {
  dispatch({ type: SET_LOADED_IMG, payload: loadedImg });
};
import { SET_LOADED_IMG } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {

    case SET_LOADED_IMG:
      return { img: action.payload } || false;
    default:
      return state;
  }
}
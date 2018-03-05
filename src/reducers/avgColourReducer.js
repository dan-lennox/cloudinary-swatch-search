import { SET_AVG_COLOUR } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {

    case SET_AVG_COLOUR:
      return action.payload || false;
    default:
      return state;
  }
}
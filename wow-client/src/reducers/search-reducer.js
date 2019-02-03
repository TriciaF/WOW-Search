import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from '../actions/search';

const initialState = {
  charName: null,
  realmName: null,
  loading: false,
  error: false,
};

export default function reducer(state = initialState, action) {
  if (action.type === SEARCH_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === SEARCH_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: false,
      charName: action.charName,
      realmName: action.realmName
    });
  } else if (action.type === SEARCH_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error, 
    });
  } else return state;
}
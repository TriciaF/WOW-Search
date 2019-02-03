import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from '../actions/search';

const initialState = {
  stats: {},
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
    console.log('enter action = searchSuccess', action);
    return Object.assign({}, state, {
      loading: false,
      error: false,
      charName: action.character.name,
      realmName: action.character.realm,
      stats: action.character.stats
    });
  } else if (action.type === SEARCH_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error, 
    });
  } else return state;
}
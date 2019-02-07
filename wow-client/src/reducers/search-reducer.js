import {
  CHARACTER_STATS_SEARCH_REQUEST,
  CHARACTER_STATS_SEARCH_SUCCESS,
  CHARACTER_STATS_SEARCH_ERROR,
  CHARACTER_ITEMS_SEARCH_REQUEST,
  CHARACTER_ITEMS_SEARCH_SUCCESS,
  CHARACTER_ITEMS_SEARCH_ERROR
} from '../actions/search';

const initialState = {
  thumbnail: null,
  stats: {},
  level: null,
  items: [],
  charName: null,
  realmName: null,
  loading: false,
  error: false,
};

export default function reducer(state = initialState, action) {
  if (action.type === CHARACTER_STATS_SEARCH_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === CHARACTER_STATS_SEARCH_SUCCESS) {
    console.log('enter action = characterStats', action);
    return Object.assign({}, state, {
      loading: false,
      error: false,
      charName: action.character.name,
      realmName: action.character.realm,
      stats: action.character.stats,
      level: action.character.level,
      thumbnail: action.character.thumbnail,
    });
  } else if (action.type === CHARACTER_STATS_SEARCH_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error, 
    });
  } else if (action.type === CHARACTER_ITEMS_SEARCH_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === CHARACTER_ITEMS_SEARCH_SUCCESS) {
    console.log('enter action = characterItems', action);
    return Object.assign({}, state, {
      loading: false,
      error: false,
      items: Object.values(action.character.items)
    });
  } else if (action.type === CHARACTER_ITEMS_SEARCH_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else return state;
}
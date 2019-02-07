import { WOW_API_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { SubmissionError } from 'redux-form';


export const  CHARACTER_STATS_SEARCH_REQUEST = 'CHARACTER_STATS_SEARCH_REQUEST';
export const characterStatsSearchRequest = () => ({
  type: CHARACTER_STATS_SEARCH_REQUEST,
});

export const CHARACTER_STATS_SEARCH_SUCCESS = 'CHARACTER_STATS_SEARCH_SUCCESS';
export const characterStatsSearchSuccess = (character) => ({
  type: CHARACTER_STATS_SEARCH_SUCCESS,
  character 
});

export const CHARACTER_STATS_SEARCH_ERROR = 'CHARACTER_STATS_SEARCH_ERROR';
export const characterStatsSearchError = (error) => ({
  type: CHARACTER_STATS_SEARCH_ERROR,
  error
});

export const CHARACTER_ITEMS_SEARCH_REQUEST = 'CHARACTER_ITEMS_SEARCH_REQUEST';
export const characterItemsSearchRequest = () => ({
  type: CHARACTER_ITEMS_SEARCH_REQUEST,
});

export const CHARACTER_ITEMS_SEARCH_SUCCESS = 'CHARACTER_ITEMS_SEARCH_SUCCESS';
export const characterItemsSearchSuccess = (character) => ({
  type: CHARACTER_ITEMS_SEARCH_SUCCESS,
  character
});

export const CHARACTER_ITEMS_SEARCH_ERROR = 'CHARACTER_ITEMS_SEARCH_ERROR';
export const characterItemsSearchError = (error) => ({
  type: CHARACTER_ITEMS_SEARCH_ERROR,
  error
});

//Dalaran/Regex?fields=stats&locale=en_US&access_token=USQsUkV7Ptu0sua2tT6clJV0ds1pzGemjh';

export const getCharacterStats = (charName, realmName) => (dispatch, getState) => {
  //const authToken = getState().auth.authToken;
  dispatch(characterStatsSearchRequest());
  const authToken = 'USa6qR3YpPlIgjx3X5L99rqOs3slUcxUU2';
  return fetch(`${WOW_API_URL}/${realmName}/${charName}?fields=stats&locale=en_US&access_token=${authToken}`, { method: 'GET', headers: { 'Content-Type': 'application/json', }, })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
        return res.json();
    })
    .then(character => {
      dispatch(characterStatsSearchSuccess(character));
    })
    .catch(err => {
      dispatch(characterStatsSearchError(err));
      const {code} = err;
      const message = 
        code === 401
          ? "Search Failed"
          : '';
          //Could not authenticate, so return a Submission Error for Redux form
          return Promise.reject(
          new SubmissionError({
              _error: message
          })
        );
   })

  }

   export const getCharacterItems = (charName, realmName) => (dispatch, getState) => {
  //const authToken = getState().auth.authToken;
  dispatch(characterItemsSearchRequest());
  const authToken = 'USa6qR3YpPlIgjx3X5L99rqOs3slUcxUU2';
  return fetch(`${WOW_API_URL}/${realmName}/${charName}?fields=items&locale=en_US&access_token=${authToken}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
        return res.json();
    })
    .then(character => {
      dispatch(characterItemsSearchSuccess(character));
    })
    .catch(err => {
      dispatch(characterItemsSearchError(err));
      const {code} = err;
      const message = 
        code === 401
          ? "Search Failed"
          : '';
          //Could not authenticate, so return a Submission Error for Redux form
          return Promise.reject(
          new SubmissionError({
              _error: message
          })
        );
   })
};
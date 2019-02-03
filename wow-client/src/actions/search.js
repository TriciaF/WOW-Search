import { WOW_API_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { SubmissionError } from 'redux-form';


export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const searchRequest = () => ({
  type: SEARCH_REQUEST,
});

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const searchSuccess = (character) => ({
  type: SEARCH_SUCCESS,
  character 
});

export const SEARCH_ERROR = 'SEARCH_ERROR';
export const searchError = (error) => ({
  type: SEARCH_ERROR,
  error
});

//Dalaran/Regex?fields=stats&locale=en_US&access_token=USQsUkV7Ptu0sua2tT6clJV0ds1pzGemjh';

export const search = (charName, realmName) => (dispatch, getState) => {
  //const authToken = getState().auth.authToken;
  dispatch(searchRequest());
  const authToken = 'USQsUkV7Ptu0sua2tT6clJV0ds1pzGemjh';
  return fetch(`${WOW_API_URL}/${realmName}/${charName}?fields=stats&locale=en_US&access_token=${authToken}`, {
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
      dispatch(searchSuccess(character));
    })
    .catch(err => {
      dispatch(searchError(err));
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
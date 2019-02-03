import { WOW_AUTH_URL } from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';
import {saveAuthToken, clearAuthToken} from '../local-storage';


export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = (authToken) => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = () => ({
    type: AUTH_SUCCESS,
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = (error) => ({
    type: AUTH_ERROR,
    error
});




// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess());
    saveAuthToken(authToken);
};


export const wowAuthRequest = (CLIENT_ID, CLIENT_SECRET) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(authRequest());
  let authData = new FormData();
  authData.append()
    return fetch(`${WOW_AUTH_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify({
                CLIENT_ID,
                CLIENT_SECRET 
            })
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json()) 
        .then(({authToken}) => storeAuthInfo(authToken, dispatch)) 
        .catch(err => {
          const {code} = err;
          const message = 
            code === 401
              ? "Incorrect username or password"
              : 'Unable to login, please try again';
            dispatch(authError(err));
            //Could not authenticate, so return a Submission Error for Redux form
            return Promise.reject(
              new SubmissionError({
                _error: message
              })
            );
        })
};
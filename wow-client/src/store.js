import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
// import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth-reducer';
//import {setAuthToken, refreshAuthToken} from './actions/auth';
import searchReducer from './reducers/search-reducer';


const initial_state = {};

let middleware = applyMiddleware(thunk);
    if (process.env.NODE_ENV !== 'production') {
        middleware = compose(middleware, window.devToolsExtension && window.devToolsExtension());
    }
    const reducers = combineReducers({
    form: formReducer,
    search: searchReducer,
    auth: authReducer
});
    const store = createStore(reducers, initial_state, middleware);




// Hydrate the authToken from localStorage if it exist
// const authToken = loadAuthToken();
// if (authToken) {
//     const token = authToken;
//     store.dispatch(setAuthToken(token));
//     store.dispatch(refreshAuthToken());
// }

export default store;
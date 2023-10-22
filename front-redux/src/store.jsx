import {legacy_createStore as createStore} from 'redux'
import {applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
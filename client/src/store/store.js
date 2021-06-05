import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import imageReducer from '../reducers/imageReducer';

const initalState = {};

const middleware = [thunk];

const store = createStore(
  imageReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

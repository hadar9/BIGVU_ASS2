import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../reducers/imageReducer';

const store = configureStore({ reducer: { image: imageReducer } });

export default store;

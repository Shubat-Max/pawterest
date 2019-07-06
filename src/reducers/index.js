import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import categoryReducer from './categoryReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
    images: imageReducer,
    categories: categoryReducer,
    settings: settingsReducer
});
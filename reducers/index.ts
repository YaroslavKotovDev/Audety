import {combineReducers} from 'redux';
import {photoReducer} from './photoReducer';

const rootReducer = combineReducers({
  photos: photoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

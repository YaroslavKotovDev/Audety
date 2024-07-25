import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer, {RootState} from './reducers';
import AppNavigator from './navigation/AppNavigator';
import {PhotoActionTypes} from './actions';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<RootState, PhotoActionTypes>),
  ),
);

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;

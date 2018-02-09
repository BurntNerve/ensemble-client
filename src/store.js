import { createStore } from 'redux';

import { reducer as activeClassReducer } from './reducers/activeClassReducer';

export default createStore(
  activeClassReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../common/store/reducers';

const middleware = [thunk];
let enhancer = applyMiddleware(...middleware);

if (process.env.REACT_APP_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancer = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

const store = createStore(
  reducers,
  window.INITIAL_STATE || {},
  enhancer
);

export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const enhancer = applyMiddleware(
    thunk
);

const store = createStore(
    reducers,
    compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

// Dev ONLY!
window.store = store;

export default store;
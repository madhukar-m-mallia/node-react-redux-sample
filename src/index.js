import 'babel-polyfill'; // for redux-saga
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  HashRouter
} from 'react-router-dom';
 
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
 
import reducer from './reducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// our components
import LayoutContainer from './components/layout';

// app css
// import 'bootstrap/dist/css/bootstrap.css';
import '../dist/css/style.css';
 
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f // connect to redux devtools
  )
);
sagaMiddleware.run(rootSaga);
 
// add provider as first component and connect the store to it
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
          <Route component={LayoutContainer}>
          </Route>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);
 
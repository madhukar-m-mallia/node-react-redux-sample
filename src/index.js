import 'babel-polyfill'; // for redux-saga
import React from 'react';
import ReactDOM from 'react-dom';
import {
    Layout,
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
import { LayoutContainer } from './components/layout';
import { HomeContainer } from './components/home';
import { DetailContainer } from './components/detail';
import { AddContainer } from './components/add';
// app css
import '../dist/css/style.css';
 
// Filestack API requires to set a key
filepicker.setKey("YOUR_API_KEY");
 
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f // connect to redux devtools
  )
);
sagaMiddleware.run(rootSaga);
 
// the 3 paths of the app
const routes = <Layout>
  <Route exact path="/" component={HomeContainer} />
  <Route path="/detail/:id" component={DetailContainer} />
  <Route path="/add" component={AddContainer} />
</Layout>;
 
// add provider as first component and connect the store to it
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>{routes}</HashRouter>
    </Provider>,
    document.getElementById('app')
);
 
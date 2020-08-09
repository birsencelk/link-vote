import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
 import { AddLink } from './common/pages/AddLink/addLink.js';
 import { SubmitLink } from './common/pages/SubmitLink/submitLink.js';
 import './App.scss';
 import { Provider } from 'react-redux';
 import store from './common/store';
 
export const url = {
  showItems: '/',
  addLink: '/add-link',
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={url.showItems } component={SubmitLink} />
          <Route path={url.addLink} component={AddLink} />
        </Switch>
      </Router>
      </Provider>
  );
};

export default App;
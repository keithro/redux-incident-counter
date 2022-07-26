import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // connects Redux to the context api

import Application from './Application';
// import './index.scss';
import './index.css';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

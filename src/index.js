import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Calendar} from './Calendar';
import * as serviceWorker from './serviceWorker';
import './helpers/initMoment';
import {GlobalContextProvider} from "./hooks/useGlobalState";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
        <Calendar/>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

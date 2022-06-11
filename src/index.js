import React from 'react';
// import {Lines} from 'react-preloaders';

import { render } from "react-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Preloader from './components/Preloader/Preloader';






ReactDOM.render(
  <React.StrictMode>
    {/* <Preloader /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

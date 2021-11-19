import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './js/Header';
import { Main } from './js/Main';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

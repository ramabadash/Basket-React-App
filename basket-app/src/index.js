import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './js/Header';
import { Main } from './js/Main';
import { Footer } from './js/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

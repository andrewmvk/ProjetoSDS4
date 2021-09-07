import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/styles.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />  {/*Esse "App" é o mesmo app do arquivo .tsx*/}
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';

import Appli from './components/Appli';
import './index.css';
require('dotenv').config({
  path: '.env'
});


ReactDOM.render(
  <React.StrictMode>
    <Appli />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import { NavBar } from './Components/NavBar';
ReactDOM.render(
  <div>
  <NavBar/>
  <App/>
  </div>
  
  ,
  document.getElementById('root')
);


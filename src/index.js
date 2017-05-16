import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home/home.js';
import Details from './routes/Details/details.js';
import Register from './components/Register/register.js';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/register' component={Register} />
      <Route path='/details/:uniquekey' component={Details} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);

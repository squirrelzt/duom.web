import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './../component/nav/nav.js';
import Ftp from './../component/ftp/ftp.js';

function component() {
  var element = document.createElement('pre');
  element.innerHTML = '<div id="root">one</div>';
  return element;
}

let element = component(); 
document.body.appendChild(element);

ReactDOM.render((
  <Router>
    <div>
      <Route path="/nav" component = { Nav } />
      <Route path="/ftp" component = { Ftp } />
    </div>
  </Router>
),document.getElementById('root')
);
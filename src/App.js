import React from 'react';
import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    	    <div>
    	        <Route exact path='/'
            	 component={Home}/>
            </div>
    </Router>
  );
}

export default App;

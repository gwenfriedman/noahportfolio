import React from 'react';
import './App.css';
import Home from './Components/Home.js';
import Navigation from './Components/Nav.js';
import Hashbrowwn from './Components/InfoPages/Hashbrowwn';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Navigation/>
                <div>
                    <Route exact path='/'
                           component={Home}/>
                </div>
                <div>
                    <Route exact path='/hashbrowwn'
                           component={Hashbrowwn}/>
                </div>
            </Router>
        </div>
    );
}

export default App;

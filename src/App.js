import React from 'react';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Hashbrowwn from './Components/InfoPages/Hashbrowwn';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    return (
        <div>
            <Nav/>
            <Router>
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

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './mobile.css';
import './App.css';


import IntroSite from "./pages/IntroSite";
import WorkEx from "./pages/WorkEx";
import Projects from "./pages/Projects";


const LandingPage = () => (
    <Router>
        <div>
            <Route exact path="/" component={IntroSite}/>
            <Route path="/resume" component={WorkEx}/>
            <Route path="/projects" component={Projects}/>
        </div>
    </Router>
)

export default LandingPage
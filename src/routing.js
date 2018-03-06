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
import Education from "./pages/Education";


const LandingPage = () => (
    <Router>
        <div>
            <Route exact path="/" component={IntroSite}/>
            <Route path="/resume" component={WorkEx}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/education" component={Education}/>
        </div>
    </Router>
)

export default LandingPage
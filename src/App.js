import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './mobile.css';
import './App.css';


import IntroSite from "./pages/IntroSite";
import WorkEx from "./pages/WorkEx";
import Projects from "./pages/ProjectsLong";
import Education from "./pages/Education";
// import AboutMe from './pages/AboutMe';
import NotFound from './pages/NotFound'



const App = () => (
    <Router>
        <switch>
            <Route exact path="/" component={IntroSite}/>
            <Route path="/Resume" component={WorkEx}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/education" component={Education}/>
            {/* <Route path="/AboutMe" component={AboutMe}/> */}
            <Route component={NotFound} />
        </switch>
    </Router>
);



export default App;

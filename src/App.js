// import React, { Component } from 'react';
// import IntroSite from './pages/IntroSite';
// import './App.css';
// import AboutMe from './pages/AboutMe';
// import WorkEx from './pages/WorkEx';
// import Projects from './pages/Projects';
// import './mobile.css';
// import Education from './pages/Education';
//
//
// class App extends Component {
//   render() {
//     return (
//         <div>
//         <IntroSite/>
//         <WorkEx/>
//         <AboutMe/>
//         <Projects/>
//         <Education/>
//         </div>
//
//   );
//   }
// }
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
import AboutMe from './pages/AboutMe';



const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={IntroSite}/>
            <Route path="/Resume" component={WorkEx}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/education" component={Education}/>
            <Route path="/AboutMe" component={AboutMe}/>
        </div>
    </Router>
)



export default App;

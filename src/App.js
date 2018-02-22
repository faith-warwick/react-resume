import React, { Component } from 'react';
import IntroSite from './IntroSite';
import './App.css';
import AboutMe from './AboutMe';
import WorkEx from './WorkEx';
import Projects from './Projects';
import './mobile.css';
import Education from './Education';


class App extends Component {
  render() {
    return (
        <div>
        <IntroSite/>
        <WorkEx/>
        <AboutMe/>
        <Projects/>
        <Education/>
        </div>

  );
  }
}

export default App;

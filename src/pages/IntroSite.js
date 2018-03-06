import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import '../App.css';
import '../mobile.css';
import './Projects';
import './AboutMe';
import ProjectsShort from "./Projects";
import AboutMe from "./AboutMe";
import WorkEx from './WorkEx';
import Education from './Education';
import Navigation from './Nav';


class IntroSite extends Component {

    render (){
        return(
            <body>
            <div  className="headcard">
                    <div className="namecard">
                    <div className="name">
                        Faith Warwick
                    </div>
                    <div className="IDs">
                        <a href="https://github.com/faith-warwick" target="_blank" rel="noopener"><i className="fa fa-github-square" /></a>
                        <a href="https://www.linkedin.com/in/faithwarwick/" target="_blank" rel="noopener"><i className="fa fa-linkedin-square" /></a>
                        <a href="https://codepen.io/warwifg/" target="_blank" rel="noopener"><i className="fa fa-codepen" /></a>
                        <a href="mailto:warwick.faith@gmail.com"><i className="fa fa-envelope" /></a>
                    </div>
                </div>
                <Navigation/>
            </div>
            <ProjectsShort/>
            <AboutMe/>

            </body>
        )


    }
}

export default IntroSite;

import React, {Component} from 'react';
import '../App.css';
import '../mobile.css';
import './Projects';
import './AboutMe';
import ProjectsShort from "./Projects";
import Navigation from './Nav';
import AboutMe from "./AboutMe";
import Skills from "./Skills";


class IntroSite extends Component {

    render (){
        return(
            <body>
            <div  className="headcard">
                    <div className="namecard">
                    <div className="name">
                        Faith Warwick
                    </div>
                        <Navigation />
                    <div className="IDs">
                        <a href="https://github.com/faith-warwick" target="_blank" rel="noopener"><i className="fa fa-github-square" /></a>
                        <a href="https://www.linkedin.com/in/faithwarwick/" target="_blank" rel="noopener"><i className="fa fa-linkedin-square" /></a>
                        {/*<a href="https://codepen.io/warwifg/" target="_blank" rel="noopener"><i className="fa fa-codepen" /></a>*/}
                        <a href="mailto:warwick.faith@gmail.com"><i className="fa fa-envelope" /></a>
                    </div>
                </div>
            </div>
            <ProjectsShort/>
            <AboutMe/>
            <Skills />
            </body>
        )


    }
}

export default IntroSite;



import React, {Component} from 'react';
import './App.css';
import Helio from './images/Helio.jpg';



class Projects extends Component {

    render() {
        return (
<div className="projects">
    <p className="big">Here's some stuff I made!</p>
    <div className="ProjectEx">
    <div className="project1">
        <div>
            <img className="workimg" src={Helio} alt="Project 1"/>
        </div>
        <div className="deets1">
            <p className="bigish">Project 1</p>
            <p className="medium">when where</p>
            <p className="small">,masdfk kdkf jfl df </p>
        </div>
        </div>
    <div className="project2">
        <div>
            <img className="workimg" src={Helio} alt="Project 1"/>
        </div>
        <div className="deets2">
            <p className="bigish">Project 2</p>
            <p className="medium">when where</p>
            <p className="small">,masdfk kdkf jfl df </p>
        </div>
    </div>
    </div>

</div>

    );
    }
}

export default Projects;
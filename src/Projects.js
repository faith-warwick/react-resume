
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
            <a href="#" className="fade"><img className="projimg" src={Helio} alt="Project 1"/></a>
        </div>
        </div>
    <div className="project2">
        <div>
            <a href="#" className="fade"><img className="projimg" src={Helio} alt="Project 1"/></a>
        </div>
    </div>
    </div>

</div>

    );
    }
}

export default Projects;
import React, {Component} from 'react';
import '../App.css';
import su from '../images/Sea-Edu.png';


class Education extends Component {

    render() {
        return (
            <section>
                <div className="sky">
                    <p className="huge"> LHR <i className="fa fa-suitcase" /> HNL <i className="fa fa-plane"/> SEA <i className="fa fa-suitcase"/> SLC
                    </p>
                </div>
            <div className="Edu">
                <p className="big">Education</p>
                <div className="eduDeets">
                    <div className="suDeets">
                        <div>
                            <img className="workimg" src={su} alt="Seattle University"/>
                        </div>
                        <div className="SUedu">
                            <p className="bigish">Seattle Univeristy</p>
                            <p className="medium">BA of Business Administration, Business Economics (09/11 - 06/15)</p>
                            <p className="small">Minor: Finance </p>
                            </div>
                    </div></div></div></section>

        );
    }
}

export default Education;
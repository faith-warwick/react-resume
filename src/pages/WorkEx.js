import React, {Component} from 'react';
import '../App.css';
import '../mobile.css';
import pb from '../images/PB.jpeg';
import su from '../images/SU.jpg';
import nord from '../images/nordies.png';
import philly from '../images/Philadelphia Insurance Companies.png';
import Education from "./Education";
import NaviMini from './miniNav';

class WorkEx extends Component {

    render() {
        return (
    <div>
        <NaviMini />
            <div className="work">
                <p className="big">Work Experience</p>
                <div className="workex">
                    <div className="pball">
                        <div>
                            <img className="workimg" src={pb} alt="PitchBook"/>
                        </div>
                        <div className="PBex">
                            <p className="bigish">PitchBook Data, Inc.</p>
                            <p className="medium">Research Manager, Private Equity (05/15-2/18)</p>
                            <p className="small">Manager of PitchBook Data's Private Equity research team with 32 off-shore FTE and 3 Seattle-based Research Associates </p>
                            <p className="small">Responsible for development of research methodology for Private Equity backed companies with a focus on promoting employee productivity and engagement to deliver highest value data to clients increasing overall production on team by 26% YoY
                            </p>
                            <p className="small">Resource planning and project management to achieve quarterly and yearly company goals for the Private Equity research team
                            </p>
                            <p className="medium">Research Team Lead (11/16 – 05/17)</p>
                            <p className="small">Identify and design clean-ups (SQL, Tableau, Technical SPECS) to eliminate the potential for human error in secondary data entry research (63,000 counts of known errors identified and fixed)</p>
                            <p className="small">Created project management reporting tools and benchmarking metrics (Tableau, SQL) to measure progress on yearly targets for production and quality and error identification</p>
                            <p className="medium">Sn. Research Associate (11/15-11/16) , Research Associate (4/15 – 11/15)</p>
                        </div>

                    </div>
                    <div className="suall">
                        <div>
                            <img className="workimg" src={su} alt="SU"/>
                        </div>
                        <div className="SUex">
                            <p className="bigish">Seattle University </p>
                            <p className="medium">Data Entry II (06/13 – 04/15)</p>
                            <p className="small">Aided in development of process to transfer student HIPPA information from Datatel to Salesforce database </p>
                        </div>
                    </div>


                    <div className="nordall">
                        <div>
                            <img className="workimg" src={nord} alt="Nordstrom"/>
                        </div>
                        <div className="SUex">
                            <p className="bigish">Nordstrom </p>
                            <p className="medium">Seasonal Sales Associate (Summer '14)</p>
                            <p className="small">Worked in commission based environment providing the Nordstrom class service and creating return customer base in women's TBD department at Flagship store</p>
                        </div>
                    </div>
                    <div className="phillyall">
                        <div>
                            <img className="workimg" src={philly} alt="Philadelphia Insurance Co."/>
                        </div>
                        <div className="Philex">
                            <p className="bigish">Philadelphia Insurance Company</p>
                            <p className="medium">Marketing Intern (11/12 - 6/13)</p>
                            <p className="small">Facilitated better communication within company through reorganization of internal CRM system</p>
                            <p className="small">Performed outbound sales inquiries for new business and renewal accounts</p>
                        </div>
                    </div>

                </div>
                <Education/>
            </div>
    </div>
        );
    }
}

export default WorkEx;


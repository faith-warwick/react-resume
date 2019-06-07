import React, {Component} from 'react';
import Glamor from 'glamorous'
import {
    Link
} from 'react-router-dom';





class Navigation extends Component {
    render (){
        return (
            <Nav>
                <Link to='/Projects'>Projects</Link> &emsp;
                <Link to='/Resume'>Resume</Link>
                {/*<Link to='/AboutMe'>About</Link>*/}
            </Nav>
        )
    }
}


const Nav = Glamor.div (
    {
        color: 'white',
        fontSize: '200%',
        width: '100%',
        height: '10vh',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0px 16px 16px 16px'
    }
)

export default Navigation
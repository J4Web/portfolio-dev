import React, { Component } from 'react';
import './nav.css';
class Nav extends Component{
    render()
    {
        return (<div className="main">
        <header className='navbar'>
        <div className='navbar__title navbar__item'>J4WEB</div>
        <div className='navbar__item'>Home</div>
        <div className='navbar__item'>My Tech Toolkit</div>
        <div className='navbar__item'>My Projects</div>
        <div className='navbar__item'>Contack Us</div>        
        </header>
        </div>)
    }
}

export default Nav;



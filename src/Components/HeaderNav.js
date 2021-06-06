import React from 'react'
import './HeaderNav.css';
import { Avatar } from '@material-ui/core';

function HeaderNav(props) {
    return (
        <div className="header-nav">
            {props.icon && <props.icon className="header-option" />}
            {props.avatar && <Avatar className = "header-option" src={props.avatar} />}
            <h2 className="header-option-title" >{props.option} </h2>
        </div>
    )
}

export default HeaderNav

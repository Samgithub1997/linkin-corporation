import React from 'react';
import HeaderNav from './HeaderNav';
// image
import lcLogo from '../../images/lcLogo.png';
// css
import './Header.css';
// icons
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessIcon from '@material-ui/icons/Business';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

function Header(props) {
    return (
        <div className="header">
            <div className="header_left">
                <img src={lcLogo} alt="LC Logo" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header_right">
                <div className="header_right_one">
                    <HeaderNav icon = {HomeIcon} option="Home"/>
                    <HeaderNav icon = {SupervisorAccountIcon} option="My Network"/>
                    <HeaderNav icon = {BusinessIcon} option="Jobs"/>
                    <HeaderNav icon = {ChatIcon} option="Messaging"/>
                    <HeaderNav icon = {NotificationsIcon} option="Notifications" />
                    <HeaderNav avatar = "http://quotivee.com/wp-content/uploads/2013/09/don-draper.jpeg" option="Me" />
                </div>
                <div className="header_right_two">
                    <HeaderNav icon = {LibraryBooksIcon} option="Learnings" />
                </div>
            </div>
        </div>
    )
}

export default Header

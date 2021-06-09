import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import LAPhoto from '../../../images/la.jpg';


function Sidebar() {
    const recentItem = ['Web Development Group', 'Story Telling', 'Design Thinking', 'Software Development', 
                        'Manipal Referral Group', 'Alumni Network', 'SDE'];

    return (
        <div className="sidebar">
            {/* Profile */}
            <div className="sidebar_top">
                <img src = {LAPhoto} alt = "" />
                <Avatar className="sidebar_profile" 
                    src = "http://quotivee.com/wp-content/uploads/2013/09/don-draper.jpeg"/>
                <div className="sidebar_username">Sam Sharma</div>
                <div className="sidebar_userinfo">Software engineer: Building products one week at a time </div> 
            </div>

            {/* Statistics overview */}
            <div className="sidebar_numbers">
                <div className="sidebar_stats">
                    <div className="sidebar_stats_heading">Who viewed your profile</div>
                    <div className="sidebar_stats_value">99</div>
                </div>
                <div className="sidebar_stats">
                    <div className="sidebar_stats_heading">Connections</div>
                    <div className="sidebar_stats_value">597</div>
                </div>
            </div>

            {/* Sidebar Recent */}
            <div className="sidebar_bottom">
                <div className="recent">Recent</div>
                <br></br>
                { recentItem.map((item) => <div className="recent_item">{item}</div>) }
            </div>
            
        </div>
    )
}

export default Sidebar

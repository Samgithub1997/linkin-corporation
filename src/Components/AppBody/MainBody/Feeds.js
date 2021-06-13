import React from 'react';
import './Feeds.css';
import { Avatar } from '@material-ui/core';

// Buttons
import InputFormat from './InputFormat';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import NearMeIcon from '@material-ui/icons/NearMe';
function Feeds(props) {
    return (
        <div className="feeds">
            {/* Header */}
            <div className="feeds_header">
                <Avatar src={props.avatarurl} />
                <div className="feeds_info">
                    <div className="feeds_username">{props.name}</div>
                    <div className="feeds_userinfo">{props.userinfo}</div>
                </div>
            </div>

            {/* Body Feeds */}
            <div className="feeds_body">
                {props.description}
            </div>

            {/* Buttons: Like, Share, Comment, S */}
            <div className="feeds_buttons">
                <InputFormat icon={ThumbUpAltIcon} title="Like" />
                <InputFormat icon={CommentIcon} title="Comment" />
                <InputFormat icon={ArrowForwardIcon} title="Share" />
                <InputFormat icon={NearMeIcon} title="Send" />
            </div>
        </div>
    )
}

export default Feeds

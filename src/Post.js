import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css'
const Post = ({profilePic, image, username, timestamp, message}) => {
    return (
        <div className="post">
            <div className="post-top">
                <Avatar src={profilePic}
                className="post-avatar"
                />
                <div className="post-top-info">
                    <h3> { username} </h3>
                    <p>Timestamp goes here </p>
                </div>
            </div>
            <div className="post-bottom">
                <p> {message} </p>
            </div>
            <div className="post-image">
                <img src={image} alt="" />
            </div>
            <div className="post-options">
                <div className="post-option">
                    <ThumbUp/>
                    <p>Like</p>
                </div>
                <div className="post-option">
                    <ChatBubbleOutline/>
                    <p>Comment</p>
                </div>
                <div className="post-option">
                    <NearMe/>
                    <p>Share</p>
                </div>
                <div className="post-option">
                    <AccountCircle/>
                    <ExpandMoreOutlined/>
                </div>
            </div>
        </div>
    );
};

export default Post;
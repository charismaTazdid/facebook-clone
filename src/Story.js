import { Avatar } from '@mui/material';
import React from 'react';
import './Story.css'
const Story = ({image, profileSrc, title}) => {
    return (
        <div style={{ backgroundImage: `url(${image})`}} className="story">
            <Avatar src={profileSrc} className="storyAvatar" />
            <h4> {title} </h4>
        </div>
    );
};

export default Story;
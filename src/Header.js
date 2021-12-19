import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import { ExpandMore, NotificationsActive, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
    return (
        <div className="header-home">

            <div className="header-left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />
            <div className="header-search">
                <SearchIcon/>
                <input type="text" placeholder="Search Facebook" />
            </div>
            </div>
            <div className="header-middle">
                <div className="header-option header-option-active">
                    <HomeIcon fontSize="large"></HomeIcon>
                </div>
                <div className="header-option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header-option">
                    <SubscriptionsOutlined fontSize="large" />
                </div>
                <div className="header-option">
                    <StorefrontOutlined fontSize="large" />
                </div>
                <div className="header-option">
                    <SupervisedUserCircle fontSize="large" />
                </div>
            </div>
            <div className="header-right">
                <div className="header-info">
                    <Avatar></Avatar>
                    <h4>Raihan Tajdid</h4>
                </div>

                <IconButton>
                   <AddIcon></AddIcon>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActive/>
                </IconButton>
                <IconButton>
                    <ExpandMore/>
                </IconButton>
            </div>
        </div>
    );
};

export default Header;
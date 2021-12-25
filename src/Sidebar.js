import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@mui/icons-material';
import React, { useContext } from 'react';
import { UserContext } from './App';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <div className="sidebar">
          <SidebarRow src={loggedInUser.image} title={loggedInUser.name} />
            <SidebarRow Icon={LocalHospital} title={"COVID-19 Information Center"}/>
           <SidebarRow Icon={EmojiFlags} title={"Pages"}/>
           <SidebarRow Icon={People} title={"Friend"}/>
           <SidebarRow Icon={Chat} title={"Messenger"}/>
           <SidebarRow Icon={Storefront} title={"Marketplace"}/>
           <SidebarRow Icon={VideoLibrary} title={"Videos"}/>
           <SidebarRow Icon={ExpandMoreOutlined} title={"Marketplace"}/>

        
        </div>
    );
};

export default Sidebar;
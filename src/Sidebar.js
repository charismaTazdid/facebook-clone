import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@mui/icons-material';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

const Sidebar = () => {
    return (
        <div className="sidebar">
          <SidebarRow src={"https://koolinus.files.wordpress.com/2019/03/avataaars-e28093-koolinus-1-12mar2019.png"} title={"Raihan Tajdid"} />
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
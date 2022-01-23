import React from 'react';
import './styles/Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ExploreTwoToneIcon from '@mui/icons-material/ExploreTwoTone';
import NotificationImportantTwoToneIcon from '@mui/icons-material/NotificationImportantTwoTone';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import BookmarkAddTwoToneIcon from '@mui/icons-material/BookmarkAddTwoTone';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import SidebarOption from './SidebarOption';
import { Button } from '@mui/material';
import Fab from '@mui/material/Fab';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon />

            <SidebarOption Icon={HomeTwoToneIcon} text="Home" />
            <SidebarOption Icon={ExploreTwoToneIcon} text="Explore" />
            <SidebarOption Icon={NotificationImportantTwoToneIcon} text="Notifications" />
            <SidebarOption Icon={ForumTwoToneIcon} text="Messages" />
            <SidebarOption Icon={BookmarkAddTwoToneIcon} text="Bookmarks" />
            <SidebarOption Icon={FormatListBulletedTwoToneIcon} text="Lists" />
            <SidebarOption Icon={AccountCircleTwoToneIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizTwoToneIcon} text="More" />

            <Fab variant="extended" className="sidebar__tweet" fullWidth>
                <TwitterIcon className= 'sidebar__twitterIcon2' sx={{ mr: 1 }} />
                Tweet
            </Fab>
            {/*<Button variant="outlined" >
        Tweet
      </Button>*/}
        </div>
    );
}

export default Sidebar;
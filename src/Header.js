import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header({backButton}) {
    const history = useHistory()
    return (
        <div className="header">
        {
            backButton ? (
                <IconButton onClick={()=> history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header_icon" />
                </IconButton>
            ):(
                <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
            )
        }
        
            <Link to="/">
            <img className="header__logo" src="https://i.pinimg.com/originals/d4/d8/82/d4d882dccd11187b7980ada01a465d48.png" alt="" />
            </Link>
            <Link to="/chat">
        <IconButton>
            <ForumIcon className="header__icon" fontSize="large"/>
        </IconButton>
            </Link>
        </div>
    )
}

export default Header

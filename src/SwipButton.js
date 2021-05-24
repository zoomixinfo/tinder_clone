import React from 'react'
import './SwipButton.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

function SwipButton() {
    return (
        <div className="swapButton">
            <IconButton className="swapButton__repeat"><ReplayIcon fontSize="large" /></IconButton>
            <IconButton className="swapButton__left"><CloseIcon fontSize="large" /></IconButton>
            <IconButton className="swapButton__star"><StarRateIcon fontSize="large" /></IconButton>
            <IconButton className="swapButton__right"><FavoriteIcon fontSize="large" /></IconButton>
            <IconButton className="swapButton__lighting"><FlashOnIcon fontSize="large" /></IconButton>
        </div>
    )
}

export default SwipButton

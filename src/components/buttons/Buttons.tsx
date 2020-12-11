import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ReplayIcon from '@material-ui/icons/Replay';

export const Buttons = () => {
    return (
        <div className="buttonsContainers">
                <button ><PlayArrowIcon style={{ fontSize: 40 }}/></button>
                <button ><PauseIcon style={{ fontSize: 40 }}/></button>
                <button ><ReplayIcon style={{ fontSize: 40 }}/></button>
        </div>
    )
}
// Imports
// React Imports
import React from 'react';
// Material UI Imports
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ReplayIcon from '@material-ui/icons/Replay';

// Types defination for props
type Props = {
    Time : { ms: number; s: number; m: number; h: number;};
    StatusR: string;
    StartR: () => void;
    ResumeR: () => void;
    ResetR: () => void;
    PauseR: () => void;
  }

export const Buttons : React.FC<Props> = ({ StatusR, StartR, PauseR, ResetR, ResumeR, Time,}) => {
    return (
        <div className="buttonsContainers">
            {StatusR === "finished" ? (<button onClick={Time.h === 0 && Time.m === 0 && Time.s === 0 && Time.ms === 0? (ResetR) : (StartR)}><PlayArrowIcon style={{ fontSize: 40 }}/></button>) : ("")}
            {StatusR === "running" ? (
                <div>
                    <button onClick={PauseR}><PauseIcon style={{ fontSize: 40 }}/></button>
                    <button onClick={ResetR}><ReplayIcon style={{ fontSize: 40 }}/></button>
                </div>
            ) : ( "" )}
            {StatusR === "paused" ? (
                <div>
                    <button onClick={ResumeR}><PlayArrowIcon style={{ fontSize: 40 }}/></button>
                    <button onClick={ResetR}><ReplayIcon style={{ fontSize: 40 }}/></button>
                </div>
            ) : ( "" )}
            {StatusR === "completed" ? (<div><button onClick={ResetR}> <ReplayIcon style={{ fontSize: 40 }}/></button></div>) : ( "" )}
        </div>
    )
}
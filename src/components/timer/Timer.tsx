// imports
// React imports
import React, { useState } from 'react';
// component Imports
import { TimeDisplay } from '../timeDisplay/TimeDisplay';
import { Buttons } from '../buttons/Buttons';

// Types Definations
type Timetd = {
    ms: number;
    s: number;
    m: number;
    h: number;
};

// Timer Component
export const Timer = () => {
    // const definations
    // starting time
    const timeDefined = { ms: 25, s: 15, m: 0, h: 0 };
    // for setting display component
    const [time, setTime] = useState<Timetd>(timeDefined);
    // for checking state of the App
    const [status, setStatus] = useState<string>("finished");
    // Functions to work with buttons
    // Starting timer
    const start: () => void = () => {
        setStatus("running");
    }
    // Reseting timer
    const reset: () => void = () => {
        setStatus("finished");
    };
    // Pausing timer
    const pause: () => void = () => {
        setStatus("paused");
    };
    // Reseuming timer
    const resume: () => void = () => start();

    // Timer function return
    return (
        <div className="timerContainer">
            <TimeDisplay Time={time}/>
            <Buttons
                StatusR={status}
                StartR={start}
                PauseR={pause}
                ResetR={reset}
                ResumeR={resume}    
            />
        </div>
    )
}
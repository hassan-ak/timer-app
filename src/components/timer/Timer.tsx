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
    // starting time
    const timeDefined = { ms: 25, s: 15, m: 0, h: 0 };
    // for setting display component
    const [time, setTime] = useState<Timetd>(timeDefined);
    return (
        <div className="timerContainer">
            <TimeDisplay Time={time}/>
            <Buttons/>
        </div>
    )
}
// imports
// React imports
import React from 'react';
// component Imports
import { TimeDisplay } from '../timeDisplay/TimeDisplay';
import { Buttons } from '../buttons/Buttons';

// Timer Component
export const Timer = () => {
    return (
        <div className="timerContainer">
            <TimeDisplay/>
            <Buttons/>
        </div>
    )
}
// imports
// React imports
import React from 'react';
// component Imports
import { TimeDisplay } from '../timeDisplay/TimeDisplay';

// Timer Component
export const Timer = () => {
    return (
        <div className="timerContainer">
            <TimeDisplay/>
        </div>
    )
}
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
    const timeDefined = { ms: 0, s: 0, m: 0, h: 0 };
    // for setting display component
    const [time, setTime] = useState<Timetd>(timeDefined);
    // for checking state of the App
    const [status, setStatus] = useState<string>("finished");
    // interval to execute during length of operation
    const [interv, setInterv] = useState<NodeJS.Timeout | any>();
    // Variable to execute during course of operation
    var   initialMs = time.ms, initialS = time.s, initialM = time.m, initialH = time.h;
    // Functions to work with buttons
    // Starting timer
    const start: () => void = () => {
        setStatus("running");
        setInterv(setInterval(run,10));
    }
    // Reseting timer
    const reset: () => void = () => {
        clearInterval(interv);
        setTime(timeDefined);
        setStatus("finished");
    };
    // seb function of start function
    const run : () => void =() => {
        if (initialMs > 0 && initialS>=0 && initialM>=0 && initialH>=0) {
            initialMs --
            setTime({ ms: initialMs, s: initialS, m: initialM, h: initialH })
        }else if (initialMs === 0 && initialS>0 && initialM>=0 && initialH>=0) {
            initialMs = 99
            initialS --
            setTime({ ms: initialMs, s: initialS, m: initialM, h: initialH })
        }else if (initialMs === 0 && initialS===0 && initialM>0 && initialH>=0) {
            initialMs = 99
            initialS = 59
            initialM --
            setTime({ ms: initialMs, s: initialS, m: initialM, h: initialH })
        }
        else if (initialMs === 0 && initialS===0 && initialM===0 && initialH>0) {
            initialMs = 99
            initialS = 59
            initialM = 59
            initialH --
            setTime({ ms: initialMs, s: initialS, m: initialM, h: initialH })
        }
        else if (initialMs === 0 && initialS===0 && initialM===0 && initialH===0) {
            setTime({ ms: initialMs, s: initialS, m: initialM, h: initialH })
            setStatus("completed")
        }
    }
    // Pausing timer
    const pause: () => void = () => {
        setStatus("paused");
        clearInterval(interv);
    };
    // Reseuming timer
    const resume: () => void = () => start();
    // Setting time on user clicks
    const hI: () => void = () => {
        if(time.h < 99){
            setTime({ ms: time.ms, s: time.s, m: time.m, h: time.h+1 });
        }
    };
    const hD: () => void = () => {
        if(time.h > 0){
            setTime({ ms: time.ms, s: time.s, m: time.m, h: time.h-1 });
        }
    };
    const mI: () => void = () => {
        if(time.m < 59){
            setTime({ ms: time.ms, s: time.s, m: time.m+1, h: time.h });
        }
        if(time.m === 59){
            if(time.h < 59){
                setTime({ ms: time.ms, s: time.s, m: 0, h: time.h+1 });
            }
        }
    };
    const mD: () => void = () => {
        if(time.m > 0){
            setTime({ ms: time.ms, s: time.s, m: time.m-1, h: time.h });
        }
        if(time.m === 0){
            if(time.h > 0){
                setTime({ ms: time.ms, s: time.s, m: 59, h: time.h-1 });
            }
        }
    };
    const sI: () => void = () => {
        if(time.s < 59){
            setTime({ ms: time.ms, s: time.s+1, m: time.m, h: time.h });
        }
        if(time.s === 59){
            if(time.m < 59){
                setTime({ ms: time.ms, s: 0, m: time.m+1, h: time.h });
            }
            if(time.m === 59){
                if(time.h < 99){
                    setTime({ ms: time.ms, s: 0, m: 0, h: time.h+1 });
                }
            }
        }
    };
    const sD: () => void = () => {
        if(time.s > 0){
            setTime({ ms: time.ms, s: time.s-1, m: time.m, h: time.h });
        }
        if(time.s === 0){
            if(time.m>0){
                setTime({ ms: time.ms, s: 59, m: time.m-1, h: time.h });
            }
            if(time.m===0){
                if(time.h>0){
                    setTime({ ms: time.ms, s: 59, m: 59, h: time.h-1 });
                }
            }
        }
    };

    // Timer function return
    return (
        <div className="timerContainer">
            <TimeDisplay 
                StatusR={status}
                Time={time}
                hIR={hI}
                hDR={hD}
                mIR={mI}
                mDR={mD}
                sIR={sI}
                sDR={sD}
            />
            <Buttons
                StatusR={status}
                Time={time}
                StartR={start}
                PauseR={pause}
                ResetR={reset}
                ResumeR={resume}    
            />
        </div>
    )
}
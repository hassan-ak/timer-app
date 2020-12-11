// Imports
// React Imports
import React from 'react';

// Types Defination
type Props = {
    Time : {
        ms: number;
        s: number;
        m: number;
        h: number;
    };
};

// TimeDisplay Component
export const TimeDisplay : React.FC<Props> = ({Time,}) => {
    return (
        <div className="timeDisplayContainer">
            <p className="time">
                <span className={Time.h === 0 ? "inActive" : "active"}>
                    {Time.h >= 10 ? Time.h : "0" + Time.h}:
                </span>
                <span className={Time.m === 0 && Time.h === 0 ? "inActive" : "active"}>
                    {Time.m >= 10 ? Time.m : "0" + Time.m}:
                </span>
                <span className={Time.s === 0 && Time.m === 0 && Time.h === 0 ? "inActive" : "active"}>
                    {Time.s >= 10 ? Time.s : "0" + Time.s}.
                </span>
                <span className={Time.ms === 0 && Time.s === 0 && Time.m === 0 && Time.h === 0 ? "ms inActive" : "ms active"}>
                    {Time.ms >= 10 ? Time.ms : "0" + Time.ms}
                </span>
            </p>
        </div>
    )
}
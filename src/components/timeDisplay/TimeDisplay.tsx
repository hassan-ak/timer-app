// Imports
// React Imports
import React from 'react';
// Material UI component
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// Types Defination
type Props = {
    Time : { ms: number; s: number; m: number; h: number;};
    StatusR: string;
    hIR: () => void;
    hDR: () => void;
    mIR: () => void;
    mDR: () => void;
    sIR: () => void;
    sDR: () => void;
};

// TimeDisplay Component
export const TimeDisplay : React.FC<Props> = ({ Time,StatusR,hIR,hDR,mIR,mDR,sIR,sDR}) => {
    return (
        <div className="timeDisplayContainer">
            <div className="time">
                <div className="tE">
                    <div className="dE">
                        {StatusR === "finished" ? (<button onClick={hIR}><KeyboardArrowUpIcon style={{ fontSize: 40 }}/></button>):("")}
                        <span className={Time.h === 0 ? "inActive" : "active"}>{Time.h >= 10 ? Time.h : "0" + Time.h}</span>
                        {StatusR === "finished" ? (<button onClick={hDR}><KeyboardArrowDownIcon style={{ fontSize: 40 }}/></button>):("")}
                    </div>
                    <span className={Time.h === 0 ? "inActive" : "active"}>:</span>
                </div>
                <div className="tE">
                    <div className="dE">
                        {StatusR === "finished" ? (<button onClick={mIR}><KeyboardArrowUpIcon style={{ fontSize: 40 }}/></button>):("")}
                        <span className={Time.m === 0 && Time.h === 0 ? "inActive" : "active"}>{Time.m >= 10 ? Time.m : "0" + Time.m}</span>
                        {StatusR === "finished" ? (<button onClick={mDR}><KeyboardArrowDownIcon style={{ fontSize: 40 }}/></button>):("")}
                    </div>
                    <span className={Time.h === 0 ? "inActive" : "active"}>:</span>
                </div>
                <div className="tE">
                    <div className="dE">
                        {StatusR === "finished" ? (<button onClick={sIR}><KeyboardArrowUpIcon style={{ fontSize: 40 }}/></button>):("")}
                        <span className={Time.s === 0 && Time.m === 0 && Time.h === 0 ? "inActive" : "active"}>{Time.s >= 10 ? Time.s : "0" + Time.s}</span>
                        {StatusR === "finished" ? (<button onClick={sDR}><KeyboardArrowDownIcon style={{ fontSize: 40 }}/></button>):("")}
                    </div>
                    <span className={Time.h === 0 ? "inActive" : "active"}>.</span>
                </div>
                <div className="tE tems"><div className="dE"><span className={Time.ms === 0 && Time.s === 0 && Time.m === 0 && Time.h === 0 ? "ms inActive" : "ms active"}>{Time.ms >= 10 ? Time.ms : "0" + Time.ms}</span></div></div>
            </div>
        </div>
    )
}
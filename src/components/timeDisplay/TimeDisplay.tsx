// Imports
// React Imports
import React from 'react';
// Material UI component
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// Types Defination
type Props = {
    Time : {
        ms: number;
        s: number;
        m: number;
        h: number;
    };
    StatusR: string;
};

// TimeDisplay Component
export const TimeDisplay : React.FC<Props> = ({Time,StatusR}) => {
    return (
        <div className="timeDisplayContainer">
            <p className="time">

                <div className="tE">
                    <div className="dE">
                        {StatusR === "finished" ? (<button><KeyboardArrowUpIcon style={{ fontSize: 40 }}/></button>):("")}
                        <span className={Time.h === 0 ? "inActive" : "active"}>
                            {Time.h >= 10 ? Time.h : "0" + Time.h}
                        </span>
                        {StatusR === "finished" ? (<button><KeyboardArrowDownIcon style={{ fontSize: 40 }}/></button>):("")}
                    </div>
                    <span className={Time.h === 0 ? "inActive" : "active"}>:</span>
                </div>

                <div className="tE">
                    <div className="dE">
                        {StatusR === "finished" ? (<button><KeyboardArrowUpIcon style={{ fontSize: 40 }}/></button>):("")}
                        <span className={Time.m === 0 && Time.h === 0 ? "inActive" : "active"}>
                            {Time.m >= 10 ? Time.m : "0" + Time.m}
                        </span>
                        {StatusR === "finished" ? (<button><KeyboardArrowDownIcon style={{ fontSize: 40 }}/></button>):("")}
                    </div>
                    <span className={Time.h === 0 ? "inActive" : "active"}>:</span>
                </div>

                <div className="tE">
                    <div className="dE">
                        {StatusR === "finished" ? (<button><KeyboardArrowUpIcon style={{ fontSize: 40 }}/></button>):("")}
                        <span className={Time.s === 0 && Time.m === 0 && Time.h === 0 ? "inActive" : "active"}>
                            {Time.s >= 10 ? Time.s : "0" + Time.s}
                        </span>
                        {StatusR === "finished" ? (<button><KeyboardArrowDownIcon style={{ fontSize: 40 }}/></button>):("")}
                    </div>
                    <span className={Time.h === 0 ? "inActive" : "active"}>.</span>
                </div>
                <div className="tE tems">
                    <div className="dE">
                        <span className={Time.ms === 0 && Time.s === 0 && Time.m === 0 && Time.h === 0 ? "ms inActive" : "ms active"}>
                            {Time.ms >= 10 ? Time.ms : "0" + Time.ms}
                        </span>
                    </div>
                </div>
            </p>
        </div>
    )
}
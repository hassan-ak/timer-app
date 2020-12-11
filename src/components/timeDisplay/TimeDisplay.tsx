// Imports
// React Imports
import React from 'react';

// TimeDisplay Component
export const TimeDisplay = () => {
    return (
        <div className="timeDisplayContainer">
            <p className="time">
                <span className="inActive">
                    00:
                </span>
                <span className="inActive">
                    00:
                </span>
                <span className="active">
                    11.
                </span>
                <span className="active ms">
                    75
                </span>
            </p>
        </div>
    )
}
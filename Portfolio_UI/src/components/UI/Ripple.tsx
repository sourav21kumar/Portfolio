import React, { FunctionComponent } from "react";

export const Ripple: FunctionComponent<{ status: boolean }> = ({ status }) => {
    const className = !status ? 'circle-ripple-ongoing' : 'circle-ripple-completed';
    return (
        <div className={className}></div>
    )
}
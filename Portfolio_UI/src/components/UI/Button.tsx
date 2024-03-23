import React, { FunctionComponent } from "react";
import { IButtonProps } from "../../shared/interfaces/interface";
import { cn } from "../../utility/cn";

export const Button: FunctionComponent<IButtonProps> = ( { className,children } ) => {
    return (
        <button className={cn(className)}>{children}</button>
    )
}

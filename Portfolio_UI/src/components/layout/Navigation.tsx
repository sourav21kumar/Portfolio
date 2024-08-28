import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utility/cn";
import { GoPerson } from "react-icons/go";
import { VscVm } from "react-icons/vsc";
import { PiReadCvLogoLight } from "react-icons/pi";

export const Navigation: FunctionComponent = () => {
    return (
        <div className="navigation-main">
            <ul className="navList">
                <li className="nav-item logo">
                    <Link to="/" className="nav-link profile"></Link>
                </li>
                <li className={cn('nav-item')}>
                    <Link to="/about" className="nav-link"><GoPerson/></Link>
                </li>
                <li className={cn('nav-item')}>
                    <Link to="/experience" className="nav-link"><VscVm/></Link>
                </li>
                <li className={cn('nav-item')}>
                    <Link to="/read.cv" className="nav-link"><PiReadCvLogoLight/></Link>
                </li>
            </ul>
        </div>
    )
}
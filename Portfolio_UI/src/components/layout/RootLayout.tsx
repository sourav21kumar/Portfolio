import React, { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export const RootLayout: FunctionComponent = () => {
    return (
        <>

            <Navigation />
            <main className="main">
                <Outlet />
            </main>
        </>
    )
}
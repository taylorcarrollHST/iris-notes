import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"

export const ClaritiUi = () => {
    //some state management, possibly session token?
    //const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("sessionToken") !== null)

    return (
        <>
            
                <NavBar />
                <ApplicationViews />
        </>
    )

}

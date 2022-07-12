import React, { useRef, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../../resources/images/clariti-logo.svg"
import MapMarker from "../../resources/images/map-marker.svg"
import InfoIcon from "../../resources/images/information-icon.svg"


export const NavBar = ({ /*token, setToken*/ }) => {

    const navigate = useNavigate()

    const [data, setData] = useState(
        //placeholder state until we get a working fetch going
        
            { id: 1, token: "12345", orgName: "Maple Valley Surgery Center", orgUrl: "https://www.maplecreek.com/", userName: "Jane Doe" }
        
        )

    async function getData() {
        let url = 'http://whatever/'
        let config = {}
        const response = await fetchSessionData();
        console.log(response)
    }

    const fetchSessionData = () => {
        return fetch("http://localhost:1234/auth")
          .then(res => res.json())
      };


    
    return (
        <nav className="topMenu">
            <div id="navBar-Wrapper-left">
                <a className="navbar-item" href="https://clariti-health.com/">
                    <img src={Logo}/>
                </a>
                <div className="navbar-item">
                    {
                        <Link to="/home" className="navbar-item">Home</Link>
                    }
                </div>
                <div className="navbar-item">
                    {
                        <Link to="/learn" className="navbar-item">Learn</Link>
                    }
                </div>
                <div className="navbar-item">
                    {
                        <Link to="/support" className="navbar-item">Support</Link>
                    }
                </div>
            </div>
            <div id="navBar-Wrapper-right">
                <img src={MapMarker}/>
                <div className="navbar-item">
                    {
                        <a href="https://www.maplecreek.com/" className="navbar-item">{data.orgName}</a>
                    }
                </div>
                <div className="vertical-line"></div>
                <img src={InfoIcon}/>
                <div className="navbar-item">
                    {
                        <Link to="/myaccount" className="navbar-item">{data.userName}</Link>
                    }
                </div>
                <div className="navbar-item">
                    {
                        localStorage.setItem("userData", "123T")
                    }
                {
                    localStorage.getItem("userData")
                    ? 
                    <Link to="" onClick={() => {
                        localStorage.removeItem("userData")
                        //clear state here too
                        //navigate("/", {replace: true})
                        console.log("logout clicked")}}>Logout</Link>
                    : <Link>Login</Link>
                }
                </div>
            </div>
        </nav>
    )
}
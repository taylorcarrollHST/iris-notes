import React from "react"
import { Route, Routes } from "react-router-dom"
import { QuoteLibrary } from "./quotes/QuoteLibrary"

export const ApplicationViews = () => {
    return (
        <>
        <Routes>
            <Route exact path="/quoteLibrary" element={<QuoteLibrary />}/>
        </Routes>
        <Routes>
            <Route path='/home' element={<Home />}/>
        </Routes>
        <Routes>
            <Route path='/learn' element={<Learn />}/>
        </Routes>
        <Routes>
            <Route path='/support' element={<Support />}/>
        </Routes>
        <Routes>
            <Route path='/myaccount' element={<MyAccount />}/>
        </Routes>
        </>
    )
}

//put this in a config file somewhere
const url = 'http://localhost:52773'

// 👇️ redirect to external URLs in navbar
function Home() {
    window.location.replace(`${url}/csp/clariti/CaseLibrary.csp`);
    return null;
  }

function Learn() {
    window.location.replace(`${url}/csp/clariti/ClientHelpCenter.csp`);
    return null;
}

function Support() {
    window.location.replace(`${url}/csp/clariti/EngageCaseViewer.csp`);
    return null;
  }

  function MyAccount() {
    window.location.replace(`${url}/csp/clariti/MyAccount.csp`);
    return null;
  }

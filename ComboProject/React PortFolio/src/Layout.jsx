import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from "./Component/Header/Header.jsx";
import Footer from "./Component/Footer/Footer.jsx";

function Layout() {
    return (
        <>
            <body>
        <div>
            <Header/>
            <Outlet/>
            <Footer />
        </div>
        </body>

        </>
    )
}

export default Layout
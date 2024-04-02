import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'
import Home from "./Component/Home/Home.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import Header from "./Component/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import React from "react";

function App() {

    return (
        <><Header/>
            <body>

            <div >

                <Outlet/>

            </div>
            <Footer/>
            </body>

        </>

    )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import User from "./Component/User/User.jsx";
import Service from "./Component/Utilities/Service.jsx";
import PasswordGenerater from "./Component/Utilities/PasswordGenerater.jsx";
import CurrencyConverter from "./Component/Utilities/CurrencyConverter.jsx";
import ServiceInfo from "./Component/Utilities/ServiceInfo.jsx";
import App from "./App.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='user/:userid' element={<User/>}/>
            <Route path='services/' element={<Service/>}>

                <Route path='ourServices' element={<ServiceInfo/>}/>
                <Route path='passwordGenerator' element={<PasswordGenerater/>}/>
                <Route path='currencyConverter' element={<CurrencyConverter/>}/>
                <Route path='todoApp' element={<Contact/>}/>

            </Route>

        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)


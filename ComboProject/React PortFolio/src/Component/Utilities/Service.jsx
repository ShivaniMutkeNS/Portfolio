import {NavLink, Outlet} from "react-router-dom";
import React from "react";

export default function Service() {
    return (
        <div className={"bg-gray-500"}>
            <header className="shadow sticky z-50 top-0">
                <nav className="border-gray-400 px-4 lg:px-6 py-2.5">

                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                        <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <NavLink
                                        to="/services/"
                                        className={({isActive}) =>
                                            `bg-orange-400 rounded-lg p-4 block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Our Services
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/services/passwordGenerator"
                                        className={({isActive}) =>
                                            `bg-orange-400 rounded-lg p-4 block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        PassWord Generator
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/services/currencyConverter"
                                        className={({isActive}) =>
                                            ` bg-orange-400 rounded-lg p-4 block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Currency Converter
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/services/todoApp"
                                        className={({isActive}) =>
                                            ` bg-orange-400 rounded-lg p-4 block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        TodoApp
                                    </NavLink>
                                </li><li>
                                    <NavLink
                                        to="/services/guessTheNumber"
                                        className={({isActive}) =>
                                            ` bg-blue-200 rounded-lg p-4 block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Lets Play Game
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/services/todoApp"
                                        className={({isActive}) =>
                                            ` bg-orange-400 rounded-lg p-4 block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        MegaProject
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
            <Outlet/>
        </div>
    );
}
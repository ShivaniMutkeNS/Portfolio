import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-blue-100">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12 ">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Let me summerize my journey
                        </h2>
                        <p className="mt-6 text-2xl font-bold  text-black">
                            Welcome to my React portfolio! Here, I showcase my journey as a budding developer and
                            demonstrate my skills through various projects. From simple apps to complex web solutions,
                            each project reflects my passion for creating intuitive and efficient software.
                        </p>
                        <p className="mt-6 text-2xl font-bold  text-black">
                            Below I have created few Projects : Through Which I explored Context api and hooks.
                        </p>
                        <ul className="mt-4 text-3xl font-bold  text-cyan-500">
                            <li><p>1) Currency converter</p></li>

                            <li><p> 2) password generator </p></li>
                            <li>
                                <p> 3) Todo APP </p>
                            </li>
                            <li>
                                <p> 4) Guess the number game </p>
                            </li>
                            <li>
                                <p>5) Mega project blog app </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
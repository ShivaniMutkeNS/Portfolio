import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="py-16 bg-blue-100">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                    <h2 className="text-4xl font-bold sm:text-5xl text-black">
                        React learning</h2>
                    <h2 className="text-4xl font-bold sm:text-5xl text-cyan-500">
                        <span className="hidden sm:block text-4xl">Lets explore the small mini projects I learn during my react journey</span>
                    </h2>

                    <Link
                        className="inline-flex items-center px-6 py-3 font-medium bg-black rounded-lg hover:opacity-75"
                        to="">Explore :)</Link>



                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1"/>
                </div>
                   </div>


            </aside>


        </div>

    );
}
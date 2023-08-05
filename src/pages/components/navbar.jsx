import { Link } from 'react-router-dom';

import React, { useState } from "react";
export const Navbar = () => {



    const [openMenu, setOpenMenu] = useState(false);
    const handleMenuOpen = () => {
        setOpenMenu(!openMenu);
    };


    return (



        <div className="mx-auto h-5 w-full" style={{ position: 'fixed', top: 0, left: 0, zIndex: 100 }}>
            <div style={{ position: 'fixed', top: 0, left: 0, width: "100vw", height: "100vh" }} onClick={handleMenuOpen}

                className={
                    openMenu
                        ? "block"
                        : "hidden"
                }>


            </div>




            <header className="flex justify-between back p-5 h-30 " style={{}}>
                {/* <h1 className='blend'>ロゴ</h1> */}


                <h1></h1>
                {/* ダミー */}



                {/* humbergerbutton */}
                <button
                    style={{ backgroundColor: "", width: "35px", height: "35px" }}
                    onClick={handleMenuOpen}
                    type="button"
                    className="z-10 space-y-2"
                >
                    <div
                        className={
                            openMenu
                                ? "w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                                : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out blend"

                        }




                    />
                    <div
                        className={
                            openMenu
                                ? "opacity-0 transition duration-500 ease-in-out"
                                : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out blend"
                        }
                    />
                    <div
                        className={
                            openMenu
                                ? "w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out"
                                : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out blend"
                        }
                    />
                </button>

                {/* nav */}
                <nav
                    className={
                        openMenu
                            ? "border-l-4 text-left fixed  right-0 top-0 sm:w-1/3 w-8/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300"
                            : "fixed right-[-100%] ease-linear duration-300"
                    }
                    style={{ backgroundColor: "#ffffffcc", }}
                >
                    <ul className="mt-6">

                        <Link to="/" className="py-2 inline-block text-2xl font-bold" style={{ display: "block" }} onClick={handleMenuOpen}>
                            <li className="">

                                HOME

                            </li> </Link>
                        <Link to="/class306" className="py-2 inline-block text-2xl font-bold" style={{ display: "block" }} onClick={handleMenuOpen}>
                            <li className="">

                                PLAY

                            </li> </Link>
                        <Link to="/about" className="py-2 inline-block text-2xl font-bold" style={{ display: "block" }} onClick={handleMenuOpen}>
                            <li className="">

                                ABOUT THIS SITE

                            </li> </Link>

                        <Link to="/link" className="py-2 inline-block text-2xl font-bold" style={{ display: "block" }} onClick={handleMenuOpen}>
                            <li className="">

                                SCHOOL PAGE

                            </li> </Link>

                    </ul>
                </nav >
            </header >
        </div >




    );
};
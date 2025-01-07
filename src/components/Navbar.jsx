import React, { useState } from 'react';
import pic from "../../public/photo.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';
import { FcDownload } from "react-icons/fc";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Portfolio" },
        { id: 4, text: "Experience" },
        { id: 5, text: "Contact" },
    ];

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
                <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-2">
                        <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
                        <h2 className="font-semibold text-xl cursor-pointer">
                            Bipla<span className="text-green-500 text-2xl">b</span>
                            <p className="text-sm">Software Developer</p>
                        </h2>
                    </div>

                    {/* For Desktop */}
                    <div className="flex items-center">
                        <ul className="hidden md:flex space-x-8">
                            {navItems.map(({ id, text }) => (
                                <li
                                    className="hover:scale-105 duration-200 cursor-pointer"
                                    key={id}
                                >
                                    <Link
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass="active"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Resume Button */}
                        <a
                            href="../../public/resume.pdf"  
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-flex items-center px-2 py-2 ml-8 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-md duration-200"
                        >
                            Resume
                            <FcDownload className="mr-1" size={20} />
                        </a>

                        {/* Mobile Menu Icon */}
                        <div onClick={() => setMenu(!menu)} className="md:hidden">
                            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menu && (
                    <div className="absolute top-16 left-0 right-0 bg-white shadow-md">
                        <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
                            {navItems.map(({ id, text }) => (
                                <li
                                    className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                                    key={id}
                                >
                                    <Link
                                        onClick={() => setMenu(!menu)}
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass="active"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}

                            {/* Resume Button in Mobile Menu */}
                            <a
                                href="../../public/resume.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-md duration-200"
                            >
                                Resume
                                <FcDownload className="mr-2" size={20} />
                            </a>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;

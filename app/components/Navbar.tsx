import { useState } from "react";
import Button from "./Button";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    interface subMenu {
        label: string;
    }
    const sub: subMenu[] = [
        {label: "Home"},
        {label: "Freelance"},
        {label: "Course"},
        {label: "Programs"},
    ]
    return(
        <nav className="w-full flex items-center justify-between px-8 py-4 border-b shadow-xl backdrop-blur-md">
            <a href="/" id="logo" className="flex space-x-3 items-center"><img className="w-7" src="https://i.ibb.co.com/0DhSzYN/Yhoiki.png" alt="logo" /><h1 className="text-gray-700 font-bold text-xl">Yhoiki</h1></a>
            <div id="sub" className="list-none text-gray-600 flex space-x-10">
                {sub.map((item, index) => (
                    <li key={index}>
                        <a href={`/` + item.label} className="font-medium duration-300 bg-gradient-to-r from-color1 to-color2 bg-clip-text hover:text-transparent">
                            {item.label}
                        </a>
                    </li>
                ))}
            </div>
            <div id="auth" className="flex items-center space-x-3">
                <div id="search" className="bg-gray-200 rounded-full flex items-center text-gray-400 duration-300 hover:border hover:border-gray-300"><FaSearch className="mx-4 max-md:my-3"/><input type="search" name="search" id="search" placeholder="search" className="text-gray-700 bg-transparent rounded-full py-2 focus:outline-none max-md:hidden" /><div className="max-md:hidden"><Button id="search" text="Search" url="/search" customcss="#"/></div></div>
                <div id="bahasa"><button className="font-semibold mx-5 text-gray-600">ENG</button></div>
                <button className="text-gray-400 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-200 duration-300">Login</button><Button id="register" text="Register" url="/register" customcss="#"/>
            </div>
        </nav>
    )
};
import { useState } from "react";
import Button from "./Button";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    return(
        <nav className="w-full flex items-center justify-between px-8 py-4 border-b shadow-xl">
            <div id="logo" className="flex space-x-3 items-center"><img className="w-7" src="https://i.ibb.co.com/0DhSzYN/Yhoiki.png" alt="logo" /><h1 className="text-gray-700 font-bold">Yhoiki</h1></div>
            <div id="sub" className="list-none text-gray-600 flex space-x-10">
                <li><a href="#">Home</a></li>
                <li><a href="#">Freelance</a></li>
                <li><a href="#">Course</a></li>
                <li><a href="#">Program</a></li>
            </div>
            <div id="search" className="bg-gray-200 rounded-full flex items-center text-gray-400 duration-300 hover:border hover:border-gray-300"><FaSearch className="mx-4 max-md:my-3"/><input type="search" name="search" id="search" placeholder="search" className="text-gray-700 bg-transparent rounded-full py-2 focus:outline-none max-md:hidden" /><div className="max-md:hidden"><Button id="search" text="Search" url="/search" customcss="#"/></div></div>
            {/* <div id="bahasa"><h1>ENG</h1></div> */}
            <div id="auth" className="flex space-x-3"><button className="text-gray-400 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-200 duration-300">Login</button><Button id="register" text="Register" url="/register" customcss="#"/></div>
        </nav>
    )
};
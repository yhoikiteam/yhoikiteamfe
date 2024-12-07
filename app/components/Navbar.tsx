"use client";

import { useState } from "react";

import Button from "./Button";
import Search from "./Search";

export default function Navbar() {
    const [ Sub, gantiSub ] = useState<string>("Home")
    const gantiSubNya = (subNya: string) => {
        gantiSub(subNya);
    }
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
                        <a href={`/` + item.label} onClick={() => gantiSubNya(item.label)} className={`font-medium duration-300 bg-gradient-to-r from-color1 to-color2 bg-clip-text hover:text-transparent ${Sub === item.label ? "text-transparent" : ""}`}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </div>
            <div id="auth" className="flex items-center space-x-3">
                <Search/>
                <div id="bahasa"><button className="font-semibold mx-5 text-gray-600">ENG</button></div>
                <button className="text-gray-400 px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-200 duration-300">Login</button><Button id="register" text="Register" url="/register" customcss="px-6"/>
            </div>
        </nav>
    )
};
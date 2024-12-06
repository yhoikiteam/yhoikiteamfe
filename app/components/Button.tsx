import React from "react";

interface ButtonProps {
    id: string;
    url: string;
    text: string;
    customcss: string;
}

const Button: React.FC<ButtonProps> = ({ id, url, text, customcss }) => {
    return(
        <button id={id} className="px-4 py-2 bg-gradient-to-r from-color1 to-color2 rounded-full hover:from-color2 hover:to-color2 duration-300">          
        <a href={url}>
            <h1 className="text-white">{text}</h1>
        </a>
        </button>
    )
};

export default Button;
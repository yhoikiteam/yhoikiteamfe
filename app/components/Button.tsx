"use client";

import Link from "next/link";
import React, { useState } from "react";

interface ButtonProps {
  id: string;
  url: string;
  text: string;
  customcss: string;
}

interface ButtonFilterProps {
  id: string;
  onClick: (id: string) => void;
  text: string;
  customcss?: string;
  icons?: React.ReactNode;
  isActive?: boolean;
}

export default function Button({ id, url, text, customcss }: ButtonProps) {
  return (
    <button
      id={id}
      className={`px-4 py-2 bg-gradient-to-r from-color1 to-color2 rounded-full hover:from-color2 hover:to-color2 duration-300 ${customcss}`}
    >
      <Link href={url}>
        <h1 className="text-white">{text}</h1>
      </Link>
    </button>
  );
}

export const ButtonFilter: React.FC<ButtonFilterProps> = ({
  id,
  text,
  icons,
  customcss,
  onClick,
  isActive,
}) => {
  return (
    <button
      onClick={() => onClick(id)} 
      id={id}
      className={`w-full h-12 text-left p-[2px] mb-2 rounded-full font-semibold ${
        isActive ? " bg-gradient-to-r from-[#75C57E] to-[#34A853]" : ""
      } ${customcss}`}
    >
      <div className="bg-[#E6E6E6] w-full h-full items-center px-3 text-start flex text-[#535753] rounded-full">
        <div className="flex items-center gap-3">
          <div>{icons}</div>
          <p>{text}</p>
        </div>
      </div>
    </button>
  );
};

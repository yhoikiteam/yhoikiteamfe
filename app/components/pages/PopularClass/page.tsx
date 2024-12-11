"use client";

import { ButtonFilter } from "../../Button";
import { CardPrograming } from "./Filter";
import { CardPopular } from "./Filter";
import { CardGraphicDesign } from "./Filter";
import Search from "../../Search";
import { buttonData } from "@/app/Data/FilterProduct";
import { useState } from "react";

export default function Product() {
  const [activeFilter, setActiveFilter] = useState("ButtonsA");

  return (
    <div className="bg-white pl-6 pb-10 h-screen">
      {/* Header */}
      <div className="grid grid-rows-[auto_1fr] grid-cols-1 md:grid-cols-12 gap-4">
        <div className="row-start-1 md:col-span-12 p-4 flex items-center justify-between">
          <div>
            <h2 className="text-4xl text-[#535753] font-bold mb-4">
              <span className="bg-gradient-to-r from-[#75C57E] to-[#34A853] bg-clip-text text-transparent">
                Popular
              </span>{" "}
              And{" "}
              <span className="bg-gradient-to-r from-[#75C57E] to-[#34A853] bg-clip-text text-transparent border border-dashed border-gray-300 p-0.5">
                Newest
              </span>
              {" "}
              Class
            </h2>
            <p className="text-[#535753] font-semibold">
              Look for the products you need here and see competitive prices
            </p>
          </div>
          <Search />
        </div>

        {/* Sidebar Filter */}
        <div className="md:col-span-3 p-4 transition-all ease-in-out duration-500">
          {buttonData.map((btn) => (
            <ButtonFilter
              key={btn.id}
              id={btn.id}
              text={btn.text}
              icons={btn.icon}
              customcss="my-custom-class"
              onClick={() => setActiveFilter(btn.id)}
              isActive={activeFilter === btn.id}
            />
          ))}
        </div>

        {/* Konten Produk */}
        <div className="md:col-span-9 col-span-full overflow-x-auto whitespace-nowrap">
          {activeFilter === "ButtonsB" ? (
            <CardPrograming />
          ) : activeFilter === "ButtonsA" ? (
            <CardPopular />
          ) : (
            activeFilter === "ButtonsC" ? (
              <CardGraphicDesign />
            ) : (
              <div className=" text-red-600">Content tidak di temukan</div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

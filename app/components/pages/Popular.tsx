import { ButtonFilter } from "../Button";
import CardProduct from "../CardProduct";
import Search from "../Search";
import { buttonData } from "@/app/Data/FilterProduct";

export default function Product() {
  return (
    <div className="bg-white p-6">
      <div className="grid grid-rows-[auto_1fr] grid-cols-1 md:grid-cols-12 gap-4">
        {/* Header */}
        <div className="row-start-1 md:col-span-12 p-4 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#75C57E] to-[#34A853] bg-clip-text text-transparent mb-4">
              Popular <span className="text-[#535753]">And</span> Newest{" "}
              <span className="text-[#535753]">Products</span>
            </h2>
            <p className="text-[#535753] font-semibold">
              Look for the products you need here and see competitive prices
            </p>
          </div>
          <Search />
        </div>

        {/* Sidebar Filter */}
        <div className="md:col-span-3 p-4 ">
          {buttonData.map((button) => (
            <div></div>
          ))}
        </div>

        {/* Products */}
        <div className="md:col-span-9 col-span-full">
          <div className="overflow-x-auto whitespace-nowrap">
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

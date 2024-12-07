import Image from "next/image";
import { products } from "../Data/Product";
import { FaStar } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

export default function CardProduct() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 shadow-xl ">
            {products.map((product, index) => (
                <div key={index} className="max-w-sm rounded-2xl shadow-md bg-white overflow-hidden border-2 border-gray-200">
                    {/* Hero Image */}
                    <div className="relative h-44 bg-gray-100 flex justify-center items-center">
                        <Image
                            src={product.badge}
                            alt={product.name}
                            width={600}
                            height={600}
                            className="h-full w-full object-fill"
                        />
                    </div>
                    {/* Card Content */}
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                            <Image
                                src={product.image}
                                alt="Badge"
                                width={32}
                                height={32}
                                className="rounded-full"
                            />
                            <span className="font-medium text-sm text-gray-800 -ml-24 md:-ml-1 lg:-ml-10">
                                {product.name}
                            </span>

                            {/* Rating */}
                            <span className="flex text-xs text-white bg-gradient-to-r from-color1 to-color2 px-4 md:px-2 rounded-full gap-1 py-[0.2rem] items-center">
                                <p className="text-xs">Top Rate</p>
                                {[...Array(2)].map((index) => (
                                    <FaStar key={index} className="text-white" />
                                ))}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-500 text-sm pb-5 lg:pb-20">{product.description}</p>

                        {/* Rating and reviews */}
                        <div className="flex items-center mt-2 text-gray-500">
                            <span className="flex items-center text-sm mr-1">
                                <FaStar className="text-yellow-400 mr-1 text-sm items-center" fill="yellow" />
                                {product.rating.toFixed(1)}
                            </span>
                            <span className="text-xs">({product.reviews} reviews)</span>
                        </div>

                        {/* Add to keranjang*/}
                        <div className="mt-4 flex justify-between items-center">
                            <button className="text-white  w-full py-2 md:py-1 bg-gradient-to-r from-color1 to-color2 rounded-full hover:from-color2 hover:to-color2 duration-300 text-md mr-1">
                                ${product.price}
                            </button>

                            <button className="bg-slate-400 text-white px-2 py-2 text-lg rounded-full hover:bg-gray-600">
                                <FaCartArrowDown />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

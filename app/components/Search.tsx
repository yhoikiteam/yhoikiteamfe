import { FaSearch } from "react-icons/fa";
import Button from "./Button";

export default function Search () {
    return(
        <div id="search" className="bg-gray-200 rounded-full flex items-center text-gray-400 duration-300 hover:border hover:border-gray-300"><FaSearch className="mx-4 max-md:my-3"/><input type="search" name="search" id="search" placeholder="search" className="text-gray-700 bg-transparent rounded-full py-2 focus:outline-none max-md:hidden" /><div className="max-md:hidden"><Button id="search" text="Search" url="/search" customcss="#"/></div></div>
    )
}
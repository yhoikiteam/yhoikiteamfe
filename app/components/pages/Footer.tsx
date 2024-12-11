import { FaInstagram, FaWebAwesome, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
    return(
        <div className="w-full p-8 text-gray-700">
            <div className="bg-gray-200 rounded-3xl p-24 flex justify-between space-x-36">
                <div id="about" className="space-y-5">
                    <a href="/" id="logo" className="flex space-x-3 items-center"><img className="w-7" src="https://i.ibb.co.com/0DhSzYN/Yhoiki.png" alt="logo" /><h1 className="text-gray-700 font-bold text-xl">Yhoiki</h1></a>
                    <p >
                        Yhoiki Team adalah komunitas pengembang yang berdedikasi menciptakan solusi digital kreatif dan inovatif. Kami memiliki pengalaman dalam membangun aplikasi modern, website interaktif, serta teknologi masa depan yang membantu mempercepat transformasi digital Anda.
                    </p>
                    <p className="text-[#A8A8A8] text-[13px] flex items-center gap-1">
                        <span className=" text-xl"> &copy;</span>Copyright Yhoiki 2024.
                        All right reveserd.
                    </p>
                </div>
                <div id="map" className="space-y-5">
                    <h1 className="text-gray-700 font-bold text-xl">Web Map</h1>
                    <div className="flex space-x-14">
                        <div className="list-none space-y-4">
                            <li>Home</li>
                            <li>Testimony</li>
                            <li>Freelance</li>
                            <li>Course</li>
                            <li>Programs</li>
                            <li>Produk</li>
                        </div>
                        <div className="list-none space-y-4">
                            <li>Home</li>
                            <li>Testimony</li>
                            <li>Freelance</li>
                            <li>Course</li>
                            <li>Programs</li>
                            <li>Produk</li>
                        </div>
                    </div>
                </div>
                <div id="contact" className="space-y-5 ">
                    <h1 className="text-gray-700 font-bold text-xl">Contact</h1>
                    <div className="flex items-center space-x-3"><FaWhatsapp/> <p>+62 857-4337-9513</p></div>
                    <div className="flex items-center space-x-3"><FaInstagram/> <p>yhoikiteam_</p></div>
                    <div className="flex items-center space-x-3"><FaWebAwesome/> <p>yhoikiteam.co.id</p></div>
                </div>
            </div>
        </div>
    )
}
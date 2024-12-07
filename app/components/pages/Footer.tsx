export default function Footer() {
    return(
        <div className="w-full p-8 text-gray-700">
            <div className="bg-gray-200 rounded-3xl p-24 flex items-center justify-center">
                <div id="about" className="space-y-5">
                    <a href="/" id="logo" className="flex space-x-3 items-center"><img className="w-7" src="https://i.ibb.co.com/0DhSzYN/Yhoiki.png" alt="logo" /><h1 className="text-gray-700 font-bold text-xl">Yhoiki</h1></a>
                    <p className="w-3/12">
                        Yhoiki Team adalah komunitas pengembang yang berdedikasi menciptakan solusi digital kreatif dan inovatif. Kami memiliki pengalaman dalam membangun aplikasi modern, website interaktif, serta teknologi masa depan yang membantu mempercepat transformasi digital Anda.
                    </p>
                    <p className="text-[#A8A8A8] text-[13px] flex items-center gap-1">
                        <span className=" text-xl"> &copy;</span>Copyright Yhoiki 2024.
                        All right reveserd.
                    </p>
                </div>
            </div>
        </div>
    )
}
import Image from "next/image"

interface Props {
    gambar: string;
    nama: string;
    komennya: string;
}

export default function Testimony ({ gambar, nama, komennya } : Props)  {
    return(
        <div className="w-72 h-28 bg-gray-200 rounded-3xl border border-gray-300 shadow-xl flex space-x-4 items-center text-gray-700 p-3">
            <div id="profile">
            <Image
                src={gambar}
                alt="User Avatar"
                width={62}
                height={62}
                className="rounded-full"
              />
            </div>
            <div className="flex-col items-center">
                <div id="nama">
                    <h1 className="bg-gradient-to-r from-color1 to-color2 rounded-full text-white font-medium text-center text-sm">{nama}</h1>
                </div>
                <div id="komennya" className="w-44 h-10 overflow-hidden">
                    <p className="text-xs p-0.5">{komennya}</p>
                </div>
            </div>
        </div>
    )
};
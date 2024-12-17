
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";


interface FormRegisterProps {
    logoSrc: string;
    bgImageSrc: string;
    logoAlt: string;
    logoText: string;
    buttonText: string;
    buttonUrl: string;
    loginUrl: string;
}

export default function FormRegister({
    logoSrc,
    bgImageSrc,
    logoAlt,
    logoText,
    buttonText,
    buttonUrl,
    loginUrl,
}: FormRegisterProps) {
    return (
        <div className="flex justify-center items-center h-screen bg-slate-300">
            <div className="flex bg-gray-200 shadow-lg rounded-2xl overflow-hidden md:min-w-[50rem] w-[20rem]">
                {/* gambar */}
                <div className="hidden md:flex w-1/2 relative">
                    <Image
                        src={bgImageSrc}
                        alt="Background"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 flex items-center">
                        <Image
                            src={logoSrc}
                            alt={logoAlt}
                            width={24}
                            height={24}
                        />
                        <span className="text-white ml-2 font-bold text-lg">{logoText}</span>
                    </div>
                </div>

                {/* form */}
                <div className="w-full md:w-1/2 px-6 pt-20 pb-8">
                    <h2 className="text-xl font-bold text-gray-700 text-center mb-6">
                        Register
                    </h2>
                    <form>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                className="w-full px-4 py-2 border rounded-full outline outline-1 outline-slate-300 focus:outline-2 focus:outline-slate-400 bg-gray-200 text-gray-800 text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email or Telephone Number"
                                className="w-full px-4 py-2 border rounded-full outline outline-1 outline-slate-300 focus:outline-2 focus:outline-slate-400 bg-gray-200 text-gray-800 text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border rounded-full outline outline-1 outline-slate-300 focus:outline-2 focus:outline-slate-400 bg-gray-200 text-gray-800 text-sm"
                            />
                        </div>
                        <div className="mb-2">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full px-4 py-2 border rounded-full outline outline-1 outline-slate-300 focus:outline-2 focus:outline-slate-400 bg-gray-200 text-gray-800 text-sm"
                            />
                        </div>
                        <div className="flex justify-start mb-10">
                            <p className="text-xs mx-2 text-gray-500">
                                Already have an account?{" "}
                                <Link href={loginUrl} className="text-green-500 hover:underline">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                        <Button
                            id="register"
                            text={buttonText}
                            url={buttonUrl}
                            customcss="w-full"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

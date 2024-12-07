import Image from "next/image";
import { users } from "../../Data/User";
import Testimony from "../Testimony";

const HeroSection = () => {
  return (
    <section className="w-full bg-white pt-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-[#535753] leading-tight">
            Looking for{" "}
            <span className="text-green-500 border border-dashed border-gray-300 p-0.5">
              Digital
            </span>{" "}
            Needs from <span className="text-green-500">Technology</span> and
            Also{" "}
            <span className="text-green-500 border border-dashed border-gray-300 p-0.5">
              Learning
            </span>{" "}
            Technology.
          </h1>
          <p className="mt-4 text-[#535753] font-semibold">
            At Yholix you can find all your digital needs. Come on, start
            searching now and see the prices and discounts! Want to learn about
            technology now? Visit the course menu!
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-gradient-to-r from-[#75C57E] to-[#34A853] text-white text-sm font-bold py-2 px-6 rounded-[25px] ">
              Get Started
            </button>
            <button className="bg-gradient-to-r from-[#75C57E] to-[#34A853] text-white text-sm font-bold py-2 px-6 rounded-[25px] ">
              Help
            </button>
          </div>
          <div className="mt-6">
            <p className="text-[#A8A8A8] text-[13px] flex items-center gap-1">
              <span className=" text-xl"> &copy;</span>Copyright Yhoiki 2024.
              All right reveserd.
            </p>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/images/Hero.png"
            alt="Hero Image"
            width={600}
            height={400}
            className="rounded-3xl"
          />
          <div className="absolute text-end top-4 -right-6 bg-[#D9D9D9BF]/50 backdrop-blur-md border border-[#CCCCCC] rounded-3xl shadow-xl p-4 w-[270px]">
            <span className="bg-gradient-to-r from-[#75C57E] to-[#34A853] text-white px-10 py-1 rounded-full text-sm font-bold">
              Course
            </span>
            <p className="mt-2 text-sm text-gray-700 ">
              Yhoiki Team also provides courses to train your skills, which are
              trained by experienced mentors.
            </p>
          </div>

          <div className="absolute -bottom-6 -left-10 bg-[#D9D9D9BF]/50 backdrop-blur-md border border-[#CCCCCC] rounded-3xl shadow-xl p-4 w-[270px]">
            <span className="bg-gradient-to-r from-[#75C57E] to-[#34A853] text-white px-10 py-1 rounded-full text-sm font-bold">
              Freelance
            </span>
            <p className="mt-2 text-sm text-gray-700">
              Yhoiki Team provides various kinds of needs that are sold and of
              course handled professionally.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between py-12 px-2">
        {users.slice(0, 4).map((user, index) => (
          <div key={index}>
            <Testimony gambar={user.imagePath} nama={user.name} komennya={user.description} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

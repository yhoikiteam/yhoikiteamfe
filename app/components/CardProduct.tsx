import Image from "next/image";
import Button from "../components/Button";

interface CardProps {
  id: number;
  imageSrc: string;
  badgeSrc: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
}

export default function CardProduct({
  id,
  imageSrc,
  badgeSrc,
  name,
  price,
  rating,
  reviews,
  description,
}: CardProps) {
  return (
    <div className="inline-block min-w-[300px] max-w-sm rounded-2xl overflow-hidden border-2 border-gray-200 mx-4">
      {/* Hero Image */}
      <div className="relative h-44 flex justify-center items-center">
        <Image
          src={badgeSrc}
          alt={name}
          width={600}
          height={600}
          className="h-full w-full object-fill"
        />
      </div>
      {/* Card Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <Image
              src={imageSrc}
              alt="Badge"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className=" text-sm text-gray-800 font-semibold">{name}</span>
          </div>

          {/* Rating */}
          <span className="flex text-xs text-white bg-gradient-to-r from-color1 to-color2 px-4 md:px-2 rounded-full gap-1 py-[0.2rem] items-center">
            <p className="text-xs">Top Rate</p>
            {[...Array(2)].map((_, index) => (
              <Image
                src="/icon/Star toprate.svg"
                alt="Star Icon"
                width={10}
                height={10}
                key={index}
              />
            ))}
          </span>
        </div>

        {/* Description */}
        <div className="relative w-full md:w-[200px]">
          {" "}
          <p className="text-gray-500 text-sm pb-20 max-h-[3rem] leading-5 overflow-hidden text-ellipsis whitespace-normal">
            {description}
          </p>
        </div>

        {/* Rating and reviews */}
        <div className="flex items-center mt-2 text-gray-500">
          <span className="flex items-center text-sm mr-2">
            <Image
              src="/icon/Star 2.svg"
              alt="Star Icon"
              width={25}
              height={25}
            />
            <div className="font-bold ml-1">{rating.toFixed(1)}</div>
          </span>
          <span className="text-xs ml-1">({reviews} reviews)</span>
        </div>

        {/* Add to keranjang */}
        <div className="mt-4 flex gap-4 justify-between items-center">
          <Button
            id={`product-${price}-price`}
            url="#"
            text={`From $${price}`}
            customcss="w-full py-2 md:py-1 bg-gradient-to-r from-color1 to-color2 rounded-full hover:from-color2 hover:to-color2 duration-300 text-sm font-bold"
          />

          <button className="bg-[#D9D9D9] text-white px-2 py-2 text-lg rounded-full hover:bg-gray-600">
            <Image
              src="/icon/Cart 4.svg"
              alt="Cart Icon"
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

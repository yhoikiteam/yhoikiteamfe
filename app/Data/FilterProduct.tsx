import Image from "next/image";


export const buttonData = [
  {
    id: "1",
    url: "/popular",
    text: "Popular",
    icon: (
      <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z"
        stroke="url(#paint0_linear_190_884)"
        strokeWidth="2" // Perbarui di sini
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_190_884"
          x1="12"
          y1="3"
          x2="12"
          y2="21"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#34A853" /> {/* Perbarui di sini */}
          <stop offset="1" stopColor="#75C57E" /> {/* Perbarui di sini */}
        </linearGradient>
      </defs>
    </svg>
    
    ),
  },
  {
    id: "2",
    url: "/home",
    text: "Programing",
    icon: <Image src="/icon/icon.svg" alt="Popular" width={24} height={24} />,
    isActive: "false",
  },
  {
    id: "3",
    url: "/home",
    text: "Graphic Design",
    icon: <Image src="/icon/icon-1.svg" alt="Popular" width={24} height={24} />,
    isActive: "false",
  },
];
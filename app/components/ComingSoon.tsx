"use client"

import { useEffect, useState } from "react";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div
      className="h-screen flex flex-col items-center justify-center "
      style={{
        backgroundImage: "url('/images/Hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ni overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-500 to-transparent" />

      {/* kontennya */}
      <div className="relative z-10 text-center space-y-6 text-white ">
        <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg mb-8">We're launching something amazing soon!</p>

        {/* countdown nya */}
        <div className="flex justify-center space-x-4 text-3xl font-semibold">
          <div className="flex flex-col items-center">
            <span>{timeLeft.days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.seconds}</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

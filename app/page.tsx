import Navbar from "./components/Navbar";
import HeroSection from "./components/pages/Hero";
import Testimony from "./components/Testimony";

export default function page() {
  return(
    <div className="#">
      <div className="fixed w-full z-50">
        <Navbar/>
      </div>
      <section className="pt-14">
        <HeroSection/>
      </section> 
    </div>
  )
};
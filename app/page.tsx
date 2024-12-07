import CardProduct from "./components/CardProduct";
import Navbar from "./components/Navbar";
import HeroSection from "./components/pages/Hero";
import Kategori from "./components/pages/Kategori";

export default function page() {
  return (
    <div className="#">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      <section>
        <HeroSection/>
        <Kategori/>
      </section> 
    </div>
  )
};
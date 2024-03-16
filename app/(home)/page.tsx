import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import Skills from "./_components/Skills";

export default function page() {
  return (
    <div className="min-h-[400vh] bg-black over-hidden">
      <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]">
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
      </div>
    </div>
  );
}

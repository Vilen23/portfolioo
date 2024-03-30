import "./Nav.css"
import Image from "next/image";
import hover3d from "../../../utils/hover";
import React, { useRef } from "react";
import image from "@/public/Shivam-removebg.png";
import { Abril_Fatface, Playfair, Poppins } from "next/font/google";
const play = Playfair({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const abril = Abril_Fatface({
    subsets: ["latin"],
    weight: "400"
})
const popins = Poppins({
    subsets: ["latin"],
    weight: "400"
})


const Hero = ({hero}:{hero:React.RefObject<HTMLElement>}) => {
  const hoverhero = hover3d(hero,{
    x: 30,
    y: -40,
    z: 30,
  })
  return (
    <div className="header-content min-h-[80vh] " >
      <div className="flex justify-center my-10 p-10 text-center">
        <h1 className={`${play.className} text-4xl font-bold`}>
          "Crafting Digital Experiences: A Web Developer's Portfolio Showcase"
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-[4rem] p-5 lg:pr-[10rem] lg:pb-[5rem] lg:pl-[10rem]">
        <div className="">
          <h1 className={`text-[3rem] lg:text-[5rem] text-orange-600 transition-all ease-linear pb-[1.5rem] ${abril.className}`}>Hi,I am SHIVAM</h1>
          <p className={`${popins.className} pb-[1.5rem] text-xl lg:text-2xl text-justify`}>
            As a passionate full stack web developer, I thrive on crafting
            innovative digital solutions that not only meet but exceed
            expectations. With a keen eye for detail and a love for clean,
            efficient code.
          </p>
          <button className="px-8 py-2 border border-black bg-transparent text-white  dark:border-white relative group transition duration-200">
            <div className="absolute -bottom-2 -right-2 bg-orange-600 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
            <span className="relative font-semibold">Download CV!</span>
          </button>
        </div>
        <div className="h-[400px] w-[400px] lg:h-[600px] lg:min-w-[600px] p-5 md:p-0"  >
        <div className="image p-[1rem]" style={{
          transform:hoverhero.transform,
          transition:hoverhero.transition
        }}>
            <Image src={image} alt="Shivam" height={600} width={600} className="bg-black/30 rounded-xl" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

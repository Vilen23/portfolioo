"use client";
import "./Nav.css";
import Image from "next/image";
import hover3d from "../../../utils/hover";
import React, { useRef } from "react";
import image from "@/public/Shivam-removebg.png";
import { Abril_Fatface, Playfair, Poppins } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
import { TypewriterEffectSmooth } from "../ui/type-writter";
import { TextGenerateEffect } from "../ui/text-generate";

const play = Playfair({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});
const popins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const words = [
  {
    text:"Crafting"
  },
  {
    text:"Digital"
  },
  {
    text:"Experiences"
  },
  {
    text:"Web Developer"
  },
  {
    text:"Portfolio Showcase"
  }
]

const Header = () => {
  const hero = useRef(null);
  const hoverhero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });
  return (
    <div ref={hero}>
      <div className="header-content min-h-[80vh] ">
        <div className="flex justify-center my-10 p-10 text-center">
          <h1 className={`${play.className} text-4xl lg:text-5xl font-bold text-white relative top-[-30px]`}>
            <TypewriterEffectSmooth words={words}/>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[4rem] p-5 lg:pr-[10rem] lg:pb-[5rem] lg:pl-[10rem] relative top-[-40px]">
          <div className="">
            <h1
              className={`text-[3rem] lg:text-[4rem] text-white-600 transition-all ease-linear pb-[1rem] `}
            >
              <span className={`${play.className} text-transparent text-[62px] font-semibold  bg-clip-text bg-gradient-to-r from-orange-700  to-orange-400`}>
              Hello, I'm{""}{" "}
            </span>
            <br className="flex md:hidden"/>
            <TypeAnimation
            className={`${abril.className} `}
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Shivam",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" ,fontFamily:"Abril Fatface",fontWeight:"700",color:"white"}}
              repeat={Infinity}
            />
            </h1>
            
              <TextGenerateEffect words="As a passionate full stack web developer, I thrive on crafting
              innovative digital solutions that not only meet but exceed
              expectations. With a keen eye for detail and a love for clean,
              efficient code." className="mb-4"/>
            
            <button className="z-50 px-8 py-2 border border-black bg-transparent text-white  dark:border-white relative group transition duration-200">
              <div className="absolute -bottom-2 -right-2 bg-orange-600 h-full w-full z-60 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
              <span className="relative font-semibold">Download CV!</span>
            </button>
          </div>
          <div
            className="h-[400px] w-[400px] lg:h-[600px] lg:min-w-[600px] p-5 md:p-0"
            style={{
              transform: hoverhero.transform,
              transition: hoverhero.transition,
            }}
          >
            <div className="image p-[1rem]" >
              <Image
                src={image}
                style={{
                  transform: imageHover.transform,
                  transition: imageHover.transition,
                }}
                alt="Shivam"
                height={600}
                width={600}
                className="bg-black/30 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

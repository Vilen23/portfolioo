"use client";
import { useRef } from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Header/Navbar";
import Example from "./Components/Horizontal-scroll";
import AboutSection from "./Components/Skill/Skills";
import EmailSection from "./Components/Email/emailSection";

export default function Home() {
  const sectionRef = useRef(null);
  return (
    <>
      <Navbar />
      <Header />
      <div className="h-[150vh] lg:max-h-[100vh] mb-[100px]">
        <AboutSection/>
      </div>
      <Example/>
      <div className="h-[100vh] mt-20 lg:mt-0">
      <EmailSection/>
      </div>
    </>
  );
}

import React from "react";
import Title from "@/app/Components/Title";
import { HoverEffect } from "@/app/Components/HoverEffect";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";
import { ContainerScroll } from "../ui/container-scroll";

const AboutSection = () => {
  const skills = [
    {
      title: "Next.js",
      icon: SiNextdotjs,
    },
    {
      title: "React",
      icon: SiReact,
    },
    {
      title: "Typescript",
      icon: SiTypescript,
    },
    {
      title: "Node.js",
      icon: SiNodedotjs,
    },
    {
      title: "Prisma",
      icon: SiPrisma,
    },
    {
      title: "Express.js",
      icon: SiExpress,
    },
    {
      title: "MongoDB",
      icon: SiMongodb,
    },
    {
      title: "Postgresql",
      icon: SiPostgresql,
    },
    {
      title: "TailwindCSS",
      icon: SiTailwindcss,
    },
  ];

  return (
    <div
      className="flex justify-center mt-20 cursor-pointer mx-auto px-8"
      id="skills"
    >
      <div className="w-[900px] h-[1000px]">
        <ContainerScroll
          titleComponent={
            <>
              <div className="flex justify-center -rotate-6 relative bottom-[-50px]">
                <Title heading="Skills 🔪" />
              </div>
            </>
          }
        > 
          <HoverEffect items={skills} />
        </ContainerScroll>
      </div>
    </div>
  );
};

export default AboutSection;

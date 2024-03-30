"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/Components/ui/3dCard";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

interface CardProps {
  url: string;
  title: string;
  description: string;
  livelink?: string;
  githublink?: string;
  techstack: string;
}

export function ThreeDCardDemo({
  url,
  title,
  description,
  livelink,
  githublink,
  techstack,
}: CardProps) {
  return (
    <CardContainer className="">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[350px] sm:w-[550px] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={url}
            height="1000"
            width="1000"
            className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem className="mt-4 text-sm md:text-[16px]" translateZ="50">
          Techstack: {techstack}
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ="40"
            as={Link}
            href={livelink}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <button className="text-lg hover:underline">Live Link</button>
          </CardItem>
          <CardItem
            translateZ="40"
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold "
          >
            <a
              className="flex items-center gap-1"
              href={githublink}
              target="_blank"
            >
              <GithubIcon size={20} />
              <p>Github</p>
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

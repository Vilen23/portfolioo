"use client"
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {IconType} from "react-icons";

export const HoverEffect = ({
  items,
  className,
}:any) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item:any, idx:any) => {
        const Icon = item.icon;
        return <div
        key={idx}
        className="relative group  block p-2 h-full w-full"
        onMouseEnter={() => setHoveredIndex(idx)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence>
          {hoveredIndex === idx && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-[#565656]/[0.8] block  rounded-lg bg-opacity-0 group-hover:bg-opacity-100 "
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1, 
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
        <div className="rounded-md w-full p-4 overflow-hidden bg-[#121212] group-hover:ring-4 ring-orange-500 relative z-20 transition-all duration-500">
              <Icon className="w-8 h-8 mx-auto mt-5 " />
              <div className="py-10 z-50 relative space-y-5">
                  <p className="text-2xl font-bold text-gray-300 text-center">{item.title}</p>
              </div>
        </div>
      </div>
        })}
    </div>
  );
};

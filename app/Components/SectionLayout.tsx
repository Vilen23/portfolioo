"use client"
import React from "react";

interface SectionLayoutProps {
  children: React.ReactNode;
  ref: React.RefObject<HTMLElement>;
}

export default function SectionLayout({ children, ref }: SectionLayoutProps) {
  return <div className="h-[100vh]">{children}</div>;
}

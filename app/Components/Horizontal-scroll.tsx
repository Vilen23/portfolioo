import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ThreeDCardDemo } from "./Card";
import Title from "./Title";

const Example = (className:any) => {
  return (
    <div className={className}>
        <div className="w-[100vw] flex justify-center ">
        <Title heading="Projects" />
        </div>
      <div className="hidden lg:flex ">
        
        <HorizontalScrollCarousel />
      </div>
      <div className="flex flex-col lg:hidden ">
        {cards.map((card) => {
          return (
            <ThreeDCardDemo
              url={card.url}
              title={card.title}
              key={card.id}
              description={card.description}
              livelink={card.livelink}
              githublink={card.githublink}
              techstack={card.techstack}
            />
          );
        })}
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["45%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          {cards.map((card) => {
            return (
              <ThreeDCardDemo
                url={card.url}
                title={card.title}
                key={card.id}
                description={card.description}
                livelink={card.livelink}
                githublink={card.githublink}
                techstack={card.techstack}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
  description: string;
  livelink?: string;
  githublink?: string;
  techstack: string;
};

const cards: CardType[] = [
  {
    id: 1,
    url: "/Chattingapp.png",
    title: "Socialy: Where Communities Connect",
    description: "Uniting Communities Through Cutting-Edge Communication",
    livelink: "https://socialy-production.up.railway.app/",
    githublink: "https://github.com/Vilen23/Socialy",
    techstack:
      "Next.js 14, TypeScript, Framer Motion, Socket.io, TanStack Query, PostgreSQL, Prisma, Zod",
  },
  {
    url: "/Blg.png",
    title: "InsightStream: Where Voices Flourish",
    id: 2,
    description: "Elevating Blogging Through Technology",
    livelink: "https://medium-zeta.vercel.app/",
    githublink: "https://github.com/Vilen23/Medium",
    techstack:
      "React, Cloudflare Workers, Zod, TypeScript, Prisma, PostgreSQL, Prisma Accelerate, JWT, Firebase, Recoil",
  },
  {
    url: "/LatherBlog.png",
    title: "MERN Fusion",
    id: 3,
    description:
      "MERN Fusion: Where MongoDB, Express.js, React.js, and Node.js Unite!",
    techstack:
      "MongoDB, Express.js, React.js, Node.js, Firebase Authentication, bcrypt, Recoil, Firebase Storage, Tailwind CSS",
    livelink: "https://github.com/Vilen23/Blog",
    githublink: "https://github.com/Vilen23/Blog",
  },
  {
    url: "/Payment.png",
    title: "NextGen Payment Power: Crafting Secure Transactions",
    id: 4,
    description: "Building a Secure Payment Gateway with Next.js",
    livelink: "https://socialy-production.up.railway.app/",
    githublink: "https://github.com/Vilen23/Socialy",
    techstack:
      "Next.js 14, TypeScript, PostgreSQL, Prisma, Zod, NextAuth.js, Tailwind CSS",
  },
];

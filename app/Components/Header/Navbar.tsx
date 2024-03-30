
import Image from "next/image";
import React from "react";
import logo from "@/public/Shivam.png"
import "./Nav.css";
import { Roboto } from "next/font/google";
import { BiMenu } from "react-icons/bi";
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
const rob = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Navbar = () => {
  return (
    <nav className="flex justify-between px-5 lg:px-20 items-center min-h-[10vh] nav">
      <div>
        <Image src={logo} height={36} alt="Logo" className="filter invert" />
      </div>
      
      <ul className="lg:flex hidden items-center gap-10 text-[22px] nav-items ">
        <li><a href="#" className={rob.className}><GithubIcon/></a></li>
        <li><a href="#" className={rob.className}><LinkedinIcon/></a></li>
        <li><a href="#" className={rob.className}><TwitterIcon/></a></li>
        <li><a href="#" className={rob.className}><InstagramIcon/></a></li>
      </ul>
      <div className="flex lg:hidden">
        <BiMenu size={40}/>
      </div>
    </nav>
  );
};

export default Navbar;
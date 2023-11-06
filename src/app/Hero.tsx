"use client"
import React, { useRef } from 'react';
import herobg from "../../public/assets/hero-bg.jpg";
import pizza from "../../public/assets/pizza.png";
import Image from 'next/image';
import { motion, scrollInfo } from "framer-motion";
// import Link from 'next/link';
import { Link as ScrollLink} from 'react-scroll';

function Hero() {
  return (
    <div className="relative">
      <div className="h-[100vh] brightness-[40%] ">
        <Image src={herobg} alt="Hero Image" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
          <Image src={pizza} alt="Pizza" width={200} height={200} />
        <h1 className="text-5xl text-white font-extrabold">ALWAYS FRESH &</h1>
        <h1 className="text-5xl text-white font-extrabold">ALWAYS CRISPY &</h1>
        <p className="text-5xl text-white font-bold">ALWAYS HOT</p>
        <ScrollLink to="menu" offset={-50} smooth={true}  duration={700} >
        <button className="bg-yellow-400 w-[8rem] h-[3rem] rounded-lg text-black active:bg-yellow-200 ">Order Now</button>
        </ScrollLink>
      </div>
    </div>
  );
}

export default Hero;

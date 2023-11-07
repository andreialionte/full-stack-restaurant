"use client"
import React, { useEffect, useState } from 'react';
import herobg from "../../public/assets/hero-bg.jpg";
import pizza from "../../public/assets/pizza.png";
import Image from 'next/image';
import { motion, scrollInfo } from "framer-motion";
import Link from 'next/link';
import Navbar from './Navbar';
import { Link as ScrollLink} from 'react-scroll';
import { useInView } from 'react-intersection-observer';

function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (inView) {
      window.addEventListener('scroll', handleScroll)
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [inView]);

  return (
    <div>
      <Navbar />
      <div className="relative">
        <div ref={ref} className="h-[100vh] brightness-[40%] overflow-hidden">
          <motion.div
            style={{
              transform: `translateY(${scrollY / 2}px)`, 
            }}
          >
            <Image src={herobg} alt="Hero Image" className="max-md:h-[100vh] object-cover"/>
          </motion.div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <Image src={pizza} alt="Pizza" width={200} height={200} className="max-md:w-[120px] max-md:h-[120px]" />
          <h1 className="text-5xl text-white font-extrabold max-md:text-2xl">ALWAYS FRESH &</h1>
          <h1 className="text-5xl text-white font-extrabold max-md:text-2xl">ALWAYS CRISPY &</h1>
          <p className="text-5xl text-white font-bold max-md:text-2xl">ALWAYS HOT</p>
          <div className="flex gap-[1rem]">
            <ScrollLink to="menu" offset={-50} smooth={true} duration={700}>
              <button className="bg-yellow-400 w-[8rem] h-[3rem] rounded-lg text-black active:bg-yellow-200 max-md:w-[6rem] max-md:w-[2rem]">Order Now</button>
            </ScrollLink>
            <Link href="/foods">
            <button className="bg-yellow-400 w-[8rem] h-[3rem] rounded-lg text-black active:bg-yellow-200
            max-md:w-[6rem] max-md:w-[2rem]"
            >All Foods</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

"use client"
import React from 'react'
import Link from 'next/link'

function Navbar2() {
  return (
    <div className="text-white  flex text-[5rem] gap-10 justify-center cursor-pointer font-semibold absolute top-[10rem] w-[205vh] max-md:w-[55vh] " >
        <Link href="/foods/pizza" className="focus:text-yellow-400 max-md:text-[1rem]">Pizza</Link>
        <Link href="/foods/pasta" className="focus:text-yellow-400 max-md:text-[1rem]">PASTA</Link>
        <Link href="/foods/burgers" className="focus:text-yellow-400 max-md:text-[1rem]">BURGERS</Link>
    </div>
  )
}

export default Navbar2;
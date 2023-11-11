"use client"
import React, {useState} from 'react';
import menu from "../../public/assets/menu.png";
import Image from 'next/image';
import X_icon from "../../public/assets/Small_close_button.png";
import cart from "../../public/assets/cart-42-64.ico"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [itemsCart, setItemsCart] = useState(0);

  const handlerMenu = () => {
    setIsOpen(!isOpen) 
    console.log("clicked")
  }

  const ifIsOpen = !isOpen ? "absolute z-[1] mt-[1.2rem] ml-[1.2rem] cursor-pointer transition-all duration-500 ease-in-out" : "top-0 left-0  z-[1]   cursor-pointer bg-stone-900 h-[100vh] w-[100vw] fixed opacity-90 transition-all duration-500 ease-in-out";

  const CartFix = !isOpen ? "absolute z-[1] right-0 mt-[1.2rem] mr-[1.2rem] w-[2.5rem] h-[2.5rem] transition-all duration-500" : " w-0 h-0 transition-all duration-500 absolute z-[2] right-0 mt-[1.2rem] mr-[1.2rem]"


  const itemsCartFix = !isOpen ? "absolute z-[1] right-0 mt-[0.2rem] mr-[2.4rem]  text-[1rem] bg-yellow-400 rounded-full h-[1.6rem] w-[1.6rem] flex justify-center text-[1.2rem] transition-all duration-500" : "w-0 h-0 transition-all duration-500 absolute z-[1] right-0 mt-[0.2rem] mr-[2.4rem] text-[0rem]"

  return (
    <div>
    <div className={ifIsOpen}>
      {isOpen && (
        <div className="flex flex-row">
          <h1>Register</h1>
          <h1>Login</h1>
        </div>
      )}
      <Image src={isOpen ? X_icon : menu} alt={isOpen ? "x_icon" : "menu"} className="w-[2rem] h-[2rem] top-0 left-0" onClick={() => handlerMenu()} />
      </div>
      <Image src={cart} alt="cart" className={CartFix}/>
      <div className={itemsCartFix}>
      <h1>{itemsCart}</h1>
      </div>
      </div>
  )
}

export default Navbar
import React, {useState} from 'react';
import menu from "../../public/assets/menu.png";
import Image from 'next/image';
import X_icon from "../../public/assets/Small_close_button.png";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const handlerMenu = () => {
    setIsOpen(!isOpen) 
    console.log("clicked")
  }

  const ifIsOpen = !isOpen ? "absolute top-0 left-0 z-[1] mt-[1.2rem] ml-[1.2rem] cursor-pointer transition-all duration-500 ease-in-out" : "top-0 left-0  z-[1]   cursor-pointer bg-stone-900 h-[100vh] w-[100vw] fixed opacity-90 transition-all duration-500 ease-in-out";



  return (
    <div className={ifIsOpen}>
      {isOpen && (
        <div className="flex justify-center">
          <h1>Register</h1>
          <h1>Login</h1>
        </div>
      )}
      <Image src={isOpen ? X_icon : menu} alt={isOpen ? "x_icon" : "menu"} className="w-[2rem] h-[2rem]" onClick={() => handlerMenu()} />
    </div>
  )
}

export default Navbar;
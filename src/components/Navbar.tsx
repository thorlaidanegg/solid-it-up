'use client';
import React, { useEffect, useState } from 'react';
import { RiMenu4Fill } from "react-icons/ri";
import { IoBag } from "react-icons/io5";
import { SiZcool } from "react-icons/si";
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { FaTshirt } from "react-icons/fa";
import { PiPants } from "react-icons/pi";
import { GiSleevelessJacket } from "react-icons/gi";
import { FaRobot } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`z-50 fixed top-0 left-0 w-full bg-transparent transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex justify-between items-center p-4">
        <div className=''>
          <Sheet>
            <SheetTrigger><RiMenu4Fill className="text-white" size="45" /></SheetTrigger>
            <SheetContent side="left" className="bg-black" width="w-1/3 sm:w-1/4">
              <SheetHeader>
                <SheetTitle><div className="text-white text-4xl mb-16">Categories</div></SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-12">
                    <div className="flex text-center hover:border-gray-600">
                      <FaTshirt className="hover:text-white" size={150} />
                      <div className='text-white text-lg m-auto'>Tshirts</div>
                    </div>
                    <div className="flex text-center hover:border-gray-600">
                      <PiPants className="hover:text-white" size={150} />
                      <div className='text-white text-lg m-auto'>Pants</div>
                    </div>
                    <div className="flex text-center hover:border-gray-600">
                      <GiSleevelessJacket className="hover:text-white" size={150} />
                      <div className='text-white text-lg m-auto'>Jackets</div>
                    </div>
                                
                    <div className="flex text-center hover:border-gray-600 gap-32 m-5">
    
                        <div>
                            <AiFillPicture className="hover:text-white" size={70}/>
                            <div className='text-white text-lg m-auto'>upload</div>
                        </div>
                        <div>
                            <FaRobot className="hover:text-white" size={70}/>
                            <div className='text-white text-lg m-auto'>AI</div>
                        </div>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/">
          <SiZcool className="text-white" size="45" />
        </Link>
        <div>
          <Sheet>
            <SheetTrigger><IoBag className="text-white" size="45" /></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Your Cart</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

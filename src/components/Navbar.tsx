import React from 'react';
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

const Navbar = () => {
  return (
    <div className="z-50 fixed top-0 left-0 w-full bg-transparent">
      <div className="flex justify-between items-center p-4">
        <div>
          <Sheet>
            <SheetTrigger><RiMenu4Fill className="text-white" size="45" /></SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
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
                <SheetTitle>Are you absolutely sure?</SheetTitle>
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

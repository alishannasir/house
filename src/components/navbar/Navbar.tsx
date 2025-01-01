"use client"

import { useState } from "react";
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { IoMenu } from "react-icons/io5";
import {useSwitchButton} from "@/GlobalStates/SwitchButtonContext"

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("rent");
  const { switchButton, setSwitchButton } = useSwitchButton();
  const handleToggle = () => {
    setSwitchButton((prev) =>
      prev === "Switch to Buy" ? "Switch to Host" : "Switch to Buy"
    );
  };

  return (
    <>
      <NavigationMenu className="flex w-full max-w-full  top-0">
        <NavigationMenuList className="flex items-center justify-between space-x-80 gap-x-32">
          <NavigationMenuItem className="flex items-center">
            <Image
              src="/Rent_me.png"
              alt="Rent me"
              className="dark:invert"
              width={140}
              height={30}
              priority
            />
          </NavigationMenuItem>

          <NavigationMenuItem className="flex items-center gap-4">
            <span
              onClick={() => setActiveButton("rent")}
              className={`cursor-pointer text-xl font-semibold px-4 py-2 rounded-full 
                ${
                  activeButton === "rent"
                    ? "text-primaryColor "
                    : "text-lightBlackColor hover:text-primaryColor hover:bg-lightGreyColor"
                }`}
            >
              Rent
            </span>
            <span
              onClick={() => setActiveButton("buy")}
              className={`cursor-pointer text-xl font-semibold px-4 py-2 rounded-full 
                ${
                  activeButton === "buy"
                  ? "text-primaryColor "
                    : "text-lightBlackColor hover:text-primaryColor hover:bg-lightGreyColor"
                }`}
            >
              Buy
            </span>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex flex-row items-center ">
          <button
                onClick={handleToggle}
                className="text-md font-semibold px-4 py-2 rounded-full text-lightBlackColor cursor-pointer w-40"
                >
                {switchButton}
          </button>
            <Link href="/docs" legacyBehavior passHref>
              <div className="flex flex-row items-center gap-2 border-2 border-backgroundOneColor rounded-full p-2 hover:shadow-lg">
                <IoMenu className="w-8 h-8"/>
                <div className="flex items-center bg-primaryColor text-white px-4 py-2 rounded-full">A</div>
              </div>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Navbar;

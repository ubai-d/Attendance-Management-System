"use client";
import React, { useState } from "react";
import logo from "@/public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
function Header() {
  const [open, setopen] = useState(false);

  return (
    <>
      <div className="bg-main w-full h-[80px] text-white md:flex flex-row hidden justify-between px-20 items-center">
        <div className="">
          <Image src={logo} alt="logo" className="w-14 h-14 rounded-full" />
        </div>
        <div>
          <ul className="flex flex-row">
            <li className="cursor-pointer mx-5">
              <Link href={"/"} />
              Home
            </li>
            <li className="cursor-pointer mx-5">
              <Link href={"/"} />
              About
            </li>
            <li className="cursor-pointer mx-5">
              <Link href={"/"} />
              FAQ
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="px-5 py-2">
            <Link href={"/Login"}>
            <button>Login</button>
            </Link>
          </div>
          <div className="text-main bg-sub rounded-full px-5 py-2">
            <Link href={"/Signup"}>
              <button>Register</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-main w-full h-[80px] text-white md:hidden flex flex-row justify-between items-center px-10">
        <div className="">
          <Image src={logo} alt="logo" className="w-14 h-14 rounded-full" />
        </div>
        <div>
          {open ? (
            <button
              className="text-sub"
              onClick={() => {
                setopen(!open);
              }}
            >
              <RxCross2 size={35} />
            </button>
          ) : (
            <button
              className="text-sub"
              onClick={() => {
                setopen(!open);
              }}
            >
              <RxHamburgerMenu size={35} />
            </button>
          )}
        </div>
      </div>
      {open ? (
        <div className="bg-main h-screen w-full md:hidden flex flex-col">
          <div>
            <ul className="flex flex-col text-white my-40 mx-5 text-xl">
              <div className="flex mx-auto my-10">
                <div className="px-5 py-2 text-white">
                  <button>Login</button>
                </div>
                <div className="text-main bg-sub rounded-full px-5 py-2">
                  <Link href={"/Signup"}>
                    <button>Register</button>
                  </Link>
                </div>
              </div>
              <Link
                href={"/"}
                onClick={() => {
                  setopen(!open);
                }}
                className="cursor-pointer mx-5 py-5 border-b border-sub"
              >
                Home
              </Link>
              <Link
                href={"/"}
                onClick={() => {
                  setopen(!open);
                }}
                className="cursor-pointer mx-5 py-5 border-b border-sub"
              >
                About Us
              </Link>
              <Link
                href={"/"}
                onClick={() => {
                  setopen(!open);
                }}
                className="cursor-pointer mx-5 py-5 border-b border-sub"
              >
                FAQ
              </Link>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Header;

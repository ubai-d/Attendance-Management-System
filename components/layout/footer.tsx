import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import logo from "@/public/logo.jpg";
import { FaLinkedinIn } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"

export default function Footer() {
  return (<>
  <div className="bg-main flex flex-col mt-60 ">
    <div className="flex flex-col items-center justify-center my-20">
        <div className="">
            <Image src={logo} alt="logo" className="w-16 h-16 rounded-full"/>
        </div>
        <div className="flex sm:flex-row flex-col gap-5 mt-10 text-white text-sm">
            <Link href={'/'} className="sm:border-r border-sub sm:px-4">About</Link>
            <Link href={'/'} className="sm:border-r border-sub sm:pr-4">FAQ</Link>
            <Link href={'/'}>Register</Link>
        </div>
        <div className="flex flex-row mt-5 text-white gap-4">
            <FaLinkedinIn size={25}/>
            <AiFillFacebook size={25}/>
            <AiFillGithub size={25}/>

        </div>
    </div>
    <div className="md:mx-20 mx-5 flex sm:flex-row flex-col sm:text-start text-center sm:justify-between text-gray-400 border-t-2 border-white">
            <div className="mt-5">© 2023 U Developers. All rights reserved.</div>
            <div className="mt-5">Terms and Conditions</div>
        </div>
    </div>
    
    </>
  );
  }
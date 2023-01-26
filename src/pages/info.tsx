import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

import { api } from "../utils/api";

const info: NextPage = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="flex rounded-bl-lg rounded-br-lg bg-blue-200 py-0.5">
        <Link href="/">
          <img className="float-left h-[5vh] max-w-lg" src="logo.png"></img>
          <h1 className="float-left text-4xl text-indigo-900">Blog A.I.</h1>
        </Link>
      </div>
      <Link href="/">
        <button className="btn-outline btn-circle btn fixed bottom-5 right-5 text-center text-3xl">
          <AiOutlineHome className="h-8 w-8" />
        </button>
      </Link>
      <div className="mt-[4vh] ml-[32vw] flex items-center">
        <h1 className="text-5xl text-gray-800">
          JavaScript library:
        </h1>
        <Link href="https://reactjs.org/">
          <img className="h-[15vh] w-[10vw]" src="pngwing.com.png"></img>
        </Link>
      </div>
      <div className="mt-[10vh] ml-[68vw] flex items-center">
        <h1 className="text-5xl text-gray-800">
          React framework:
        </h1>
        <Link href="https://reactjs.org/">
          <img
            className="h-[10vh] w-[10vw]"
            src="800px-Nextjs-logo.svg.png"
          ></img>
        </Link>
      </div>
      <div className=" mt-[10vh] ml-[1vw] flex items-center">
        <h1 className="float-left  text-5xl text-gray-800">
          CSS framework:
        </h1>
        <Link href="https://tailwindcss.com/">
          <img className="h-[10vh] w-[13vw]" src="pngwing.com(1).png"></img>
        </Link>
      </div>
      <div className="flex items-center mt-[10vh] ml-[50vw]">
        <h1 className="text-5xl text-gray-800">
          CSS component library:
        </h1>
        <Link href="https://daisyui.com/">
          <img className="h-[10vh] w-[10vw]" src="logo-4.svg"></img>
        </Link>
      </div>
      <div className="flex items-center mt-[10vh] ml-[15vw]">
        <h1 className="text-5xl text-gray-800">
          Information source:
        </h1>
        <Link href="https://www.futuretools.io/">
          <img
            className="h-[6vh] w-[15vw]"
            src="639d02188defc07c32bea5b0_Future Tools Logo-p-500.png"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default info;

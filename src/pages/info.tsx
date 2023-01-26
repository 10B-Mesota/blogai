import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {AiOutlineHome} from 'react-icons/ai';

import { api } from "../utils/api";

const info: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="bg-[url('WallpaperDog-10850082.jpg')]">
      <div className="bg-blue-200 rounded-bl-lg py-0.5 rounded-br-lg flex">
        <Link href="/">
          <img className="max-w-lg h-[5vh] w-[vw] float-left" src="logo.png"></img>
          <h1 className="text-indigo-900 text-4xl float-left">Blog A.I.</h1>
        </Link>
      </div>
      <Link href="/">
        <button className="btn-outline btn-circle btn fixed bottom-5 right-5 text-center text-3xl">
          <AiOutlineHome className="h-8 w-8"/>
        </button>
      </Link>
      <h1 className="float-left text-5xl underline text-gray-800 mb-10 mt-10 mr-10 pl-40 ml-40 absolute">JavaScript library:</h1>
      <Link href="https://reactjs.org/"><img className="h-[10vh] mb-10 mt-4 mr-10 pl-96 ml-80" src="pngwing.com.png"></img></Link>
      <h1 className="float-left text-5xl underline text-gray-800 mb-10 mt-6 pl-96 absolute right-60">React framework:</h1>
      <Link href="https://nextjs.org/"><img className="h-[10vh] mb-10 mt-13 pl-96 absolute right-10" src="800px-Nextjs-logo.svg.png"></img></Link>
      <h1 className="float-left text-5xl underline text-gray-800 mb-10 mt-56 pl-96 ml-96 absolute">CSS framework:</h1>
      <Link href="https://tailwindcss.com/"><img className="h-[6vh] mb-10 mt-56 pl-96 ml-96 left-96 absolute" src="pngwing.com(1).png"></img></Link>
      <h1 className="float-left text-5xl underline text-gray-800 mb-12 mt-56 left-10 absolute bottom-72">CSS component library:</h1>
      <Link href="https://daisyui.com/"><img className="h-[5vh] mb-10 left-96 ml-48 absolute bottom-72" src="logo-4.svg"></img></Link>
      <h1 className="float-left text-5xl underline text-gray-800 mb-12 mt-96 pr-56 absolute right-96 bottom-20">Information source:</h1>
      <Link href="https://www.futuretools.io/"><img className="h-[5vh] mb-10 mt-96 pr-56 absolute right-20 bottom-20" src="639d02188defc07c32bea5b0_Future Tools Logo-p-500.png"></img></Link>
    </div>
  );
};

export default info;

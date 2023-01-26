import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

import { api } from "../utils/api";

const info: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="flex rounded-bl-lg rounded-br-lg bg-blue-200 py-0.5">
        <Link href="/">
          <img
            className="float-left h-[5vh] w-[vw] max-w-lg"
            src="logo.png"
          ></img>
          <h1 className="float-left text-4xl text-indigo-900">Blog A.I.</h1>
        </Link>
      </div>
      <Link href="/">
        <button className="btn-outline btn-circle btn fixed bottom-5 right-5 text-center text-3xl">
          <AiOutlineHome className="h-8 w-8" />
        </button>
      </Link>
      <h1 className="absolute float-left mb-10 mt-10 mr-10 ml-40 pl-40 text-5xl text-gray-800 underline">
        JavaScript library:
      </h1>
      <Link href="https://reactjs.org/">
        <img
          className="mb-10 mt-4 mr-10 ml-80 h-[10vh] pl-96"
          src="pngwing.com.png"
        ></img>
      </Link>
      <h1 className="absolute right-60 float-left mb-10 mt-6 pl-96 text-5xl text-gray-800 underline">
        React framework:
      </h1>
      <Link href="https://nextjs.org/">
        <img
          className="mt-13 absolute right-10 mb-10 h-[10vh] pl-96"
          src="800px-Nextjs-logo.svg.png"
        ></img>
      </Link>
      <h1 className="absolute float-left mb-10 mt-56 ml-96 pl-96 text-5xl text-gray-800 underline">
        CSS framework:
      </h1>
      <Link href="https://tailwindcss.com/">
        <img
          className="absolute left-96 mb-10 mt-56 ml-96 h-[6vh] pl-96"
          src="pngwing.com(1).png"
        ></img>
      </Link>
      <h1 className="absolute left-10 bottom-72 float-left mb-12 mt-56 text-5xl text-gray-800 underline">
        CSS component library:
      </h1>
      <Link href="https://daisyui.com/">
        <img
          className="absolute left-96 bottom-72 mb-10 ml-48 h-[5vh]"
          src="logo-4.svg"
        ></img>
      </Link>
      <h1 className="absolute right-96 bottom-20 float-left mb-12 mt-96 pr-56 text-5xl text-gray-800 underline">
        Information source:
      </h1>
      <Link href="https://www.futuretools.io/">
        <img
          className="absolute right-20 bottom-20 mb-10 mt-96 h-[5vh] pr-56"
          src="639d02188defc07c32bea5b0_Future Tools Logo-p-500.png"
        ></img>
      </Link>
    </div>
  );
};

export default info;

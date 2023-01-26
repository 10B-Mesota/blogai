import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {AiOutlineHome} from 'react-icons/ai';

import { api } from "../utils/api";

const info: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
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
      <h1>JavaScript library:</h1>
      <img className="h-[10vh]" src="pngwing.com.png"></img>
      <h1>React framework:</h1>
      <img className="h-[10vh]" src="800px-Nextjs-logo.svg.png"></img>
    </>
  );
};

export default info;

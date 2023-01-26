import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

import { api } from "../utils/api";

const info: NextPage = () => {
  return (
    <>
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
    </>
  );
};

export default info;

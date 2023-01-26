import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

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
        <button className="btn btn-circle btn-outline text-3xl text-center fixed bottom-5 right-5">
          <h1 className="text-4xl ">←</h1>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </button>
      </Link>
    </>
  );
};

export default info;

import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <h1 className="bg-blue-400 text-white rounded-bl-lg py-5 px-10 rounded-br-lg text-5xl">Blog A.I.</h1>
    </>
  );
};

export default Home;

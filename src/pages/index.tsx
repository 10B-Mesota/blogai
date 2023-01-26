import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="bg-blue-100">
      <h1 className="bg-blue-400 text-white rounded-bl-lg py-5 px-10 rounded-br-lg text-5xl">Blog A.I.</h1>
      <center><h2>Filler</h2></center>
    </div>
  );
};

export default Home;

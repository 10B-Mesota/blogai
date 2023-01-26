import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Card from "../Components/card";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { api } from "../utils/api";
import { useState } from "react";
import { BlogEntry } from "@prisma/client";
import Tag from "../Components/tags/tag";
import { BiHelpCircle } from "react-icons/bi";

const Home: NextPage = () => {
  const [filter, setFilter] = useState([]);
  const entries = api.post.getPosts.useQuery;

  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="flex rounded-bl-lg rounded-br-lg bg-blue-200 py-0.5">
        <Link href="/">
          <img className="float-left h-[5vh] max-w-lg" src="logo.png"></img>
          <h1 className="float-left text-4xl text-indigo-900">Blog A.I.</h1>
        </Link>
        <Tag tags={filter} />
      </div>
      <div className="flex flex-col items-center">
        {(entries({}).data as BlogEntry[]).map((e) => (
          <div className="py-10">
            <Card name={e.name} short_desciption={e.description}></Card>
          </div>
        ))}
      </div>
      <Link href="/info">
        <button className="btn-outline btn-circle btn fixed bottom-5 right-5 text-center text-3xl">
          <AiOutlineInfoCircle className="h-8 w-8" />
        </button>
      </Link>
      <Link href="/BenefitsAndDisadvantages">
        <button className="btn-outline btn-circle btn fixed bottom-5 left-5 text-center text-3xl">
          <BiHelpCircle className="h-8 w-8" />
        </button>
      </Link>
    </div>
  );
};

export default Home;

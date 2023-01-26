import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineHome } from "react-icons/ai";

import { api } from "../utils/api";

type Inputs = {
  name: string;
  tags: string;
  description: string;
};

const create_entry: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const create = api.post.createPost.useMutation();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const tags = data.tags.split(",");
    create.mutate({
      description: data.description,
      name: data.name,
      tags: tags,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div>
        <label>Name</label>
        <input {...register("name", { required: true })} />
      </div>
      <div>
        <label>Description</label>
        <textarea {...register("description", { required: true })} />
      </div>
      <div>
        <label>Tags</label>
        <input {...register("tags", { required: true })} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default create_entry;

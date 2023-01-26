import React, { useState } from "react";
type props = {
  tags: string[];
};
const Tag = (tags: props) => {
  const set_tag = (tag: string) => {
    if (tags.tags.includes(tag)) {
      const index = tags.tags.indexOf(tag);
      tags.tags.splice(index, 1);
    } else {
      tags.tags.push(tag);
    }
  };

  return (
    <>
      <div className="mt-[1vh] flex">
        <button
          className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold  text-gray-800 shadow hover:bg-gray-300"
          onClick={() => set_tag("Business")}
        >
          #Business
        </button>
        <button
          className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold text-gray-800  shadow hover:bg-gray-300"
          onClick={() => set_tag("Business")}
        >
          #Marketing
        </button>
        <button
          className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold text-gray-800  shadow hover:bg-gray-300"
          onClick={() => set_tag("Business")}
        >
          #Copywriting
        </button>
        <button
          className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold text-gray-800  shadow hover:bg-gray-300"
          onClick={() => set_tag("Business")}
        >
          #Text
        </button>
        <button
          className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold text-gray-800  shadow hover:bg-gray-300"
          onClick={() => set_tag("Business")}
        >
          #Video
        </button>
        <button
          className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold text-gray-800  shadow hover:bg-gray-300"
          onClick={() => set_tag("Business")}
        >
          #Image
        </button>
        <button
          className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold text-gray-800  shadow hover:bg-gray-300"
          onClick={() => set_tag("Business")}
        >
          #Game
        </button>
        <button
          className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold text-gray-800  shadow hover:bg-gray-300"
          onClick={() => set_tag("Business")}
        >
          #Research
        </button>
        <button
          className="h-[3vh] rounded-full bg-white py-2 px-4 font-semibold text-gray-800  shadow hover:bg-gray-300"
          onClick={() => set_tag("Business")}
        >
          #Voice
        </button>
      </div>
    </>
  );
};

export default Tag;

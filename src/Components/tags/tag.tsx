import React, { useState } from "react";
type props = {
  tags: string[];
};
const Tag = (tags: props) => {
  return (
    <>
      <div className="mt-[1vh] flex">
        <button className="h-[3vh] rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-300">
          #Business
        </button>
        <button className="h-[3vh] rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-300">
          #Marketing
        </button>
        <button className="h-[3vh] rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-300">
          #Copywriting
        </button>
        <button className="h-[3vh] rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-300">
          #Text
        </button>
        <button className="h-[3vh] rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-300">
          #Video
        </button>
        <button className="h-[3vh] rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-300">
          #Image
        </button>
        <button className="h-[3vh] rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-300">
          #Game
        </button>
        <button className="h-[3vh] rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-300">
          #Research
        </button>
        <button className="h-[3vh] rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-300">
          #Voice
        </button>
      </div>
    </>
  );
};

export default Tag;

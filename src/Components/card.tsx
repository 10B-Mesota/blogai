import { useState } from "react";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

type CardProps = {
  name: string;
  short_desciption: string;
};

const Card = (props: CardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="group relative flex h-80 rounded-md bg-[#00CED1] text-white shadow-xl ">
      <div
        className={
          (showDetails ? "border-r-2" : "") +
          " m-8 w-96 items-center overflow-auto"
        }
      >
        <div className="text-center text-5xl">{props.name}</div>
        <div className="borde h-[20vh] w-[15vw]">
          <img
            src={props.name + "-logo.png"}
            className="h-[20vh] w-[15vw] rounded object-cover"
          ></img>
        </div>
        <button
          onClick={() => {
            setShowDetails(!showDetails);
          }}
          className="absolute top-1/2 right-0"
        >
          {showDetails ? (
            <BiLeftArrowAlt className="h-8 w-8 rounded-full bg-white p-0.5 text-blue-500" />
          ) : (
            <BiRightArrowAlt className="h-8 w-8 rounded-full bg-white p-0.5 text-blue-500" />
          )}
        </button>
      </div>
      <div
        className={
          (showDetails ? "w-96" : "w-0") +
          " scrollbar overflow-auto transition-all duration-500"
        }
      >
        <div className="mx-8 my-4 text-xl">{props.short_desciption}</div>
      </div>
    </div>
  );
};

export default Card;

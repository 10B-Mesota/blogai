import { useState } from "react";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

type CardProps = {
  name: string;
  short_desciption: string;
};

const Card = (props: CardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="group relative flex h-80 rounded-md bg-slate-600 text-white shadow-xl">
      <div
        className={
          (showDetails ? "border-r-2" : "") + " m-8 w-96 overflow-auto"
        }
      >
        <div className="h-48 text-center text-5xl">Image</div>
        <div className="text-center text-5xl">{props.name}</div>
        <button
          onClick={() => {
            setShowDetails(!showDetails);
          }}
          className="absolute top-1/2 right-0"
        >
          {showDetails ? (
            <BiLeftArrowAlt className="h-8 w-8 rounded-full bg-red-600 p-0.5 text-white" />
          ) : (
            <BiRightArrowAlt className="h-8 w-8 rounded-full bg-red-600 p-0.5 text-white" />
          )}
        </button>
      </div>
      <div
        className={
          (showDetails ? "w-96" : "w-0") +
          " overflow-auto transition-all duration-500"
        }
      >
        <div className="mx-8 my-4 text-xl">{props.short_desciption}</div>
      </div>
    </div>
  );
};

export default Card;
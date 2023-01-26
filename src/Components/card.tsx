import { useRouter } from "next/router";

type CardProps = {
  name: string;
  sorce: string;
  text: string;
};

const Card = (props: CardProps) => {
  const router = useRouter();

  return (
    <>
      <div className="card h-[50vh] w-[30vw] bg-base-100 shadow-xl ">
        <div className="card-body ">
          <figure>
            <div className="  rounded-xl">
              <img src={props.sorce} className="h-32 w-32 object-fill" />
            </div>
          </figure>
          <center>
            <h2 className="card-title">{props.name}</h2>
          </center>

          <p className="break-words align-text-top">{props.text}</p>
          <div className="card-actions justify-end">
            <button
              className="hover: rounded-full bg-green-500 py-2 px-4 font-bold text-emerald-100 hover:bg-green-700"
              onClick={() => {
                router.push({
                  pathname: "/apply",
                  query: {
                    event_name: props.name,
                  },
                });
              }}
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

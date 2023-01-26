import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Card from "../Components/card";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    (
    <div className="min-h-screen bg-gradient-to-br from-slate-500 to-blue-500">
      <div className="bg-blue-200 rounded-bl-lg py-0.5 rounded-br-lg flex">
        <Link href="/">
          <img className="max-w-lg h-[5vh] w-[vw] float-left" src="logo.png"></img>
          <h1 className="text-indigo-900 text-4xl float-left">Blog A.I.</h1>
        </Link>
      </div>
    
      <div className="flex flex-col items-center">
        {[...Array(10)].map((e) => (
          <div className="py-10">
            <Card
              name="asd"
              short_desciption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet eleifend justo. Vivamus non accumsan ex. Pellentesque tincidunt lorem elit, sit amet fringilla dui lacinia sit amet. Morbi dui diam, volutpat tempus neque blandit, cursus consequat quam. Proin eget suscipit neque. Vivamus at dolor mauris. Sed aliquam massa sed neque porta, vel facilisis sapien ornare. Cras et nisi porta, consequat justo ac, pellentesque arcu. Curabitur congue ante tellus, sit amet fermentum ante pretium ac. Curabitur scelerisque cursus ex ac tempor. Ut lacus mi, venenatis nec magna iaculis, lacinia imperdiet massa. Nulla id fermentum arcu.
Ut fringilla malesuada neque, sed ultricies mauris ultricies non. Donec convallis, turpis et rutrum efficitur, lectus enim bibendum turpis, tincidunt blandit ligula diam eu tortor. Aliquam purus augue, consequat et sapien et, iaculis auctor lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque mi felis, hendrerit nec placerat vel, vestibulum ac ligula. Nam posuere sapien quis mauris accumsan, eget aliquet leo elementum. Ut feugiat tincidunt egestas.
Sed lobortis eros ac urna vestibulum gravida et vitae quam. Ut iaculis tincidunt nulla. Praesent sed facilisis metus. Praesent aliquet ipsum ac nisl dignissim, id commodo ipsum laoreet. Etiam odio elit, vulputate vel ex vel, vehicula fringilla metus. In hac habitasse platea dictumst. Cras scelerisque purus et orci placerat euismod. Vivamus quam sem, finibus nec feugiat sed, tempor eget purus. Vestibulum eget enim eget libero elementum viverra id ut risus. Cras lacinia neque ac venenatis viverra. Sed et nisi massa. Praesent sed ligula nec diam vestibulum consectetur. Donec eu nunc sit amet lectus imperdiet pulvinar. Donec sem ex, commodo et quam sodales, congue fringilla erat. Donec neque ligula, tincidunt at quam eget, laoreet bibendum quam. Pellentesque tempus facilisis eros.
Suspendisse eu elit facilisis tortor maximus dignissim. Proin fringilla blandit consequat. Sed ut varius nisl. Mauris id sapien consequat nunc semper semper eget eget risus. Fusce efficitur erat accumsan leo varius, quis pharetra magna rhoncus. Integer tempor eleifend nunc et vehicula. Ut pulvinar turpis vitae dui fringilla, molestie faucibus ex placerat. Maecenas dictum risus ante, non semper sapien finibus ac.
Maecenas sagittis ipsum tortor, ut euismod purus mattis a. Praesent ut neque pharetra, sodales felis sed, dictum est. Aliquam eleifend dolor vel hendrerit euismod. Suspendisse luctus non leo sed tincidunt. Nunc vel pretium erat. Phasellus scelerisque hendrerit dui, in luctus urna semper ut. Morbi sollicitudin, risus quis posuere gravida, orci lorem pretium ligula, vel rhoncus tortor lacus a tellus. Maecenas auctor augue quam, ac lobortis justo malesuada ut. "
            ></Card>
  )
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

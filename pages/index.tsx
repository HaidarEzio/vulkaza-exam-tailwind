import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Logo from "../public/Logo.png";

const Home: NextPage = () => {
  return (
    <div className="max-w-full mx-20 mt-20">
      <div className="flex justify-between p-5 mb-10 border-b-2 border-b-gray-500">
        <div className="relative w-[20rem] h-32 ">
          <Image className="object-contain" src={Logo} alt="logo" fill />
        </div>
        <div className="flex items-center">
          <button className="p-3 text-lg border-2 border-gray-500 rounded">Log In</button>
        </div>
      </div>
      <section>
        <h1 className="text-4xl font-bold text-center underline">Your Products</h1>
        <div className="flex flex-wrap my-5">
          <div className="flex w-[40rem] h-[15rem] border-2 border-gray-500 p-4 ">
            <div className="flex items-center justify-center w-1/3 h-full border-2 border-black">
              <p>Hoverable Picture</p>
            </div>
            <div className="flex flex-col justify-between ml-5 grow">
              <div className="flex flex-col">
                <p className="text-xl font-bold">Product Name</p>
                <p className="mt-2 text-lg">Product Description</p>
              </div>
              <div className="flex justify-start gap-4">
                <div className="w-12 h-12 bg-red-700 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

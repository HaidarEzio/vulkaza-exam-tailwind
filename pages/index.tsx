import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Logo from "../public/Logo.png";
import customProducts1 from "../database/0001/product-data.json";
import customProducts2 from "../database/0002/product-data.json";
import customProducts3 from "../database/0003/product-data.json";
import customProducts4 from "../database/0004/product-data.json";

const fakeData = [customProducts1, customProducts2, customProducts3, customProducts4];

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
          {fakeData.map(({ name, description, colors }) => (
            <div className="flex w-[40rem] h-[15rem] border-2 border-gray-500 p-4 ">
              <div className="flex items-center justify-center w-[20rem] h-full border-2 border-black">
                <p>Hoverable Picture</p>
              </div>
              <div className="flex flex-col justify-between ml-5 grow">
                <div className="flex flex-col">
                  <p className="text-xl font-bold">{name}</p>
                  <p className="mt-2 overflow-hidden text-lg text-ellipsis">{description}</p>
                </div>
                <div className="flex justify-start gap-4">
                  {colors.map(({ name, hex }) => (
                    <div style={{ backgroundColor: hex }} className="w-12 h-12 rounded-md"></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

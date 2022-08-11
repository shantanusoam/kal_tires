import React from 'react';
import { Button } from 'react-scroll';
import { FeaturedProductsData } from '../../data/data';

const FeaturedProducts = () => (
  <div className="bg-neutral-200">
    <div className="p-28">
      <div className="flex flex-row justify-between pb-8">
        <h1 className=" font-medium text-4xl">
          <span className="text-red-500 ">FEATURED </span>PRODUCTS
        </h1>

        <div className="flex flex-row">
          <button
            type="button"
            className="group  relative     mr-2 text-center border-2 border-black  transition-all duration-100 delay-75 cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:bg-red-500 focus:text-white"
          >
            <h4 className="px-4 py-2  text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
              Commercial Tires
            </h4>
            <span className="bg-black group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
          </button>
          <button
            type="button"
            className="group  relative     mr-2 text-center border-2 border-black  transition-all duration-100 delay-75 cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:bg-red-500 focus:text-white"
          >
            <h4 className="px-4 py-2 text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
              Industrial Tires
            </h4>
            <span className="bg-black  group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
          </button>
          <button
            type="button"
            className="group  relative     mr-2 text-center border-2 border-black  transition-all duration-100 delay-75 cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:bg-red-500 focus:text-white"
          >
            <h4 className="px-4 py-2 text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
              Earthmover Tires
            </h4>
            <span className="bg-black group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
          </button>
        </div>
      </div>

      <div>
        <div className="grid  grid-cols-onsiteTemplate2 gap-4 ">
          {FeaturedProductsData.map((data) => (
            <div className="">
              <img src={data.imageurl} alt="data" />
              <div>
                <h3>{data.heading}</h3>
                <p>{data.desc}</p>
                <div>{data.CTA1.heading}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedProducts;

import { React, useState } from 'react';

import { FeaturedProductsData } from '../../data/data';

const Fdata = FeaturedProductsData;

const FeaturedProducts = () => {
  const [Feaaturedata, setFeaaturedata] = useState(Fdata);
  function SetDataFunction(params) {
    setFeaaturedata(Fdata.filter((item) => item.id === params));
  }
  return (
    <div className="bg-neutral-200">
      <div className="p-28">
        <div className="flex flex-row justify-between pb-8">
          <h1 className=" font-medium text-4xl">
            <span className="text-red-500 ">FEATURED </span>PRODUCTS
          </h1>

          <div className="flex flex-row">
            <button
              onClick={() => {
                SetDataFunction('Commercial Tires');
              }}
              type="button"
              className="group  relative     mr-2 text-center border-2 border-black  transition-all duration-100 delay-75 cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:bg-red-500 focus:text-white"
            >
              <h4 className="px-4 py-2  text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                Commercial Tires
              </h4>
              <span className="bg-black group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
            </button>
            <button
              onClick={() => {
                SetDataFunction('Industrial Tires');
              }}
              type="button"
              className="group  relative     mr-2 text-center border-2 border-black  transition-all duration-100 delay-75 cursor-pointer active:bg-violet-700 focus:outline-none focus:ring focus:bg-red-500 focus:text-white"
            >
              <h4 className="px-4 py-2 text-black group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                Industrial Tires
              </h4>
              <span className="bg-black  group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
            </button>
            <button
              onClick={() => {
                SetDataFunction('Earthmover Tires');
              }}
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
            {Feaaturedata.map((data) => (
              <div className=" bg-white px-6 py-8 flex flex-col justify-center items-center">
                <img src={data.imageurl} alt="data" className="h-72" />
                <div>
                  <h3 className="font-bold text-lg">{data.heading}</h3>
                  <p className=" text-zinc-500 mt-4 ">{data.desc}</p>
                  <button
                    type="button"
                    className="group  relative  mt-6  bg-red-600  text-center transition-all duration-100 delay-75 cursor-pointer active:bg-red-300 focus:outline-none focus:ring focus:bg-red-900 focus:text-white"
                  >
                    <h4 className="px-6 py-2 text-white group-hover:text-white z-10 relative pointer ease-in-out transition-colors">
                      {data.CTA1.heading}
                    </h4>
                    <span className="bg-black group-hover:w-full w-0 h-full absolute bottom-0 left-0 duration-500 delay-75 transition-all -z-0" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

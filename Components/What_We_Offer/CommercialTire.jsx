import React, { useState } from 'react';
import Image from 'next/image';

// eslint-disable-next-line import/named
import { CommercialTireone, CommercialTiretwo } from '../../data/data';

const CommercialTire = () => {
  const [alldata, setalldata] = useState(CommercialTireone[0]);

  return (
    <div id="commercialtiremain">
      <div id="commertiremaininner">
        <div id="commercemain">
          <div id="commercemaininner">
            <div className="bg-black">
              <div className="lg:grid lg:grid-cols-12 ">
                <div className=" col-span-3  ">
                  <div className="relative  bg-red-700 ">
                    <div className="absolute bottom-0 left-0  ">
                      <Image
                        className=" lg:rounded-tl-md  mix-blend-multiply"
                        src={alldata.BgImage}
                        alt="tires"
                      />
                    </div>
                    <div className="relative z-20 -mr-32 ">
                      <Image src={alldata.TireImage} alt="tires" />
                    </div>
                  </div>
                </div>
                <div />
                <div className="lg:hidden block ">
                  <div className="lg:relative lg:mt-4 self-start">
                    <Image
                      className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md  "
                      src={alldata.mainimagetab}
                      alt="tires"
                    />
                  </div>
                </div>
                <div className="lg:py-2 md:px-10 px-6 lg:px-0 max-w-5xl  mx-auto col-span-6  text-center lg:text-left mt-16 ">
                  <h1 className="text-white font-poppins text-4xl font-bold">
                    {alldata.Heading}
                  </h1>
                  <div id="combuttons" className="mt-12">
                    <span className="">
                      <button
                        className="   mr-2 text-center focus:border-b-2 border-white text-white  transition-all duration-100 delay-75 cursor-pointer    focus:text-kaltire-red"
                        onClick={() => setalldata(CommercialTireone[0])}
                        type="button"
                      >
                        {alldata.titleone}
                      </button>
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="">
                      <button
                        className="mr-2 text-center focus:border-b-2 border-white text-white  transition-all duration-100 delay-75 cursor-pointer    focus:text-kaltire-red "
                        onClick={() => setalldata(CommercialTiretwo[0])}
                        type="button"
                      >
                        {alldata.titletwo}
                      </button>
                    </span>
                  </div>
                  <p className="text-white mt-5 ">{alldata.desc}</p>
                  <div className="flex items-center">
                    {alldata.logos.map((indexnew) => (
                      <div
                        id="commlogos"
                        className="mt-8 ml-4"
                        key={indexnew.id}
                      >
                        <Image src={indexnew.img} className="flex" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommercialTire;

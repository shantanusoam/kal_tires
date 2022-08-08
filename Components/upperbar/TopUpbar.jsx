import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';

import { GoLocation } from 'react-icons/go';

const TopUpbar = () => (
  <div className="bg-tire-gray-3 ">
    <div className="flexBetween w-full z-10 mx-8 p-4 flex-row">
      <Link href="/">
        <div className="flex flex-row flexCenter">
          <div className="text-white font-bold">Indianapolis, IN</div>
          <div className="ml-2 font-bold">
            <GoLocation color="white " />
            {/* <Image
            src="/../../Assets/Icons/Place.png"
            objectFit="contain"
            // width={12}
            // height={12}
            alt="place"
            layout="fill"
          /> */}
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className="text-white">Help</div>
      </Link>
    </div>
  </div>
);

export default TopUpbar;

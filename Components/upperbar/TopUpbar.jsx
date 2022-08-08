import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TopUpbar = () => (
  <div className="bg-tire-gray-3 flexBetween w-full z-10  p-4 flex-row">
    <Link href="/">
      <div>
        <div>Indianapolis, IN</div>
        <div>
          <Image
            src="/../../Assets/Icons/Place.png"
            objectFit="contain"
            // width={12}
            // height={12}
            alt="place"
            layout="fill"
          />
        </div>
      </div>
    </Link>
    <Link href="/">
      <div>Help</div>
    </Link>
  </div>
);

export default TopUpbar;

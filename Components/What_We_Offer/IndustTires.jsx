import React from 'react';
import Image from 'next/image';
import one from '../../Assets/Images/Whatweoffer/Industrialtires/one.png';
import two from '../../Assets/Images/Whatweoffer/Industrialtires/two.png';
import three from '../../Assets/Images/Whatweoffer/Industrialtires/three.png';
import four from '../../Assets/Images/Whatweoffer/Industrialtires/four.png';
import five from '../../Assets/Images/Whatweoffer/Industrialtires/five.png';
import six from '../../Assets/Images/Whatweoffer/Industrialtires/six.png';

export const IndustTires = () => (
  <div id="specialmain">
    <div
      id="specialmaininner"
      style={{
        backgroundImage:
          // eslint-disable-next-line operator-linebreak
          'url(' +
          'https://raw.githubusercontent.com/shantanusoam/kal_tires/kaltireBranch/Assets/Images/Whatweoffer/speciality/cooperbackg.png' +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="bg-white">
        <div className="lg:grid lg:grid-cols-6 items-center">
          <div className="block">
            <div className="lg:relative  self-start ">
              <Image
                className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md  "
                src={one}
                alt="tires"
              />
            </div>
          </div>
          <div className="block">
            <div className="lg:relative  self-start ">
              <Image
                className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md  "
                src={two}
                alt="tires"
              />
            </div>
          </div>
          <div className="block">
            <div className="lg:relative  self-start ">
              <Image
                className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md  "
                src={three}
                alt="tires"
              />
            </div>
          </div>
          <div className="block">
            <div className="lg:relative self-start ">
              <Image
                className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md  "
                src={four}
                alt="tires"
              />
            </div>
          </div>
          <div className="block">
            <div className="lg:relative  self-start ">
              <Image
                className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md  "
                src={five}
                alt="tires"
              />
            </div>
          </div>
          <div className="block">
            <div className="lg:relative  self-start ">
              <Image
                className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md  "
                src={six}
                alt="tires"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

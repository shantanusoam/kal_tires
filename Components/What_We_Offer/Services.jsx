import React from 'react';
import Image from 'next/image';
import one from '../../Assets/Images/Whatweoffer/services/one.png';
import two from '../../Assets/Images/Whatweoffer/services/two.png';
import three from '../../Assets/Images/Whatweoffer/services/three.png';
import four from '../../Assets/Images/Whatweoffer/services/four.png';
import five from '../../Assets/Images/Whatweoffer/services/five.png';
import six from '../../Assets/Images/Whatweoffer/services/six.png';
import seven from '../../Assets/Images/Whatweoffer/services/seven.png';
import eight from '../../Assets/Images/Whatweoffer/services/eight.png';
import servicesbackground from '../../Assets/Images/Whatweoffer/services/services background.png';

export const Services = () => (
  <div>
    <div id="onsitemain">
      <div
        id="onsitemaininner"
        className="bg-black 2xl:px-56 lg:px-16 lg:py-12 2xl:py-16 "
      >
        <h1 className="text-white text-5xl font-bold font-poppins pb-8">
          Services
        </h1>
        <div id="maingrid">
          <div id="grid" className="grid gap-4 grid-cols-servicesTemplate">
            <div className="bg-kaltire-red  text-center text-white border-white border-2">
              <div className="flex justify-center">
                <div className="w-onsiteimage h-onsiteimage">
                  <Image src={one} alt="service" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                Tire & Wheel Balancing
              </h1>
            </div>
            <div className="bg-kaltire-red  text-center text-white border-white border-2">
              <div className="flex justify-center">
                <div className="w-onsiteimage h-onsiteimage">
                  <Image src={two} alt="service" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                Retread Services
              </h1>
            </div>
            <div className="bg-kaltire-red  text-center text-white border-white border-2">
              <div className="flex justify-center ">
                <div className="w-onsiteimage h-onsiteimage pt-6">
                  <Image src={three} alt="service" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                Pick Up & Delivery Services
              </h1>
            </div>
            <div className="bg-kaltire-red  text-center text-white border-white border-2">
              <div className="flex justify-center">
                <div className="w-onsiteimage h-onsiteimage">
                  <Image src={four} alt="service" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                24x7 Roadside Assistance
              </h1>
            </div>
            <div className="bg-kaltire-red  text-center text-white border-white border-2">
              <div className="flex justify-center">
                <div className="w-onsiteimage h-onsiteimage">
                  <Image src={five} alt="service" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                Truck & Trailer Alingment
              </h1>
            </div>
            <div className="bg-kaltire-red  text-center text-white border-white border-2">
              <div className="flex justify-center">
                <div className="w-onsiteimage h-onsiteimage">
                  <Image src={six} alt="service" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                Mounted Wheel Program
              </h1>
            </div>
            <div className="bg-kaltire-red  text-center text-white border-white border-2">
              <div className="flex justify-center">
                <div className="w-onsiteimage h-onsiteimage">
                  <Image src={seven} alt="service" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                Heavy Duty Front-End Work
              </h1>
            </div>
            <div className="bg-kaltire-red  text-center text-white border-white border-2">
              <div className="flex justify-center">
                <div className="w-onsiteimage h-onsiteimage">
                  <Image src={eight} alt="services" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                Scheduled Maintainance program
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

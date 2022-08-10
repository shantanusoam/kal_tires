import React from 'react';
import Image from 'next/image';
import { ImPhone } from 'react-icons/im';
import onsiteone from '../../Assets/Images/Onsite_Service/onsiteone.png';
import onsitetwo from '../../Assets/Images/Onsite_Service/onsitetwo.png';
import onsitethree from '../../Assets/Images/Onsite_Service/onsitethree.png';
import onsitefour from '../../Assets/Images/Onsite_Service/onsitefour.png';
import onsitefive from '../../Assets/Images/Onsite_Service/onsitefive.png';
import onsitesix from '../../Assets/Images/Onsite_Service/onsitesix.png';
import onsiteseven from '../../Assets/Images/Onsite_Service/onsiteseven.png';
import onsiteeight from '../../Assets/Images/Onsite_Service/onsiteeight.png';
import onsitenine from '../../Assets/Images/Onsite_Service/onsitenine.png';
import onsiteten from '../../Assets/Images/Onsite_Service/onsiteten.png';

export const Services = () => (
  <div>
    <div id="onsitemain">
      <div id="onsitemaininner">
        <div id="maingrid">
          <div
            id="grid"
            className="grid gap-x-4  gap-y-4  bg-kaltire-red   grid-cols-servicesTemplate pt-20 px-4"
          >
            <div className="bg-yellow-200 text-center">
              <div className="flex justify-center">
                <div className="w-onsiteimage h-onsiteimage flex">
                  <Image src={onsiteone} alt="service" />
                </div>
              </div>

              <h1 className="lg:text-xl text-lg font-bold font-poppins ">
                On Site Service
              </h1>
              <p className="pt-6 lg:text-sm font-normal px-16">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </div>
            <div className="bg-yellow-200 text-center">
              <div className="flex justify-center">
                <div className="w-onsiteimage h-onsiteimage">
                  <Image src={onsitetwo} alt="service" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                Nationwide Presence
              </h1>
              <p className="pt-6 lg:text-sm font-normal px-16">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </div>
            <div className="bg-yellow-200 text-center">
              <div className="flex justify-center">
                <div className="w-onsiteimage h-onsiteimage">
                  <Image src={onsitethree} alt="service" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                Tire Replacement
              </h1>
              <p className="pt-6 lg:text-sm font-normal px-16">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </div>
            <div className="bg-yellow-200 text-center">
              <div
                className=" flex justify-center
           "
              >
                <div className="w-onsiteimage h-onsiteimage">
                  {' '}
                  <Image src={onsitefour} alt="service" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                Light Mechanical Services
              </h1>
              <p className="pt-6 lg:text-sm font-normal px-16">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </div>
            <div className="bg-yellow-200 text-center">
              <div className="flex justify-center">
                <div className="w-onsiteimage h-onsiteimage">
                  <Image src={onsitefive} alt="service" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                Wheel mounting
              </h1>
              <p className="pt-6 lg:text-sm font-normal px-16">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </div>
            <div className="bg-yellow-200 text-center">
              <div className="flex justify-center">
                <div className="w-onsiteimage h-onsiteimage">
                  <Image src={onsitesix} alt="service" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                Commercial Oil Change
              </h1>
              <p className="pt-6 lg:text-sm font-normal px-16">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </div>
            <div className="bg-yellow-200 text-center">
              <div className="flex justify-center">
                <div className="w-onsiteimage h-onsiteimage">
                  <Image src={onsiteseven} alt="service" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                Competitive Price
              </h1>
              <p className="pt-6 lg:text-sm font-normal px-16">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </div>
            <div className="bg-yellow-200 text-center">
              <div className="flex justify-center">
                <div className="w-onsiteimage h-onsiteimage">
                  <Image src={onsiteeight} alt="service" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                Freindly & Experience <br /> Technicians
              </h1>
              <p className="pt-6 lg:text-sm font-normal px-16">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </div>
            {/* <div className="bg-yellow-200 text-center">
              <div className="flex justify-center">
                <div className="w-onsiteimage h-onsiteimage">
                  <Image src={onsitenine} alt="service" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                Tire Balancing
              </h1>
              <p className="pt-6 lg:text-sm font-normal px-16">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </div> */}
            {/* <div className="bg-yellow-200 text-center">
              <div className="flex justify-center">
                <div className="w-onsiteimage h-onsiteimage">
                  <Image src={onsiteten} alt="services" />
                </div>
              </div>
              <h1 className="lg:text-xl text-lg font-bold font-poppins">
                Flat Tire Repair
              </h1>
              <p className="pt-6 lg:text-sm font-normal px-16">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

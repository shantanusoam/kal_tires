import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  console.log(`lolllllllllllllllll ${router.pathname}`);
  return (
    <nav className="bg-white">
      <div className="flexBetween z-10 mx-20  flex-row">
        <div className="ml-8 flex flex-row justify-start items-center">
          <Link href="/">
            <div
              className={`group border-solid  border-r px-10 py-3 border-grey  ${
                router.pathname === '/' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`text-black group-hover:text-red-500 ${
                  router.pathname === '/'
                    ? 'text-white font-bold group-hover:text-white'
                    : ''
                }  `}
              >
                Home
              </div>
            </div>
          </Link>
          <Link href="/">
            <div
              className={`group border-solid  border-r px-10 py-3 border-grey  ${
                router.pathname === '/AboutUs' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`text-black group-hover:text-red-500 ${
                  router.pathname === '/AboutUs'
                    ? 'text-white font-bold group-hover:text-white'
                    : ''
                }  `}
              >
                About Us
              </div>
            </div>
          </Link>
          <Link href="/">
            <div
              className={`group border-solid  border-r px-10 py-3 border-grey  ${
                router.pathname === '/WhatWeOffer' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`text-black group-hover:text-red-500 ${
                  router.pathname === '/WhatWeOffer'
                    ? 'text-white font-bold group-hover:text-white'
                    : ''
                }  `}
              >
                What We Offer
              </div>
            </div>
          </Link>
          <Link href="/">
            <div
              className={`group border-solid  border-r px-10 py-3 border-grey  ${
                router.pathname === '/Inventory' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`text-black group-hover:text-red-500 ${
                  router.pathname === '/Inventory'
                    ? 'text-white font-bold group-hover:text-white'
                    : ''
                }  `}
              >
                Inventory
              </div>
            </div>
          </Link>
          <Link href="/RoadsideAssistance">
            <div
              className={`group border-solid  border-r px-10 py-3 border-grey  ${
                router.pathname === '/RoadsideAssistance' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`text-black group-hover:text-red-500 ${
                  router.pathname === '/RoadsideAssistance'
                    ? 'text-white font-bold group-hover:text-white'
                    : ''
                }  `}
              >
                Roadside Assistance
              </div>
            </div>
          </Link>
          <Link href="/">
            <div
              className={`group border-solid  border-r px-10 py-3 border-grey  ${
                router.pathname === '/Locations' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`text-black group-hover:text-red-500 ${
                  router.pathname === '/Locations'
                    ? 'text-white font-bold group-hover:text-white'
                    : ''
                }  `}
              >
                Locations
              </div>
            </div>
          </Link>
          <Link href="/">
            <div
              className={`group border-solid  border-r px-10 py-3 border-grey  ${
                router.pathname === '/CreditApplication' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`text-black group-hover:text-red-500 ${
                  router.pathname === '/CreditApplication'
                    ? 'text-white font-bold group-hover:text-white'
                    : ''
                }  `}
              >
                Credit Application
              </div>
            </div>
          </Link>
          <Link href="/">
            <div
              className={`group border-solid  border-r px-10 py-3 border-grey  ${
                router.pathname === '/ContactUs' ? 'bg-red-500' : ''
              }`}
            >
              <div
                className={`text-black group-hover:text-red-500 ${
                  router.pathname === '/ContactUs'
                    ? 'text-white font-bold group-hover:text-white'
                    : ''
                }  `}
              >
                Contact Us
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

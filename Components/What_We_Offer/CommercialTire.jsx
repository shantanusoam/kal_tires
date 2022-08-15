import React from 'react';
import Image from 'next/image';
import blacktire from '../../Assets/Images/Whatweoffer/speciality/blacktire.png';

const CommercialTire = () => (
  <div id="commercialtiremain">
    <div id="commertiremaininner">
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
          <div className="bg-speciality-background">
            <div className="lg:flex  items-center">
              {/* <div className="lg:hidden block">
                <div className="lg:relative lg:mt-4 self-start ">
                  <Image
                    className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md  "
                    src={blacktire}
                    alt="tires"
                  />
                </div>
              </div> */}
              <div className="lg:block hidden bg-kaltire-red">
                <div className="lg:relative lg:mt-4 float-right ml-56">
                  <Image
                    className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md"
                    src={blacktire}
                    alt="tires"
                  />
                </div>
              </div>
              <div className="lg:py-12 md:px-10 px-6 lg:px-0 max-w-5xl  mx-auto col-span-2  text-center lg:text-left flex-2">
                <p className="text-black mt-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus architecto facere corporis vitae, voluptatem
                  optio molestiae neque omnis doloribus inventore nulla aliquid.
                  Ipsum velit excepturi corporis esse autem blanditiis
                  veritatis! Veniam officia, autem ducimus vitae ex ea.
                  Possimus, magnam, autem repellat inventore voluptate sit
                  tempore soluta cupiditate explicabo quod quos similique
                  debitis temporibus. Maiores officia vitae culpa eum porro
                  fugit cupiditate aliquam, dignissimos adipisci minima
                  voluptate eos enim cum animi, totam assumenda. Commodi quaerat
                  consequuntur maxime, rem quis, enim, velit provident
                  asperiores voluptatem voluptate esse reiciendis vitae ipsa
                  hic. Dolor excepturi et veniam! Quaerat omnis optio reiciendis
                  asperiores soluta dolorem?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CommercialTire;

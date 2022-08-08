import Image from 'next/image';
import servicetruck from '../Assets/images/Roadside_Assistance/servicetruck.png';
// import {IoCheckmarkOutline} from

const roadsideAssitance = () => (
  <div id="roadmain">
    <div id="roadmaininner">
      <div className="bg-bg-white-1">
        <div className="lg:grid lg:grid-cols-2">
          <div className="lg:relative ">
            <Image
              className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md"
              src={servicetruck}
              alt="servicetruck"
            />
          </div>

          <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
            <h2 className="text-4xl tracking-tight  text-black font-poppins font-semibold">
              <span className="block">
                {' '}
                <span className="text-kaltire-red">24 / 7</span> ROADSIDE
                ASSITANCE
              </span>
            </h2>
            <p className="text-black mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <div className="inline-block py-3">
              {/* <a
                href="/"
                className="inline-block py-3 px-4 bg-white hover:bg-indigo-100 text-indigo-500 font-medium border border-transparent rounded-md"
              >
                Sign up for free
              </a> */}

              <p className="py-2">Lorem ipsum dolor sit.</p>
              <p className="py-2">Lorem ipsum dolor sit.</p>
              <p className="py-2">Lorem ipsum dolor sit.</p>
              <p className="py-2">Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default roadsideAssitance;

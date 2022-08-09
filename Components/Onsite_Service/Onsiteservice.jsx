import Image from 'next/image';
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

const Onsiteservice = () => (
  <div id="onsitemain">
    <div id="onsitemaininner" className="h-Onsiteheight bg-green-300">
      <div id="maingrid">
        <div
          id="grid"
          className="grid gap-4 grid-cols-5 grid-rows-2 bg-bg-white-1 h-onsitegridheight gap-y-16"
        >
          <div className="bg-bg-white-1 text-center">
            <Image src={onsiteone} alt="service" />
            <h1 className="lg:text-2xl text-xl font-bold font-poppins">
              On Site Service
            </h1>
            <p className="pt-6 lg:text-sm font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <Image src={onsitetwo} alt="service" />
            <h1 className="lg:text-2xl text-xl font-bold font-poppins">
              Nationwide Presence
            </h1>
            <p className="pt-6 lg:text-sm font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <Image src={onsitethree} alt="service" />
            <h1 className="lg:text-2xl text-xl font-bold font-poppins">
              Tire Replacement
            </h1>
            <p className="pt-6 lg:text-sm font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <Image src={onsitefour} alt="service" />
            <h1 className="lg:text-2xl text-xl font-bold font-poppins">
              Light Mechanical Services
            </h1>
            <p className="pt-6 lg:text-sm font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <Image src={onsitefive} alt="service" />
            <h1 className="lg:text-2xl text-xl font-bold font-poppins">
              Wheel mounting
            </h1>
            <p className="pt-6 lg:text-sm font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <Image src={onsitesix} alt="service" />
            <h1 className="lg:text-2xl text-xl font-bold font-poppins">
              Commercial Oil Change
            </h1>
            <p className="pt-6 lg:text-sm font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <Image src={onsiteseven} alt="service" />
            <h1 className="lg:text-2xl text-xl font-bold font-poppins">
              Competitive Price
            </h1>
            <p className="pt-6 lg:text-sm font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <Image src={onsiteeight} alt="service" />
            <h1 className="lg:text-2xl text-xl font-bold font-poppins">
              Freindly & Experience Technicians
            </h1>
            <p className="pt-6 lg:text-sm font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <Image src={onsitenine} alt="service" />
            <h1 className="lg:text-2xl text-xl font-bold font-poppins">
              Tire Balancing
            </h1>
            <p className="pt-6 lg:text-sm font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
          <div className="bg-bg-white-1 text-center">
            <Image src={onsiteten} alt="services" />
            <h1 className="lg:text-2xl text-xl font-bold font-poppins">
              Flat Tire Repair
            </h1>
            <p className="pt-6 lg:text-sm font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Onsiteservice;

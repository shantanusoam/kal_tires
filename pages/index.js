import { AboutUs } from '../Components/Home/AboutUs';
import BrandsComponent from '../Components/Home/BrandsComponent';
import HomeSlider from '../Components/Home/HomeSlider';

const Home = () => (
  <div>
    <HomeSlider />
    <BrandsComponent />
    <AboutUs />
    {/* <h1 className="text-3xl font-bold underline">Hello world from Kal tires</h1> */}
  </div>
);
export default Home;

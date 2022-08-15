import { AboutUs } from '../Components/Home/AboutUs';
import BrandsComponent from '../Components/Home/BrandsComponent';
import FeaturedProducts from '../Components/Home/FeaturedProducts';
import HomeSlider from '../Components/Home/HomeSlider';
import RoadSideAssistant from '../Components/Home/RoadSideAssistant';

const Home = () => (
  <div>
    <HomeSlider />
    <BrandsComponent />
    <AboutUs />
    <FeaturedProducts />
    <RoadSideAssistant />
    {/* <h1 className="text-3xl font-bold underline">Hello world from Kal tires</h1> */}
  </div>
);
export default Home;

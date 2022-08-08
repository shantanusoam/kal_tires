import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;

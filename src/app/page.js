// pages/index.js

import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import OurOffersSection from './components/Offers';
import MapSection from './components/Map';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <OurOffersSection />
      {/* <MapSection /> */}
      <Footer />
    </div>
  );
};

export default HomePage;

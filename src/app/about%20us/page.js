import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-32 py-8">
        <h1 className="text-4xl font-bold text-center mb-6 mt-10">About Us</h1>
        
        <img className="w-full h-96 bg-gray-300 mb-6 rounded-md object-cover" src='/about.jpeg'/>

        <p className="text-lg mb-4">
          Giorno's Italian restaurant is more than just a dining place; it's a family legacy steeped in rich traditions and authentic Italian recipes passed down through generations. Founded over half a century ago by our beloved patriarch, Giovanni Giorno, the restaurant has been a beacon of culinary excellence and familial warmth in the heart of the city.
        </p>

        <p className="text-lg mb-4">
          Our menu is a reflection of our history, with each dish telling a story of family gatherings, old-world charm, and delectable homemade flavors. From our signature hand-tossed pizzas to the sumptuous Tiramisu, every bite is a testament to our commitment to authenticity and quality. We take pride in using only the freshest ingredients, sourced locally whenever possible, to create meals that delight and inspire.
        </p>

        <p className="text-lg mb-4">
          Beyond the kitchen, Giorno's is a vibrant part of the community. We've celebrated milestones with generations of families, hosted community events, and supported local causes. Our doors are always open to anyone looking to experience the warmth of Italian hospitality and the joy of a meal cooked with love. At Giorno's, you're not just a customer; you're part of our extended family.
        </p>
      </div>
      <div className='h-64'></div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;

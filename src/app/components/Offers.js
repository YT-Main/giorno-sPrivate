import Link from 'next/link';


const OfferCard = ({ title, description, img, price }) => {
    return (
      <div className="text-black p-4 rounded-md border-2 border-grey-300 hover:border-rich-red border-gray-300 transition-all duration-300">
        <img className="w-full h-48 bg-gray-300 rounded-md object-cover" src={img}/>
        <h3 className="text-lg font-bold mt-2">{title}</h3>
        <p className="texçt-sm my-1">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="font-bold">{price}</p>
          <button className="bg-rich-red text-white py-2 px-6 rounded-full hover:bg-dark-red transition-colors duration-300">
            Order Now
          </button>
        </div>
      </div>
    );
};
  
  const OurOffersSection = () => {
    const offers = [
      {
        title: "Hearty Minestrone Soup",
        description: "A warming bowl of classic vegetables and pasta",
        img: "/soup.png",
        price: "$12.99"
      },
      {
        title: "Classic Margherita Pizza",
        description: "Fresh basil, mozzarella, and tomatoes on a crispy crust",
        img: "/pizza.png",
        price: "$15.50"
      },
      {
        title: "Tiramisu Delight",
        description: "Layered espresso-soaked ladyfingers with mascarpone cream",
        img: "/tiramisu.png",
        price: "$10.00"
      }
    ];
  
    return (
      <section className="container mx-auto p-8">
        <h2 className="text-4xl font-bold mb-6 py-20 text-center">Our offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {offers.map((offer, index) => (
            <OfferCard
              key={index}
              title={offer.title}
              description={offer.description}
              img={offer.img}
              price={offer.price}
            />
          ))}
        </div>

        <div className="py-10 w-full flex">
            <div className="mx-auto">
              <Link href="/menu" className="border-2 border-rich-red text-rich-red py-2 px-4 rounded-full hover:bg-rich-red hover:text-white transition-colors duration-300">
                  Full Menu
              </Link>
            </div>
        </div>
      </section>
    );
  };

    export default OurOffersSection;
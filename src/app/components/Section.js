
const Card = ({ title, description, img, price }) => {
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

const Section = ({ title, items }) => {
    return (
      <section id={title.toLowerCase()} className="lg:pl-48 container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </section>
    );
};
  
export default Section;



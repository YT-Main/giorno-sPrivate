const MapSection = () => {
    return (
      <section className="container mx-auto p-8 flex flex-col md:flex-row items-stretch">
        <div className="flex-1 h-64 md:h-auto md:w-1/2 bg-gray-300">
          {/* Embed Google Maps */}
        </div>
        <div className="flex-1 p-4 text-off-white">
          {/* Restaurant's Information */}
          <p>Contact Placeholder</p>
        </div>
      </section>
    );
  };

export default MapSection;
const WelcomeSection = () => {
    return (
      <section className="text-gray-800 bg-off-white h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold mb-6">Taste the Heart of Italy</h1>
        <img className="w-3/4 h-2/3 bg-gray-200 object-cover rounded-md" src="/welcome.png"/>
        <p className="mt-6 text-xl">Discover our authentic Italian dishes</p>
      </section>
    );
  };

export default WelcomeSection;
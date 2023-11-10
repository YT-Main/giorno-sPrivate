const MobileSidebar = () => {
  return (
    <div className="md:hidden bg-gray-200 p-4 fixed top-[4rem] left-0 right-0 z-10">
      <div className="flex justify-around">
        {['Appetizers', 'Mains', 'Desserts', 'Drinks'].map(section => (
          <a href={`#${section.toLowerCase()}`} key={section} className="hover:text-rich-red">
            {section}
          </a>
        ))}
      </div>
    </div>
  );
};


export default MobileSidebar;  
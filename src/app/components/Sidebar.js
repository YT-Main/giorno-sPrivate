const Sidebar = () => {
    return (
        <div className="hidden lg:block fixed left-5 top-[50%] w-48 bg-gray-100 rounded-md p-4">
            <h2 className="text-2xl text-center font-bold mb-4">Menu</h2>
            <div className="flex flex-col">
                {['Appetizers', 'Mains', 'Desserts', 'Drinks'].map(section => (
                    <a href={`#${section.toLowerCase()}`} key={section} className="text-lg mb-2 hover:text-rich-red">
                        {section}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;

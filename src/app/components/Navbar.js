"use client";
import { useState } from 'react';
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-classic-black text-off-white p-4 flex justify-between items-center">

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="text-2xl">&#9776;</span> {/* Hamburger Icon */}
        </button>
      </div>

      {/* Links - Hidden on Mobile unless Menu is Open */}
      <div className={`md:flex ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row items-center`}>
        {['Home', 'Menu', 'About Us'].map((item) => (
          <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-rich-red py-1 px-2 transition-colors duration-300">
              {item}
          </Link>
        ))}
      </div>


      <div className="text-center flex-1">
        <a href="/" className="text-3xl font-great-vibes">Giorno's</a>
      </div>

      <Link href="/order" className="bg-rich-red text-white py-2 px-4 rounded-full hover:bg-dark-red transition-colors duration-300">
          Order Now
      </Link>
    </nav>
  );
};

export default Navbar;
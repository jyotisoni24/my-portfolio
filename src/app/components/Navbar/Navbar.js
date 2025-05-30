// navbar/navbar.js

import Link from 'next/link';
import About from '../About/About'; // Adjust the import path as necessary

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-700 shadow-lg px-6 py-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-8xl mx-auto flex justify-center items-center text-white">
        <div className="text-2xl font-bold"></div>
        <ul className="flex space-x-16 font-medium">
          <li><Link href="/"><span className="hover:underline cursor-pointer">Home</span></Link></li>
          <li><Link href= <About/>><span className="hover:underline cursor-pointer">About</span></Link></li>
          <li><Link href="/projects"><span className="hover:underline cursor-pointer">Projects</span></Link></li>
          <li><Link href="/contact"><span className="hover:underline cursor-pointer">Contact</span></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// src/components/Navbar.jsx
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white px-4 py-3 md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">FinancePro</h1>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <ul
        className={`md:flex md:items-center md:gap-8 mt-4 md:mt-0 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a href="#" className="block py-2 px-4 hover:bg-blue-700 rounded md:inline">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 hover:bg-blue-700 rounded md:inline">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 hover:bg-blue-700 rounded md:inline">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 hover:bg-blue-700 rounded md:inline">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 bg-blue-600 hover:bg-blue-500 rounded md:inline">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

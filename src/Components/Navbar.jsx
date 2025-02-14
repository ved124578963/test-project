import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo / Website Name */}
        <Link to="/" className="text-2xl font-bold">
          🌿 Tree Adoption
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/adopt" className="hover:underline">Adopt Tree</Link>
          <Link to="/my-trees" className="hover:underline">My Trees</Link>
          <Link to="/login" className="bg-white text-green-600 px-4 py-1 rounded-lg hover:bg-gray-200">
            Login / Profile
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-2 space-y-2 bg-green-700 p-4">
          <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/adopt" className="hover:underline" onClick={() => setIsOpen(false)}>Adopt Tree</Link>
          <Link to="/my-trees" className="hover:underline" onClick={() => setIsOpen(false)}>My Trees</Link>
          <Link to="/profile" className="bg-white text-green-600 px-4 py-1 rounded-lg hover:bg-gray-200" onClick={() => setIsOpen(false)}>
            Login / Profile
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Tutup menu saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("mobile-menu");
      const button = document.getElementById("menu-toggle");
      if (isMenuOpen && sidebar && !sidebar.contains(event.target) && button && !button.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Hamburger di KIRI */}
            <button id="menu-toggle" onClick={() => setIsMenuOpen(true)} className="md:hidden text-gray-700 hover:text-blue-600 p-1 rounded transition-colors" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="h-14 flex items-left">
              <a href="#home">
                <img src="/tahlogo.png" alt="Logo" className="h-14 w-auto" />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:ml-6 space-x-6">
              <a href="#home" className="inline-block px-3 py-4 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:font-semibold">
                Home
              </a>
              <a href="#about" className="inline-block px-3 py-4 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:font-semibold">
                About
              </a>
              <a href="#skills" className="inline-block px-3 py-4 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:font-semibold">
                Skills
              </a>
              <a href="#projects" className="inline-block px-3 py-4 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:font-semibold">
                Projects
              </a>
              <a href="#contact" className="inline-block px-3 py-4 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:font-semibold">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay Backdrop */}
      {isMenuOpen && <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-200" onClick={() => setIsMenuOpen(false)} />}

      {/* Mobile Menu Modal (Tengah Layar) */}
      <div id="mobile-menu" className={`fixed top-1/2 left-1/2 z-50 w-11/12 max-w-xs p-6 bg-white rounded-xl shadow-2xl transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-red-500 p-1 rounded transition-colors" aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav>
          <div className="flex flex-col space-y-3">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a key={item.name} href={item.href} className="block px-4 py-2.5 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors text-center" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [menuPosition, setMenuPosition] = useState({ left: 0, top: 0 });
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  // Atur posisi awal toggle
  useEffect(() => {
    const updatePosition = () => {
      const x = window.innerWidth - 80;
      const y = window.innerHeight - 80;
      setPosition({ x, y });
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  // Simpan posisi toggle
  useEffect(() => {
    const saved = localStorage.getItem("floatingNavPos");
    if (saved) {
      setPosition(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("floatingNavPos", JSON.stringify(position));
  }, [position]);

  // Hitung posisi menu setiap kali toggle bergerak atau menu dibuka
  useEffect(() => {
    if (isMenuOpen) {
      const menuLeft =
        position.x > window.innerWidth / 2
          ? position.x - 180 // kiri
          : position.x + 60; // kanan

      // Batasi agar tidak keluar layar
      const safeLeft = Math.max(10, Math.min(menuLeft, window.innerWidth - 190));

      setMenuPosition({
        left: safeLeft,
        top: position.y - 10,
      });
    }
  }, [isMenuOpen, position]);

  // Tutup menu saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Handle drag
  const handleDragStart = (e) => {
    e.preventDefault();
    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;

    const rect = buttonRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
    isDragging.current = true;

    const handleMove = (moveEvent) => {
      if (!isDragging.current) return;
      const moveX = moveEvent.type === "touchmove" ? moveEvent.touches[0].clientX : moveEvent.clientX;
      const moveY = moveEvent.type === "touchmove" ? moveEvent.touches[0].clientY : moveEvent.clientY;

      let newX = moveX - dragOffset.current.x;
      let newY = moveY - dragOffset.current.y;

      newX = Math.max(10, Math.min(newX, window.innerWidth - 70));
      newY = Math.max(10, Math.min(newY, window.innerHeight - 70));

      setPosition({ x: newX, y: newY });
    };

    const handleEnd = () => {
      isDragging.current = false;
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleEnd);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchmove", handleMove, { passive: false });
    document.addEventListener("touchend", handleEnd);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed w-full z-50 pt-5">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 rounded-md shadow-md bg-gray-50">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">PORTOFOLIO</div>
            <div className="flex space-x-6">
              <a href="#home" className="inline-block px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:font-semibold">
                Home
              </a>
              <a href="#about" className="inline-block px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:font-semibold">
                About
              </a>
              <a href="#skills" className="inline-block px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:font-semibold">
                Skills
              </a>
              <a href="#projects" className="inline-block px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:font-semibold">
                Projects
              </a>
              <a href="#contact" className="inline-block px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:font-semibold">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Toggle - Mobile Only */}
      <div className="md:hidden fixed inset-0 pointer-events-none">
        {/* Toggle Button */}
        <div
          ref={buttonRef}
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            width: "50px",
            height: "50px",
            pointerEvents: "auto",
            zIndex: 9999, // ✅ ini kunci utama
          }}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          onClick={(e) => {
            if (!isDragging.current) {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }
          }}
          className="bg-gray-900 text-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing"
          aria-label="Open menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </div>

        {/* Menu Dropdown */}
        {isMenuOpen && (
          <>
            <div className="fixed inset-0 z-50 bg-transparent" onClick={() => setIsMenuOpen(false)}></div>
            <div
              ref={menuRef}
              style={{
                position: "absolute",
                left: menuPosition.left,
                top: menuPosition.top,
                pointerEvents: "auto",
                minWidth: "180px",
              }}
              className="z-50 bg-white rounded-lg shadow-xl border border-gray-200"
            >
              <div className="p-3">
                <div className="flex flex-col space-y-1">
                  {[
                    { name: "Home", href: "#home" },
                    { name: "About", href: "#about" },
                    { name: "Skills", href: "#skills" },
                    { name: "Projects", href: "#projects" },
                    { name: "Contact", href: "#contact" },
                  ].map((item) => (
                    <a key={item.name} href={item.href} className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded hover:bg-gray-50 transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;

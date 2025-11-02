const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center md:py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Bagian Teks */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 md:mb-4">Hi There, I'm</h1>
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-500 via-purple-400 to-blue-600 bg-clip-text text-transparent font-bold block mb-6">Ahmad Fatah Maulana</span>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">Fresh Information system graduate with an interest for building web apps and solving problems!</p>
            <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium text-center shadow-md hover:shadow-md transition-transform duration-300 hover:scale-105 whitespace-nowrap">
                My Project
              </a>
              <a href="https://wa.me/62882002451967" className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium text-center shadow-sm hover:shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 whitespace-nowrap">
                <span className="relative z-10 flex items-center">
                  Get In Touch
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" className="ml-2">
                    <path fill="currentColor" d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Bagian Gambar */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img src="public/profile4.png" alt="Profile" className=" w-72 h-72 md:w-200 md:h-130 object-cover" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

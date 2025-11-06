const ContactSection = ({id}) => {
  return (
    <section id={id} className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Grid utama: teks di kiri, form di kanan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Kolom Kiri: Judul & Deskripsi */}
          <div>
            <div className="mb-5">
              <a href="https://wa.me/62882002451967" target="_blank" rel="noopener noreferrer" className="inline-block">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center">
                  Get In Touch
                  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 20" className="ml-3 hover:scale-110 transition-transform duration-300">
                    <path fill="currentColor" d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z" />
                  </svg>
                </h2>
              </a>
              <p className="text-xl text-gray-600 mb-7">If you have any questions or a project in mind, I would be happy to discuss and collaborate with you to bring it to life.</p>
            </div>
            <div className="space-y-10">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 ">
                  <i className="fa-solid fa-phone-volume text-gray-800 text-xl"></i>
                  <span className="text-xl text-gray-700 font-medium font-roboto">Phone:</span>
                </div>
                <div className="ml-8">
                  <span className="text-xl text-gray-700 font-roboto font-semibold">+62 882-0024-51967</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-envelope text-gray-800 text-xl"></i>
                  <span className="text-xl text-gray-700 font-medium font-roboto">Email:</span>
                </div>
                <div className="ml-8">
                  <span className="text-xl text-gray-700 font-semibold font-roboto">fatahahmad807@gmail.com</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-location-dot text-gray-800 text-xl"></i>
                  <span className="text-xl text-gray-700 font-medium font-roboto">Alamat:</span>
                </div>
                <div className="ml-8">
                  <span className="text-xl text-gray-700 font-roboto font-semibold">Kavling Bulak Perwira, Bekasi, Indonesia</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6 mt-25">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <i className="fa-brands fa-github text-gray-700 text-xl"></i>
              </div>

              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <i className="fa-brands fa-linkedin text-blue-700 text-xl"></i>
              </div>

              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <i className="fa-brands fa-instagram text-pink-700 text-xl"></i>
              </div>

              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <i className="fa-brands fa-whatsapp text-green-700 text-xl"></i>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir */}
          <div className="max-w-lg w-full">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-3 text-gray-700 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-500 transition-colors" required />
                  </div>
                  <div>
                    <input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 text-gray-700 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-500 transition-colors" required />
                  </div>
                </div>

                <div>
                  <input type="text" id="subject" placeholder="Subject" className="w-full px-4 py-3 text-gray-700 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-500 transition-colors" required />
                </div>

                <div>
                  <textarea id="message" rows={6} placeholder="Write your message here..." className="w-full px-4 py-3 text-gray-700 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-500 transition-colors resize-none" required></textarea>
                </div>

                <button type="submit" className="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-sm hover:shadow-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

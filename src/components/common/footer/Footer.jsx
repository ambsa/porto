const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ahmad Fatah Maulana</h3>
          <p className="text-gray-400 mb-6">
            Building beautiful web experiences with React and Tailwind CSS
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/ambsa" className="text-gray-400 hover:text-white transition-colors"><i className="fa-brands fa-github mr-2"></i>GitHub</a>
            <a href="https://www.linkedin.com/in/ahmadfatahmaulana/" className="text-gray-400 hover:text-white transition-colors"><i className="fa-brands fa-linkedin mr-2"></i>LinkedIn</a>
            <a href="https://www.instagram.com/pathlve/" className="text-gray-400 hover:text-white transition-colors"><i className="fa-brands fa-instagram mr-2"></i>Instagram</a>
            <a href="https://wa.me/62882002451967" className="text-gray-400 hover:text-white transition-colors"><i className="fa-brands fa-whatsapp mr-2"></i>WhatsApp</a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Ahmad Fatah Maulana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
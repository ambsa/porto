import { motion } from "framer-motion";

const AboutSection = ({id}) => {
  return (
    <section id={id} className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-md md:text-xl justify-center text-gray-600 max-w-3xl mx-auto">Passionate Information Systems student with hands-on experience in web development and data-driven business solutions, combining technical skills with strategic thinking to drive innovation and operational efficiency.</p>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-5xl md:text-6xl font-extrabold text-blue-700">5+</p>
              <p className="text-gray-600 mt-2 text-lg">Personal Project</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-extrabold text-blue-800">3</p>
              <p className="text-gray-600 mt-2 text-lg">Insternship</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-extrabold text-blue-800">8+</p>
              <p className="text-gray-600 mt-2 text-lg">Skripsi dan Tugas Akhir</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

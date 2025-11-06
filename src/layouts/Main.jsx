import React from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';

const Main = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
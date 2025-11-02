import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Main = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
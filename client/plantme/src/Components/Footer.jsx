import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-green-900 text-white">
      <aside>
        <div className="flex items-center justify-center mb-4">
          <i className="fas fa-leaf text-3xl text-green-400 mr-2"></i>
          <h3 className="text-2xl font-bold heading-font">PlantMe</h3>
        </div>
        <p className="font-bold">
          Bringing nature to your doorstep since 2020
        </p>
        <p>Copyright © 2023 - All rights reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a><i className="fab fa-twitter text-xl"></i></a>
          <a><i className="fab fa-instagram text-xl"></i></a>
          <a><i className="fab fa-facebook text-xl"></i></a>
          <a><i className="fab fa-pinterest text-xl"></i></a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
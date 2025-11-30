import React from 'react';

const Hero = () => {
  return (
    <section className="hero min-h-[80vh] hero-pattern">
      <div className="hero-content flex-col lg:flex-row-reverse container mx-auto">
        <img 
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
          className="max-w-lg rounded-lg shadow-2xl" 
          alt="Indoor plants" 
        />
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold heading-font text-green-800">Bring Nature Into Your Home</h1>
          <p className="py-6 text-lg">
            Discover our wide selection of indoor and outdoor plants that will transform your living space. 
            From succulents to tropical plants, we have everything to create your green oasis.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-success text-white px-8">Shop Now</button>
            <button className="btn btn-outline btn-success px-8">Learn More</button>
          </div>
          <div className="mt-8 flex items-center space-x-6">
            <div className="flex items-center">
              <i className="fas fa-truck text-green-600 text-xl mr-2"></i>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-seedling text-green-600 text-xl mr-2"></i>
              <span>Healthy Plants</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-headset text-green-600 text-xl mr-2"></i>
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
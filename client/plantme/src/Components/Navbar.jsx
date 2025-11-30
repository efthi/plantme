import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Shop</a>
                </li>
                <li>
                  <a>Categories</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl heading-font text-green-600">
              <i className="fas fa-leaf mr-2"></i>PlantMe
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="text-green-700 hover:bg-green-50">Home</a>
              </li>
              <li>
                <a className="hover:bg-green-50">Shop</a>
              </li>
              <li>
                <a className="hover:bg-green-50">Categories</a>
              </li>
              <li>
                <a className="hover:bg-green-50">About</a>
              </li>
              <li>
                <a className="hover:bg-green-50">Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center space-x-4">
              <button className="btn btn-ghost btn-circle">
                <i className="fas fa-search"></i>
              </button>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="badge badge-sm indicator-item bg-green-500 text-white border-0">
                      3
                    </span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card dropdown-content card-compact bg-base-100 z-[1] mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">3 Items</span>
                    <span className="text-info">Subtotal: $87.00</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-outline btn-success">Sign In</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

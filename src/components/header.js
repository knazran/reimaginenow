import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React, { useState } from "react";
import logo from "../images/reimagine-logo-outline.png";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-primary-700 md:px-8">
      <div className="flex flex-wrap font-body items-center justify-between container px-4 py-4 mx-auto md:pt-4 md:pb-4">
        <Link to="/">
          <h1 className="flex items-center no-underline">
            <div className="w-40 mr-2 fill-current">
              <img alt="Logo Image" src={logo}></img>
            </div>
          </h1>
        </Link>

        <button
          className="flex items-center block px-3 py-2 text-secondary-500 border border-secondary-500 rounded lg:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } lg:flex lg:items-center w-full md:w-auto`}
        >
          <Link
              className="block mt-4 hover:underline no-underline md:inline-block md:mt-2 md:ml-12 text-white font-normal"
              key="About Us"
              to="/about-us"
            >
            About Us
          </Link>
          <AnchorLink
            className="block mt-4 text-white no-underline md:inline-block md:mt-2 md:ml-12"
            key="services"
            to="/#services"
          >
            Services
          </AnchorLink>
          <AnchorLink
            className="block mt-4 text-white no-underline md:inline-block md:mt-2 md:ml-12"
            key="past-work"
            to="/#past-work"
          >
            Past Work
          </AnchorLink>
          <Link
              className="block mt-4 hover:underline no-underline md:inline-block md:mt-2 md:ml-12 text-white font-normal"
              key="Contact Us"
              to="/about-us"
            >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

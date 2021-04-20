import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React, { useState } from "react";
import logo from "../images/reimagine-logo-outline.png";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

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
          className="flex items-center block px-3 py-2 text-red-800 border border-white rounded lg:hidden"
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
          {/* {[
            {
              route: `/about-us`,
              title: `About Us`,
            },
            {
              route: `#services`,
              title: `Services`,
            },
            {
              route: `/campaigns`,
              title: `Past Projects`,
            },
            {
              route: `/education-videos`,
              title: `Contact Us`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 hover:underline no-underline md:inline-block md:mt-2 md:ml-12 text-white font-normal"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))} */}
          {/* <a
            className="block mt-4 hover:underline  no-underline md:inline-block md:mt-2 md:ml-12 text-white font-normal"
            key="blog"
            href="https://undi18.wordpress.com"
          >
            Blog
          </a> */}
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
          <Link
              className="block mt-4 hover:underline no-underline md:inline-block md:mt-2 md:ml-12 text-white font-normal"
              key="Contact Us"
              to="/about-us"
            >
            Contact Us
          </Link>
          {/* <AnchorLink
            className="block mt-4 text-red-800 hover:text-red-900 no-underline md:inline-block md:mt-2 md:ml-12"
            key="media"
            to="/#media"
          >
            Media Mentions
          </AnchorLink>
          <Link
            className="block mt-4 bg-red-800 hover:bg-red-900 text-white rounded-lg py-2 px-4 no-underline md:inline-block md:mt-2 md:ml-12"
            key="recruit"
            to="/careers"
          >
            Join The Team
          </Link> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;

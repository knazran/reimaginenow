import React from "react";
import { Link } from "gatsby";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180">
        <path
          fill="#3e64ff"
          fillOpacity="1"
          d="M0,128L48,112C96,96,192,64,288,74.7C384,85,480,139,576,144C672,149,768,107,864,80C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <footer className="bg-primary-500">
        <nav className="flex flex-wrap justify-between max-w-4xl p-4 mx-auto md:px-8  pb-12 bg-primary-500">
          <div className="flex w-full lg:w-1/3">
            <div className="w-1/2 lg:w-full text-white">
              <h4 className="font-semibold text-md mb-4">Contact Us</h4>
              <p className="text-sm">info@getchime.io </p>
              <p className="text-sm">+6012 568 5325</p>
            </div>
            <div className="w-1/2 lg:w-full text-white">
              <h4 className="font-semibold text-primary-500 text-md mb-4">
                Contact Us
              </h4>
              <p className="text-sm text-white mt-4">
                Found8 KL Sentral 5 East Wing, Level 3, Jalan Stesen Sentral
                Kuala Lumpur Sentral 5470 Kuala Lumpur, Malaysia
              </p>
            </div>
          </div>
          <div className="lg:flex w-full lg:w-2/3 lg:pl-8">
            <div className="w-full mb-4 lg:w-1/3">
              <h4 className="font-semibold text-md mb-4 text-white">
                Follow Us
              </h4>
              <div className="flex text-white text-xl">
                <span className="mr-2">
                  <a href="https://www.facebook.com/Chime-Visitors-111770687180297">
                    <FaFacebookSquare />
                  </a>
                </span>
                <span className="mr-2">
                  <a href="https://twitter.com/ChimeVisitors">
                    <FaTwitterSquare />
                  </a>
                </span>
                <span className="mr-2">
                  <a href="https://www.linkedin.com/company/chimevms/">
                    <FaLinkedinIn />
                  </a>
                </span>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <h4 className="font-semibold text-md mb-2 lg:mb-4 text-white hover:text-gray-500">
                Blog
              </h4>
            </div>
            <div className="flex flex-col w-full lg:w-1/3">
              <h4 className="font-semibold text-md mb-2 lg:mb-4 text-white hover:text-gray-500">
                FAQ
              </h4>
              <Link
                className="font-semibold text-md mb-2 lg:mb-4 text-white hover:text-gray-500"
                key="privacy"
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <h4 className="font-semibold text-md mb-2 lg:mb-4 text-white hover:text-gray-500">
                Terms of Service
              </h4>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
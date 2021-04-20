import React from 'react';
// import hero from '../images/myapec.jpg';
import hero from '../images/hero-rn.png';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Hero = () => {
  return (
    <div
      className='lg:flex pb-4 lg:pb-12 border-b-2 '
      data-sal='slide-up'
      data-sal-duration='700'
      data-sal-delay='100'
      data-sal-easing='ease'
      style={{ backgroundImage: `url(${hero})` , backgroundSize: "cover"}}
      >

      <div className='md:mt-8 lg:pr-8 mx-auto container px-4 py-4 lg:px-8 pb-12'>
        <div className='w-full lg:w-2/3 flex flex-col xl:mt-12 text-center mx-auto'>
          {/* Hero Title */}
          <h1 className='text-white font-black text-4xl lg:text-6xl leading-tight tracking-wide'
          
          >
            REIMAGINING SOLUTIONS
          </h1>
          {/* Hero Subtitle */}
          <p className='text-lg xl:text-xl text-white my-8 leading-tight'>
          We are a boutique consulting firm cultivating creative strategies, services and solutions for your policy engagement and public affairs consultancy needs.

          </p>


          {/* CTA */}
          <div className='mt-4 lg:mt-12'>
            <div className='lg:flex w-full'>
              <AnchorLink
                className='lg:px-4 mx-auto w-full mt-4 lg:mt-0 md:w-3/5 lg:w-1/2 '
                to='/#programmes'>
                <button
                  type='button'
                  className='w-full text-black text-center py-2 px-4 rounded bg-secondary-500 hover:bg-secondary-700'>
                  Explore Our Services
                </button>
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

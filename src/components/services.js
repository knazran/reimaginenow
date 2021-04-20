/* eslint-disable react/prop-types */
import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import stakeholder from '../images/pd-stakeholder.jpg'
// import Img from 'gatsby-image';

const Services = () => {
  const data = useStaticQuery(graphql`
  query ServicesPageQuery {
    services: markdownRemark(frontmatter: { templateKey: { eq: "our-services" } }) {
      frontmatter {
        title
        subtitle
        services {
          title
          subtitle
        }
      }
      html
    }
  }
`);
  console.log(data);
  const { services } = data;

  return (
    <div>
      <div className='text-center'>
        <h3 className='w-full text-2xl lg:text-3xl font-semibold tracking-wider py-2 text-primary-700'>
          Our Services
        </h3>
        <p className='text-md lg:text-xl mt-2 mb-6 leading-relaxed text-primary-500'>
          As a boutique public affairs consulting firm, we specialize in policy
          communications and political consulting.
        </p>
      </div>

      <div className='md:flex my-16'>
        <div className='w-full md:w-1/2'>
        {services.frontmatter.services.map((service, idx) => (
            // What we do card
            <div
              key={`services-${idx}`}
              className="mb-12"
            >
              <h4 className='text-md md:text-xl text-primary-700 tracking-wide uppercase font-semibold'>{service.title}</h4>
              <p className='text-md md:text-lg mt-2 mb-6 leading-tight text-primary-500'>
                {service.subtitle}
              </p>
              
            </div>
          ))}
        </div>
        <div className='w-full md:w-1/2 px-24'>
            <div className="fill-current mb-8">
              <img className="shadow-lg rounded" alt="Logo Image" src={stakeholder}></img>
            </div>
            <div className="fill-current mb-8">
              <img className="shadow-lg rounded transform translate-x-16" alt="Logo Image" src={stakeholder}></img>
            </div>
            <div className="fill-current mb-8">
              <img className="shadow-lg rounded" alt="Logo Image" src={stakeholder}></img>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

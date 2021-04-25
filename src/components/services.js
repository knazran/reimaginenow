/* eslint-disable react/prop-types */
import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
// import stakeholder from '../images/pd-stakeholder.jpg'
import Img from 'gatsby-image';

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
        images {
          picture {
            childImageSharp {
              fluid(maxHeight: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }
  }
`);
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

      <div className='md:flex my-8 md:my-16'>
        <div className='w-full md:w-1/2'>
        {services.frontmatter.services.map((service, idx) => (
            // What we do card
            <div
              key={`services-${idx}`}
              className="mb-8 md:mb-12"
            >
              <h4 className='text-md lg:text-lg 2xl:text-xl text-primary-700 tracking-wide uppercase font-semibold'>{service.title}</h4>
              <p className='text-md 2xl:text-lg mt-2 mb-6 leading-tight text-primary-500'>
                {service.subtitle}
              </p>
              
            </div>
          ))}
        </div>
        <div className='w-full md:w-1/2 lg:px-8 2xl:px-24 flex flex-col space-y-4 lg:space-y-32 2xl:space-y-4'>
          {services.frontmatter.images.map((image) => (
            <div key={image.alt} className="fill-current">
              <Img
                className="shadow-lg rounded"
                  fluid={
                    image.picture.childImageSharp.fluid
                  }
                  alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

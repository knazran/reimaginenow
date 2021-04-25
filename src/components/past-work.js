/* eslint-disable react/prop-types */
import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const PastWork = () => {
  const data = useStaticQuery(graphql`
  query PastWorkPageQuery {
    past_work: markdownRemark(frontmatter: { templateKey: { eq: "past-work" } }) {
      frontmatter {
        title
        subtitle
        past_work {
          title
          description
          tag
          picture {
            childImageSharp {
              fluid(maxHeight: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`);
  console.log(data);
  const { past_work } = data;

  return (
    <div>
      <div className='text-center'>
        <h3 className='w-full text-2xl lg:text-3xl font-semibold tracking-wider py-2 text-primary-700'>
          Our Past Work
        </h3>
        <p className='text-md lg:text-xl mt-2 mb-6 leading-relaxed text-primary-500'>
        We work closely with businesses, governments and organisations to deliver the best outcome to achieve clients’ objectives.
        </p>
      </div>

      <div className='md:flex flex-wrap justify-center my-16'>
        {past_work.frontmatter.past_work.map((work, idx) => (
            // What we do card
            <div
              key={`services-${idx}`}
              className="mb-12 w-full md:w-2/5 2xl:w-1/3 md:mx-4 rounded-md border border-primary-500"
            >
              <Img
                className="shadow-lg rounded"
                  fluid={
                    work.picture.childImageSharp.fluid
                  }
                  alt={work.tag}
              />
              <div className='p-4 '>
                <span className='text-xs md:text-sm font-light py-1 text-yellow-600'>{work.tag}</span>
                <h4 className='text-md 2xl:text-lg text-primary-700 tracking-wide uppercase font-semibold'>{work.title}</h4>
                <p className='text-md mt-2 mb-6 leading-tight text-primary-500'>
                  {work.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PastWork;

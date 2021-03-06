import React from "react";
import { graphql } from "gatsby"
import { FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Img from 'gatsby-image';
import PropTypes from 'prop-types'

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage({data}) {
  const { aboutUs } = data;
  console.log(aboutUs)

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      <div className='container mx-auto px-4 lg:px-8'>
      <section className="">
        <div
          className="lg:flex mb-4"
          data-sal="slide-up"
          data-sal-duration="700"
          data-sal-easing="ease"
        >
          <div className="lg:my-6 w-full lg:w-2/3">
            <h3 className="text-3xl lg:text-4xl font-semibold py-2">
              {aboutUs.frontmatter.title}
            </h3>
            <p className="text-md mt-2 mb-3 lg:mb-6 leading-relaxed font-light">
              {aboutUs.frontmatter.subtitle}
            </p>
          </div>
          {/* <div className="my-0 lg:my-6 w-full lg:w-1/2 flex-grow-0">
            <Img
              className="rounded-lg"
              fluid={
                aboutUs.frontmatter.featuredImage.childImageSharp.fluid
              }
              alt="About-Us"
            />
          </div> */}
        </div>
      </section>

      <section id="team">
        <div className="w-20 h-1 bg-primary-700 rounded-lg self-start mb-2"></div>
        <h3 className="text-2xl font-semibold tracking-wider mb-2">Our Leadership</h3>
        <div className="lg:flex lg:flex-wrap lg:justify-center mt-8 lg:mb-12">
          {aboutUs.frontmatter.team.map((staff) => (
            <div key={staff.name} className="mx-auto w-4/5 lg:mx-0 mb-4 lg:w-1/3 lg:items-stretch">
              <div className="border rounded shadow-md lg:mx-6" style={{ "height": "100%" }}>
                <div className="flex flex-col">
                  <div className="overflow-hidden" style={{ "height": "325px" }}>
                    <Img
                      fluid={
                        staff.picture.childImageSharp.fluid
                      }
                      alt={staff.name}
                    />
                  </div>
                  <div className="px-4 py-4 text-center">
                    <h3 className="text-xl font-semibold tracking-wider">
                      {staff.name}
                    </h3>
                    <p className="text-sm leading-relaxed font-light text-gray-600">
                      {staff.title}
                    </p>
                    <p className="text-sm leading-relaxed font-light text-blue-400 mb-1">
                      {staff.email}
                    </p>
                    <IconContext.Provider value={{size:"1.8rem" ,className: "text-blue-800 hover:text-blue-900 mx-auto" }}>
                      <a target="_blank" rel="noopener noreferrer" href={staff.linkedin}>
                          <FaLinkedin />
                        </a>
                    </IconContext.Provider>
                    {/* <p className="text-sm leading-relaxed font-light text-blue-400">
                      {staff.linkedin}
                    </p> */}
                  </div>
                   <div className="px-8 py-4">
                    <ol className="list-disc">
                      {staff.credentials.map((creds, idx) => {
                        return (<li className="text-sm leading-relaxed font-light text-gray-600" key={idx} >{creds}</li>)
                      })}
                    </ol>
                   </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    
      </div>
      </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query AboutUsPageQuery {
    aboutUs: markdownRemark(frontmatter: { templateKey: { eq: "about-us" } }) {
      frontmatter {
        title
        subtitle
        team {
          name
          title
          email
          linkedin
          picture {
            childImageSharp {
              fluid(maxHeight: 420, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          credentials
        }
      }
      html
    }
  }
`

AboutPage.propTypes = {
  data: PropTypes.object
}
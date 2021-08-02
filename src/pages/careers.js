import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const CareersPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`reimaingenow`, `careers`, `hiring`, `internship`]}
        title='ReimagineNow Careers'
      />
      <div className='container mx-auto px-4 lg:px-8'>
        <section id='intro'>
          <div className='w-full lg:flex'>
            <div
              className='my-6 w-full'
              data-sal='slide-right'
              data-sal-duration='700'
              data-sal-easing='ease'>
              <h3 className='text-3xl lg:text-4xl font-semibold py-2 text-black'>
                Work with Us
              </h3>
              <p className='text-md mb-2 leading-relaxed font-light'>
                Working with Reimagine Now will give you first-hand insights on
                the public affairs sphere. We are looking for individuals
                interested in public policy communications with strong creative
                problem-solving skills.
              </p>
            </div>
            <div
              className='my-6 w-full lg:w-1/2 lg:pl-8 flex-grow-0'
              data-sal='slide-left'
              data-sal-duration='700'
              data-sal-easing='ease'></div>
          </div>
        </section>
        <section id='open-position'>
          <div className='w-full mb-16'>
            <div className='w-20 h-1 rounded-lg self-start bg-secondary-500 mb-2'></div>
            <div className='py-2 mb-4 md:mb-8'>
              <h3 className='text-xl lg:text-2xl tracking-wider mb-4 text-black'>
                Open Positions
              </h3>
              <div className='mb-4'>
                <h4 className='text-lg lg:text-xl tracking-wider text-primary-500'>
                  Senior Associate/Associate, Public Relations
                </h4>
                <p className='text-md mb-4 leading-relaxed font-light text-primary-500'>
                  Apply by 13th August 2021
                </p>
                <a
                  className='mt-4 lg:mt-0 '
                  href='https://drive.google.com/file/d/1Oh2NjyGNanozrusoi7ls8DllJSeMO6RO/view?usp=sharing '
                  target='_blank'
                  rel='noopener noreferrer'>
                  <button
                    type='button'
                    className='text-white text-center py-2 px-8 rounded bg-primary-500 hover:bg-primary-700'>
                    Learn More
                  </button>
                </a>
              </div>
              <div className='mb-4'>
                <h4 className='text-lg lg:text-xl tracking-wider text-primary-500'>
                  Manager, Business Development
                </h4>
                <p className='text-md mb-4 leading-relaxed font-light text-primary-500'>
                  Apply by 13th August 2021
                </p>
                <a
                  className='mt-4 lg:mt-0 '
                  href='https://drive.google.com/file/d/1JsUK0iXSCi5acBPKDSewwiJZeRFAPO5k/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <button
                    type='button'
                    className='text-white text-center py-2 px-8 rounded bg-primary-500 hover:bg-primary-700'>
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id='internship'>
          <div className='w-full mb-16'>
            <div className='w-20 h-1 rounded-lg self-start bg-secondary-500 mb-2'></div>
            <div className='py-2 mb-4 md:mb-8'>
              <h3 className='text-xl lg:text-2xl tracking-wider mb-4 text-black'>
                Internships
              </h3>
              <p className='text-md mb-4 leading-relaxed font-light'>
                At Reimagine Now, we are always looking for talented individuals
                with a desire for growth to join our team. Internships will be a
                duration of three (3) months.
              </p>
              <a
                className='mt-4 lg:mt-0 '
                href='https://drive.google.com/file/d/1A_N7Na8_UsC_19iXGa0kSKNI3MZSdNjY/view?usp=sharing '
                target='_blank'
                rel='noopener noreferrer'>
                <button
                  type='button'
                  className='text-white text-center py-2 px-8 rounded bg-primary-500 hover:bg-primary-700'>
                  Learn More
                </button>
              </a>
            </div>
            <div className='py-2 mb-4 md:mb-8'>
              <h3 className='text-lg lg:text-xl tracking-wider mb-4 text-black underline'>
                What you’ll do
              </h3>
              <p className='text-md mb-4 leading-relaxed font-light'>
                As an intern, you will assist our Project Managers and Project
                Consultants with our collaborative projects with various
                stakeholders.
              </p>
              <p className='text-md mb-4 leading-relaxed font-light'>
                Interns will also support the company’s business development
                process.
              </p>
              <p className='text-md mb-4 leading-relaxed font-light'>
                Apply now by submitting your resume and cover letter at
                contact@reimaginenow.org
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;

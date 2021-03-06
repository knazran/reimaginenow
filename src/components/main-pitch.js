import React from 'react';
import { Link } from 'gatsby';
import mainpitchimg from '../images/main-rn.png';

const MainPitch = () => {
  return (
    <div>
      {/* <div className='py-8 lg:py-32 bg-contain md:bg-cover block md:hidden'>
        <div className='container mx-auto px-4 py-0 lg:px-8'>
          <div className='w-full md:w-1/2'>
            <h3 className='w-full text-3xl lg:text-5xl font-semibold tracking-wider py-2 text-primary-700'>
              Cross-disciplinary public affairs expertise
            </h3>
          </div>
        </div>
      </div> */}
      <div
        className='md:flex py-8 lg:py-32 bg-cover'
        style={{
          backgroundImage: `url(${mainpitchimg})`,
          backgroundSize: 'cover',
        }}>
        <div className='container mx-auto px-4 py-0 lg:px-8'>
          <div className='w-full md:w-1/2'>
            <h3 className='text-3xl lg:text-5xl font-bold tracking-wider py-2 text-primary-500 mb-8'>
              Cross-disciplinary public affairs expertise
            </h3>
            <div className='lg:w-4/5'>
              <p className='text-md lg:text-xl mt-2 mb-6 leading-snug text-primary-500'>
                Combining political risk consultancy and conventional public relations approach to deliver robust and impactful advocacy, 
                we specialize in providing progressive solutions to achieve real results. 
              </p>
              <p className='text-md lg:text-xl mt-2 mb-6 leading-snug text-primary-500'>
                Using a targeted approach, we rethink solutions to increase value to your projects and organization by facilitating 
                effective public affairs communications between business, government and the average Malaysian.
              </p>
              <Link className='' to='/about-us'>
                <button
                  type='button'
                  className='w-auto text-black text-center mt-4 py-2 px-8 rounded bg-secondary-500 hover:bg-secondary-700'>
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPitch;

import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ProjectNavigation } from '../components/ProjectNavigation';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ProjectsContact() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
      <ProjectNavigation />
        <h2 className='mb-6 text-3xl lg:text-5xl md:text-4xl py-10 text-center font-heading lg:px-40 px-10'>
          Creșterea ocupării, precum și îmbunătățirea nivelului de competențe al
          tinerilor NEETs
        </h2>
        <section className=''>
          <div className='container px-4 mx-auto text-center'>
            <div className='max-w-3xl mx-auto'>
              <p className='mb-3 text-lg md:text-xl w-full font-heading'>
                Manager Proiect: Popa Felicia-Delia
              </p>
              <p className='mb-3 text-lg md:text-xl w-full font-heading'>
                Telefon: 0745.357.905
              </p>
              <p className='mb-3 text-lg md:text-xl w-full font-heading'>
                Email: scmarinexsrl@yahoo.com
              </p>
              <p className='mb-3 text-lg md:text-xl w-full font-heading'>
                Pentru informații legate de grupul țintă, recrutare:
                0739.162.605
              </p>
            </div>
          </div>
        </section>
        <div className='flex justify-center py-10'>
          <img
            src='images/ss-transparent.png'
            alt=''
            className='md:w-1/3 w-1/2'
          />
        </div>
        <section className='py-24 bg-gray-900'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap px-4'>
              <div className='w-full lg:mb-0 px-4 md:w-1/4 xl:w-2/6'>
                <a className='inline-block mb-4' href='#'>
                  <img
                    src='images/logo-jam-1.png'
                    alt=''
                    className='h-20'
                  />
                </a>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/4 xl:w-auto xl:mr-20 px-4 lg:mb-0'>
                <ul className='flex flex-wrap gap-5'>
                  <li className='mb-6'>
                    <a
                      className='font-heading text-white hover:text-gray-100'
                      href='#'
                    >
                      Prima pagină
                    </a>
                  </li>
                  <li className='mb-6'>
                    <a
                      className='font-heading text-white hover:text-gray-100'
                      href='#'
                    >
                      Achiziții
                    </a>
                  </li>
                  <li className='mb-6'>
                    <a
                      className='font-heading text-white hover:text-gray-100'
                      href='#'
                    >
                      Afaceri
                    </a>
                  </li>
                  <li className='mb-6'>
                    <a
                      className='font-heading text-white hover:text-gray-100'
                      href='#'
                    >
                      Despre
                    </a>
                  </li>
                  <li>
                    <a
                      className='font-heading text-white hover:text-gray-100'
                      href='#'
                    >
                      Evaluare
                    </a>
                  </li>
                  <li>
                    <a
                      className='font-heading text-white hover:text-gray-100'
                      href='#'
                    >
                      Progres
                    </a>
                  </li>
                  <li>
                    <a
                      className='font-heading text-white hover:text-gray-100'
                      href='#'
                    >
                      Documente
                    </a>
                  </li>
                  <li>
                    <a
                      className='font-heading text-white hover:text-gray-100'
                      href='#'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <span className='block text-gray-300 mb-6 mt-2 w-full'>
                  2023 © Jam Business
                </span>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}


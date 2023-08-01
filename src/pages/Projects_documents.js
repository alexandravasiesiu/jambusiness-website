import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ProjectsDocuments() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section>
          <nav className='py-4 bg-white'>
            <div className='container mx-auto'>
              <div className='relative items-center flex px-4'>
                <div className='w-auto'>
                  <a className='inline-block' href='#'>
                    <img
                      src='images/logo-jam-1.png'
                      alt=''
                      className='h-20'
                    />
                  </a>
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block'>
                  <ul className='flex items-center'>
                    <li className='font-heading text-gray-900 mr-10 w-28'>
                      <a className='hover:text-black' href='#'>
                        Prima pagină
                      </a>
                    </li>
                    <li className='font-heading mr-12 text-gray-900'>
                      <a className='hover:text-black' href='#'>
                        Achiziții
                      </a>
                    </li>
                    <li className='font-heading mr-12 text-gray-900'>
                      <a className='hover:text-black' href='#'>
                        Afaceri
                      </a>
                    </li>
                    <li className='font-heading mr-12 text-gray-900'>
                      <a className='hover:text-black' href='#'>
                        Despre
                      </a>
                    </li>
                    <li className='font-heading mr-12 text-gray-900'>
                      <a className='hover:text-black' href='#'>
                        Evaluare
                      </a>
                    </li>
                    <li className='font-heading mr-12 text-gray-900'>
                      <a className='hover:text-black' href='#'>
                        Progres
                      </a>
                    </li>
                    <li className='font-heading mr-12 text-gray-900'>
                      <a className='hover:text-black' href='#'>
                        Documente
                      </a>
                    </li>
                    <li className='font-heading mr-12 text-gray-900'>
                      <a className='hover:text-black' href='#'>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-auto lg:hidden'>
                  <a
                    className='navbar-burger inline-flex w-14 h-14 justify-center items-center bg-gray-50 hover:bg-gray-100 rounded-full'
                    href='#'
                  >
                    <svg
                      width={20}
                      height={10}
                      viewBox='0 0 20 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M19 9H1M19 1H1'
                        stroke='black'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50'>
            <div className='fixed inset-0 backdrop-blur-xl backdrop-filter bg-gray-900 bg-opacity-80' />
            <nav className='relative pt-7 pb-8 bg-white h-full overflow-y-auto'>
              <div className='flex flex-col px-6 h-full'>
                <a className='inline-block ml-4 mb-7' href='#'>
                  <img
                    src='images/logo-jam-1.png'
                    alt=''
                    className='h-20'
                  />
                </a>
                <ul className='w-full mb-auto pb-16'>
                  <li>
                    <a
                      className='font-heading block text-base font-medium py-4 px-6 hover:bg-green-50 rounded-sm'
                      href='#'
                    >
                      Acasă
                    </a>
                  </li>
                  <li>
                    <a
                      className='font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm'
                      href='#'
                    >
                      Achiziții
                    </a>
                  </li>
                  <li>
                    <a
                      className='font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm'
                      href='#'
                    >
                      Afaceri
                    </a>
                  </li>
                  <li>
                    <a
                      className='font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm'
                      href='#'
                    >
                      Despre
                    </a>
                  </li>
                  <li>
                    <a
                      className='font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm'
                      href='#'
                    >
                      Evaluare
                    </a>
                  </li>
                  <li>
                    <a
                      className='font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm'
                      href='#'
                    >
                      Progres
                    </a>
                  </li>
                  <li>
                    <a
                      className='font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm'
                      href='#'
                    >
                      Documente
                    </a>
                  </li>
                  <li>
                    <a
                      className='font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm'
                      href='#'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div className='w-full'>
                  <p className='pl-2 font-heading'>2023 © Shuffle</p>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <h2 className='mb-6 text-3xl lg:text-5xl md:text-4xl py-10 text-center font-heading lg:px-40 px-10'>
          Creșterea ocupării, precum și îmbunătățirea nivelului de competențe al
          tinerilor NEETs
        </h2>
        <section className=''>
          <div className='container px-4 mx-auto'>
            <div className='max-w-3xl mx-auto'>
              <h3 className='font-semibold font-heading md:text-3xl text-2xl mb-2'>
                Grup țintă
              </h3>
              <h5 className='mb-2 text-xl md:text-2xl font-semibold font-heading'>
                Metodologie selecție grup țintă:
              </h5>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/A4_iul.22_Metodologie-selectie-GT-154155-final.pdf'
                className='flex items-center hover:text-red-500 text-lg underline mb-6'
              >
                A4_iul.22_Metodologie-selectie-GT-154155-final
              </a>
              <h5 className='mb-2 text-xl md:text-2xl font-semibold font-heading'>
                Calendar recrutare grup țintă:
              </h5>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/10/Calendar-recrutare-site.pdf'
                className='flex items-center hover:text-red-500 text-lg underline mb-6'
              >
                Calendar-recrutare-grup-tinta
              </a>
              <h3 className='text-2xl md:text-3xl font-semibold mb-2 font-heading'>
                Concurs planuri de afaceri
              </h3>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/01/Metodologie-concurs-planuri-de-afaceri.pdf'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Metodologie-concurs-planuri-de-afaceri
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-1-Cerere-inscriere.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-1-Cerere-inscriere
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-2-Declaratie-AE.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-2-Declaratie-AE
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-3-Declaratie-dubla-finantare.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-3-Declaratie-dubla-finantare
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-4-Declaratie-conflict-interese.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-4-Declaratie-conflict-interese
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-5-Plan-Afaceri-model.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-5-Plan-Afaceri-model
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-6-Instructiuni-Plan-Afaceri.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-6-Instructiuni-Plan-Afaceri
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-7-Grila-EA.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-7-Grila-EA
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-8-Grila-ETF.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-8-Grila-ETF
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-9-Declaratie-juriu.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-9-Declaratie-juriu
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-10-Contestatie.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-10-Contestatie
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-11-Notificare-rezultat.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-11-Notificare-rezultat
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-12-Declaratie-eligibilitate.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-12-Declaratie-eligibilitate
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-13-Cerere-retragere.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-13-Cerere-retragere
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-14-Contract-subventie.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-14-Contract-subventie
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Macheta-financiara.xlsx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Macheta financiara
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/01/Anexa-15-Cerere-de-finantare.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-15-Cerere-de-finantare
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/01/Anexa-16-Declaratie-de-interese-pentru-achizitii.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-16-Declaratie-de-interese-pentru-achizitii
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/01/Anexa-17-Cerere-de-plata.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-17-Cerere-de-plata
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/01/Anexa-18-Cerere-de-rambursare.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-18-Cerere-de-rambursare
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/01/Anexa-19-Solicitare-Act-Aditional.docx'
                className='flex items-center hover:text-red-500 text-lg underline mb-2'
              >
                Anexa-19-Solicitare-Act-Aditional
              </a>
              <a
                href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/01/Anexa-20-Solicitare-Notificare-Modificari.docx'
                className='flex items-center hover:text-red-500 text-lg underline'
              >
                Anexa-20-Solicitare-Notificare-Modificari
              </a>
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


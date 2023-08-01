import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ProjectsEvaluation() {
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
              <h3 className='font-heading text-2xl font-medium mb-8 text-center'>
                Rezultatele evaluării dosarelor de concurs, rezultatele finale
              </h3>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      Listele cu persoanele selectate în grupul țintă al
                      proiectului – mai 2023
                    </h3>
                  </div>
                  <div className='flex-shrink-0'>
                    <svg
                      width={16}
                      height={9}
                      viewBox='0 0 16 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 1L7.99997 8L0.999968 1'
                        stroke='#2B3031'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <p className='mb-3 w-full md:text-lg'>
                  A fost publicată lista cu persoanele acceptate în grupul țintă
                  în luna mai 2023 în urma procesului de verificare și evaluare
                  a dosarelor de grup țintă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Persoanele selectate au fost contactate de către experții grup
                  țintă pentru semnarea contractului de membru grup țintă.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/06/A4_mai.23_BTE_Lista-dosare-selectate-publicata.pdf'
                  className='items-center text-lg underline hover:text-red-500'
                >
                  A4_mai.23_BTE_Lista-dosare-selectate-publicata
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      Listele cu persoanele selectate în grupul țintă al
                      proiectului – aprilie 2023
                    </h3>
                  </div>
                  <div className='flex-shrink-0'>
                    <svg
                      width={16}
                      height={9}
                      viewBox='0 0 16 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 1L7.99997 8L0.999968 1'
                        stroke='#2B3031'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <p className='mb-3 w-full md:text-lg'>
                  A fost publicată lista cu persoanele acceptate în grupul țintă
                  în luna aprilie 2023 în urma procesului de verificare și
                  evaluare a dosarelor de grup țintă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Persoanele selectate au fost contactate de către experții grup
                  țintă pentru semnarea contractului de membru grup țintă.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/06/A4_apr.23_Lista-dosare-selectate-publicata.pdf'
                  className='items-center text-lg underline hover:text-red-500'
                >
                  A4_apr.23_Lista-dosare-selectate-publicata
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      Listele cu persoanele selectate în grupul țintă al
                      proiectului – martie 2023
                    </h3>
                  </div>
                  <div className='flex-shrink-0'>
                    <svg
                      width={16}
                      height={9}
                      viewBox='0 0 16 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 1L7.99997 8L0.999968 1'
                        stroke='#2B3031'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <p className='mb-3 w-full md:text-lg'>
                  A fost publicată lista cu persoanele acceptate în grupul țintă
                  în luna martie 2023 în urma procesului de verificare și
                  evaluare a dosarelor de grup țintă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Persoanele selectate au fost contactate de către experții grup
                  țintă pentru semnarea contractului de membru grup țintă.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/04/A4_mar23_Lista-dosare-selectate-publicata-31.03.2023.pdf'
                  className='items-center text-lg underline hover:text-red-500'
                >
                  A4_mar23_Lista-dosare-selectate-publicata-31.03.2023
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      Listele cu persoanele selectate în grupul țintă al
                      proiectului – februarie 2023
                    </h3>
                  </div>
                  <div className='flex-shrink-0'>
                    <svg
                      width={16}
                      height={9}
                      viewBox='0 0 16 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 1L7.99997 8L0.999968 1'
                        stroke='#2B3031'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <p className='mb-3 w-full md:text-lg'>
                  A fost publicată lista cu persoanele acceptate în grupul țintă
                  în luna februarie 2023 în urma procesului de verificare și
                  evaluare a dosarelor de grup țintă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Persoanele selectate au fost contactate de către experții grup
                  țintă pentru semnarea contractului de membru grup țintă.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/03/A4_feb.23_Lista-dosare-selectate-publicata.pdf'
                  className='items-center text-lg underline hover:text-red-500'
                >
                  A4_feb.23_Lista-dosare-selectate-publicata
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      Listele cu persoanele selectate în grupul țintă al
                      proiectului – ianuarie 2023
                    </h3>
                  </div>
                  <div className='flex-shrink-0'>
                    <svg
                      width={16}
                      height={9}
                      viewBox='0 0 16 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 1L7.99997 8L0.999968 1'
                        stroke='#2B3031'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <p className='mb-3 w-full md:text-lg'>
                  A fost publicată lista cu persoanele acceptate în grupul țintă
                  în luna ianuarie 2023 în urma procesului de verificare și
                  evaluare a dosarelor de grup țintă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Persoanele selectate au fost contactate de către experții grup
                  țintă pentru semnarea contractului de membru grup țintă.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/02/A4_ian.23_Lista-dosare-selectate-publicata.pdf'
                  className='items-center text-lg underline hover:text-red-500'
                >
                  A4_ian.23_Lista-dosare-selectate-publicata
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      Listele cu persoanele selectate în grupul țintă al
                      proiectului – decembrie 2022
                    </h3>
                  </div>
                  <div className='flex-shrink-0'>
                    <svg
                      width={16}
                      height={9}
                      viewBox='0 0 16 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 1L7.99997 8L0.999968 1'
                        stroke='#2B3031'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <p className='mb-3 w-full md:text-lg'>
                  A fost publicată lista cu persoanele acceptate în grupul țintă
                  în luna decembrie 2022 în urma procesului de verificare și
                  evaluare a dosarelor de grup țintă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Persoanele selectate au fost contactate de către experții grup
                  țintă pentru semnarea contractului de membru grup țintă.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/01/4.-Lista-publicata-persoane-selectate-GT.pdf'
                  className='items-center text-lg underline hover:text-red-500'
                >
                  Lista-publicata-persoane-selectate-GT
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      Listele cu persoanele selectate în grupul țintă al
                      proiectului – noiembrie 2022
                    </h3>
                  </div>
                  <div className='flex-shrink-0'>
                    <svg
                      width={16}
                      height={9}
                      viewBox='0 0 16 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 1L7.99997 8L0.999968 1'
                        stroke='#2B3031'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <p className='mb-3 w-full md:text-lg'>
                  A fost publicată lista cu persoanele acceptate în grupul țintă
                  în luna noiembrie 2022 în urma procesului de verificare și
                  evaluare a dosarelor de grup țintă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Persoanele selectate au fost contactate de către experții grup
                  țintă pentru semnarea contractului de membru grup țintă.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/01/Lista-publicata-persoane-selectate-GT.pdf'
                  className='items-center text-lg underline hover:text-red-500'
                >
                  Lista-publicata-persoane-selectate-GT
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      Rezultate finale competiție planuri de afaceri
                    </h3>
                  </div>
                  <div className='flex-shrink-0'>
                    <svg
                      width={16}
                      height={9}
                      viewBox='0 0 16 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 1L7.99997 8L0.999968 1'
                        stroke='#2B3031'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <p className='mb-3 w-full md:text-lg'>
                  Competiția planurilor de afaceri din cadrul proiectului
                  ”Creșterea ocupării, precum și îmbunătățirea nivelului de
                  competențe al tinerilor NEETs” se încheie astăzi, 29.11.2022,
                  prin publicarea listei rezultatelor finale.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Le mulțumim tuturor participanților și le dorim câștigătorilor
                  mult succes în implementarea planuri de afaceri sub atenta
                  monitorizare a experților.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Rezultate-finale-competitie-planuri-afaceri.pdf'
                  className='items-center text-lg hover:text-red-500 underline'
                >
                  Rezultate-finale-competitie-planuri-afaceri
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4 font-semibold'>
                    <h3 className='font-heading text-lg'>
                      A fost publicată lista intermediară a planurilor de
                      afaceri
                    </h3>
                  </div>
                  <div className='flex-shrink-0'>
                    <svg
                      width={16}
                      height={9}
                      viewBox='0 0 16 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 1L7.99997 8L0.999968 1'
                        stroke='#2B3031'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <p className='mb-3 w-full md:text-lg'>
                  Lista intermediară a planurilor de afaceri, în cadrul
                  concursului de planuri de afaceri a fost publicată la
                  sfârșitul perioadei de evaluare a dosarelor de concurs și
                  poate fi consultată mai jos:
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Rezultat_selectie_planuri_de_afaceri.pdf'
                  className='items-center text-lg hover:text-red-500 underline'
                >
                  Rezultat_selectie_planuri_de_afaceri
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      S-a încheiat perioada de depunere a planurilor de afaceri!
                    </h3>
                  </div>
                  <div className='flex-shrink-0'>
                    <svg
                      width={16}
                      height={9}
                      viewBox='0 0 16 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 1L7.99997 8L0.999968 1'
                        stroke='#2B3031'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <p className='mb-3 w-full md:text-lg'>
                  Duminică, 20 Noiembrie 2022, la ora 18:00 s-a încheiat
                  perioada de depunere a planurilor de afaceri. La competiție
                  s-au înscris 29 de planuri de afaceri.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  De mâine începe evaluarea lor, urmând ca în data de 25
                  Noiembrie să se afișeze rezultatele.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Le dormim mult succes concurenților!
                </p>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      S-a publicat Metodologia concursului de planuri de afaceri
                    </h3>
                  </div>
                  <div className='flex-shrink-0'>
                    <svg
                      width={16}
                      height={9}
                      viewBox='0 0 16 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 1L7.99997 8L0.999968 1'
                        stroke='#2B3031'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <p className='mb-3 w-full md:text-lg'>
                  Participanții la cursul de competențe antreprenoriale au
                  posibilitatea de a participa la un concurs de planuri de
                  afaceri și de a fi finanțați cu un grant de până la 25.000
                  EUR. Metodologia concursului oferă toate informațiile cu
                  privire la acesta și la modul de înscriere.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Metodologie-concurs-planuri-de-afaceri.docx'
                  className='items-center text-lg underlinee flex mb-2 hover:text-red-500'
                >
                  Metodologie-concurs-planuri-de-afaceri
                </a>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-1-Cerere-inscriere.docx'
                  className='items-center text-lg flex mb-2 hover:text-red-500 underline'
                >
                  Anexa-1-Cerere-inscriere
                </a>
                <a
                  href='#https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-2-Declaratie-AE.docx'
                  className='items-center text-lg flex mb-2 hover:text-red-500 underline'
                >
                  Anexa-2-Declaratie-AE
                </a>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-3-Declaratie-dubla-finantare.docx'
                  className='items-center text-lg flex mb-2 hover:text-red-500 underline'
                >
                  Anexa-3-Declaratie-dubla-finantare
                </a>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-4-Declaratie-conflict-interese.docx'
                  className='items-center hover:text-red-500 text-lg underline flex mb-2'
                >
                  Anexa-4-Declaratie-conflict-interese
                </a>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-5-Plan-Afaceri-model.docx'
                  className='items-center hover:text-red-500 text-lg underline flex mb-2'
                >
                  Anexa-5-Plan-Afaceri-model
                </a>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-6-Instructiuni-Plan-Afaceri.docx'
                  className='items-center hover:text-red-500 text-lg underline flex mb-2'
                >
                  Anexa-6-Instructiuni-Plan-Afaceri
                </a>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-7-Grila-EA.docx'
                  className='items-center hover:text-red-500 text-lg underline flex mb-2'
                >
                  Anexa-7-Grila-EA
                </a>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-8-Grila-ETF.docx'
                  className='items-center hover:text-red-500 text-lg underline flex mb-2'
                >
                  Anexa-8-Grila-ETF
                </a>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-9-Declaratie-juriu.docx'
                  className='items-center hover:text-red-500 text-lg underline flex mb-2'
                >
                  Anexa-9-Declaratie-juriu
                </a>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-10-Contestatie.docx'
                  className='items-center hover:text-red-500 text-lg underline flex mb-2'
                >
                  Anexa-10-Contestatie
                </a>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-11-Notificare-rezultat.docx'
                  className='items-center hover:text-red-500 text-lg underline flex mb-2'
                >
                  Anexa-11-Notificare-rezultat
                </a>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-12-Declaratie-eligibilitate.docx'
                  className='items-center hover:text-red-500 text-lg underline flex mb-2'
                >
                  Anexa-12-Declaratie-eligibilitate
                </a>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-13-Cerere-retragere.docx'
                  className='items-center hover:text-red-500 text-lg underline flex mb-2'
                >
                  Anexa-13-Cerere-retragere
                </a>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Anexa-14-Contract-subventie.docx'
                  className='items-center hover:text-red-500 text-lg underline flex mb-2'
                >
                  Anexa-14-Contract-subventie
                </a>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/Macheta-financiara.xlsx'
                  className='items-center hover:text-red-500 text-lg underline flex mb-2'
                >
                  Macheta financiara
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'></button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      Listele cu persoanele selectate în grupul țintă al
                      proiectului – octombrie 2022
                    </h3>
                  </div>
                  <div className='flex-shrink-0'>
                    <svg
                      width={16}
                      height={9}
                      viewBox='0 0 16 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 1L7.99997 8L0.999968 1'
                        stroke='#2B3031'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <p className='mb-3 w-full md:text-lg'>
                  A fost publicată lista cu persoanele acceptate în grupul țintă
                  în luna octombrie 2022 în urma procesului de verificare și
                  evaluare a dosarelor de grup țintă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Persoanele selectate au fost contactate de către experții grup
                  țintă pentru semnarea contractului de membru grup țintă.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/12/Lista-publicata-persoane-selectate-GT.pdfhttps://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/12/Lista-publicata-persoane-selectate-GT.pdf'
                  className='items-center text-lg flex mb-2 hover:text-red-500 underline'
                >
                  Lista-publicata-persoane-selectate-GT
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      Listele cu persoanele neselectate în grupul țintă al
                      proiectului – septembrie 2022
                    </h3>
                  </div>
                  <div className='flex-shrink-0'>
                    <svg
                      width={16}
                      height={9}
                      viewBox='0 0 16 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 1L7.99997 8L0.999968 1'
                        stroke='#2B3031'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <p className='mb-3 w-full md:text-lg'>
                  A fost publicată lista cu persoanele neacceptate în grupul
                  țintă în luna septembrie 2022 în urma procesului de verificare
                  și evaluare a dosarelor de grup țintă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Persoanele neselectate au dreptul de a contesta decizia
                  conform metodologiei de selecție a grupului țintă.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/A4_sep.22_Lista-dosare-neselectate-publicata.pdf'
                  className='items-center text-lg flex mb-2 hover:text-red-500 underline'
                >
                  A4_sep.22_Lista-dosare-neselectate-publicata
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      Listele cu persoanele selectate în grupul țintă al
                      proiectului – septembrie 2022
                    </h3>
                  </div>
                  <div className='flex-shrink-0'>
                    <svg
                      width={16}
                      height={9}
                      viewBox='0 0 16 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 1L7.99997 8L0.999968 1'
                        stroke='#2B3031'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <p className='mb-3 w-full md:text-lg'>
                  A fost publicată lista cu persoanele acceptate în grupul țintă
                  în luna septembrie 2022 în urma procesului de verificare și
                  evaluare a dosarelor de grup țintă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Persoanele selectate au fost contactate de către experții grup
                  țintă pentru semnarea contractului de membru grup țintă.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/A4_sep.22_Lista-dosare-selectate-publicata.pdf'
                  className='items-center text-lg flex mb-2 hover:text-red-500 underline'
                >
                  A4_sep.22_Lista-dosare-selectate-publicata
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      Listele cu persoanele neselectate în grupul țintă al
                      proiectului – august 2022
                    </h3>
                  </div>
                  <div className='flex-shrink-0'>
                    <svg
                      width={16}
                      height={9}
                      viewBox='0 0 16 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 1L7.99997 8L0.999968 1'
                        stroke='#2B3031'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <p className='mb-3 w-full md:text-lg'>
                  A fost publicată lista cu persoanele neacceptate în grupul
                  țintă în luna august 2022 în urma procesului de verificare și
                  evaluare a dosarelor de grup țintă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Persoanele neselectate au dreptul de a contesta decizia
                  conform metodologiei de selecție a grupului țintă.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/A4_aug.22_Lista-dosare-neselectate-publicata.pdf'
                  className='items-center text-lg flex mb-2 underline hover:text-red-500'
                >
                  A4_aug.22_Lista-dosare-neselectate-publicata
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      Listele cu persoanele selectate în grupul țintă al
                      proiectului – august 2022
                    </h3>
                  </div>
                  <div className='flex-shrink-0'>
                    <svg
                      width={16}
                      height={9}
                      viewBox='0 0 16 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 1L7.99997 8L0.999968 1'
                        stroke='#2B3031'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <p className='mb-3 w-full md:text-lg'>
                  A fost publicată lista cu persoanele acceptate în grupul țintă
                  în luna august 2022 în urma procesului de verificare și
                  evaluare a dosarelor de grup țintă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Persoanele selectate au fost contactate de către experții grup
                  țintă pentru semnarea contractului de membru grup țintă.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/11/A4_aug.22_Lista-dosare-selectate-publicata.pdf'
                  className='items-center text-lg flex mb-2 hover:text-red-500 underline'
                >
                  A4_aug.22_Lista-dosare-selectate-publicata
                </a>
              </button>
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


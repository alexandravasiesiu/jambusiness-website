import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ProjectsAcquisitions() {
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
                Anunțuri privind procedura de achiziție a materialelor și
                serviciilor necesare pentru implementarea proiectului
              </h3>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <a
                      href='#'
                      className='font-heading border rounded-sm py-1 px-1 hover:underline'
                    >
                      ACHIZIȚII:
                    </a>
                    <h3 className='font-heading font-semibold md:text-xl text-lg mt-3'>
                      Achiziție servicii furnizare curs gestiunea deșeurilor
                      (229/30.09.2022)
                    </h3>
                  </div>
                  <div className='flex-shrink-0 justify-start'>
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
                  Obiectul achiziției: Furnizare servicii furnizare curs
                  gestiunea deșeurilor – (neacreditat ANC) în cadrul
                  proiectului: “Creșterea ocupării, precum și îmbunătățirea
                  nivelului de competențe al tinerilor NEETs”, cod SMIS 154155,
                  respectiv planificarea, organizarea si derularea programului
                  de mediere.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Cod CPV 80530000-8 Servicii de formare profesională;
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Cod CPV 79952000-2 Servicii pentru evenimente;
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Valoarea totală estimată: 114.240,00 lei
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Ofertele se depun personal sau prin curier în Mun. Alba Iulia,
                  Str. Livezii, nr.35C, jud. Alba, cod poștal 510170, România
                  sau prin Email la: scmarinexsrl@yahoo.com, până la data de
                  06.10.2022 ora 12.00.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/10/154155-_Invitatie-participare-MarinexSRL_curs_deseuri_reluata.pdf'
                  className='flex items-center underline hover:text-red-500 md:text-lg'
                >
                  154155-_Invitatie-participare-MarinexSRL_curs_deseuri_reluata
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading font-semibold md:text-xl text-lg'>
                      Achiziție echipamente IT si tehnologice si pachete licențe
                      sistem operare + editare documente (204/22.09.2022)
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
                  Obiectul achiziției: Furnizare echipamente IT și tehnologice
                  si pachete licențe sistem operare + editare documente aferente
                  membrilor echipei în cadrul proiectului: “Creșterea ocupǎrii,
                  precum și îmbunǎtǎțirea nivelului de competențe al tinerilor
                  NEETs”, cod SMIS 154155, respectiv planificarea, organizarea
                  si derularea programului de mediere.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Cod CPV 30000000-9 – Echipament informatic și accesorii de
                  birou, cu excepția mobilierului și a pachetelor software,
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Cod CPV 48783000-0 – Pachete software pentru managementul
                  conținutului
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Valoarea totala estimata: 40.941,95 lei
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Ofertele se depun personal sau prin curier în Mun.Alba Iulia,
                  Str. Livezii, nr.35C, jud.Alba, cod poștal 510170, România sau
                  prin Email la adresa: scmarinexsrl@yahoo.com, până la data de
                  26.09.2022 ora 12.00.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/09/154155-_Invitatie-participare-MarinexSRL_echipamente_ITsoft.pdf'
                  className='flex items-center underline hover:text-red-500 md:text-lg'
                >
                  154155-_Invitatie-participare-MarinexSRL_echipamente_ITsoft
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading font-semibold md:text-xl text-lg'>
                      Achiziție servicii furnizare curs gestiunea deșeurilor
                      (192/19.09.2022)
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
                  Obiectul achiziției: Furnizare servicii furnizare curs
                  gestiunea deșeurilor – (neacreditat ANC) în cadrul
                  proiectului: “Creșterea ocupǎrii, precum și îmbunǎtǎțirea
                  nivelului de competențe al tinerilor NEETs”, cod SMIS 154155,
                  respectiv planificarea, organizarea si derularea programului
                  de mediere.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Cod CPV 80530000-8 Servicii de formare profesională;
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Cod CPV 79952000-2 Servicii pentru evenimente
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Valoarea totala estimata: 114.240,00 lei
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Ofertele se depun personal sau prin curier în Mun.Alba Iulia,
                  Str. Livezii, nr.35C, jud.Alba, cod poștal 510170, România sau
                  prin Email la adresa: scmarinexsrl@yahoo.com, până la data de
                  26.09.2022 ora 12.00.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/09/154155-_Invitatie-participare-MarinexSRL_curs_deseuri.pdf'
                  className='flex items-center underline hover:text-red-500 md:text-lg'
                >
                  154155-_Invitatie-participare-MarinexSRL_curs_deseuri
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold md:text-xl'>
                      Achiziție servicii organizare și derulare program de
                      mediere (90/22.08.2022)
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
                  Obiectul achiziției: Servicii organizare si derulare program
                  de mediere în cadrul proiectului: “Creșterea ocupǎrii, precum
                  și îmbunǎtǎțirea nivelului de competențe al tinerilor NEETs”,
                  cod SMIS 154155, respectiv planificarea, organizarea si
                  derularea programului de mediere.m.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Cod CPV 79610000-3- Servicii de plasare de personal, pentru
                  participanții din grupul țintă
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Valoarea totala estimata: 452.200,00 lei
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Ofertele se depun personal sau prin curier în Mun.Alba Iulia,
                  Str. Livezii, nr.35C, jud.Alba, cod poștal 510170, România sau
                  prin Email la adresa: scmarinexsrl@yahoo.com, până la data de
                  02.09.2022 ora 12.00.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/08/154155_Fisa-date_Documente-atribuire_Marinex-SRL_mediere.pdf'
                  className='flex items-center underline hover:text-red-500 md:text-lg'
                >
                  154155_Fisa-date_Documente-atribuire_Marinex-SRL_mediere
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold md:text-xl'>
                      Achiziție Servicii creare si întreținere platforma
                      e-learning (78/21.08.2022)
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
                  Obiectul achiziției: Servicii creare si întreținere platforma
                  e-learning în cadrul proiectului: “Creșterea ocupării, precum
                  și îmbunătățirea nivelului de competențe al tinerilor NEETs” ,
                  cod SMIS 154155, respectiv serviciu de analiza si planificare
                  strategie, instalare si dezvoltare de funcționalități
                  platforma, personalizare aspect si design platforma,
                  structurare platforma de învățare, dezvoltare conținut
                  e-learning, serviciu de gestionare tehnica si întreținere
                  platforma. Concret, se are în vedere realizarea platformei
                  e-learning, gestionarea si întreținerea acesteia, rezolvarea
                  posibilelor deficiențe ce apar pe parcurs. Platforma
                  e-learning va fi folosita in cadrul tuturor programelor de
                  formare derulate în cadrul proiectului.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Cod CPV 72212900-8 – Diverse servicii de dezvoltare de
                  software si sisteme informatice,
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Valoarea totala estimata: 217.770,00 lei.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Ofertele se depun personal sau prin curier în Mun. Alba Iulia,
                  Str. Livezii, nr.35C, jud. Alba, cod poștal 510170, România
                  sau prin Email la adresa: scmarinexsrl@yahoo.com, până la data
                  de 02.09.2022 ora 12.00.
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/08/154155_Fisa-date_Documente-atribuire_Marinex-SRL_platforma.pdf'
                  className='flex items-center underline hover:text-red-500 md:text-lg'
                >
                  154155_Fisa-date_Documente-atribuire_Marinex-SRL_platforma
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold md:text-xl'>
                      Achiziție pachete licențe sistem operare + editare
                      documente (40/05.08.2022)
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
                  Obiectul achiziției este reprezentat de: Furnizare pachete
                  licențe sistem operare + editare documente aferente membrilor
                  echipei în cadrul proiectului: ”Creșterea ocupării, precum și
                  îmbunătățirea nivelului de competențe al tinerilor NEETs”, cod
                  SMIS 154155.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Cod CPV: 48783000-0 – Pachete software pentru managementul
                  conținutului
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Valoarea estimată: 6.545,00 lei.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Ofertanții interesați de procedura de achiziție vor depune
                  oferta in plic închis sau prin email, pana cel mai târziu la
                  data de 12.08.2022, ora 12.00
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Adresa poștală de corespondență a Beneficiarului privat unde
                  se vor depune ofertele este Mun. Alba Iulia, Str. Livezii,
                  nr.35C, jud.Alba, cod poștal 510170, România, sau prin email
                  la adresa : scmarinexsrl@yahoo.com
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/08/154155-_Invitatie-participare-achizitie_soft_reluata.pdf'
                  className='flex items-center underline hover:text-red-500 md:text-lg'
                >
                  154155-_Invitatie-participare-achizitie_soft_reluata
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold md:text-xl'>
                      Achiziție echipamente IT și tehnologice (39/05.08.2022)
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
                  Obiectul achiziției este reprezentat de: Furnizare echipamente
                  IT și tehnologice în cadrul proiectului: ”Creșterea ocupării,
                  precum și îmbunătățirea nivelului de competențe al tinerilor
                  NEETs”, cod SMIS 154155.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Cod CPV: 30000000-9 – Echipament informatic și accesorii de
                  birou, cu excepția mobilierului și a pachetelor software.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Valoarea estimată: 34.396,95 lei.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Ofertanții interesați de procedura de achiziție vor depune
                  oferta in plic închis sau prin email, pana cel mai târziu la
                  data de 12.08.2022, ora 12.00.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Adresa poștală de corespondență a Beneficiarului privat unde
                  se vor depune ofertele este Mun. Alba Iulia, Str. Livezii,
                  nr.35C, jud.Alba, cod poștal 510170, România, sau prin email
                  la adresa : scmarinexsrl@yahoo.com
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/08/154155-_Invitatie-participare-achizitie_echipamente_IT_reluata.pdf'
                  className='flex items-center underline hover:text-red-500 md:text-lg'
                >
                  154155-_Invitatie-participare-achizitie_echipamente_IT_reluata
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold md:text-xl'>
                      Achiziție pachete licențe sistem operare + editare
                      documente
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
                  Obiectul achiziției este reprezentat de: Furnizare pachete
                  licențe sistem operare + editare documente aferente membrilor
                  echipei în cadrul proiectului: ”Creșterea ocupării, precum și
                  îmbunătățirea nivelului de competențe al tinerilor NEETs”, cod
                  SMIS 154155
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Cod CPV: 48783000-0 – Pachete software pentru managementul
                  conținutului,
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Valoarea estimată: 6.545,00 lei.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Adresa poștală de corespondență a Beneficiarului privat unde
                  se vor depune ofertele este Mun. Alba Iulia, Str. Livezii,
                  nr.35C, jud. Alba, cod poștal 510170, România, sau prin poșta
                  electronică: scmarinexsrl@yahoo.com
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/07/154155-_Invitatie-participare-achizitie_soft.pdf'
                  className='flex items-center underline hover:text-red-500 md:text-lg'
                >
                  154155-_Invitatie-participare-achizitie_soft
                </a>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold md:text-xl'>
                      Achiziție echipamente IT și tehnologice
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
                  Obiectul achiziției este reprezentat de: Furnizare echipamente
                  IT și tehnologice în cadrul proiectului: ”Creșterea ocupării,
                  precum și îmbunătățirea nivelului de competențe al tinerilor
                  NEETs”, cod SMIS 154155
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Cod CPV: 30000000-9 – Echipament informatic și accesorii de
                  birou, cu excepția mobilierului și a pachetelor software
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Valoarea estimată: 34.396,95 lei.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Adresa poștală de corespondență a Beneficiarului privat unde
                  se vor depune ofertele este Mun. Alba Iulia, Str. Livezii,
                  nr.35C, jud. Alba, cod poștal 510170, România, sau prin poșta
                  electronică: scmarinexsrl@yahoo.com
                </p>
                <a
                  href='https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2022/07/154155-_Invitatie-participare-MarinexSRL_echipamente_IT_rev.pdf'
                  className='flex items-center underline hover:text-red-500 md:text-lg'
                >
                  154155-_Invitatie-participare-MarinexSRL_echipamente_IT_rev
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


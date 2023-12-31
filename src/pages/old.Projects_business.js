import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ProjectNavigation } from '../components/ProjectNavigation';
import  ProjectFooter from '../components/ProjectFooter';
import ProjectPostWrapper from '../components/ProjectPostWrapper';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ProjectsBusiness() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
      <ProjectNavigation/>
        <section className=''>
          <div className='container px-4 mx-auto'>
            <div className='max-w-3xl mx-auto'>
              <h3 className='font-heading text-2xl font-medium mb-8 text-center'>
                Descrierea companiilor înființate și finanțate în urma
                câștigării concursului privind planul de afaceri
              </h3>
              <ProjectPostWrapper title={" DEN DATA SRL și-a deschis porțile"}>
                <p className='mb-3 w-full md:text-lg'>
                  Activitatea firmei DEN DATA SRL constă în administrarea unui
                  atelier de service pentru calculatoare, și prestarea
                  următoarele tipuri de servicii: service calculatoare personale
                  (PC), service laptopuri, reparații monitoare, reparații plăci
                  de bază, înlocuire și reparații surse, reparații imprimante,
                  înlocuire cartușe imprimante, devirusare calculatoare
                  personale și laptopuri, precum și instalarea programelor
                  antivirus, instalare sistem de operare, aplicații Microsoft
                  Office, configurare wireless etc.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Serviciile sunt prestate în general atât în interiorul
                  atelierului, cât și la domiciliul clientului. Este recomandată
                  deplasarea la sediul clientului atunci când este vorba de
                  instalarea/întreținerea unei rețele, configurare wireless,
                  când echipamentele ce trebuie reparate au dimensiuni mai mari
                  sau greutate mare sau atunci când clientul dorește acest
                  lucru.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Obiectivul firmei este crearea unei infrastructuri care să
                  deservească activitățile de servicii în domeniul tehnologiei
                  informației, în vederea dezvoltării serviciilor oferite de
                  societate, prin valorificarea resurselor materiale și de forță
                  de muncă pe plan local și regional, dar și a celor de afaceri,
                  culturale, adaptate dezvoltării durabile și să inducă un efect
                  multiplicator pe plan zonal.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Pentru mai multe informații despre serviciile oferite sau
                  pentru oferte personalizate, contactați:
                  office.den.data@gmail.com
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Le urăm mult succes în implementarea planului de afaceri!
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper title={"Kinetic Energy Plus SRL – noul cabinet de kinetoterapie din Alba Iulia"}>
                <p className='mb-3 w-full md:text-lg'>
                  Cabinetului de kinetoterapie Kinetic Energy Plus SRL și-a
                  început activitatea finanțată prin cadrul proiectului.
                  Cabinetul furnizează servicii din domeniul de recuperare
                  medicală și tratarea afecțiunilor de tip: traumatic,
                  posttraumatic, postoperator, deficiențe declanșate de
                  posturări vicioase.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Caracterul inovativ în afacere este adus de disponibilitatea
                  deplasării la domiciliul pacienților pentru programele de
                  recuperare medicală la domiciliu.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Viziunea firmei, având ca scop prestarea serviciilor de
                  kinetoterapie, este de a presta servicii de profilaxie și
                  recuperare medicală, pentru a satisface nevoile din ce în ce
                  mai crescute de pe piață. Se dorește ca în fața clienților și
                  a întregii piețe concurențiale, firma Kinetic Energy Plus SRL
                  să se evidențieze prin promptitudine, profesionalism,
                  seriozitate, siguranță, dar și prețuri cât mai competitive.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Pentru mai multe informații despre serviciile oferite sau
                  pentru oferte personalizate, contactați:
                  office.kinetic.energy@gmail.com
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Le urăm mult succes în implementarea planului de afaceri!
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper title={" ECO RENTALS SRL dă startul activității"}>
                <p className='mb-3 w-full md:text-lg'>
                  Activitatea firmei SC ECO RENTALS SRL constă în prestarea de
                  servicii de închirieri autoturisme hibride, pe raza
                  municipiului Alba Iulia, județ Alba, regiunea Centru.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  ECO RENTALS SRL își va derula activitatea, pe durata
                  implementării proiectului, în baza codului CAEN principal 7711
                  – activități de închiriere și leasing cu autoturisme si
                  autovehicule rutiere ușoare.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Datorită fluxului tot mai mare de turiști in orașul cetate
                  Alba Iulia, al dezvoltării agenților economici locali, precum
                  și a măririi prețului carburanților fosili, apare necesitatea
                  deplasărilor cu un cost redus atât in localitate cât și în
                  afara acesteia. Astfel, ECO RENTALS SRL își propune să aducă
                  pe piață un nou concept, și anume închirierea de mașini
                  hibride fără șofer, la un preț accesibil pe piață, contribuind
                  astfel atât la dezvoltarea economica locală, cât și la
                  reducerea agenților poluanți care provin din arderea
                  combustibililor fosili.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Această piață, a închirierilor de mașini, din Romania a
                  cunoscut o creștere semnificativă în ultimii ani pe segmentul
                  închirierilor de autoturisme fără șofer.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Viziunea firmei, având ca scop prestarea serviciilor de
                  închiriere auto, este de a dobândi un bun renume, în cel mai
                  scurt timp posibil și de a încheia contracte cu alte firme,
                  pentru a ridica nivelul serviciilor la o treaptă înaltă. Se
                  tinde ca în fața clienților și a întregii piețe concurențiale,
                  firma SC ECO RENTALS SRL să se evidențieze prin seriozitate,
                  siguranță, promptitudine, dar și prețuri cât mai competitive.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Pentru mai multe informații despre serviciile oferite sau
                  pentru oferte personalizate, contactați
                  office.eco.rentals@gmail.com.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Le urăm mult succes în implementarea planului de afaceri!
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper title={" DOUA BEAUTY SRL oferă servicii de înfrumusețare în Alba Iulia"}>
                <p className='mb-3 w-full md:text-lg'>
                  DOUA BEAUTY SRL își începe activitatea prin inaugurarea unui
                  salon de înfrumusețare care să ofere servicii de epilare
                  definitivă, utilizând aparatură modernă (eficientă din punct
                  de vedere al consumului de energie, al calității serviciilor
                  oferite, fiabilității și rezultatelor pe termen mediu și lung
                  de care se vor bucura clientele), într-o ambianță plăcută,
                  confortabilă și promovată în special în mediul online,
                  utilizând și punând în valoare abilitățile și calitățile
                  antreprenoarei.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Pentru mai multe informații despre serviciile oferite sau
                  pentru oferte personalizate, contactați doua.beauty@proton.me.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Le urăm mult succes în implementarea planului de afaceri!
                </p>
              </ProjectPostWrapper>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      SĂPĂTURI SRL își deschide porțile
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
                  Unul dintre câștigătorii concursului de planuri de afaceri,
                  firma SĂPĂTURI SRL și-a deschis porțile.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Firma activizează în domeniul lucrărilor de amenajare și
                  pregătire a terenurilor pentru construcții, pentru strângerea
                  și colectarea reziduurilor rezultate în urma demolărilor,
                  pentru curățarea terenului după realizarea lucrărilor de
                  construcții, săparea șanțurilor și/sau rigolelor din
                  exteriorul clădirilor, realizarea împrejmuirilor pentru
                  construcții, inclusiv curățarea aleilor adiacente și
                  întreținerea acestora.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Firma își desfășoară activitatea pe raza județul Alba, în
                  special zonele limitrofe ale municipiului Alba Iulia, urmând
                  ca, pe măsura dezvoltării firmei, conform strategiei pe termen
                  mediu și lung, să își extindă piața în întreaga Regiune
                  Centru.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Pentru mai multe informații despre serviciile oferite sau
                  pentru oferte personalizate, contactați
                  office.sapaturi@gmail.com.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Le urăm mult succes în implementarea planului de afaceri!
                </p>
              </button>{' '}
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      ARKE STUDIO SRL – noul birou de arhitectură din Alba Iulia
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
                  ARKE STUDIO SRL își deschide porțile.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Activitatea societății se va desfășura conform codului CAEN
                  7111 Activități de arhitectură, activitate care include:
                  consultanță pentru activități de arhitectură, planuri și
                  proiecte pentru clădiri, planuri de urbanism și amenajarea
                  teritoriului.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Deși firma este nou înființată, asociatul societății are la
                  bază o experiență de peste 80 de proiecte de amenajări
                  interioare, peste 20 de proiecte implementate, diferite
                  concepte de spatii și obiecte de design handmade realizate
                  personal.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Împreună cu o rețea de colaboratori multidisciplinari,
                  studioul își propune să realizeze proiecte unice de
                  arhitectură și design, atât la nivel național cât și
                  internațional.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Activitatea societății constă în preluarea și analizarea
                  cererii clientului, elaborarea temei de proiectare cerute și
                  eventual completarea acesteia, realizarea unei propuneri (după
                  caz mai multe variante), discutarea propunerii cu clientul,
                  realizarea proiectului tehnic, întocmirea documentațiilor
                  necesare pentru obținerea avizelor și autorizației de
                  construcție, detalierea proiectului în vederea execuției,
                  urmărire de șantier. În funcție de tipul proiectului, aceste
                  etape pot să difere, punându-se accentul mai mult pe o etapă
                  sau alta.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Pentru mai multe informații despre serviciile oferite sau
                  pentru oferte personalizate, contactați
                  office.arke.studio@gmail.com.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Le urăm mult succes în implementarea planului de afaceri!
                </p>
              </button>
              <button className='w-full pt-4 pb-5 px-6 mb-4 text-left border border-gray-100 rounded'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='pr-4'>
                    <h3 className='font-heading text-lg font-semibold'>
                      DEEP CLEAN SERVICES SRL oferă servicii de curățenie în
                      Alba Iulia
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
                  Unul dintre câștigătorii concursului de planuri de afaceri,
                  firma DEEP CLEAN SERVICES SRL și-a deschis porțile și oferă
                  servicii de curățenie de înaltă calitate.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Firma oferă următoarele servicii:
                </p>
                <ol className='list-decimal list-inside md:px-5 mb-4 text-base md:text-lg text-coolGray-500'>
                  <li className='mb-3 w-full md:text-lg list-none'>
                    Curățenie generală (apartamente și case)
                  </li>
                  <ol className='list-decimal list-inside md:px-5 mb-4 text-base md:text-lg text-coolGray-500'>
                    <li className='mb-3 w-full md:text-lg list-disc'>
                      Aceste servicii includ: desprăfuirea și igienizarea
                      pereților; colectarea/evacuarea manuală a deșeurilor
                      solide din spațiu; curățarea prin ștergerea manuală în
                      regim semiumed/uscat a tuturor suprafețelor; curățarea
                      prin ștergere manuală în regim semiumed/umed a tuturor
                      corpurilor de iluminat instalațiilor de aer condiționat a
                      prizelor întrerupătoarelor și a caloriferelor; ștergerea
                      cu soluții speciale a obiectelor din aluminiu inox sau
                      crom; spălare rolete și draperii; spălarea geamurilor, a
                      ușilor și a tocăriei; curățarea/dezinfectarea grupurilor
                      sanitare; spălarea mochetelor și a covoarelor; lustruirea
                      parchetului; spălarea cu aparat monodisc a suprafețelor
                      din gresie sau linoleum; curățare pereți interiori și
                      exteriori spații industriale.
                    </li>
                  </ol>
                </ol>
                <ol className='list-decimal list-inside md:px-5 mb-4 text-base md:text-lg text-coolGray-500'>
                  <li className='mb-3 w-full md:text-lg list-none'>
                    Curățenie persoane juridice
                  </li>
                  <ol className='list-decimal list-inside md:px-5 mb-4 text-base md:text-lg text-coolGray-500'>
                    <li className='mb-3 w-full md:text-lg list-disc'>
                      Operațiunile incluse: aerisirea încăperilor; udarea
                      plantelor; colectarea/evacuarea gunoiului și înlocuirea
                      sacilor menajeri; despăienjenirea și desprăfuirea
                      pereților; spălarea și dezinfectarea grupurilor sanitare;
                      spălarea pardoselilor; spălarea ușilor de la intrare în
                      birouri sau casă; măturarea/aspirarea căilor de acces;
                      aspirarea mochetelor; curățarea prin ștergere manuală
                      regim semiumed/uscat a suprafețelor din Inox, PVC, PAL,
                      PFL (ex.: mobilier birouri, uși, tocuri geam, balustrade,
                      prize şi întrerupătoare, calorifere, etc.)
                    </li>
                  </ol>
                </ol>
                <p className='mb-3 w-full md:text-lg'>
                  Pentru mai multe informații despre serviciile oferite sau
                  pentru oferte personalizate, contactați
                  office.deap.clean.services@gmail.com
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Le urăm mult succes în implementarea planului de afaceri!
                </p>
              </button>
            </div>
          </div>
        </section>
        <ProjectFooter />
      </>
    </React.Fragment>
  );
}


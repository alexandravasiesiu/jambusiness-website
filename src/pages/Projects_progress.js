import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ProjectNavigation } from '../components/ProjectNavigation';
import ProjectPostWrapper from '../components/ProjectPostWrapper';
import ProjectFooter from '../components/ProjectFooter';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ProjectsProgress() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <ProjectNavigation />
        <section className=''>
          <div className='container px-4 mx-auto'>
            <div className='max-w-3xl mx-auto'>
              <h3 className='font-heading text-2xl font-medium mb-8 text-center'>
                Imagini și video-uri de pe teren sau rezultatele produse prin
                practica, actualizări, testimoniale sau momente importante în
                evoluția proiectului
              </h3>
              <ProjectPostWrapper title={"Prima grupă de cursanți în domeniul Patisier continuă cursul"}>
                <p className='mb-3 w-full md:text-lg'>
                  Cursul de calificare în domeniul Patisier continuă și în luna
                  mai. Acesta a început în aprilie și se va finaliza în luna
                  iulie cu susținerea examenului. Le urăm cursanților mult
                  succes în continuare.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Dacă îți dorești și tu să obții această calificare, înscrie-te
                  cât de repede, mai sunt puține locuri în următoarea grupă.
                  Contact – 0739.162.605
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  'A doua grupă de cursanți în domeniul Lucrător în structuri pentru construcții continuă cursul'
                }

              >

                <p className='mb-3 w-full md:text-lg'>
                  Cursul de calificare în domeniul Lucrător în structuri pentru
                  construcții continuă și în luna mai. Acesta se va finaliza în
                  luna iunie cu susținerea examenului. Le urăm cursanților din
                  grupa 2 mult succes în continuare.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Dacă îți dorești și tu să obții această calificare, înscrie-te
                  cât de repede, locurile sunt limitate. Contact – 0739.162.605
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  'Recrutările pentru grupul țintă continuă în luna mai 2023'
                }
              >
                <p className='mb-3 w-full md:text-lg'>
                  Cu bucurie vă anunțăm că mai bine de jumătate din grupul țintă
                  a fost recrutat, așadar, dacă doriți să beneficiați de
                  oportunitățile oferite prin proiect, ar fi bine să vă grăbiți.
                  Calificările pentru care mai sunt locuri sunt următoarele:
                </p>
                <ol className='list-decimal list-inside md:px-5 mb-4 text-base md:text-lg text-coolGray-500'>
                  <li className='mb-3 w-full md:text-lg list-disc'>
                    Lucrător în structuri pentru construcții
                  </li>
                  <li className='mb-3 w-full md:text-lg list-disc'>Pavator</li>
                  <li className='mb-3 w-full md:text-lg list-disc'>
                    Lucrător comercial
                  </li>
                </ol>
                <p className='mb-3 w-full md:text-lg'>
                  De asemenea, vă mai puteți înscrie la cursul de specializare
                  în domeniul gestiunii deșeurilor.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Activitățile proiectului se adresează tinerilor NEETs din
                  regiunea centru cu domiciliul în Alba, Brașov, Covasna,
                  Harghita, Mureș sau Sibiu și cu vârsta între 16 și 29 de ani.
                  Toate cursurile se desfășoară online, iar participanții vor
                  primi câte o tabletă. Contact – 0739.162.605
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Începe o nouă grupă de cursanți în domeniul Lucrător în structuri pentru construcții"}
              >
                <p className='mb-3 w-full md:text-lg'>
                  În luna decembrie a început cursul de lucrător în structuri
                  pentru construcții, curs furnizat în cadrul proiectului de
                  către FORMINTENS CENTRU SRL în mod gratuit pentru membrii
                  grupului țintă. Toți participanții la curs au primit câte o
                  tabletă pentru a se putea conecta online la activitatea
                  didactică.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Cursul se va finaliza în luna martie, iar participanții vor
                  susține un examen de calificare.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  O nouă grupă de este în curs de formare. Dacă îți dorești să
                  participi, contactează-ne la tel. 0739.162.605.
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Prima grupa de cursanți în domeniul Lucrător în structuri pentru construcții a finalizat cursul"
                }
              >
                <p className='mb-3 w-full md:text-lg'>
                  La finalul lunii martie, prima grupă de cursanți în domeniul
                  Lucrător în structuri pentru construcții a dat examenul și au
                  obținut calificarea. Le mulțumim pentru participare și le
                  dorim mult succes în fructificarea calificării!
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Recrutările pentru grupul țintă continuă în luna aprilie 2023"
                }  >
                <p className='mb-3 w-full md:text-lg'>
                  Recrutările continuă, nu rata ocazia de a obține o calificare
                  și un loc de muncă prin intermediul serviciilor de mediere
                  oferite în cadrul proiectului.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Activitățile proiectului se adresează tinerilor NEETs din
                  regiunea centru cu domiciliul în Alba, Brașov, Covasna,
                  Harghita, Mureș sau Sibiu și cu vârsta între 16 și 29 de ani.
                  Toate cursurile se desfășoară online, iar participanții vor
                  primi câte o tabletă.
                </p>
                <p className='mb-3 w-full md:text-lg'>Contact – 0739.162.605</p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Recrutările pentru grupul țintă continuă în luna martie 2023"}>
                <p className='mb-3 w-full md:text-lg'>
                  Am ajuns la jumătatea perioadei de recrutare, nu rata ocazia
                  de a obține o calificare și un loc de muncă prin intermediul
                  serviciilor de mediere oferite în cadrul proiectului.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Activitățile proiectului se adresează tinerilor NEETs din
                  regiunea centru cu domiciliul în Alba, Brașov, Covasna,
                  Harghita, Mureș sau Sibiu și cu vârsta între 16 și 29 de ani.
                  Toate cursurile se desfășoară online, iar participanții vor
                  primi câte o tabletă. Contact – tel. 0739.162.605
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Medierea în cadrul proiectului continuă!"}>
                <p className='mb-3 w-full md:text-lg'>
                  Membrii din cadrul grupului țintă al proiectului ”Creșterea
                  ocupării, precum și îmbunătățirea nivelului de competențe al
                  tinerilor NEETs” beneficiază de ședințe individuale de mediere
                  furnizate de experții în mediere din cadrul CREATIVIA
                  EXCELLENCE SRL.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Beneficiarii sunt informați cu privire la oportunitățile de
                  angajare sau continuare a educației sau a formării, detalii
                  despre firmele sau organizațiile interesate de angajați noi,
                  informații în legătură cu postul sau programul de formare pe
                  care l-ar putea accesa.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Înscrie-te și tu în grupul țintă pentru a putea beneficia de
                  servicii de mediere gratuită. 7 persoane deja și-au găsit un
                  loc de muncă. Contact – 0739.162.605
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Cursul de lucrător în structuri pentru construcții continuă!"}>
                <p className='mb-3 w-full md:text-lg'>
                  În luna decembrie a început cursul de lucrător în structuri
                  pentru construcții, curs furnizat în cadrul proiectului de
                  către FORMINTENS CENTRU SRL în mod gratuit pentru membrii
                  grupului țintă. Toți participanții la curs au primit câte o
                  tabletă pentru a se putea conecta online la activitatea
                  didactică.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Cursul se va finaliza în luna martie, iar participanții vor
                  susține un examen de calificare.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  O nouă grupă de este în curs de formare. Dacă îți dorești să
                  participi, contactează-ne la tel. 0739.162.605
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Recrutările pentru grupul țintă continuă în luna februarie 2023"}>
                <p className='mb-3 w-full md:text-lg'>
                  Recrutările pentru grupul țintă al proiectului ”Creșterea
                  ocupării, precum și îmbunătățirea nivelului de competențe al
                  tinerilor NEETs” continuă în luna februarie 2023.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Dacă îți dorești să obții o calificare și un loc de muncă,
                  consultă metodologia de înscriere în grupul țintă sau
                  contactează-ne telefonic. Împreună, putem să-ți reconstruim
                  viitorul!
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Activitățile proiectului se adresează tinerilor NEETs din
                  regiunea centru cu domiciliul în Alba, Brașov, Covasna,
                  Harghita, Mureș sau Sibiu și cu vârsta între 16 și 29 de ani.
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Medierea în cadrul proiectului continuă!"}>
                <p className='mb-3 w-full md:text-lg'>
                  Membrii din cadrul grupului țintă al proiectului ”Creșterea
                  ocupării, precum și îmbunătățirea nivelului de competențe al
                  tinerilor NEETs” beneficiază de ședințe individuale de mediere
                  furnizate de experții în mediere din cadrul CREATIVIA
                  EXCELLENCE SRL.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Beneficiarii sunt informați cu privire la oportunitățile de
                  angajare sau continuare a educației sau a formării, detalii
                  despre firmele sau organizațiile interesate de angajați noi,
                  informații în legătură cu postul sau programul de formare pe
                  care l-ar putea accesa.
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Cursul de lucrător în structuri pentru construcții continuă!"}>
                < p className='mb-3 w-full md:text-lg' >
                  În luna decembrie a început cursul de lucrător în structuri
                  pentru construcții, curs furnizat de partenerul 2, FORMINTENS
                  CENTRU SRL în mod gratuit pentru membrii grupului țintă al
                  proiectului.
                </p >
                <p className='mb-3 w-full md:text-lg'>
                  Totodată, începe perioada de formare a unei alte grupe pentru
                  curs, așa că, dacă ești interesat de un astfel de curs, ai
                  prieteni sau membri din familie pe care crezi că i-ar ajuta o
                  astfel de activitate, contactează-ne!
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Cursul se desfășoară online, sprijinind membrii GT spre
                  implicare, și să participe la curs utilizând tableta primită
                  în acest scop: tel 0739.162.605
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Recrutările pentru grupul țintă continuă în luna ianuarie 2023"}>
                < p className='mb-3 w-full md:text-lg' >
                  Recrutările pentru grupul țintă al proiectului ”Creșterea
                  ocupării, precum și îmbunătățirea nivelului de competențe al
                  tinerilor NEETs” continuă și în luna ianuarie 2023.
                </p >
                <p className='mb-3 w-full md:text-lg'>
                  Activitățile proiectului se adresează tinerilor NEETs din
                  regiunea centru. Așadar, dacă ai domiciliul în Alba, Brașov,
                  Covasna, Harghita, Mureș sau Sibiu, ai între 16 și 29 de ani
                  și ești șomer, contactează-ne! Prin intermediul proiectului,
                  te putem ajuta să obții o calificare și un loc de muncă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Dacă ți-am stârnit interesul, contactează-ne și îți vom
                  furniza toate informațiile de care ai nevoie, fie telefonic,
                  fie în cadrul unei întâlniri de informare și promovare: tel
                  0739.162.605
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Câștigătorii concursului de planuri de afaceri au semnat contractele de subvenție"}>
                < p className='mb-3 w-full md:text-lg' >
                  Competiția planurilor de afaceri din cadrul proiectului
                  ”Creșterea ocupării, precum și îmbunătățirea nivelului de
                  competențe al tinerilor NEETs” s - a încheiat în 29.11.2022,
                  prin publicarea listei rezultatelor finale.
                </p >
                <p className='mb-3 w-full md:text-lg'>
                  Câștigătorii concursului de afaceri au fost contactați de
                  către experții monitorizare și evaluare pentru semnarea
                  contractelor de subvenție. Acest lucru a fost realizat la
                  finalul lunii decembrie, și urmează perioada de implementare a
                  planurilor.
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Loc de muncă prin intermediul serviciilor de mediere din cadrul proiectului"}>
                < p className='mb-3 w-full md:text-lg' >
                  Continuă activitatea de mediere cu membri grupului țintă!
                </p >
                <p className='mb-3 w-full md:text-lg'>
                  Fiecare membru al grupului țintă are parte de ședințe
                  individuale de mediere furnizate de experții de mediere ai
                  CREATIVIA EXCELLENCE SRL. Astfel ei sunt informați cu privire
                  la tendințele de pe piața muncii și ajutați să își găsească
                  locul de muncă potrivit.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Profită de această oportunitate și înscrie-te în grupul țintă!
                  Până la finalul lunii decembrie, 50 de membri ai grupului
                  țintă au beneficiat de serviciile de mediere, iar 8 persoane
                  s-au angajat deja, cu sprijinul expertului mediere.
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Începe cursul de lucrător în structuri pentru construcții"}>
                < p className='mb-3 w-full md:text-lg' >
                  În luna decembrie va începe cursul de lucrător în structuri
                  pentru construcții, curs furnizat de partenerul 2, FORMINTENS
                  CENTRU SRL în mod gratuit pentru membrii grupului țintă al
                  proiectului.
                </p >
                <p className='mb-3 w-full md:text-lg'>
                  Cursul se va desfășura online. Astfel, membrii GT vor avea
                  ocazia să participe la curs utilizând tableta primită în acest
                  scop.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Contactează-ne, înscrie-te în grupul țintă și profită de
                  această oportunitate.
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Recrutările pentru grupul țintă continuă în luna decembrie 2022"}>
                < p className='mb-3 w-full md:text-lg' >
                  Recrutările pentru grupul țintă al proiectului ”Creșterea
                  ocupării, precum și îmbunătățirea nivelului de competențe al
                  tinerilor NEETs” continuă în luna decembrie 2022.
                </p >
                <p className='mb-3 w-full md:text-lg'>
                  Activitățile proiectului se adresează tinerilor NEETs din
                  regiunea centru. Așadar, dacă ai domiciliul în Alba, Brașov,
                  Covasna, Harghita, Mureș sau Sibiu, ai între 16 și 29 de ani
                  și ești șomer, contactează-ne! Prin intermediul proiectului,
                  te putem ajuta să obții o calificare și un loc de muncă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Dacă ți-am stârnit interesul, contactează-ne și îți vom
                  furniza toate informațiile de care ai nevoie, fie telefonic,
                  fie în cadrul unei întâlniri de informare și promovare.
                </p>
                <p className='mb-3 w-full md:text-lg'>Contact – 0739.162.605</p>
                <div className=''>
                  <img
                    src='https://static.shuffle.dev/uploads/files/04/04bce69fcdf81e4e85d2269b9bd7df7185103f2a/rec1.jpg'
                    alt=''
                    className='rounded shadow-md h-52'
                  />
                </div>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "S-a dat startul la concursul de planuri de afaceri"}>
                < p className='mb-3 w-full md:text-lg' >
                  <span>
                    În perioada 14-20 Noiembrie, absolvenții cursului de
                    competențe antreprenoriale pot depune dosarele de concurs.
                    Informațiile complete cu privire la modul de desfășurare a
                    concursului pot fi găsite în
                  </span>
                  <a
                    className='items-center hover:text-red-500 text-lg underline'
                    href='#'
                  >
                    metodologia de concurs.
                  </a>
                </p >
                <p className='mb-3 w-full md:text-lg'>
                  Le dorim mult succes participanților!
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Campanii de informare și promovare în rândul tinerilor în vederea identificării grupului țintă – octombrie 2022"}>
                < p className='mb-3 w-full md:text-lg' >
                  În lunile septembrie și octombrie au avut loc mai multe
                  campanii de informare și promovare a proiectului în rândul
                  tinerilor cu scopul identificării grupului țintă.
                </p >
                <p className='mb-3 w-full md:text-lg'>
                  În cadrul întâlnirilor le-a fost prezentat participanților
                  proiectul ”Creșterea ocupării, precum și îmbunătățirea
                  nivelului de competențe al tinerilor NEETs”, obiectivele
                  acestuia și activitățile prin intermediul cărora se vor atinge
                  obiectivele. Li s-au prezentat oportunitățile și beneficiile
                  care le sunt oferite prin intermediul proiectului.
                  Participanții s-au arătat interesați și și-au oferit datele de
                  contact pentru a ține legătura în scopul înscrierii în grupul
                  țintă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Ca materiale de promovare, au fost folosiți fluturașii,
                  roll-upul, afișul, mapele personalizate și pixurile
                  personalizate.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Dacă dorești să afli mai multe în legătură cu proiectul,
                  contactează-ne și îți vom furniza toate informațiile de care
                  ai nevoie, fie telefonic, fie în cadrul unei întâlniri de
                  informare și promovare.
                </p>
                <p className='mb-3 w-full md:text-lg'>Contact – 0739.162.605</p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Cursuri online în cadrul proiectului"}>
                < p className='mb-3 w-full md:text-lg' >
                  Știai că toate cursurile organizate în cadrul proiectului se
                  desfășoară online ?
                </p >
                <p className='mb-3 w-full md:text-lg'>
                  Astfel, vei avea ocazia să participi la curs de oriunde
                  dorești și vei putea să îți exersezi și competențele digitate
                  în același timp! Tableta de pe care vei intra la cursuri ți-o
                  oferim noi la semnarea contractului de formare.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Contactează-ne, înscrie-te în grupul țintă și profită de
                  această oportunitate.
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Serviciile de mediere pe piața muncii pentru membri grupului țintă continuă în luna octombrie"}>
                < p className='mb-3 w-full md:text-lg' >
                  Continuă activitatea de mediere cu membri grupului țintă!
                </p >
                <p className='mb-3 w-full md:text-lg'>
                  Fiecare membru al grupului țintă are parte de ședințe
                  individuale de mediere furnizate de experții de mediere ai
                  CREATIVIA EXCELLENCE SRL. Astfel ei sunt informați cu privire
                  la tendințele de pe piața muncii și ajutați să își găsească
                  locul de muncă potrivit.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Profită de această oportunitate și înscrie-te în grupul țintă!
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Recrutările pentru grupul țintă continuă în luna octombrie 2022"}>
                < p className='mb-3 w-full md:text-lg' >
                  Recrutările pentru grupul țintă al proiectului ”Creșterea
                  ocupării, precum și îmbunătățirea nivelului de competențe al
                  tinerilor NEETs” continuă în luna octombrie 2022.
                </p >
                <p className='mb-3 w-full md:text-lg'>
                  Activitățile proiectului se adresează tinerilor NEETs din
                  regiunea centru. Așadar, dacă ai domiciliul în Alba, Brașov,
                  Covasna, Harghita, Mureș sau Sibiu, ai între 16 și 29 de ani
                  și ești șomer, contactează-ne! Prin intermediul proiectului,
                  te putem ajuta să obții o calificare și un loc de muncă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Dacă ți-am stârnit interesul, contactează-ne și îți vom
                  furniza toate informațiile de care ai nevoie, fie telefonic,
                  fie în cadrul unei întâlniri de informare și promovare.
                </p>
                <p className='mb-3 w-full md:text-lg'>Contact – 0739.162.605</p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={"Cursul de competențe antreprenoriale începe în data de 17.10.2022"}>
                < p className='mb-3 w-full md:text-lg' >
                  Prima grupă începe cursul de formare în domeniul competențelor
                  antreprenoriale organizat în cadrul proiectului ”Creșterea
                  ocupării, precum și îmbunătățirea nivelului de competențe al
                  tinerilor NEETs” implementat de către MARINEX SRL alături de
                  FORMINTENS CENTRU SRL și JAM BUSINESS SRL, începe în data de
                  17.10.2022.
                </p >
                <p className='mb-3 w-full md:text-lg'>
                  Acesta se va desfășura online, utilizând platforma de
                  e-learning achiziționată în acest sens. Participanții au
                  primit câte o tabletă cu acces la internet pentru a se putea
                  conecta la curs. De asemenea, li s-a creat câte un cont
                  individual pe platformă.
                </p>
                <a
                  href='https://cursuri.marinex.ro/'
                  className='items-center text-lg underline hover:text-red-500'
                >
                  https://cursuri.marinex.ro/
                </a>
                <p className='mb-3 w-full md:text-lg mt-2'>
                  Le dorim mult succes!
                </p>
                <div className='max-w-xl'>
                  <div className='flex gap-2 mb-2 justify-center'>
                    <img
                      src='https://static.shuffle.dev/uploads/files/04/04bce69fcdf81e4e85d2269b9bd7df7185103f2a/u9.jpg'
                      alt=''
                      className='rounded shadow-md w-1/3'
                    />
                    <img
                      src='https://static.shuffle.dev/uploads/files/04/04bce69fcdf81e4e85d2269b9bd7df7185103f2a/u2.jpg'
                      alt=''
                      className='rounded shadow-md w-1/3'
                    />
                    <img
                      src='https://static.shuffle.dev/uploads/files/04/04bce69fcdf81e4e85d2269b9bd7df7185103f2a/u6.jpg'
                      alt=''
                      className='rounded shadow-md w-1/3'
                    />
                  </div>
                  <div className='flex gap-2 mb-2 justify-center'>
                    <img
                      src='https://static.shuffle.dev/uploads/files/04/04bce69fcdf81e4e85d2269b9bd7df7185103f2a/u3.jpg'
                      alt=''
                      className='rounded shadow-md w-1/3'
                    />
                    <img
                      src='https://static.shuffle.dev/uploads/files/04/04bce69fcdf81e4e85d2269b9bd7df7185103f2a/u5.jpg'
                      alt=''
                      className='rounded shadow-md w-1/3'
                    />
                    <img
                      src='https://static.shuffle.dev/uploads/files/04/04bce69fcdf81e4e85d2269b9bd7df7185103f2a/u11.jpg'
                      alt=''
                      className='rounded shadow-md w-1/3'
                    />
                  </div>
                  <div className='gap-2 flex mb-2 justify-center'>
                    <img
                      src='https://static.shuffle.dev/uploads/files/04/04bce69fcdf81e4e85d2269b9bd7df7185103f2a/u4.jpg'
                      alt=''
                      className='rounded shadow-md w-1/3'
                    />
                    <img
                      src='https://static.shuffle.dev/uploads/files/04/04bce69fcdf81e4e85d2269b9bd7df7185103f2a/u10.jpg'
                      alt=''
                      className='rounded shadow-md w-1/3'
                    />
                    <img
                      src='https://static.shuffle.dev/uploads/files/04/04bce69fcdf81e4e85d2269b9bd7df7185103f2a/u7.jpg'
                      alt=''
                      className='rounded shadow-md w-1/3'
                    />
                  </div>
                  <div className='flex gap-2 mb-2 justify-center'>
                    <img
                      src='https://static.shuffle.dev/uploads/files/04/04bce69fcdf81e4e85d2269b9bd7df7185103f2a/u8.jpg'
                      alt=''
                      className='rounded shadow-md w-1/3'
                    />
                    <img
                      src='https://static.shuffle.dev/uploads/files/04/04bce69fcdf81e4e85d2269b9bd7df7185103f2a/u1.jpg'
                      alt=''
                      className='rounded shadow-md w-1/3'
                    />
                    <img
                      src='https://static.shuffle.dev/uploads/files/04/04bce69fcdf81e4e85d2269b9bd7df7185103f2a/u12.jpg'
                      alt=''
                      className='rounded shadow-md w-1/3'
                    />
                  </div>
                  <div>
                    <img
                      src='https://static.shuffle.dev/uploads/files/04/04bce69fcdf81e4e85d2269b9bd7df7185103f2a/u13.jpg'
                      alt=''
                      className='rounded shadow-md w-1/2'
                    />
                  </div>
                </div>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Campanii de informare și promovare în rândul tinerilor în vederea identificării grupului țintă"}>
                < p className='mb-3 w-full md:text-lg' >
                  În lunile iulie și august au avut loc mai multe campanii de
                  informare și promovare a proiectului în rândul tinerilor cu
                  scopul identificării grupului țintă.
                </p >
                <p className='mb-3 w-full md:text-lg'>
                  În cadrul întâlnirilor le-a fost prezentat participanților
                  proiectul ”Creșterea ocupării, precum și îmbunătățirea
                  nivelului de competențe al tinerilor NEETs”, obiectivele
                  acestuia și activitățile prin intermediul cărora se vor atinge
                  obiectivele. Li s-au prezentat oportunitățile și beneficiile
                  care le sunt oferite prin intermediul proiectului.
                  Participanții s-au arătat interesați și și-au oferit datele de
                  contact pentru a ține legătura în scopul înscrierii în grupul
                  țintă.
                </p>
                <p className='mb-3 w-full md:text-lg'>
                  Ca materiale de promovare, au fost folosiți fluturașii,
                  roll-upul, afișul, mapele personalizate și pixurile
                  personalizate.
                </p>
              </ProjectPostWrapper>
              <ProjectPostWrapper
                title={
                  "Începe implementarea proiectului ”Creșterea ocupării, precum și îmbunătățirea nivelului de competențe altinerilor NEETs”"}>
                < p className='mb-3 w-full md:text-lg' >
                  În data de 30 iulie 2022 începe implementarea proiectului
                  ”Creșterea ocupării, precum și îmbunătățirea nivelului de
                  competențe al tinerilor NEETs”, proiect cofinanțat din Fondul
                  Social European prin Programul Ocupațional Capital Uman
                  2014 - 2020. Proiectul va fi implementat de către MARINEX SRL
                  alături de FORMINTENS CENTRU SRL și JAM BUSINESS SRL.
                </p >
                <p className='mb-3 w-full md:text-lg'>
                  Scopul prezentului proiect este creșterea ocupării, precum si
                  îmbunătățirea nivelului de competențe al tinerilor NEETs
                  șomeri cu vârsta între 16 – 29 ani, înregistrați la Serviciul
                  Public de Ocupare, cu rezidența în regiunea Centru
                </p>
              </ProjectPostWrapper>
            </div >
          </div >
        </section >
        <ProjectFooter />
      </>
    </React.Fragment >
  );
}


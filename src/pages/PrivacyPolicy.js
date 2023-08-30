import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import logo from '../assets/images/logo-jam.png';
import { useNavigate } from "react-router";

const meta = {
    title: '',
    meta: [],
    link: [],
    style: [],
    script: [],
};

export default function PrivacyPolicy() {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <HelmetProvider>
                <Helmet {...meta}></Helmet>
            </HelmetProvider>
            <>
            <section 
            class="relative bg-white overflow-hidden">
                <div class="container mx-auto p-4">
                    <nav class="container mx-auto inline-flex">
                        <div class="flex w-full items-center container">
                            <div class="xl:w-1/3 w-full">
                                <a class="block max-w-max" onClick={() => {navigate('/')}}>
                                    <img class="h-20" src={logo} alt="" /></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>

            <section class="py-12">
                <div class="container px-4 mx-auto">
                    <div class="max-w-3xl mx-auto">
                        <h3 class="font-heading text-2xl font-medium mb-8">Politica de confidențialitate</h3>
                        <p class="text-lg font-medium mb-6">Data ultimei actualizări: </p>
                        <p class="text-lg font-medium mb-6">Înțelegem importanța protejării confidențialității datelor personale și ne angajăm să respectăm și să protejăm drepturile utilizatorilor noștri în ceea ce privește confidențialitatea și securitatea datelor. Această Politică de Confidențialitate explică cum colectăm, utilizăm, stocăm și protejăm informațiile pe care le primim de la utilizatorii noștri în timpul vizitării și utilizării site-ului nostru.</p>
                        <p class="text-lg leading-8 mb-6">Informații colectate<br/>
                            Prin utilizarea site-ului nostru, putem colecta informații personale și non-personale în diferite moduri și în următoarele contexte:<br/>
                            1.1 Informații furnizate voluntar de utilizatori:<br/>
                            
                            Prin intermediul formularelor de contact sau înregistrare, puteți furniza informații precum numele, adresa de e-mail, numărul de telefon și alte date relevante.<br/>
                            1.2 Informații colectate automat:<br/>
                            
                            Atunci când accesați site-ul nostru, automat colectăm anumite informații non-personale, cum ar fi adresa IP, tipul de browser, sistemul de operare și pagina web de proveniență.</p>
                        <p class="text-lg leading-8 mb-6">Utilizarea informațiilor<br/>
                            Informațiile colectate pot fi utilizate în următoarele scopuri:<br/>
                            2.1 Personalizarea și îmbunătățirea experienței utilizatorilor:<br/>
                            
                            Utilizăm informațiile colectate pentru a personaliza și îmbunătăți experiența utilizatorilor noștri pe site-ul nostru, pentru a oferi conținut relevant și pentru a adapta comunicările noastre.<br/>
                            2.2 Comunicare și suport:<br/>
                            
                            Utilizăm adresele de e-mail și alte informații de contact furnizate pentru a răspunde la solicitările utilizatorilor noștri și pentru a le oferi asistență în legătură cu întrebări sau probleme.<br/>
                            Divulgarea informațiilor către terțe părți<br/>
                            Noi nu vindem, închiriem sau partajăm informațiile personale ale utilizatorilor noștri cu terțe părți în scopuri de marketing sau publicitate. Cu toate acestea, putem dezvălui informații în următoarele situații:<br/>
                            3.1 Furnizori de servicii:<br/>
            
                            Putem partaja informații cu furnizorii de servicii care ne ajută în desfășurarea afacerii noastre și în îndeplinirea scopurilor menționate anterior.<br/>
                            3.2 Obligații legale:<br/>
            
                            Putem dezvălui informații în cazul în care suntem obligați de lege să o facem sau în cazul în care considerăm în mod rezonabil că dezvăluirea este necesară pentru a respecta procese juridice sau pentru a ne proteja drepturile, securitatea sau proprietatea.</p>
                        <p class="text-lg leading-8 mb-6">Securitatea informațiilor<br/>
                            Ne angajăm să protejăm informațiile personale ale utilizatorilor noștri și să implementăm măsuri de securitate adecvate pentru a preveni accesul neautorizat, utilizarea incorectă, modificarea sau distrugerea acestora.</p>
                        
                        <p class="text-lg leading-8 mb-6">Drepturile utilizatorilor<br/>
                        
                        Utilizatorii noștri au dreptul de a solicita accesul, rectificarea sau ștergerea informațiilor personale pe care le-am colectat. Pentru a exercita aceste drepturi, utilizatorii pot contacta echipa noastră prin intermediul informațiilor de contact furnizate mai jos.</p>
                        <p class="text-lg leading-8">Modificări ale politicii de confidențialitate<br/>
                        Această Politică de Confidențialitate poate fi actualizată periodic pentru a reflecta eventuale modificări ale practicilor noastre de confidențialitate. Vă rugăm să revizuiți periodic această pagină pentru a fi la curent cu cele mai recente informații.
                        Pentru orice întrebări sau nelămuriri referitoare la această Politică de Confidențialitate, vă rugăm să ne contactați prin intermediul informațiilor de contact furnizate mai jos.
                        
                        
                        Vă mulțumim pentru încrederea acordată și pentru utilizarea site-ului nostru!</p>    
                    </div>
                </div>
            </section>
            
            <section class="py-24 bg-gray-900">
                <div class="container px-4 mx-auto">
                    <div class="flex flex-wrap justify-between items-end -mx-4 px-4">
                        <div class="w-full lg:w-1/4 xl:w-2/6 px-4 lg:mb-0">
                            <a class="inline-block mb-4"onClick={() => {navigate('/')}}>
                                <img src={logo} alt="" class="h-20" />
                            </a>
                        </div>
                        <div class="w-full sm:w-1/2 lg:w-1/4 xl:w-auto xl:mr-20 px-4 lg:mb-0">
                        <span class="block text-gray-300 mb-6">2023 © Jam Business</span>
                        </div>
                    </div>
                </div>
            </section>
            </>
            </React.Fragment>
    );
}
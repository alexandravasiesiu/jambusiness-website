export const options = {
	"title": "POSTAREAA2 : Lista cu persoanele acceptate în grupul țintă",
	"category": "CATEOGRIA 1",
	"category_link": "/categorylink"
}
export default function Post1() {
	return (
		<>
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
		</>
	)
}

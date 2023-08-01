import ProjectPostWrapper from "../../components/ProjectPostWrapper"
export const options = {
	"title": "Lista cu persoanele acceptate în grupul țintă",
	"category": "EXAMPLE",
	"category_link": "/categorylink"
}
export default function Post1() {
	return (
		<div class="accordion-header mt-4">
			<p class="mb-3 w-full md:text-lg">A fost publicată lista cu persoanele acceptate în grupul țintă în luna iunie 2023 în urma procesului de verificare și evaluare a dosarelor de grup țintă.</p>
			<p class="mb-3 w-full md:text-lg">Persoanele selectate au fost contactate de către experții grup țintă pentru semnarea contractului de membru grup țintă.</p>
			<a href="https://www.marinex-constructii.ro/proiect/154155/wp-content/uploads/sites/2/2023/07/A4_iun.23_Lista-dosare-selectate-publicata.pdf" class="flex items-center underline hover:text-red-500 md:text-lg">A4_iun.23_Lista-dosare-selectate-publicata</a>
		</div>
	)
}

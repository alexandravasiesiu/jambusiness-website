import ssTransparent from '../assets/images/ss-transparent.png';
import logo from '../assets/images/logo-jam.png';

export default function ProjectFooter() {
	return (<>
		<div class="flex justify-center py-10">
			<img src={ssTransparent} alt="" class="md:w-1/3 w-1/2" /></div>

		<section class="py-24 bg-gray-900"><div class="container px-4 mx-auto">
			<div class="flex flex-wrap justify-between -mx-4 px-4">
				<div class="w-full xl:w-2/6 lg:mb-0 px-4 md:w-1/4">
					<a class="inline-block mb-4" href="index.html">
						<img src={logo} alt="" class="h-20" /></a>
				</div>
				<div class="w-full sm:w-1/2 lg:w-1/4 xl:w-auto xl:mr-20 px-4 lg:mb-0">
					<ul class="flex flex-wrap gap-5">
						<li class="mb-6"><a class="font-heading text-white hover:text-gray-100" href="projects_landing_page1.html">Prima pagină</a></li>
						<li class="mb-6"><a class="font-heading text-white hover:text-gray-100" href="projects_acquisitions.html">Achiziții</a></li>
						<li class="mb-6"><a class="font-heading text-white hover:text-gray-100" href="projects_business.html">Afaceri</a></li>
						<li class="mb-6"><a class="font-heading text-white hover:text-gray-100" href="projects_about.html">Despre</a></li>
						<li><a class="font-heading text-white hover:text-gray-100" href="projects_evaluation.html">Evaluare</a></li>
						<li><a class="font-heading text-white hover:text-gray-100" href="projects_progress.html">Progres</a></li>
						<li><a class="font-heading text-white hover:text-gray-100" href="projects_documents.html">Documente</a></li>
						<li><a class="font-heading text-white hover:text-gray-100" href="projects_contact.html">Contact</a></li>
					</ul><span class="block text-gray-300 mb-6 mt-2">2023 © Jam Business</span>
				</div>
			</div>
		</div>
		</section>
	</>
	)
}
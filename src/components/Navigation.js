import logo from '../assets/images/logo-jam.png';

export function Navigation() {
	return (
		<section class="bg-gray-50"><nav class="py-4 bg-white"><div class="container mx-auto px-4">
			<div class="relative flex justify-between items-center">
				<div class="w-auto">
					<a class="inline-block" href="index.html">
						<img src={logo} alt="" class="h-20" /></a>
				</div>
				<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
					<ul class="flex items-center"><li class="font-heading mr-12 text-base"><a class="hover:text-black" href="#about">Despre</a></li>
						<li class="font-heading mr-12 text-base"><a class="hover:text-black" href="#experience">Experiență</a></li>
						<li class="font-heading mr-12 text-base"><a class="hover:text-black" href="#projects">Proiecte</a></li>
						<li class="font-heading mr-12 text-base"><a class="hover:text-black" href="#contact">Contact</a></li>
					</ul></div>
				<div class="w-auto hidden lg:block">
					<a class="inline-block py-4 px-8 font-heading font-medium text-base text-white border rounded-sm transition duration-200 bg-red-500 border-red-500 hover:border-red-600 hover:bg-red-600" href="#contact">Contact</a>
				</div>
			</div>
		</div>
		</nav><div class="container px-4 mx-auto">
				<div class="flex flex-wrap -mx-4 pt-10 pb-16 items-end">
					<div class="w-full px-4 mb-12 lg:mb-0">
						<div class="flex flex-wrap justify-center">
							<h1 class="font-heading text-4xl sm:text-5xl mb-10 flex flex-wrap justify-center">
								<span class="p-4">Bun venit la </span>
								<span class="text-red-500 p-2">Jam Business</span>
								<span class="flex text-2xl text-center">Experți în Consultanță pentru Afaceri și Management</span>
							</h1>
							<p class="text-lg leading-8 text-center">Ghidăm afacerile către excelență și creștere durabilă</p>
						</div>
					</div>
				</div>
			</div>
			<div class="relative w-full">
				<img class="block w-full object-cover h-80" src="images/business-graphs-charts-magnifying-glass-and-calc-2021-12-21-18-50-32-utc.jpg" alt="" /></div>

			<div class="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 hidden">
				<div class="navbar-backdrop fixed inset-0 backdrop-blur-xl backdrop-filter bg-gray-900 bg-opacity-80"></div>
				<nav class="relative pt-7 pb-8 bg-white h-full overflow-y-auto"><div class="flex flex-col px-6 h-full">
					<a class="inline-block ml-4 mb-7" href="index.html">
						<img src="images/logo-jam.png" alt="" /></a>
					<ul class="w-full mb-auto pb-16">
						<li><a class="font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm" href="#about">Despre</a></li>
						<li><a class="font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm" href="#experience">Experiență</a></li>
						<li><a class="font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm" href="projects">Proiecte</a></li>
						<li><a class="font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm" href="contact">Contact</a></li>
					</ul><div class="w-full">
						<p class="pl-2 text-sm">2023 © Shuffle</p>
					</div>
				</div>
				</nav></div>
		</section>
	)
}
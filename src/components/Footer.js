import logo from '../assets/images/logo-jam.png';
import { Link, useNavigate } from 'react-router-dom';

export function Footer(){
	const navigate = useNavigate();
	
	return (
		
		<section class="py-24 bg-gray-900"><div class="container px-4 mx-auto">
		<div class="flex flex-wrap justify-between -mx-4 px-4">
		  <div class="w-full lg:w-1/4 xl:w-2/6 px-4 lg:mb-0">
		    <Link class="inline-block mb-4" to='/'>
		      <img src={logo} alt="" class="h-20"/></Link>
		  </div>
		  <div class="w-full sm:w-1/2 lg:w-1/4 xl:w-auto xl:mr-20 px-4 lg:mb-0">
		    <ul class="flex gap-5">
			  <li class="mb-6"><Link class="font-heading text-white hover:text-gray-100" to="#">Acasă</Link></li>
		      <li class="mb-6"><Link class="font-heading text-white hover:text-gray-100" to="#about">Despre</Link></li>
		      <li class="mb-6"><Link class="font-heading text-white hover:text-gray-100" to="#experience">Experiență</Link></li>
		      <li><Link class="font-heading text-white hover:text-gray-100" href="#projects">Proiecte</Link></li>
		    </ul><span class="block text-gray-300 mb-6">2023 © Jam Business</span>
		  </div>
		</div>
		</div>
	      </section>
	)
}
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../../src/Assets/Logo.png"

const Navigation = () => {
    return (
        <div >
            <nav class="flex items-center justify-between flex-wrap bg-transparent p-6 px-10  w-full  ">
		<div class="flex items-center flex-shrink-0 text-white mr-6">
        <img className='w-14 h-14 mx-20' src={Logo} alt="Logo"/>
		</div>
		<div class="block lg:hidden">
			<button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
				expand
			</button>
		</div>
		<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
			<div class="text-sm lg:flex-grow ">
				<Link to={""} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-200 mr-4">
					About
				</Link>
				<Link to={""} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-200 mr-4">
					Projects
				</Link>
				<Link to={""} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-200 mr-4">
					Skills
				</Link>
				<Link to={""} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-200 mr-4">
					Contact
				</Link>
			</div>
		</div>
	</nav>
        </div>
    );
};

export default Navigation;
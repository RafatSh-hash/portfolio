import React from 'react';
import Image from "../../Assets/img1.jpg"

const Home = () => {
   
    return (
       <div>

<div className='lg:flex bg-blue-900 shadow-white lg:flex-row h-auto md:flex md:flex-row sm:flex sm:flex-col justify-between items-center	 w-[90%] mx-auto rounded-b-2xl p-10'>
            <div className='w-[70%]  md:w-[70%] sm:w-full p-10 leading-10'>
                <h1 style={{ fontFamily: 'Prompt'}} className='text-5xl sm:my-10 md:my-10 lg:my-5 sm:text-center md:text-center lg:text-left text-white font-bold'>Greetings from the HEX!</h1>
                <p className='font-bold sm:text-center md:text-center lg:text-left text-white text-2xl'>Welcomed By Sadman Yasir Rafat</p>
                <p className='font-bold sm:text-center md:text-center lg:text-left text-white'>MERN Stack developer</p>
               
                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Check Out My Resume</button>
                   

               
                <p className='mt-20 text-red-400'>"Being a programmer is not a task of one or several days, but a journey for lifetime. So Pracitce , Practice & Practice..."</p>
                <p className='text-right mx-20 font-bold'>- Jhankar Mahbub</p>
            </div>
            <div className='sm:w-full justify-center rounded-2xl w-[30%] md:w-[30%] mx-auto'>
             <img className='rounded-2xl align-middle w-[90%] h-[90%] sm:w-full border-2 shadow-2xl mx-auto' src={Image} alt=""/>
            </div>
        </div>
       </div>
    );
};

export default Home;
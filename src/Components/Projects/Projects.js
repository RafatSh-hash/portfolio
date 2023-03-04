/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div
      className="w-[90%] mx-auto my-20"
      id="Projects"
    >
      <h1
        style={{ fontFamily: "Fira Code" }}
        className="text-5xl text-center my-20 text-white font-bold"
      >
        Here are some of the projects I built
      </h1>
      <h1
        style={{ fontFamily: "Fira Code" }}
        className="text-5xl text-left my-20 text-white font-bold"
      >
        MERN Stack projects
      </h1>
      <div className="flex flex-row sm:flex-col md:flex-row min-[320px]:flex-col  w-[90%] mx-auto justify-evenly">
        <div className="bg-gray-400 lg:w-[28%] sm:my-10 rounded-lg transform transition duration-2000 hover:scale-125">
          <div class="relative w-full h-72 rounded-lg">
            <img
              src="https://i.ibb.co/WsYs0TJ/rsz-pp.png"
              alt="Example image"
              className=" p-5 h-full transform transition duration-500 hover:scale-110 w-full rounded-lg"
            />
            <p class="font-bold text-xl pb-5 text-center text-yellow-100">
              Phone-Pocket
            </p>
            <div class="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-90 flex justify-center items-center h-72">
              <Link to={"https://test-4e195.web.app/"}>
                <span
                  style={{ fontFamily: "Fira Code" }}
                  class="inline-block bg-blue-600 rounded-lg px-3 py-1 font-semibold text-white mr-2 mb-2 text-lg"
                >
                  Live Site
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-gray-400 lg:w-[28%] sm:my-10 rounded-lg transform transition duration-2000 hover:scale-125">
          <div class="relative w-full h-72 rounded-lg">
            <img
              src="https://i.ibb.co/hZMb385/GST-Rate-for-Photography-Services.png"
              alt="Example image"
              className=" p-5 h-full transform transition duration-500 hover:scale-110 w-full rounded-lg"
            />
            <p class="font-bold text-xl pb-5 text-center text-yellow-100">
              Lens Eye Photography
            </p>
            <div class="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-90 flex justify-center items-center h-72">
              <Link to={"https://lephotography-73f5c.web.app/"}>
                <span
                  style={{ fontFamily: "Fira Code" }}
                  class="inline-block bg-blue-600 rounded-lg px-3 py-1 font-semibold text-white mr-2 mb-2 text-lg"
                >
                  Live Site
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-gray-400 lg:w-[28%] sm:my-10 rounded-lg transform transition duration-2000 hover:scale-125">
          <div class="relative w-full h-72 rounded-lg">
            <img
              src="https://i.ibb.co/bF6qwM7/Bit-Masters.png"
              alt="Example image"
              className=" p-5 h-full transform transition duration-500 hover:scale-110 w-full rounded-lg"
            />
            <p class="font-bold text-xl pb-5 text-center text-yellow-100">
              Bit Masters
            </p>
            <div class="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-90 flex justify-center items-center h-72">
              <Link to={"https://bit-masters.web.app/"}>
                <span
                  style={{ fontFamily: "Fira Code" }}
                  class="inline-block bg-blue-600 rounded-lg px-3 py-1 font-semibold text-white mr-2 mb-2 text-lg"
                >
                  Live Site
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h1
        style={{ fontFamily: "Fira Code" }}
        className="text-5xl text-left my-32 text-white font-bold"
      >
        JavaScript projects
      </h1>
      <div className="flex flex-row sm:flex-col md:flex-row min-[320px]:flex-col w-[90%] mx-auto justify-evenly">
        <div className="bg-gray-400 lg:w-[28%] sm:my-10 rounded-lg transform transition duration-2000 hover:scale-125">
          <div class="relative w-full h-72 rounded-lg">
            <img
              src="https://i.ibb.co/rvmsbc6/CG1.png"
              alt="Example image"
              className=" p-5 h-full transform transition duration-500 hover:scale-110 w-full rounded-lg"
            />
            <p class="font-bold text-xl pb-5 text-center text-yellow-100">
              Code Genius
            </p>
            <div class="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-90 flex justify-center items-center h-72">
              <Link>
                <span
                  style={{ fontFamily: "Fira Code" }}
                  class="inline-block bg-blue-600 rounded-lg px-3 py-1 font-semibold text-white mr-2 mb-2 text-lg"
                >
                  Live Site
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-gray-400 lg:w-[28%] sm:my-10 rounded-lg transform transition duration-2000 hover:scale-125">
          <div class="relative w-full h-72 rounded-lg">
            <img
              src="https://i.ibb.co/g7vqKdt/DN1.png"
              alt="Example image"
              className=" p-5 h-full transform transition duration-500 hover:scale-110 w-full rounded-lg"
            />
            <p class="font-bold text-xl pb-5 text-center text-yellow-100">
              Dragon News
            </p>
            <div class="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-90 flex justify-center items-center h-72">
              <Link>
                <span
                  style={{ fontFamily: "Fira Code" }}
                  class="inline-block bg-blue-600 rounded-lg px-3 py-1 font-semibold text-white mr-2 mb-2 text-lg"
                >
                  Live Site
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-gray-400 lg:w-[28%] sm:my-10 rounded-lg transform transition duration-2000 hover:scale-125">
          <div class="relative w-full h-72 rounded-lg">
            <img
              src="https://i.ibb.co/QdN1kwJ/screencapture-cool-truffle-9beffd-netlify-app-2023-03-02-14-05-16.png"
              alt="Example image"
              className=" p-5 h-full transform transition duration-500 hover:scale-110 w-full rounded-lg"
            />
            <p class="font-bold text-xl pb-5 text-center text-yellow-100">
              Type Monster
            </p>
            <div class="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-90 flex justify-center items-center h-72">
              <Link>
                <span
                  style={{ fontFamily: "Fira Code" }}
                  class="inline-block bg-blue-600 rounded-lg px-3 py-1 font-semibold text-white mr-2 mb-2 text-lg"
                >
                  Live Site
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <h1 style={{ fontFamily: 'Fira Code' }} className='text-5xl text-left my-32 text-white font-bold'>HTML, CSS projects</h1>
      <div className='flex flex-row sm:flex-col md:flex-row  w-[90%] mx-auto justify-evenly'>
        <div className='bg-gray-400 rounded-lg transform transition duration-2000 hover:scale-125'>
                <div class="relative w-full h-72 rounded-lg">
  <img src="https://i.ibb.co/QdN1kwJ/screencapture-cool-truffle-9beffd-netlify-app-2023-03-02-14-05-16.png" alt="Example image" className=" p-5 h-full transform transition duration-500 hover:scale-110 w-full rounded-lg"/>
  <p class="font-bold text-xl pb-5 text-center text-yellow-100">Type Monster</p>
  <div class="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-90 flex justify-center items-center h-72">
     <Link ><span style={{ fontFamily: 'Fira Code' }} class="inline-block bg-blue-600 rounded-lg px-3 py-1 font-semibold text-white mr-2 mb-2 text-lg">Live Site</span>
     </Link>
      <Link>
      <span style={{ fontFamily: 'Fira Code' }} class="inline-block bg-blue-600 rounded-lg px-3 py-1 text-lg font-semibold text-white mr-2 mb-2">See Details</span>
      </Link>
  </div>
</div>
            </div>
        <div className='bg-gray-400 rounded-lg transform transition duration-2000 hover:scale-110'>
                <div class="relative">
  <img src="https://picsum.photos/400/200" alt="Example image" className="w-full p-5 h-full transform transition duration-500 hover:scale-110"/>
  <p class="font-bold text-2xl pb-3 text-center">Bit Masters</p>
  <div class="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-90 flex justify-center items-center">
     <Link><span style={{ fontFamily: 'Fira Code' }} class="inline-block bg-blue-600 rounded-lg px-3 py-1 font-semibold text-white mr-2 mb-2 text-lg">Live Site</span>
     </Link>
      <Link>
      <span style={{ fontFamily: 'Fira Code' }} class="inline-block bg-blue-600 rounded-lg px-3 py-1 text-lg font-semibold text-white mr-2 mb-2">See Details</span>
      </Link>
  </div>
</div>
            </div>
       <div className='bg-gray-400 rounded-lg transform transition duration-2000 hover:scale-110'>
                <div class="relative">
  <img src="https://picsum.photos/400/200" alt="Example image" className="w-full p-5 h-full transform transition duration-500 hover:scale-110"/>
  <p class="font-bold text-2xl pb-3 text-center">Bit Masters</p>
  <div class="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-90 flex justify-center items-center">
     <Link><span style={{ fontFamily: 'Fira Code' }} class="inline-block bg-blue-600 rounded-lg px-3 py-1 font-semibold text-white mr-2 mb-2 text-lg">Live Site</span>
     </Link>
      <Link>
      <span style={{ fontFamily: 'Fira Code' }} class="inline-block bg-blue-600 rounded-lg px-3 py-1 text-lg font-semibold text-white mr-2 mb-2">See Details</span>
      </Link>
  </div>
</div>
            </div>
        
      </div> */}
    </div>
  );
};
export default Projects;

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../src/Assets/Logo.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navigation = () => {
  return (
    <div>
      <nav class="flex items-center justify-between bg-transparent p-6 px-10  w-full  ">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img
            className="w-14 h-14 mx-20"
            src={Logo}
            alt="Logo"
          />
        </div>

        <div class=" lg:flex lg:flex-row lg:items-center  sm:flex sm:flex-row">
          <div class="text-sm lg:flex lg:flex-row sm:flex sm:flex-row">
            <Link
              to={""}
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-200 mr-4"
            >
              About
            </Link>
            <Link
              to={""}
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-200 mr-4"
            >
              Projects
            </Link>
            <Link
              to={""}
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-200 mr-4"
            >
              Skills
            </Link>
            <Link
              to={""}
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-200 mr-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <div className="fixed  w-14 top-[40%] bg-black shadow-md shadow-white rounded-lg justify-center align-middle lg:block sm:hidden md:block">
        <div className="h-15 flex flex-col ">
          <a
            title="@Github/RafatSh-hash"
            target={"_blank"}
            href="https://github.com/RafatSh-hash"
          >
            <button className="text-2xl mt-5 w-32 text-white mx-2 px-2">
              <FaGithub></FaGithub>
            </button>
          </a>
          <a
            target={"_blank"}
            title="Shadman Easir Rafat"
            href="https://www.linkedin.com/in/sadman-yasir-rafat/"
          >
            {" "}
            <button className="text-2xl mt-10 text-white mx-2 px-2">
              <FaLinkedin></FaLinkedin>
            </button>
          </a>
          <a
            target={"_blank"}
            title="sadman_yasir_rafat"
            href="https://www.instagram.com/sadman_yasir_rafat/"
          >
            <button className="text-2xl mt-10 text-white mx-2 px-2">
              <FaInstagram></FaInstagram>
            </button>
          </a>
          <a
            title="@sadmanyasirrafat"
            target={"_blank"}
            href="https://www.facebook.com/sadmanyasirrafat"
          >
            <button className="text-2xl mt-10 mb-5 text-white mx-2 px-2">
              <FaFacebook></FaFacebook>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

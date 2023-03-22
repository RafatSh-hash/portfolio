/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Image from "../../Assets/img1.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div>
      <div className="lg:flex shadow-white lg:flex-row h-auto md:flex md:flex-row sm:flex sm:flex-col justify-between items-center	 w-[90%] mx-auto rounded-b-2xl p-10">
        <div className="w-[70%]  md:w-[70%] sm:w-[100%] min-[320px]:w-full leading-10">
          <h1
            style={{ fontFamily: "Prompt" }}
            className="text-5xl sm:my-10 md:my-10 lg:my-5 sm:text-center min-[320px]:text-center md:text-center lg:text-left text-white font-bold"
          >
            Greetings from the H3X!
          </h1>
          <p className="sm:text-center md:text-center min-[320px]:text-center lg:text-left text-white text-2xl">
            Welcomed By Sadman Yasir Rafat
          </p>
          <p
            style={{ fontFamily: "Fira Code" }}
            className="sm:text-center text-2xl text-gray-400 md:text-center min-[320px]:text-center lg:text-left"
          >
            {" "}
            <Typewriter
              words={[
                "<Web Designer",
                "<MERN stack developer",
                "<Junior Web Developer",
                "<ReactJS Developer",
                "<Front-end Developer",
              ]}
              loop={10}
              cursor
              cursorStyle="/>"
              typeSpeed={70}
              delaySpeed={1500}
              deleteSpeed={100}
            ></Typewriter>
          </p>
          <div className="sm:w-1/2 sm:mx-auto lg:mx-2 min-[320px]:w-1/2 min-[320px]:mx-auto ">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 mt-5 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full ">
              <a
                href="https://drive.google.com/file/d/1Cqymtz4t222L9uhwyz1Jzw17HzJ43okg/view?usp=sharing"
                target="_blank"
              >
                Check Out My Resume
              </a>
            </button>
          </div>

          <p className="mt-14 text-xl text-gray-400 text-justify lg:w-[80%] min-[320px]:w-full sm:w-full">
            "Being a programmer is not a task of one or several days, but a
            journey for lifetime. So Pracitce , Practice & Practice..."
          </p>
          <p className="text-right mx-20 font-bold text-yellow-100">
            - Jhankar Mahbub
          </p>
        </div>
        <div className="sm:w-full min-[320px]:w-full justify-center rounded-2xl w-[30%] md:w-[30%] mx-auto">
          <img
            className="rounded-2xl align-middle w-[90%] h-[90%] sm:w-full border-2 shadow-2xl mx-auto"
            src={Image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

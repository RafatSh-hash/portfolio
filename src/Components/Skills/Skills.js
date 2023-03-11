/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import HTML from "../../Assets/skills/HTML.png";
import CSS from "../../Assets/skills/CSS.png";
import Tailwind from "../../Assets/skills/Tailwind.png";
import Bootstrap from "../../Assets/skills/Bootstrap.png";
import ReactLogo from "../../Assets/skills/ReactLogo.png";
import JS from "../../Assets/skills/JS.png";
import Node from "../../Assets/skills/Node.png";
import Firebase from "../../Assets/skills/FirebaseL.png";
import MongoDB from "../../Assets/skills/MongoDB.png";
import JWT from "../../Assets/skills/JWT.png";
import Flowbite from "../../Assets/skills/Flowbite.png";
import Figma from "../../Assets/skills/Figma.png";
import FM from "../../Assets/skills/FM.png";
const Skills = () => {
  return (
    <div
      className="w-[90%] mx-auto"
      id="Skills"
    >
      <h1
        style={{ fontFamily: "Fira Code" }}
        className="text-5xl text-left my-32 text-white font-bold"
      >
        Skills I Have
      </h1>
      <h1
        style={{ fontFamily: "Fira Code" }}
        className="text-4xl text-left my-24 text-white font-bold"
      >
        Good at
      </h1>
      <div className="my-20 flex flex-row flex-wrap md:flex-row sm:flex-col w-full justify-evenly align-middle">
        <div>
          <img
            className="w-44 h-44 bg-red-900 p-5 rounded-full"
            src={HTML}
          />
          <h1 className="font-bold text-white my-3 text-center">HTML/HTML5</h1>
        </div>
        <div>
          <img
            className="w-44 h-44 bg-red-900 p-5 rounded-full"
            src={CSS}
          />
          <h1 className="font-bold text-white my-3 text-center">CSS/CSS3</h1>
        </div>
        <div>
          <img
            className="w-44 h-44 bg-red-900 p-5 rounded-full"
            src={Tailwind}
          />
          <h1 className="font-bold text-white my-3 text-center">TailwindCSS</h1>
        </div>
        <div>
          <img
            className="w-44 h-44 bg-red-900 p-5 rounded-full"
            src={Bootstrap}
          />
          <h1 className="font-bold text-white my-3 text-center">Bootstrap 5</h1>
        </div>
        <div>
          <img
            className="w-44 h-44 bg-red-900 p-5 rounded-full"
            src={JS}
          />
          <h1 className="font-bold text-white my-3 text-center">JavaScript</h1>
        </div>
        <div>
          <img
            className="w-44 h-44 bg-red-900 p-5 rounded-full"
            src={ReactLogo}
          />
          <h1 className="font-bold text-white my-3 text-center">ReactJS</h1>
        </div>
      </div>
      <h1
        style={{ fontFamily: "Fira Code" }}
        className="text-4xl text-left my-24 text-white font-bold"
      >
        Familiar with
      </h1>
      <div className="my-20 flex flex-row flex-wrap md:flex-row sm:flex-col w-full justify-evenly">
        <div>
          <img
            className="w-44 h-44 bg-red-900 p-5 rounded-full"
            src={Node}
          />
          <h1 className="font-bold text-white my-3 text-center">Nodejs</h1>
        </div>
        <div>
          <img
            className="w-44 h-44 bg-red-900 p-5 rounded-full"
            src={Firebase}
          />
          <h1 className="font-bold text-white my-3 text-center">Firebase</h1>
        </div>
        <div>
          <img
            className="w-44 h-44 bg-red-900 p-5 rounded-full"
            src={MongoDB}
          />
          <h1 className="font-bold text-white my-3 text-center">MongoDB</h1>
        </div>
        <div>
          <img
            className="w-44 h-44 bg-red-900 p-5 rounded-full"
            src={JWT}
          />
          <h1 className="font-bold text-white my-3 text-center">JWT</h1>
        </div>
        <div>
          <img
            className="w-44 h-44 bg-red-900 p-5 rounded-full"
            src={Flowbite}
          />
          <h1 className="font-bold text-white my-3 text-center">
            Flowbite React
          </h1>
        </div>
        <div>
          <img
            className="w-44 h-44 bg-red-900 p-5 rounded-full"
            src={Figma}
          />
          <h1 className="font-bold text-white my-3 text-center">Figma</h1>
        </div>
        <div>
          <img
            className="w-44 h-44 bg-red-900 p-5 rounded-full"
            src={FM}
          />
          <h1 className="font-bold text-white my-3 text-center">
            Framer Motion
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Skills;

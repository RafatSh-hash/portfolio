import React from "react";
import Lottie from "lottie-react";
import ContactLottie from "../../Assets/Contact.json";
import { Accordion } from "flowbite-react";
import { FaArrowCircleDown } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="w-[90%] mx-auto my-20"
      id="About"
    >
      <h1 className="text-5xl text-center my-10 text-white font-bold">
        Lets Talk about everything
      </h1>
      <div className="flex lg:flex-row md:flex-row sm:flex-col min-[320px]:flex-col justify-center align-middle ">
        <div className="lg:w-[50%] md:w-[50%]">
          <Lottie
            animationData={ContactLottie}
            loop={true}
          />
        </div>

        <div className="lg:w-[50%] md:w-[50%]">
          <div class="flex flex-col items-start justify-between w-full px-10 pt-5 pb-20 lg:pt-20 lg:flex-row">
            <div class="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-10/12">
              <div class="relative z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
                <h4 class="w-full text-4xl text-center font-bold leading-snug mb-5">
                  ABCD's About Me &#128513;
                </h4>
                {/* <form class="relative w-full mt-6 space-y-8">
                  <div class="relative">
                    <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                      Name
                    </label>
                    <input
                      type="text"
                      class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                      placeholder="John"
                    />
                  </div>

                  <div class="relative">
                    <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                      Email Address
                    </label>
                    <input
                      type="text"
                      class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                      placeholder="janedoe@email.com"
                    />
                  </div>
                  <div class="relative">
                    <label
                      for="large-input"
                      class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white"
                    >
                      Your Message
                    </label>
                    <textarea
                      type="textArea"
                      class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                      placeholder="Hi! I am john doe..."
                    />
                  </div>
                  <div class="relative">
                    <button class="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-500 ease">
                      Start Conversation
                    </button>
                  </div>
                </form> */}
                <Accordion arrowIcon={FaArrowCircleDown}>
                  <Accordion.Panel>
                    <Accordion.Title>Who Am I ?</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        I am Sadman Yasir, currently graduating in Zoology from
                        National University Bangladesh. I am 23 years old and
                        residing in Savar, Dhaka Bangladesh.
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      Why web-development while being a non-CSE ?
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Though being a non-CSE undergrad, I have both passion
                        and eagerness for new technology and it gives me joy to
                        play around with them, built something new and fun.
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>What are my interests ?</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        I enjoy movies a lot. I have a passion of working with
                        Cybersecurity. On a perfect world I might choose or
                        CyberSecurity or Photography as my full time career.
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      What am I not so fond of ?
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Hurting peoples feelings , being dishonest, bragging
                        about something is really some of my No Go's.
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </div>
              <svg
                class="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-gray-200 fill-current"
                viewBox="0 0 91 91"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                >
                  <g fill-rule="nonzero">
                    <g>
                      <g>
                        <circle
                          cx="3.261"
                          cy="3.445"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="15.296"
                          cy="3.445"
                          r="2.719"
                        ></circle>
                        <circle
                          cx="27.333"
                          cy="3.445"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="39.369"
                          cy="3.445"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="51.405"
                          cy="3.445"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="63.441"
                          cy="3.445"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="75.479"
                          cy="3.445"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="87.514"
                          cy="3.445"
                          r="2.719"
                        ></circle>
                      </g>
                      <g transform="translate(0 12)">
                        <circle
                          cx="3.261"
                          cy="3.525"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="15.296"
                          cy="3.525"
                          r="2.719"
                        ></circle>
                        <circle
                          cx="27.333"
                          cy="3.525"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="39.369"
                          cy="3.525"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="51.405"
                          cy="3.525"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="63.441"
                          cy="3.525"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="75.479"
                          cy="3.525"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="87.514"
                          cy="3.525"
                          r="2.719"
                        ></circle>
                      </g>
                      <g transform="translate(0 24)">
                        <circle
                          cx="3.261"
                          cy="3.605"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="15.296"
                          cy="3.605"
                          r="2.719"
                        ></circle>
                        <circle
                          cx="27.333"
                          cy="3.605"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="39.369"
                          cy="3.605"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="51.405"
                          cy="3.605"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="63.441"
                          cy="3.605"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="75.479"
                          cy="3.605"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="87.514"
                          cy="3.605"
                          r="2.719"
                        ></circle>
                      </g>
                      <g transform="translate(0 36)">
                        <circle
                          cx="3.261"
                          cy="3.686"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="15.296"
                          cy="3.686"
                          r="2.719"
                        ></circle>
                        <circle
                          cx="27.333"
                          cy="3.686"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="39.369"
                          cy="3.686"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="51.405"
                          cy="3.686"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="63.441"
                          cy="3.686"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="75.479"
                          cy="3.686"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="87.514"
                          cy="3.686"
                          r="2.719"
                        ></circle>
                      </g>
                      <g transform="translate(0 49)">
                        <circle
                          cx="3.261"
                          cy="2.767"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="15.296"
                          cy="2.767"
                          r="2.719"
                        ></circle>
                        <circle
                          cx="27.333"
                          cy="2.767"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="39.369"
                          cy="2.767"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="51.405"
                          cy="2.767"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="63.441"
                          cy="2.767"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="75.479"
                          cy="2.767"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="87.514"
                          cy="2.767"
                          r="2.719"
                        ></circle>
                      </g>
                      <g transform="translate(0 61)">
                        <circle
                          cx="3.261"
                          cy="2.846"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="15.296"
                          cy="2.846"
                          r="2.719"
                        ></circle>
                        <circle
                          cx="27.333"
                          cy="2.846"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="39.369"
                          cy="2.846"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="51.405"
                          cy="2.846"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="63.441"
                          cy="2.846"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="75.479"
                          cy="2.846"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="87.514"
                          cy="2.846"
                          r="2.719"
                        ></circle>
                      </g>
                      <g transform="translate(0 73)">
                        <circle
                          cx="3.261"
                          cy="2.926"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="15.296"
                          cy="2.926"
                          r="2.719"
                        ></circle>
                        <circle
                          cx="27.333"
                          cy="2.926"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="39.369"
                          cy="2.926"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="51.405"
                          cy="2.926"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="63.441"
                          cy="2.926"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="75.479"
                          cy="2.926"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="87.514"
                          cy="2.926"
                          r="2.719"
                        ></circle>
                      </g>
                      <g transform="translate(0 85)">
                        <circle
                          cx="3.261"
                          cy="3.006"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="15.296"
                          cy="3.006"
                          r="2.719"
                        ></circle>
                        <circle
                          cx="27.333"
                          cy="3.006"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="39.369"
                          cy="3.006"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="51.405"
                          cy="3.006"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="63.441"
                          cy="3.006"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="75.479"
                          cy="3.006"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="87.514"
                          cy="3.006"
                          r="2.719"
                        ></circle>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                class="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-blue-600 fill-current"
                viewBox="0 0 91 91"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                >
                  <g fill-rule="nonzero">
                    <g>
                      <g>
                        <circle
                          cx="3.261"
                          cy="3.445"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="15.296"
                          cy="3.445"
                          r="2.719"
                        ></circle>
                        <circle
                          cx="27.333"
                          cy="3.445"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="39.369"
                          cy="3.445"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="51.405"
                          cy="3.445"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="63.441"
                          cy="3.445"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="75.479"
                          cy="3.445"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="87.514"
                          cy="3.445"
                          r="2.719"
                        ></circle>
                      </g>
                      <g transform="translate(0 12)">
                        <circle
                          cx="3.261"
                          cy="3.525"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="15.296"
                          cy="3.525"
                          r="2.719"
                        ></circle>
                        <circle
                          cx="27.333"
                          cy="3.525"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="39.369"
                          cy="3.525"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="51.405"
                          cy="3.525"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="63.441"
                          cy="3.525"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="75.479"
                          cy="3.525"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="87.514"
                          cy="3.525"
                          r="2.719"
                        ></circle>
                      </g>
                      <g transform="translate(0 24)">
                        <circle
                          cx="3.261"
                          cy="3.605"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="15.296"
                          cy="3.605"
                          r="2.719"
                        ></circle>
                        <circle
                          cx="27.333"
                          cy="3.605"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="39.369"
                          cy="3.605"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="51.405"
                          cy="3.605"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="63.441"
                          cy="3.605"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="75.479"
                          cy="3.605"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="87.514"
                          cy="3.605"
                          r="2.719"
                        ></circle>
                      </g>
                      <g transform="translate(0 36)">
                        <circle
                          cx="3.261"
                          cy="3.686"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="15.296"
                          cy="3.686"
                          r="2.719"
                        ></circle>
                        <circle
                          cx="27.333"
                          cy="3.686"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="39.369"
                          cy="3.686"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="51.405"
                          cy="3.686"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="63.441"
                          cy="3.686"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="75.479"
                          cy="3.686"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="87.514"
                          cy="3.686"
                          r="2.719"
                        ></circle>
                      </g>
                      <g transform="translate(0 49)">
                        <circle
                          cx="3.261"
                          cy="2.767"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="15.296"
                          cy="2.767"
                          r="2.719"
                        ></circle>
                        <circle
                          cx="27.333"
                          cy="2.767"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="39.369"
                          cy="2.767"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="51.405"
                          cy="2.767"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="63.441"
                          cy="2.767"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="75.479"
                          cy="2.767"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="87.514"
                          cy="2.767"
                          r="2.719"
                        ></circle>
                      </g>
                      <g transform="translate(0 61)">
                        <circle
                          cx="3.261"
                          cy="2.846"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="15.296"
                          cy="2.846"
                          r="2.719"
                        ></circle>
                        <circle
                          cx="27.333"
                          cy="2.846"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="39.369"
                          cy="2.846"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="51.405"
                          cy="2.846"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="63.441"
                          cy="2.846"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="75.479"
                          cy="2.846"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="87.514"
                          cy="2.846"
                          r="2.719"
                        ></circle>
                      </g>
                      <g transform="translate(0 73)">
                        <circle
                          cx="3.261"
                          cy="2.926"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="15.296"
                          cy="2.926"
                          r="2.719"
                        ></circle>
                        <circle
                          cx="27.333"
                          cy="2.926"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="39.369"
                          cy="2.926"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="51.405"
                          cy="2.926"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="63.441"
                          cy="2.926"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="75.479"
                          cy="2.926"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="87.514"
                          cy="2.926"
                          r="2.719"
                        ></circle>
                      </g>
                      <g transform="translate(0 85)">
                        <circle
                          cx="3.261"
                          cy="3.006"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="15.296"
                          cy="3.006"
                          r="2.719"
                        ></circle>
                        <circle
                          cx="27.333"
                          cy="3.006"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="39.369"
                          cy="3.006"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="51.405"
                          cy="3.006"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="63.441"
                          cy="3.006"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="75.479"
                          cy="3.006"
                          r="2.72"
                        ></circle>
                        <circle
                          cx="87.514"
                          cy="3.006"
                          r="2.719"
                        ></circle>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from "react";
import animal1 from "../assets/animal1.png";
import animal2 from "../assets/animal2.png";
import animal3 from "../assets/animal3.png";
import animal4 from "../assets/animal4.png";
import "flowbite";
const Donate = () => {
  return (
    <div
      className="bg-white flex flex-row items-center sm:flex flex-column min-h-screen"
      id="/donate"
    >
      <div className="grid grid-cols-2 lg:ml-20 gap-2">
        <img
          src={animal1}
          alt="Connect"
          className=" w-52 h-72 hidden blur-sm hover:blur-none lg:block"
        />
        <img
          src={animal2}
          alt="Connect"
          className=" w-52 h-72 hidden blur-sm hover:blur-none lg:block"
        />
        <img
          src={animal3}
          alt="Connect"
          className=" w-52 h-72 hidden blur-sm hover:blur-none lg:block"
        />
        <img
          src={animal4}
          alt="Connect"
          className=" w-52 h-72 hidden blur-sm hover:blur-none lg:block"
        />
      </div>
      <div className="lg:ml-20">
        <div className="font-semibold text-2xl">
          <span className="text-blue-500">Your support can change lives.</span>
          <br /> Make a one-time donation or become a monthly donor to provide
          ongoing help.
        </div>
        <button
          data-popover-target="popover-default"
          type="button"
          class="mt-10 mb-10 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
        >
          DONATE
        </button>
        <div
          data-popover
          id="popover-default"
          role="tooltip"
          class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
        >
          <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
            <h3 class="font-semibold text-gray-900 dark:text-white">
              To Donate to us
            </h3>
          </div>
          <div class="px-3 py-2">
            <p>
              As Paypal donation is not active in India still, you can pay in
              this Paypal account @SiveshSingh
            </p>
          </div>
          <div data-popper-arrow></div>
        </div>
        <div className="mb-40 font-normal text-xl">
          You can also promote our website and make a direct impact on the lives
          of stray animals.
        </div>
        <div className=" font-light hidden lg:block">
          **Provided images are animals we have helped but it contains images
          that are not meant for everyone. If you wish to see them Hover over
          the images.
        </div>
      </div>
    </div>
  );
};

export default Donate;

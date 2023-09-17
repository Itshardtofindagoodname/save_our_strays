import React from "react";
import Lottie from "lottie-react";
import animal from "../assets/animal.json";
import { TypeAnimation } from "react-type-animation";
import { useParallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

const Homepage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const fade = useParallax({
    opacity: [1, -1],
    speed: -10,
    shouldAlwaysCompleteAnimation: true,
    disabled: isMobile,
  });
  const us = useParallax({
    speed: -25,
  });
  return (
    <div className="min-h-auto" id="/">
      <div className="flex flex-col lg:flex-row">
        <Lottie
          className="ml-10 lg:ml-0"
          animationData={animal}
          style={{
            background: "transparent",
            width: "50%",
            height: "50%",
          }}
        />
        <div className="mb-10" ref={fade.ref}>
          <div className="text-4xl lg:text-5xl mt-20 lg:mt-80 ml-10 mb-10 font-extrabold">
            Welcome to <span className=" text-yellow-300">Save our Strays</span>
          </div>
          <div className=" text-lg lg:text-2xl ml-2 lg:ml-5">
            At <span className="font-semibold">SAVE OUR STRAYS</span>, our
            mission is to provide love and care.
            <br /> Giving a second chance to stray animals in need.
            <br /> We believe that every life is valuable, and with your
            support,
            <br /> we can make a difference.
            <br />{" "}
            <span className="text-sm font-normal">
              **This site is currently maintained by Sivesh Singh, the founder
              of Save Our Strays
            </span>
          </div>
        </div>
      </div>
      <div
        className=" min-h-screen flex flex-col justify-center items-center"
        ref={us.ref}
      >
        <div className=" text-7xl text-center font-extrabold mb-10 mt-10">
          WHY <span className="text-green-200">DONATE?</span>
        </div>
        <div className="text-lg text-left lg:text-xl lg:text-center mb-10 lg:font-medium leading-8 lg:leading-10 h-40">
          <TypeAnimation
            sequence={[
              "Your donations help us rescue, rehabilitate, and find loving homes for the stray animals.",
              500,
              "Together, we can provide medical care, shelter, and nourishment to those who need it.",
              500,
              "Every contribution brings us one step closer to a world where no animal is left to suffer alone.",
              500,
            ]}
            speed={75}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

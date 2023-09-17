import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

const About = () => {
  const AnimatedButton = ({ delay, children }) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const animationRef = useRef(null);
    const animationProps = useSpring({
      from: { opacity: 0, transform: "translateX(-50%)" },
      to: {
        opacity: shouldAnimate ? 1 : 0,
        transform: shouldAnimate ? "translateX(0)" : "translateX(-50%)",
      },
      config: { tension: 300, friction: 15 },
      delay,
    });

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.5) {
              setShouldAnimate(true);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (animationRef.current) {
        observer.observe(animationRef.current);
      }

      return () => {
        if (animationRef.current) {
          observer.unobserve(animationRef.current);
        }
      };
    }, []);

    return (
      <animated.button
        ref={animationRef}
        style={animationProps}
        className="bg-white backdrop:blur-2xl text-black w-96 h-[150px] border-blue-200 border-4 shadow-xl py-2 px-4 rounded-3xl flex items-center justify-start"
      >
        <span>{children}</span>
      </animated.button>
    );
  };
  return (
    <body class="bg-white mb-32 lg:mb-0" id="/about">
      <div className="text-7xl font-extrabold text-center mb-4 lg:mb-16">
        WHO ARE <span className="text-purple-300">WE?</span>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center items-start bg-white font-inter">
          <div className="md:grid grid-cols-3 bg-gray-500 grid-rows-3 gap-1 p-4 relative rounded-2xl mb-0">
            <div className="flex items-center justify-center row-start-1 col-start-1 mb-5">
              <AnimatedButton delay={100}>
                <span className="font-bold">OUR STORY</span>
                <div>
                  SAVE OUR STRAYS was founded in 2019 by a group of passionate
                  animal lovers dedicated to making a difference in the lives of
                  stray animals.
                </div>
              </AnimatedButton>
            </div>

            <div className="flex items-center justify-center row-start-2 col-start-2 mb-5">
              <AnimatedButton delay={300}>
                <span className="font-bold">OUR TEAM</span>
                <div>
                  OUR TEAM consists of different members from all around the
                  globe, who aim to help and care for animals anytime and
                  everytime.
                </div>
              </AnimatedButton>
            </div>

            <div className="flex items-center justify-center row-start-3 col-start-3 mb-5">
              <AnimatedButton delay={500}>
                <span className="font-bold">OUR APPROACH</span>
                <div>
                  LEARNING about our holistic approach to rescuing,
                  rehabilitating, and rehoming stray animals so that they feel
                  at home always.
                </div>
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
      <div className="text-4xl text-center mt-10 h-64 md:0 font-semibold">
        We are committed to{" "}
        <span className="text-pink-300">Transparency and Accountability.</span>{" "}
        You can always reach out to us.
      </div>
    </body>
  );
};

export default About;

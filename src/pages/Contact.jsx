import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7e95xtl",
        "template_mlsbcg8",
        form.current,
        "5tZg4Ya3ooK-qC85e"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("E-mail sent successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="/contact">
      <section class="bg-white min-h-screen">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-6xl tracking-tight font-extrabold text-center text-gray-900 ">
            Contact Us
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-900 sm:text-xl">
            Want to raise an issue? Or just ask a few questions? You can connect
            to us anytime and we'll make sure you get your answer.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@gmail.com"
                required
              ></input>
            </div>
            <div>
              <label
                for="from_name"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Name
              </label>
              <input
                type="text"
                id="subject"
                name="from_name"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Tell us your name"
                required
              ></input>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                name="message"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-cyan-700 sm:w-fit hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300">
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

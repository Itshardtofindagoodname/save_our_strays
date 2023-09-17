import React from "react";

const Content = () => {
  return (
    <div id="/content">
      <div className="text-5xl lg:text-6xl font-bold text-center">
        HOW ELSE CAN <span className="text-orange-600">YOU</span> HELP?{" "}
      </div>
      <div className="text-lg lg:text-3xl text-gray-500 font-medium text-center mt-8 mb-12">
        Sometimes you can be the helping hand too by taking care of the animals
        near you. Here we have some listed ways on how you can do that
      </div>
      <ul
        style={{ listStyleType: "numbers" }}
        className="lg:mb-20 mb-60 ml-8 mx-4 lg:ml-10 leading-7 text-base"
      >
        <li>
          {" "}
          <span className="font-bold">Approach with Caution:</span> Stray
          animals can be scared or defensive. Approach slowly and calmly to
          avoid startling them.
        </li>
        <li>
          {" "}
          <span className="font-bold">Do Not Corner Them:</span> Allow the
          animal an escape route, so they don't feel trapped or threatened.
        </li>
        <li>
          {" "}
          <span className="font-bold">Offer Food and Water:</span> If the animal
          seems approachable, offer food and water to gain their trust.
        </li>
        <li>
          {" "}
          <span className="font-bold">
            Use Non-Threatening Body Language:
          </span>{" "}
          Crouch down, avoid direct eye contact, and speak in soothing tones.
        </li>
        <li>
          {" "}
          <span className="font-bold">Provide Shelter:</span> Set up a safe,
          dry, and comfortable space, like a cardboard box or blanket, where
          they can rest.
        </li>
        <li>
          {" "}
          <span className="font-bold">Contact Local Animal Services:</span>{" "}
          Notify your local animal control or shelter about the stray, providing
          as much detail as possible.
        </li>
        <li>
          {" "}
          <span className="font-bold">Consider Health Risks:</span> Stray
          animals may carry diseases. Avoid direct contact, and use gloves when
          handling them.
        </li>
        <li>
          {" "}
          <span className="font-bold">Build Trust Gradually:</span> Spend time
          near the animal regularly, allowing them to get used to your presence
          before attempting to touch or pick them up.
        </li>
        <li>
          {" "}
          <span className="font-bold">Seek Expert Help:</span> If the animal is
          aggressive or severely injured, call a professional animal rescue
          organization or veterinarian for assistance.
        </li>
        <li>
          {" "}
          <span className="font-bold">Approach Carefully:</span> Injured animals
          are scared and may be in pain. Approach slowly and speak softly to
          avoid causing further stress.
        </li>
        <li>
          {" "}
          <span className="font-bold">Keep Warm and Calm:</span> Place the
          injured animal in a quiet, warm, and dark place. This will help reduce
          stress and maintain body temperature.
        </li>
        <li>
          {" "}
          <span className="font-bold">Do Not Attempt Home Remedies:</span> Avoid
          applying any ointments or medications unless instructed by a
          veterinarian.
        </li>
        <li>
          {" "}
          <span className="font-bold">Do Not Force-Feed:</span> Refrain from
          giving food or water to the injured animal, as it could worsen their
          condition. Leave this to the professionals.
        </li>
        <li>
          {" "}
          <span className="font-bold">Stay Calm:</span> Animals can sense fear
          and stress. Try to remain composed to keep the animal as calm as
          possible.
        </li>
      </ul>
    </div>
  );
};

export default Content;

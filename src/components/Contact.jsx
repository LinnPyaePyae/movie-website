import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="text-white pt-24  bg-neutral-600 h-full movies ">
        <p className="text-3xl ml-20 ">Get New Letter</p>

        <div>
          <input
            type="text"
            placeholder="Enter your name..."
            className="w-[300px] border-b-2 py-0.5 px-2 mt-10 ml-10 mb-10 text-black outline-none"
          />
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-[300px] py-0.5 px-2 block ml-10 mb-10 outline-none text-black "
          />
          <div className=" ml-10 mb-5">
            <input type="checkbox" className="outline-none" /> I agree to get
            push notify
          </div>
          <button className="px-28 py-0.5 mb-20 ml-10 text-black bg-green-500">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

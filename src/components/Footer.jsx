import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-wrap bg-neutral-800 h-full ">
        <div className="w-[250px] mt-10 ml-10 mb-10 text-white flex flex-col ">
          <p className="text-lg mb-4 text-green-500 font-bold">MoviesHub</p>
          <div className="flex justify-start mb-1">
            <AiOutlinePhone className="mt-1 mr-1 text-lg ml-0 " />
            <p className="text-sm"> +65 6785 7610</p>
          </div>
          <div className="flex justify-start mb-1">
            <CgMail className="mt-1 mr-1 text-xl" />
            <p className="text-sm">movieshub@gmail.com</p>
          </div>
          <div className="flex justify-center mb-1">
            <CiLocationOn className="mt-1 mr-1 text-3xl" />
            <p className="text-sm">
              1 Raffles Quay, North Tower, Singapore 048583
            </p>
          </div>
        </div>

        <div className="w-[200px] mt-10  text-white flex flex-col">
          <p className="text-lg ml-5">Visit Us</p>
          <div className="mt-5 flex justify-start ml-3">
            <AiOutlineFacebook className="text-lg mr-2 ml-3" />
            <AiOutlineInstagram className="text-lg mr-2" />
            <FiTwitter className="text-lg mr-2 mt-0.5" />
            <AiOutlineLinkedin className="text-lg" />
          </div>
        </div>

        <div className="w-[200px] ml-6 text-white mt-10 flex flex-col">
          <p className="text-lg mb-4">Need Help?</p>
          <p className="mb-1 text-sm">customer service</p>
          <p className="mb-1 text-sm">online chat</p>
          <p className="mb-1 tex-sm">support</p>
        </div>

        <div className="w-[200px] text-white mt-10  flex flex-col mb-5">
          <p className="mb-3 text-lg ml-5">Download Apps :</p>
          <p className="mb-1 ml-5 text-sm">Google Play Store</p>
          <p className="mb-1 ml-5 text-sm">Apple Store</p>
          <p className="mb-1 ml-5 tex-sm">Direct Link</p>
        </div>
      </div>

      <hr />
      <p className="bg-neutral-800 h-full text-sm text-white text-center pb-8 pt-4">
        © 2023 Copyright, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

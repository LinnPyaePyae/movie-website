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
          <p className="text-xl mb-4 text-green-500 font-bold">MoviesHub</p>
          <div className="flex justify-start mb-1">
            <AiOutlinePhone className="mt-1 mr-1 text-xl ml-0" />
            <p> +65 6785 7610</p>
          </div>
          <div className="flex justify-start mb-1">
            <CgMail className="mt-1 mr-1 text-xl" />
            <p>movieshub@gmail.com</p>
          </div>
          <div className="flex justify-center mb-1">
            <CiLocationOn className="mt-1 mr-1 text-3xl" />
            <p>1 Raffles Quay, North Tower, Singapore 048583</p>
          </div>
        </div>

        <div className="w-[200px] mt-10  text-white flex flex-col">
          <p className="text-xl ml-10">Visit Us</p>
          <div className="mt-5 flex justify-start ml-5">
            <AiOutlineFacebook className="text-2xl mr-2 ml-5" />
            <AiOutlineInstagram className="text-2xl mr-2" />
            <FiTwitter className="text-xl mr-2 mt-0.5" />
            <AiOutlineLinkedin className="text-2xl" />
          </div>
        </div>

        <div className="w-[200px] ml-10 text-white mt-10 flex flex-col">
          <p className="text-xl mb-4">Need Help?</p>
          <p className="mb-1">customer service</p>
          <p className="mb-1">online chat</p>
          <p className="mb-1">support</p>
        </div>

        <div className="w-[200px] text-white mt-10 ml-12 flex flex-col mb-5">
          <p className="mb-3 text-xl ml-5">Download Apps :</p>
          <p className="mb-1 ml-5 ">Google Play Store</p>
          <p className="mb-1 ml-5">Apple Store</p>
          <p className="mb-1 ml-5">Direct Link</p>
        </div>
      </div>

      <hr />
      <p className="bg-neutral-800 h-full text-white text-center pb-8 pt-4">
        © 2023 Copyright, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

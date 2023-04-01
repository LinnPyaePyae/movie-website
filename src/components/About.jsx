import React from "react";
import { TfiMinus } from "react-icons/tfi";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { ImGooglePlus } from "react-icons/im";

const About = () => {
  return (
    <div>
      <div className="bg-neutral-600 h-full ">
        <div className="pt-28 flex justify-center text-white mb-6">
          <p className="text-2xl w-[300px] md:ml-10 ml-5 md:mr-5 mr-7">
            Meet Our Team
          </p>
          <p className="text-md ">
            A world first from MoviesHub, MovieTeam is an elegantly simple,
            cloud-based application that takes the guesswork out of scheduling.
          </p>
        </div>

        <div className=" flex flex-row flex-wrap ml-20 pt-10 pb-20 ">
          <div className="text-white w-[200px]  bg-neutral-600 text-center py-5 h-[320px] border border-green-700  border-b-4 border-b-green-500 hover:bg-green-500 ">
            <img
              src="https://st4.depositphotos.com/1441511/20464/i/1600/depositphotos_204648498-stock-photo-woman-designer-working-computer-office.jpg"
              alt=""
              className="rounded-full w-[100px] h-[100px] ml-14 mt-4"
            />
            <p className="mt-5 mb-2">Emila</p>
            <p className="mb-0.5 text-sm">CEO & Founder</p>
            <p className="mb-0.5 flex ml-[70px]">
              <TfiMinus /> <TfiMinus /> <TfiMinus />
            </p>
            <p className="mb-2 text-sm   ">+84 546 752 870</p>
            <p className="flex justify-center gap-2 text-neutral-800">
              <GrFacebookOption />
              <AiFillInstagram />
              <AiOutlineTwitter />
              <ImGooglePlus className="text-lg" />
            </p>
          </div>

          <div className="text-white w-[200px] bg-neutral-600 text-center py-5 h-[320px] border border-green-700  border-b-4 border-b-green-500 hover:bg-green-500 ">
            <img
              src="https://media.istockphoto.com/id/1408049646/photo/latin-male-developer-freelancer-office-employee-is-using-laptop-sitting-at-the-desk-oudoors.jpg?b=1&s=170667a&w=0&k=20&c=c7PATt6mjBM54TV1GStUOE8qkijbYKTjjHPJh2IDpvo=
              "
              alt=""
              className="rounded-full w-[100px] h-[100px] ml-14 mt-4"
            />
            <p className="mt-5 mb-2">David</p>
            <p className="mb-0.5 text-sm">Software Engineer</p>
            <p className="mb-0.5 flex ml-[70px]">
              <TfiMinus /> <TfiMinus /> <TfiMinus />
            </p>
            <p className="mb-2 text-sm   ">+84 558 457 025</p>
            <p className="flex justify-center gap-2 text-neutral-800">
              <GrFacebookOption />
              <AiFillInstagram />
              <AiOutlineTwitter />
              <ImGooglePlus className="text-lg" />
            </p>
          </div>

          <div className="text-white w-[200px] bg-neutral-600 text-center py-5 h-[320px] border border-green-700  border-b-4 border-b-green-500 hover:bg-green-500 ">
            <img
              src="https://media.istockphoto.com/id/1193290387/photo/portrait-of-young-businessman-standing-in-his-office-with-arms-crossed.jpg?s=170667a&w=0&k=20&c=wL7xkBaoam8CKxVLWvZsAE0TfQ9Y-K_ZumSyD_0NfSg="
              alt=""
              className="rounded-full w-[100px] h-[100px] ml-14 mt-4"
            />
            <p className="mt-5 mb-2">Mike</p>
            <p className="mb-0.5 text-sm">Finance Manager</p>
            <p className="mb-0.5 flex ml-[70px]">
              <TfiMinus /> <TfiMinus /> <TfiMinus />
            </p>
            <p className="mb-2 text-sm   ">+84 897 145 235</p>
            <p className="flex justify-center gap-2 text-neutral-800">
              <GrFacebookOption />
              <AiFillInstagram />
              <AiOutlineTwitter />
              <ImGooglePlus className="text-lg" />
            </p>
          </div>

          <div className="text-white w-[200px] bg-neutral-600 py-5 h-[320px] border border-green-700  border-b-4 border-b-green-500 hover:bg-green-500 ">
            <img
              src="https://media.istockphoto.com/id/1355030282/photo/shot-of-a-mature-businessman-using-a-laptop-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=7_PVU8BNQPXUd25qhAEcTxg0Fxy5vvq0wu6jvSU9Ke8="
              alt=""
              className="rounded-full w-[100px] h-[100px] ml-14 mt-4"
            />
            <p className="mt-5 mb-2 text-center">Luke</p>
            <p className="mb-0.5 text-center text-sm">
              Developer(5 yrs+experience)
            </p>
            <p className="mb-0.5 flex ml-[70px]">
              <TfiMinus /> <TfiMinus /> <TfiMinus />
            </p>
            <p className="mb-2 text-sm  text-center ">+84 875 371 248</p>
            <p className="flex justify-center gap-2 text-neutral-800">
              <GrFacebookOption />
              <AiFillInstagram />
              <AiOutlineTwitter />
              <ImGooglePlus className="text-lg" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

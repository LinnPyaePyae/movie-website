import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { StateContextCustom } from "../context/StateContext";
import { Link } from "react-router-dom";

const Hero = () => {
  const { upcoming } = StateContextCustom();
  // console.log(movie);

  const movies = [
    {
      id: 1,
      backdrop_path1: "/ovM06PdF3M8wvKb06i4sjW3xoww.jpg",
      title: "Avatar: The Way of Water",
      overview:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids)",
      rating: 5,
    },
    {
      id: 2,
      backdrop_path2: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
      title: "Black Panther: Wakanda Forever",
      overview:
        "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of Ki",
      rating: 6,
    },
    {
      id: 3,
      backdrop_path3: "/pxJbfnMIQQxCrdeLD0zQnWr6ouL.jpg",
      title: "Die Hart",
      overview:
        "Kevin Hart - playing a version of himself - is on a death-defying quest to become an action star. And with a little help from John Tr",
      rating: 8,
    },
    {
      id: 4,
      backdrop_path4: "/sp7MPK2K60LLd7A6zjHKsfgjFil.jpg",
      title: "The Devil Conspiracy",
      overview:
        "The hottest biotech company in the world has discovered they can clone history’s most influential people from the dead.",
      rating: 7,
    },
    {
      id: 5,
      backdrop_path5: "/r17jFHAemzcWPPtoO0UxjIX0xas.jpg",
      title: "John Wick: Chapter 2",
      overview:
        "John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins’ guild.",
      rating: 9,
    },
    {
      id: 6,
      backdrop_path6: "/ouB7hwclG7QI3INoYJHaZL4vOaa.jpg",
      title: "Puss in Boots: The Last Wish",
      overview:
        "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him",
      rating: 7.8,
    },
  ];

  return (
    <div className="bg-neutral-600 h-full pb-20">
      <Splide aria-label="My Favorite Images">
        <SplideSlide className="relative d-flex justify-between">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movies[0].backdrop_path1}`}
              alt=""
              className="absolute z-1 "
            />
            <div className="">
              <p className="absolute z-10 text-white  text-2xl mt-10 top-30 left-20 md:top-[350px] ">
                {movies[0].title}
              </p>
              <p className="text-white absolute z-10 text-lg mt-10 top-28 left-20 md:top-[450px] md:w-[700px]">
                {movies[0].overview}
              </p>
            </div>
          </div>
          <div className="">
            <p className="absolute hidden md:block text-2xl text-yellow-500 md:top-[450px] md:left-[870px] font-bold">
              <AiFillStar />
            </p>
            <p className=" absolute hidden md:block z-10 text-2xl md:top-[444px] md:left-[900px] text-yellow-500 font-extrabold">
              {movies[0].rating}
            </p>
          </div>

          <div className="flex justify-between absolute z-10 top-[450px] left-20 ">
            <button className="bg-neutral-700 hidden md:block mr-5 py-1 px-5 rounded-md  text-white ">
              Play
            </button>
            <button className="bg-neutral-700 hidden md:block py-1 px-5 rounded-md  text-white ">
              My Lists
            </button>
          </div>
        </SplideSlide>
        <SplideSlide className="relative d-flex justify-between">
          <img
            src={`https://image.tmdb.org/t/p/original/${movies[1].backdrop_path2}`}
            alt="Image 2"
            className="absolute z-1 "
          />
          <p className="absolute z-10 text-white  text-2xl mt-10 top-30 left-20 md:top-[350px]">
            {movies[1].title}
          </p>
          <p className="text-white absolute z-10 text-lg mt-10 top-28 left-20 md:top-[450px] md:w-[700px]">
            {movies[1].overview}
          </p>

          <div className="">
            <p className="absolute hidden md:block text-2xl text-yellow-500 md:top-[450px] md:left-[870px] font-bold">
              <AiFillStar />
            </p>
            <p className=" absolute hidden md:block z-10 text-2xl md:top-[444px] md:left-[900px] text-yellow-500 font-extrabold">
              {movies[1].rating}
            </p>
            <p className="text-white absolute z-10 text-lg mt-10 top-28 left-20 md:top-[450px] md:w-[700px]">
              {movies[1].overview}
            </p>
          </div>
          <div className="flex justify-between absolute z-10 top-[450px] left-20 ">
            <button className="bg-neutral-700 hidden md:block mr-5 py-1 px-5 rounded-md  text-white ">
              Play
            </button>
            <button className="bg-neutral-700 hidden md:block py-1 px-5 rounded-md  text-white ">
              My Lists
            </button>
          </div>
        </SplideSlide>
        <SplideSlide className="relative d-flex justify-between">
          <img
            src={`https://image.tmdb.org/t/p/original/${movies[2].backdrop_path3}`}
            alt="Image 2"
            className="absolute z-1"
          />
          <p className="absolute z-10 text-white  text-2xl mt-10 top-30 left-20 md:top-[350px]">
            {movies[2].title}
          </p>
          <div className="">
            <p className="absolute hidden md:block text-2xl text-yellow-500 md:top-[450px] md:left-[870px] font-bold">
              <AiFillStar />
            </p>
            <p className=" absolute hidden md:block z-10 text-2xl md:top-[444px] md:left-[900px] text-yellow-500 font-extrabold">
              {movies[1].rating}
            </p>
            <p className="text-white absolute z-10 text-lg mt-10 top-28 left-20 md:top-[450px] md:w-[700px]">
              {movies[1].overview}
            </p>
          </div>
          <div className="flex justify-between absolute z-10 top-[450px] left-20 ">
            <button className="bg-neutral-700 hidden md:block mr-5 py-1 px-5 rounded-md  text-white ">
              Play
            </button>
            <button className="bg-neutral-700 hidden md:block py-1 px-5 rounded-md  text-white ">
              My Lists
            </button>
          </div>
        </SplideSlide>
        <SplideSlide className="relative d-flex justify-between">
          <img
            src={`https://image.tmdb.org/t/p/original/${movies[3].backdrop_path4}`}
            alt="Image 2"
          />
          <div className="">
            <p className="absolute z-10 text-white  text-2xl mt-10 top-30 left-20 md:top-[350px] ">
              {movies[3].title}
            </p>
            <p className="text-white absolute z-10 text-lg mt-10 top-28 left-20 md:top-[450px] md:w-[700px]">
              {movies[3].overview}
            </p>
          </div>

          <div className="">
            <p className="absolute hidden md:block text-2xl text-yellow-500 md:top-[450px] md:left-[870px] font-bold">
              <AiFillStar />
            </p>
            <p className=" absolute hidden md:block z-10 text-2xl md:top-[444px] md:left-[900px] text-yellow-500 font-extrabold">
              {movies[3].rating}
            </p>
          </div>

          <div className="flex justify-between absolute z-10 top-[450px] left-20 ">
            <button className="bg-neutral-700 hidden md:block mr-5 py-1 px-5 rounded-md  text-white ">
              Play
            </button>
            <button className="bg-neutral-700 hidden md:block py-1 px-5 rounded-md  text-white ">
              My Lists
            </button>
          </div>
        </SplideSlide>
        <SplideSlide className="relative d-flex justify-between">
          <img
            src={`https://image.tmdb.org/t/p/original/${movies[4].backdrop_path5}`}
            alt="Image 2"
            className="absolute z-1"
          />
          <p className="absolute z-10 text-white  text-2xl mt-10 top-30 left-20 md:top-[350px]">
            {movies[4].title}
          </p>
          <div className="">
            <p className="absolute hidden md:block text-2xl text-yellow-500 md:top-[450px] md:left-[870px] font-bold">
              <AiFillStar />
            </p>
            <p className=" absolute hidden md:block z-10 text-2xl md:top-[444px] md:left-[900px] text-yellow-500 font-extrabold">
              {movies[4].rating}
            </p>
            <p className="text-white absolute z-10 text-lg mt-10 top-28 left-20 md:top-[450px] md:w-[700px]">
              {movies[4].overview}
            </p>
          </div>
          <div className="flex justify-between absolute z-10 top-[450px] left-20 ">
            <button className="bg-neutral-700 hidden md:block mr-5 py-1 px-5 rounded-md  text-white ">
              Play
            </button>
            <button className="bg-neutral-700 hidden md:block py-1 px-5 rounded-md  text-white ">
              My Lists
            </button>
          </div>
        </SplideSlide>
        <SplideSlide className="relative d-flex justify-between">
          <img
            src={`https://image.tmdb.org/t/p/original/${movies[5].backdrop_path6}`}
            alt="Image 2"
            className="absolute z-1"
          />
          <p className="absolute z-10 text-white  text-2xl mt-10 top-30 left-20 md:top-[350px]">
            {movies[5].title}
          </p>
          <div className="">
            <p className="absolute hidden md:block text-2xl text-yellow-500 md:top-[450px] md:left-[870px] font-bold">
              <AiFillStar />
            </p>
            <p className=" absolute hidden md:block z-10 text-2xl md:top-[444px] md:left-[900px] text-yellow-500 font-extrabold">
              {movies[5].rating}
            </p>
            <p className="text-white absolute z-10 text-lg mt-10 top-28 left-20 md:top-[450px] md:w-[700px]">
              {movies[5].overview}
            </p>
          </div>
          <div className="flex justify-between absolute z-10 top-[450px] left-20 ">
            <button className="bg-neutral-700 hidden md:block mr-5 py-1 px-5 rounded-md  text-white ">
              Play
            </button>
            <button className="bg-neutral-700 hidden md:block py-1 px-5 rounded-md  text-white ">
              My Lists
            </button>
          </div>
        </SplideSlide>
      </Splide>

      <div className="mt-20">
        <p className="text-green-500 text-2xl mt-30 ml-3 font-extrabold mb-10">
          Trending Movies
        </p>

        <div className="flex justify-center items-center flex-wrap">
          {upcoming?.map((movie) => {
            return (
              <div key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  className="w-[160px] h-[200px] object-cover hover:opacity-70"
                  alt=""
                />
              </div>
            );
          })}
        </div>

        <Link to={"/genre"}>
          <div className="flex justify-center mt-20 ">
            <button className="flex justify-center px-5 py-2 bg-green-500 text-white rounded text-xl">
              See All Movies
              <BiMoviePlay className="text-2xl mt-0.5 ml-1" />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

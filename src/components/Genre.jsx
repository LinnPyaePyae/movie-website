import React, { useEffect } from "react";
import { StateContextCustom } from "../context/StateContext";
import Movie from "./Movie";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
// import { AiFillStar } from "react-icons/ai";

const Genre = () => {
  const {
    movie,
    setMovie,
    popular,
    setPopular,
    activeGenre,
    setActiveGenre,
    search,
    setSearch,
  } = StateContextCustom();

  useEffect(() => {
    if (activeGenre === 0) {
      setMovie(popular);
      return;
    }
    const filterMovie = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setMovie(filterMovie);
    // console.log(filterMovie);
  }, [activeGenre]);
  return (
    <div className="pt-20 bg-neutral-600">
      <div className="bg-neutral-600 h-full ">
        <button
          onClick={() => setActiveGenre(0)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          All
        </button>
        <button
          onClick={() => setActiveGenre(28)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          Actions
        </button>
        <button
          onClick={() => setActiveGenre(12)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          Adventure
        </button>
        <button
          onClick={() => setActiveGenre(16)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          Animation
        </button>
        <button
          onClick={() => setActiveGenre(35)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          Comedy
        </button>
        <button
          onClick={() => setActiveGenre(80)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          Crime
        </button>
        <button
          onClick={() => setActiveGenre(99)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          Documentary
        </button>
        <button
          onClick={() => setActiveGenre(18)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          Drama
        </button>
        <button
          onClick={() => setActiveGenre(12)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          Family
        </button>
        <button
          onClick={() => setActiveGenre(14)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          Fantasy
        </button>
        <button
          onClick={() => setActiveGenre(36)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          History
        </button>
        <button
          onClick={() => setActiveGenre(27)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          Horror
        </button>

        <button
          onClick={() => setActiveGenre(53)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          Mystery
        </button>
        <button
          onClick={() => setActiveGenre(14)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          Romance
        </button>
        <button
          onClick={() => setActiveGenre(53)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          Si-fi
        </button>
        <button
          onClick={() => setActiveGenre(18)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          TV Movie
        </button>
        <button
          onClick={() => setActiveGenre(53)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          Thriller
        </button>

        <button
          onClick={() => setActiveGenre(28)}
          className="bg-neutral-700 px-5 py-1 text-white rounded-md mt-5 ml-5 text-lg font-extrabold hover:text-green-500"
        >
          Western
        </button>
      </div>
      <div className="bg-neutral-600 pb-20 pt-10 text-center mb-0 ">
        <form className="">
          <input
            type="search"
            className="border px-10 py-2 outline-none border-gray-800 mt-10 md:ml-28 rounded-md rounded-r-none"
            placeholder="Search movies ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-green-500 px-3 py-2 rounded-md rounded-l-none">
            Search
          </button>
        </form>
      </div>

      <div className="flex justify-center flex-wrap items-center bg-neutral-600 gap-10">
        <div className="flex justify-center items-center flex-wrap gap-10">
          {movie?.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>

        <div className="mb-20">
          <a href="#" className="text-white text-3xl ">
            <BsFillArrowUpCircleFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Genre;

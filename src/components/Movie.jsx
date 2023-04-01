import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Movie = ({ movie }) => {
  return (
    <div>
      <label htmlFor="my-modal-6">
        <div className="flex justify-center pb-10">
          <div className="mt-10 bg-neutral-700 w-[220px] h-[350px] p-5 relative rounded hover:scale-110 ease-in-out duration-200">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              className="w-[220px] h-[180px] mx-auto "
              alt="Image 1"
            />
            <button className="text-white px-2 py-1 bg-green-500 flex justify-center absolute z-10 top-0 left-40">
              <AiFillStar className="mt-1 mr-1.5" />
              {movie.vote_average}
            </button>
            <p className="mt-5 text-white text-lg text-center font-extrabold">
              {movie.title}
            </p>
            <p className="mt-3 text-white text-center">{movie.release_date}</p>
          </div>
        </div>
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-neutral-700">
          <div className="modal-action">
            <p className="text-white">{movie.overview}</p>
            <label htmlFor="my-modal-6" className="btn btn-error">
              OK
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;

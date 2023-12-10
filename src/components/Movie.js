import React from "react";
import "./Movie.css";
import { Link } from "react-router-dom";

export default function Movie({ movies }) {
  // ======= FUNCTIONS =======
  // const handleClick = () => {
  //   // console.log(movie.id, movie.title);

  //   const newData = {
  //     title: movie.title,
  //     movieId: movie.id,
  //     poster: movie.poster_path,
  //   }; // New var for data (movie)
  //   // console.log(newData);
  //   // Call func from parent component and pass arg - movie itself
  //   addToFavs([...favs, newData]);
  // };

  // ======= RENDER =======

  return (
    <div className="col-sm-6 col-md-3">
      <div className="card">
        <div className="card_container">
          <img
            className="card_poster"
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movies.poster_path}`}
            alt={movies.title}
          />
          <div className="card_body">
            <Link to={`/movie/${movies.id}`}>
              <div className="card_title">{movies.title}</div>
            </Link>
            <div className="card_rating-container">
              <div className="card_rating">{movies.vote_average}</div>
              <button
                className="btn btn-warning add-tofavorite"
                // onClick={handleClick}
              >
                Add to fav1
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

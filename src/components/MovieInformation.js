import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { useGetMovieQuery } from "../services/TMDB";
import "./MovieInformation.css";

const MovieInformation = () => {
  // Here We get acces to ID
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);

  if (isFetching) {
    return <div>Loading</div>;
  }

  if (error) {
    return (
      <>
        <div>Some error occured</div>;<Link to="/">Go back</Link>
      </>
    );
  }

  return (
    <>
      <div className="movie_id">Movie ID: {id}</div>

      <div className="container">
        <div className="row">
          {/* MOVIE PREVIEW IMAGE */}
          <div className="col-sm-12 col-md-4">
            <img
              className="card_poster"
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`}
              alt={data.title}
            />
          </div>

          {/* MOVIE INFO */}
          <div className="col-sm-6 col-md-8">
            <div className="card">
              <div className="card_container">
                <div className="card_body">
                  <div className="card_title">{data.title}</div>
                  <div className="info">
                    <div className="language">
                      Language: <span>{data.original_language}</span>
                    </div>
                    <div className="release_date">
                      Release date: ({data.release_date.split("-")[0]})
                    </div>
                  </div>
                  <div className="tag_line">{data.tagline}</div>
                  <p>{data.overview}</p>
                  <div className="card_rating-container">
                    <div className="card_rating">
                      Rating: {data.vote_average}
                    </div>
                    <button
                      className="btn btn-warning add-tofavorite"
                      //   onClick={handleClick}
                    >
                      Add to favorite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInformation;

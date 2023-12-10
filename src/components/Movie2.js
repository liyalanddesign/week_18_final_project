import React from "react";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../services/TMDB";

import MovieList2 from "./MovieList2";

export default function Movie2() {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return <div>Loading</div>;
  }

  if (!data.results.length) {
    return <div>NO Movies found</div>;
  }

  if (error) {
    return <div>Some error occured</div>;
  }

  return (
    <>
      <MovieList2 movies={data} />
    </>
  );
}

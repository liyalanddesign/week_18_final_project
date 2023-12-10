import React from "react";
import Movie from "./Movie";

export default function MovieList2({ movies }) {
  return (
    <>
      {movies.results.map((movie, i) => (
        <Movie key={i} movies={movie} />
      ))}
    </>
  );
}

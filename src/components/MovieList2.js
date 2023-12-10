import React from "react";

export default function MovieList2({ movies }) {
  return (
    <>
      {movies.results.map((movie, i) => (
        <div key={i}>{movie.title}</div>
      ))}
    </>
  );
}

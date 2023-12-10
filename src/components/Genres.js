import React from "react";
import { useGetGenresQuery } from "../services/TMDB";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "./CurrentGenre";

import "./Genres.css";

export default function Genres() {
  const { data, isFetching } = useGetGenresQuery();
  const { idOrCategoryName } = useSelector((state) => state.currentCategory);
  // this allow us to dispatch actions (transfer data from component to redux)
  const dispatch = useDispatch();

  const categories = [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];

  if (isFetching) {
    return <div>Loading</div>;
  }

  return (
    <>
      <h6>Categories:</h6>
      <ul className="genres">
        {categories.map(({ label, value }) => (
          <li key={value} onClick={() => dispatch(selectCategory(value))}>
            <Link to="/">{label}</Link>
          </li>
        ))}
      </ul>
      <h6>Genres:</h6>
      <ul className="genres">
        {isFetching ? (
          <div>Loading...</div>
        ) : (
          data.genres.map(({ id, name }) => (
            <li key={id} onClick={() => dispatch(selectCategory(id))}>
              <Link key={id} to="/">
                {name}
              </Link>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

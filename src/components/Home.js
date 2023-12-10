import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { getMoviesQuery, useGetMoviesQuery } from "../services/TMDB";

export default function Home() {
  const { data } = useGetMoviesQuery();

  console.log(data);

  return <div>Home</div>;
}

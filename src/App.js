import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import MovieInformation from "./components/MovieInformation";
import Genres from "./components/Genres";
import MovieList from "./components/MovieList";
import CommentsList from "./components/CommentsList";
import Shows from "./components/Shows";
import Profile from "./components/Profile";
import Favorites from "./components/Favorites";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  // ======= API CONNECTION =======
  // useEffect(() => {
  //   let npsw = "Bearer " + process.env.REACT_APP_AUTH;

  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization: npsw,
  //     },
  //   };

  //   // fetch movies
  //   const fetchUsers = async () => {
  //     const res = await fetch(
  //       "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  //       options
  //     );
  //     const fetchedResp = await res.json();
  //     //   console.log(fetchedResp);
  //     setMovieList(fetchedResp.results);
  //   };
  //   fetchUsers();

  //   // fetch series
  //   const fetchFavoriteMovies = async () => {
  //     const res = await fetch(
  //       "https://api.themoviedb.org/3/account/20650860/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
  //       options
  //     );
  //     const fetchResp = await res.json();
  //     setFavoritesList(fetchResp.results);
  //     //   console.log("List of Favorites => ", fetchResp);
  //   };
  //   fetchFavoriteMovies();

  //   // fetch user data
  // }, []);

  // const addToFavorite = (ID) => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGM1ZDk2MTUwMTFiMjBiZjFlOWJlODMyZjljZWVkMiIsInN1YiI6IjY1NDFiYWYxNDFhNTYxMDBkZGE5OTQ0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cs-hLzpgSxBq6pbKA5WJFn4fCUZrpMYuds1kRmamG-U",
  //     },
  //   };
  //   const fetchAuth = async () => {
  //     const res = await fetch(
  //       "https://api.themoviedb.org/3/authentication",
  //       options
  //     );
  //     const fetchedResp = await res.json();
  //     console.log(fetchedResp);
  //     const list = await fetch(
  //       "https://api.themoviedb.org/3/account/20650860/lists?page=1",
  //       options
  //     );
  //     const listresp = await list.json();
  //     console.log(listresp);
  //   };
  //   fetchAuth();
  // };

  return (
    <div id="page" className="movies">
      {/* 
			HEADER 
		*/}
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="navigation">
              <Link to="/" className="logo">
                Week 18
              </Link>
              <ul className="nav_links">
                <li className="nav_link">
                  <Link to="/">Movies</Link>
                </li>
                <li className="nav_link">
                  <Link to="/shows">Shows</Link>
                </li>
                <li className="nav_link">
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 
			BODY 
		*/}
      <div className="container">
        <div className="row">
          {/* LEFT SIDEBAR */}
          <div className="col-md-2">
            <Genres />
            {/* <Favorites /> */}
          </div>

          {/* BODY */}
          <div className="col-md-8">
            <Switch>
              <Route exact path="/">
                <MovieList />
                {/* <Movie2 /> */}
                {/* <MovieList
                movies={movieList}
                favs={favoritesList}
                addToFavs={addToFavorite}
                /> */}
              </Route>
              <Route path="/movie/:id">
                <MovieInformation />
              </Route>
              <Route path="/shows">
                <Shows />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </div>

          {/* 
				RIGHT SIDEBAR 
			*/}
          <div className="col-md-2">
            <h3>Latest comments</h3>
            {/* <CommentsList /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

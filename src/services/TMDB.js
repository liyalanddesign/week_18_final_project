import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
const page = 1;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  //* Base URL to start our request from
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    //* Here we get genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    // ** Get Movies by [Type]
    getMovies: builder.query({
      query: ({ idOrCategoryName, page }) => {
        // Get movies by Category - in case Popular, top Rated or Upcoming ==> string
        if (idOrCategoryName && typeof idOrCategoryName === "string") {
          return `movie/${idOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }
        // Get Movies by Genre - in case Popular, top Rated or Upcoming ==> number
        if (idOrCategoryName && typeof idOrCategoryName === "number") {
          return `discover/movie?with_genres=${idOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }
        // Get popular Movies - default (shows at first load)
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
    // Get Single Movie
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const { useGetGenresQuery, useGetMoviesQuery, useGetMovieQuery } =
  tmdbApi;

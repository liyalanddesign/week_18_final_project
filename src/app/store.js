import { configureStore } from "@reduxjs/toolkit";

import { tmdbApi } from "../services/TMDB";
import categoryReducer from "../components/CurrentGenre";
export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentCategory: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(tmdbApi.middleware),
});

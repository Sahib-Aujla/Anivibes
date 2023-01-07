import { configureStore } from "@reduxjs/toolkit";
import { animeApi } from "../AnimeApi/AnimeApi";
import  genreOrCategoryReducer from "../components/slices/currentGenreOrCategory";

export default configureStore({
    reducer:{
        [animeApi.reducerPath]:animeApi.reducer,
        currentGenreOrCategory: genreOrCategoryReducer,
    },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeApi.middleware),

})
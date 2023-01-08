import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const animeKey=process.env.REACT_APP_ANIME_KEY;

export const animeApi=createApi({
    reducerPath:'animeApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://gogoanime2.p.rapidapi.com',
     prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key',animeKey);
        headers.set('X-RapidAPI-Host','gogoanime2.p.rapidapi.com');
        return headers
    }}),
    endpoints:(builder)=>({
        getAnimes:builder.query({
            query:({genreIdOrCategoryName, page, searchQuery }) =>{
                if(searchQuery){
                    return `/search?keyw=${searchQuery}&page=${page}`
                }
                if(genreIdOrCategoryName==='popular' || genreIdOrCategoryName==='recent-release'|| genreIdOrCategoryName==='anime-movies' ){
                    return `/${genreIdOrCategoryName}?page=${page}`
                }
                if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string'){
                    return `/genre/${genreIdOrCategoryName}?page=${page}`
                }

        return `/popular?page=${page}`;

            }
        }),
        getAnimeDetail:builder.query({
            query:(id) =>{
                return `/anime-details/${id}`
            }
        })
    })
})

export const { useGetAnimesQuery,useGetAnimeDetailQuery } = animeApi;

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://gogoanime2.p.rapidapi.com/recent-release',
//   params: {type: '1', page: '1'},
//   headers: {
//     'X-RapidAPI-Key': '92ad8230c0msh461f041a8a0bca4p13adf6jsnf90c981f5111',
//     'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
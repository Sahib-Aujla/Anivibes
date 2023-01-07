import React,{useState} from 'react'
import { AnimeList } from './constants';
import { useGetAnimesQuery } from '../AnimeApi/AnimeApi'
import { useSelector } from 'react-redux';


const Explore = () => {
  const page=1;
  const { genreIdOrCategoryName, searchQuery }=useSelector((State)=>State.currentGenreOrCategory);
  const {data}=useGetAnimesQuery({genreIdOrCategoryName,searchQuery,page});
  console.log(data);
  return (
    <div><AnimeList animes={data}/></div>
  )
}

export default Explore
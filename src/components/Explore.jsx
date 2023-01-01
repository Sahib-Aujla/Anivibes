import React from 'react'
import { AnimeList } from './constants';
import { useGetAnimesQuery } from '../AnimeApi/AnimeApi'
const Explore = () => {
  const {data}=useGetAnimesQuery();
  console.log(data);
  return (
    <div><AnimeList animes={data}/></div>
  )
}

export default Explore
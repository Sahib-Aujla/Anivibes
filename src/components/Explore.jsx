import React,{useState} from 'react'
import { AnimeList } from './constants';
import { useGetAnimesQuery } from '../AnimeApi/AnimeApi'
import { useSelector } from 'react-redux';
import { Box, CircularProgress, Typography } from '@mui/material';
import Pagination from './Pagination/Pagination';

const Explore = () => {
  const [page, setPage] = useState(1)
  
  const { genreIdOrCategoryName, searchQuery }=useSelector((State)=>State.currentGenreOrCategory);
  const {data, error, isFetching}=useGetAnimesQuery({genreIdOrCategoryName,searchQuery,page});
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data?.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">No Animes match that name.<br /> Search again for other title</Typography>
      </Box>
    );
  }
  if (error) {
    return 'An error Occured....';
  }
  console.log(data);
  return (
    <div><AnimeList animes={data}/>
      <Pagination currentPage={page} setPage={setPage} totalPages={100} />
    </div>

  )
}

export default Explore
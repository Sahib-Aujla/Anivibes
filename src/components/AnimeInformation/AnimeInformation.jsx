import React from 'react'
import { useParams } from 'react-router-dom'
import useStyles from  './styles'
import { Box,CircularProgress,Grid,Typography,Button, ButtonGroup, } from '@mui/material'
import { useGetAnimeDetailQuery } from '../../AnimeApi/AnimeApi'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectGenreOrCategory } from '../slices/currentGenreOrCategory'
const AnimeInformation = () => {
    const {id}=useParams();
    const classes = useStyles();
    const dispatch = useDispatch();
const {data,isFetching,error}=useGetAnimeDetailQuery(id);
  console.log(data);
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something went wrong- Go Back</Link>
      </Box>
    );
  }
  return (
    <Grid container className={classes.containerSpaceAround}>
        <Grid item sm={12} lg={4}>
        <img
          className={classes.poster}
          src={data?.animeImg}
          alt={data?.animeTitle}
        />  
        </Grid>
        <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data?.animeTitle} ({data.releasedDate})
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {data?.otherNames.split(',')[0]}
        </Typography>
        <Grid item className={classes.containerSpaceAround}>
        <Typography variant="subtitle1" gutterBottom style={{ marginLeft: '10px' }}>
              Status: &nbsp;{data?.status}
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
          Total Episodes:&nbsp;{data?.totalEpisodes}
          </Typography>
        </Grid>
        <Grid item className={classes.genresContainer}>
          {data?.genres?.map((genre, i) => (
            <Link key={i} className={classes.links} to="/" onClick={() => dispatch(selectGenreOrCategory(genre))}>
             
              <Typography color="textPrimary" variant="h6">
                {genre}
              </Typography>
            </Link>
          ))}
        </Grid>
        <Typography variant="h5" gutterBottom style={{ marginTop: '10px' }}>
          Overview
        </Typography>
        <Typography style={{ marginBottom: '2rem' }}>
        {data?.synopsis}
        </Typography>
        
        </Grid>
        <Box marginTop="5rem" width="100%">
        {data?.totalEpisodes.length > 0 && <><Typography variant="h5" gutterBottom>
          Episodes
        </Typography>
        <Grid item container style={{ marginTop: '2rem',display:'flex',flexWrap:'wrap' }}>
        
            {data?.episodesList?.map((ep)=>(
                <Button size="medium" variant="outlined" key={ep?.episodeNum} target="_blank" rel="noopener noreferrer" href={ep?.episodeUrl}
                    style={{width:'40px',margin:'4px'}}
                 >ep- {ep?.episodeNum}</Button>

            ))}
        
        </Grid>
        </>
        }
        </Box>
    </Grid>
  )
}

export default AnimeInformation
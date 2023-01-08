import React from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player';
import { Box,CircularProgress,Grid,Typography,Button, } from '@mui/material'
import { useGetAnimeStreamQuery,useGetAnimeDetailQuery } from '../../AnimeApi/AnimeApi';
import useStyles from './styles'
const Watch = () => {
    const {epid,animeid}=useParams();
    const {data:animeData}=useGetAnimeDetailQuery(animeid)
    const {data,isFetching,error}=useGetAnimeStreamQuery(epid);
    
    const navigate=useNavigate();

    const classes=useStyles();
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
      const episode=animeData?.episodesList?.find((ep)=>ep.episodeId===epid)  ;
      const handlePrev = () => {
        if (episode?.episodeNum!== 1) {

          let num=animeData?.totalEpisodes-episode?.episodeNum;
          num+=1;
          navigate(`/watch/${animeid}/${animeData?.episodesList[num]?.episodeId}`);
        }
      };
      const handleNext = () => {
        if (episode.episodeNum !== animeData?.totalEpisodes) {
         
          let num=animeData?.totalEpisodes-episode?.episodeNum;
          num-=1;
          navigate(`/watch/${animeid}/${animeData?.episodesList[num]?.episodeId}`);
        }
      };
    
  return (
    <Grid container className={classes.containerSpaceAround} >
     <Grid item container direction="column" lg={5}>
    <Typography variant="h3" align="center" gutterBottom>
          {animeData?.animeTitle} ({animeData?.releasedDate})
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          Episode : {episode.episodeNum}
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
          Total Episodes : {animeData?.totalEpisodes}
          </Typography>
    </Grid>
<Grid item sm={12} lg={12} display='flex' alignItems='center' justifyContent='center' style={{width:'100%'}}>
<ReactPlayer
     url={data?.sources_bk[0].file}
    config={{
        file: {
            attributes: {
            crossOrigin: "true",
        }
    }
  }}
    className={classes.player}
    controls
   />
    
    </Grid>
    
    <div className={classes.container}>
      <Button onClick={handlePrev} className={classes.button} variant="contained" color="primary" type="button">Prev Ep</Button>
     
      <Button onClick={handleNext} className={classes.button} variant="contained" color="primary" type="button">Next Ep</Button>

    </div>
   
    <Box marginTop="5rem" width="100%">
        {animeData?.totalEpisodes.length > 0 && <><Typography variant="h5" gutterBottom>
          Episodes
        </Typography>
        <Grid item container style={{ marginTop: '2rem',display:'flex',flexWrap:'wrap' }}>
        
            {animeData?.episodesList?.map((ep)=>(
                <Button size="medium" variant="outlined" key={ep?.episodeNum}  href={`/watch/${animeid}/${ep?.episodeId}`}
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

export default Watch


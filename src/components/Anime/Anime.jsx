import React from 'react'
import { Grid, Typography, Grow } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Anime = ({anime,i}) => {
    const classes=useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2.3} className={classes.anime}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/anime/${anime.animeId}`}>
          {anime.animeImg ? <img alt={anime.animeTitle} className={classes.image} src={anime.animeImg} />
            : <img alt={anime.animeTitle} className={classes.image} src="https://www.fillmurray.com/200/300" /> }
          <Typography className={classes.title} variant="h5">{anime.animeTitle}</Typography>
          
        </Link>

      </Grow>

    </Grid>
  )
}

export default Anime